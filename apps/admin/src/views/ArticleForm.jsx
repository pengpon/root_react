import { Spinner } from '@repo/ui';
import { calculateContentStats, formatDateTime, Toast } from '@repo/utils';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router';
import { createArticle, editArticle, fetchArticle } from '../api/articles';
import { uploadImage } from '../api/upload';
import CoverUpload from '../components/CoverUpload';
import FormActions from '../layouts/FormActions';
import PageHeader from '../layouts/PageHeader';

function ArticleForm() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  let params = useParams();
  const formType = location.state.type;
  const [article, setArticle] = useState({});

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: '',
    },
    mode: 'onChange',
  });
  const content = watch('content', '');
  const { wordCount, readingTime } = calculateContentStats(content);

  const ACTIONS_TEXT_MAP = {
    create: {
      submitText: 'Create Article',
      discardText: 'Cancel',
    },
    edit: {
      submitText: 'Save Changes',
      discardText: 'Discard',
    },
  };

  const TITLE_TEXT_MAP = {
    create: 'Create New Article',
    edit: `Edit: ${location?.state?.data?.title}`,
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
      const [mainImageUrl] = await Promise.all([uploadFiles(data.imageUrl)]);

      const finalPayload = {
        ...data,
        imageUrl: mainImageUrl[0] || data.imageUrl,
        modified_at: Date.now(),
        readingTime: readingTime,
        ...(formType === 'create' && { create_at: Date.now() }),
      };

      let res;
      if (formType === 'create') {
        res = await createArticle(finalPayload);
      } else {
        res = await editArticle(params.id, finalPayload);
      }

      const title = formType === 'create' ? 'Article Created!' : 'Article Updated!';

      Toast.fire({
        position: 'top',
        icon: 'success',
        title: res.data.success ? title : 'Error',
        color: '#1f2937',
        iconColor: '#10b981',
        background: '#ffffff',
      });
      navigate('/articles');
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
  const getArticleById = useCallback(
    async (id) => {
      const res = await fetchArticle(id);
      setArticle(res.data.article);
      reset({
        ...res.data.article,
      });
    },
    [reset],
  );
  useEffect(() => {
    const init = async () => {
      if (location.state.type === 'edit') await getArticleById(params.id);
      setIsLoading(false);
    };
    init();
  }, [getArticleById, params.id, location]);

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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-blue-600">
                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Content</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
                      Article Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                      {...register('title', {
                        required: 'Please enter article title',
                      })}
                    />
                    <div className="text-status-error h-4 text-sm">
                      {errors['title'] && errors['title'].message}
                    </div>
                  </div>
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
                      <option value="" disabled hidden>
                        Select category
                      </option>

                      <option value="Life">Mindful Life</option>
                      <option value="Food">Food Culture</option>
                    </select>
                    <div className="text-status-error h-4 text-sm">
                      {errors['category'] && errors['category'].message}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="content"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Full Content
                    </label>
                    <textarea
                      id="content"
                      rows="3"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                      {...register('content', {
                        required: 'Please enter content',
                      })}
                    ></textarea>
                    <div className="text-status-error h-4 text-sm">
                      {errors['content'] && errors['content'].message}
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
                    <h3 className="text-lg font-bold text-gray-800">Article Media</h3>
                  </div>
                  <span className="text-xs text-gray-400">Main image</span>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Cover Image
                    </label>
                    <Controller
                      name="imageUrl"
                      control={control}
                      render={({ field }) => <CoverUpload {...field} maxMB={3} />}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Visibility</h3>
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="isPublic"
                    className="group relative flex cursor-pointer items-start rounded-xl border border-gray-200 p-4 transition-all duration-200 hover:border-emerald-200 hover:bg-gray-50 has-checked:border-emerald-500 has-checked:bg-emerald-50/30"
                  >
                    <div className="relative flex items-center">
                      <input
                        {...register('isPublic')}
                        id="isPublic"
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <div className="peer h-6 w-11 shrink-0 rounded-full bg-gray-200 transition-colors peer-checked:bg-emerald-500 peer-focus:ring-2 peer-focus:ring-emerald-500/20 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </div>
                    <div className="ml-3 select-none">
                      <span className="block text-sm leading-none font-bold text-gray-900">
                        Public Status
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">
                        Enable this to make the article active and visible to your customers.
                      </span>
                    </div>
                    <span className="ml-3 text-sm font-bold text-gray-900 peer-checked:text-emerald-700"></span>
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Metadata</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="author"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Author
                    </label>
                    <input
                      id="author"
                      type="text"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 focus:border-indigo-500 focus:bg-white focus:outline-none"
                      {...register('author', {
                        required: 'Please enter author name',
                      })}
                    />
                    <div className="text-status-error h-4 text-sm">
                      {errors['author'] && errors['author'].message}
                    </div>
                  </div>
                  <div>
                    <span className="mb-2 block text-sm font-medium text-gray-700">
                      Create Date
                    </span>
                    <div className="w-full cursor-not-allowed rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 text-sm text-gray-400">
                      {article?.create_at
                        ? formatDateTime(article.create_at)
                        : 'Automatically generated on create'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                    Reading Time
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {content ? `~ ${readingTime} min` : '--'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                    Words
                  </span>
                  <span className="text-sm font-bold text-gray-900">{wordCount}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default ArticleForm;
