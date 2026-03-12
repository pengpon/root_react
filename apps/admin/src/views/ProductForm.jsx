import { useLocation, useNavigate, useParams } from 'react-router';
import PageHeader from '../layouts/PageHeader';
import { getProduct, createProduct, editProduct } from '../api/products';
import { uploadImage } from '../api/upload';
import { useState, useEffect, useCallback } from 'react';
import { Spinner } from '@repo/ui';
import { useForm, Controller } from 'react-hook-form';
import { formatDateTime, Toast } from '@repo/utils';
import FormActions from '../layouts/FormActions';
import CoverUpload from '../components/CoverUpload';
import GalleryUpload from '../components/GalleryUpload';

function ProductForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  let params = useParams();
  const location = useLocation();
  const formType = location.state.type;
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  const ACTIONS_TEXT_MAP = {
    create: {
      submitText: 'Publish Product',
      discardText: 'Cancel',
    },
    edit: {
      submitText: 'Save Changes',
      discardText: 'Discard',
    },
  };

  const TITLE_TEXT_MAP = {
    create: 'Create New Product',
    edit: `Edit: ${location.state.title}`,
  };

  const { submitText, discardText } = ACTIONS_TEXT_MAP[formType];
  const title = TITLE_TEXT_MAP[formType];

  const uploadFiles = (files) => {
    if (!files || files.length === 0) return [];

    const fileArray = Array.isArray(files) ? files : [files];
    const uploadTasks = fileArray.map(async (fileObj) => {
      if (fileObj instanceof File || fileObj?.file instanceof File) {
        const targetFile = fileObj.file || fileObj;
        const formData = new FormData();
        formData.append('file', targetFile);
        const res = await uploadImage(formData);
        return res.data.imageUrl;
      }
      return fileObj;
    });

    return Promise.all(uploadTasks);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const [mainImageUrl, galleryUrls] = await Promise.all([
        uploadFiles(data.imageUrl),
        uploadFiles(data.imagesUrl),
      ]);

      const finalPayload = {
        ...data,
        imageUrl: mainImageUrl[0] || data.imageUrl,
        imagesUrl: galleryUrls,
        modified_at: Date.now(),
      };

      let res;
      if (formType === 'create') {
        res = await createProduct(finalPayload);
      } else {
        res = await editProduct(params.id, finalPayload);
      }

      const title = formType === 'create' ? 'Product Created!' : 'Product Updated!';

      Toast.fire({
        position: 'top',
        icon: 'success',
        title: res.data.success ? title : 'Error',
        color: '#1f2937',
        iconColor: '#10b981',
        background: '#ffffff',
      });
      navigate('/products');
    } catch (errorMessage) {
      Toast.fire({
        position: 'top',
        icon: 'error',
        title: errorMessage,
        color: '#1f2937',
        iconColor: '#ef4444',
        background: '#ffffff',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getProductById = useCallback(
    async (id) => {
      const res = await getProduct(id);
      setProduct(res.data.product);
      reset({
        ...res.data.product,
      });
    },
    [reset],
  );

  useEffect(() => {
    const init = async () => {
      if (location.state.type === 'edit') await getProductById(params.id);
      setIsLoading(false);
    };
    init();
  }, [getProductById, params.id, location]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <section className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <PageHeader title={title} />
            </div>

            <div className="flex gap-3">
              <FormActions
                submitText={submitText}
                discardText={discardText}
                onCancel={() => navigate(-1)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">General Information</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
                      Product Name
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      {...register('title', {
                        required: 'Please enter product title',
                      })}
                    />
                    <div className="text-status-error h-4 text-sm">
                      {errors['title'] && errors['title'].message}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows="6"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      {...register('description')}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Pricing & Inventory</h3>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label
                      htmlFor="origin_price"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Origin Price
                    </label>
                    <div className="relative">
                      <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                        $
                      </span>
                      <input
                        type="number"
                        id="origin_price"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-8 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                        {...register('origin_price', {
                          required: 'Please enter origin price',
                          valueAsNumber: true,
                        })}
                      />
                    </div>
                    <div className="text-status-error h-4 text-sm">
                      {errors['origin_price'] && errors['origin_price'].message}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-700">
                      Sale Price
                    </label>
                    <div className="relative">
                      <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                        $
                      </span>
                      <input
                        id="price"
                        type="number"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-8 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                        {...register('price', {
                          required: 'Please enter price',
                          valueAsNumber: true,
                        })}
                      />
                    </div>
                    <div className="text-status-error h-4 text-sm">
                      {errors['price'] && errors['price'].message}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="stock" className="mb-2 block text-sm font-medium text-gray-700">
                      Stock Quantity
                    </label>
                    <input
                      id="stock"
                      type="number"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                      {...register('stock', {
                        required: 'Please enter stock',
                      })}
                    />
                    <div className="text-status-error h-4 text-sm">
                      {errors['stock'] && errors['stock'].message}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Product Media</h3>
                  </div>
                  <span className="text-xs text-gray-400">Main image and gallery photos</span>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                  {/* Cover */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Cover Image
                    </label>
                    <Controller
                      name="imageUrl"
                      control={control}
                      render={({ field }) => <CoverUpload {...field} maxMB={1} />}
                    />
                  </div>

                  {/* Gallery */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Gallery Images
                    </label>
                    <Controller
                      name="imagesUrl"
                      control={control}
                      render={({ field }) => (
                        <GalleryUpload values={field.value} onChange={field.onChange} maxMB={1} />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Status</h3>
                </div>
                <div className="space-y-4">
                  <label
                    htmlFor="is_enabled"
                    className="relative inline-flex cursor-pointer items-start"
                  >
                    <div className="relative flex items-center">
                      <input
                        {...register('is_enabled')}
                        id="is_enabled"
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <div className="peer h-6 w-11 shrink-0 rounded-full bg-gray-200 transition-colors peer-checked:bg-emerald-500 peer-focus:ring-2 peer-focus:ring-emerald-500/20 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </div>

                    <div className="ml-3 select-none">
                      <span className="block text-sm leading-none font-bold text-gray-900">
                        Enable Product
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">
                        Visible to customers and available for purchase
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m-15 0a2.25 2.25 0 0 0-1.5 2.122v5.25a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25v-5.25a2.25 2.25 0 0 0-1.5-2.122m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Organization</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                      {...register('category', {
                        required: 'Please select category',
                      })}
                    >
                      <option value="Fruit">Fruit</option>
                      <option value="Vegetable">Vegetable</option>
                      <option value="Accessory">Accessory</option>
                    </select>
                  </div>
                  <div className="text-status-error h-4 text-sm">
                    {errors['category'] && errors['category'].message}
                  </div>
                  <div>
                    <label htmlFor="unit" className="mb-2 block text-sm font-medium text-gray-700">
                      Unit
                    </label>
                    <input
                      type="text"
                      id="unit"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                      {...register('unit', {
                        required: 'Please enter unit',
                      })}
                    />
                  </div>
                  <div className="text-status-error h-4 text-sm">
                    {errors['unit'] && errors['unit'].message}
                  </div>
                </div>
              </div>

              {formType === 'edit' && (
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">History</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                        Last Modified
                      </p>
                      <p className="text-sm font-medium text-gray-700">
                        {formatDateTime(product.modified_at)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default ProductForm;
