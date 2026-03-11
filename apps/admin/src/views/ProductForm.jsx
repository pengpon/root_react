import { useLocation, useNavigate, useParams } from 'react-router';
// import Breadcrumbs from '../components/Breadcrumbs';
import PageHeader from '../layouts/PageHeader';
import { getProduct } from '../api/products';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Spinner } from '@repo/ui';
import { useForm } from 'react-hook-form';
import { formatDateTime, Toast } from '@repo/utils';
import FormActions from '../layouts/FormActions';
import ImageUpload from '../components/ImageUpload';

function ProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let params = useParams();
  const location = useLocation();
  const formType = location.state.type;
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [tempFiles, setTempFiles] = useState({
    imageUrl: null,
    imagesUrl: [],
  });

  const [previews, setPreviews] = useState({
    imageUrl: '',
    imagesUrl: [],
  });

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

  const handleFilePreview = (e) => {
    const { files, multiple } = e.target;
    const fileArray = Array.from(files);
    if (fileArray.length === 0) return;

    // 檢查檔案大小, 限制 3 MB
    const MAX_MB = 3;
    const MAX_FILE_SIZE = MAX_MB * 1024 * 1024;
    const oversizedFiles = fileArray.filter((file) => file.size > MAX_FILE_SIZE);
    const checkSizedFilesArr = fileArray.filter((file) => file.size <= MAX_FILE_SIZE);

    if (oversizedFiles.length > 0) {
      const fileNames = oversizedFiles.map((file) => file.name).join(', ');
      Toast.fire({
        position: 'top',
        icon: 'warning',
        title: 'File too large',
        text: `${fileNames} exceeds ${MAX_MB} MB.`,
        color: '#1f2937',
        iconColor: '#f59e0b',
        background: '#ffffff',
      });
    }

    const previews = checkSizedFilesArr.map((file) => URL.createObjectURL(file));

    if (multiple) {
      setPreviews((prev) => ({
        ...prev,
        imagesUrl: [...prev.imagesUrl, ...previews],
      }));
      setTempFiles((prev) => ({
        ...prev,
        imagesUrl: [...prev.imagesUrl, ...checkSizedFilesArr],
      }));
    } else {
      setPreviews((prev) => ({ ...prev, imageUrl: previews[0] }));
      setTempFiles((prev) => ({ ...prev, imageUrl: checkSizedFilesArr[0] }));
    }

    e.target.value = '';
  };

  const onSubmit = async (data) => {
    console.log(data);
    // return;
    try {
      // await dispatch(loginAsync(data)).unwrap();
      // navigate('/');
    } catch (errorMessage) {
      Toast.fire({
        position: 'top',
        icon: 'error',
        title: errorMessage,
        color: '#1f2937',
        iconColor: '#ef4444',
        background: '#ffffff',
      });
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
        <div className="fixed z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <section className="flex-1 overflow-y-auto bg-gray-50 p-8">
        {/* <ImageUpload register={register} name="imageUrl" /> */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <PageHeader title={title} />
            </div>

            <div className="flex gap-3">
              <FormActions submitText={submitText} discardText={discardText} />
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
                  <div className="md:col-span-2 md:row-span-2">
                    <label
                      htmlFor="imageUrl"
                      className="mb-2 block text-xs font-semibold tracking-wider text-gray-500 uppercase"
                    >
                      Cover Image
                    </label>
                    <div className="group relative aspect-square overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 transition hover:border-blue-400">
                      <img
                        src="https://dummyimage.com/600x600/f3f4f6/6b7280"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="mb-2 size-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <span className="text-sm font-medium text-white">Change Cover</span>
                      </div>
                      <input
                        id="imageUrl"
                        type="file"
                        className="absolute inset-0 cursor-pointer opacity-0"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="imagesUrl"
                      className="mb-2 block text-xs font-semibold tracking-wider text-gray-500 uppercase"
                    >
                      Gallery Images
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="group relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                        <img
                          src="https://dummyimage.com/300x300/f3f4f6/6b7280"
                          className="h-full w-full object-cover"
                        />
                        <button className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-dashed border-gray-200 transition hover:border-blue-400 hover:bg-blue-50/30">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="mb-1 size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          <span className="text-[10px] font-bold">Add Photo</span>
                        </div>
                        <input
                          type="file"
                          id="imagesUrl"
                          multiple
                          className="absolute inset-0 cursor-pointer opacity-0"
                        />
                      </div>
                    </div>
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
