import {
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  FieldErrorMessage,
  Spinner,
  TicketIcon,
} from '@repo/ui';
import { formatDateTime, Toast } from '@repo/utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router';
import { createCoupon, editCoupon } from '../api/coupons';
import FormActions from '../layouts/FormActions';
import PageHeader from '../layouts/PageHeader';

function CouponForm() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  let params = useParams();
  const formType = location.state.type;
  const coupon = location.state.data;

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const startDate = watch('start_date');
  const dueDate = watch('due_date');

  const ACTIONS_TEXT_MAP = {
    create: {
      submitText: 'Create Coupon',
      discardText: 'Cancel',
    },
    edit: {
      submitText: 'Save Changes',
      discardText: 'Discard',
    },
  };

  const TITLE_TEXT_MAP = {
    create: 'Create New Coupon',
    edit: `Edit: ${location?.state?.data?.title}`,
  };

  const { submitText, discardText } = ACTIONS_TEXT_MAP[formType];
  const title = TITLE_TEXT_MAP[formType];

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const finalPayload = {
        ...data,
        is_enabled: data.is_enabled ? 1 : 0,
        modified_at: Date.now(),
      };

      let res;
      if (formType === 'create') {
        res = await createCoupon(finalPayload);
      } else {
        res = await editCoupon(params.id, finalPayload);
      }

      const title = formType === 'create' ? 'Coupon Created!' : 'Coupon Updated!';

      Toast.fire({
        position: 'top',
        icon: 'success',
        title: res.data.success ? title : 'Error',
        color: '#1f2937',
        iconColor: '#10b981',
        background: '#ffffff',
      });
      navigate('/coupons');
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

  useEffect(() => {
    if (coupon) {
      reset({
        ...coupon,
        is_enabled: coupon.is_enabled === 1,
        start_date: formatDateTime(coupon.start_date),
        due_date: formatDateTime(coupon.due_date),
      });
    }
  }, [coupon, reset]);

  useEffect(() => {
    if (startDate && dueDate) {
      trigger(['start_date', 'due_date']);
    }
  }, [startDate, dueDate, trigger]);
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
                    <TicketIcon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Coupon Rules</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
                      Coupon Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      {...register('title', {
                        required: 'Please enter coupon title',
                      })}
                    />
                    <FieldErrorMessage message={errors.title?.message} />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="percent"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Discount Percentage (%)
                      </label>
                      <div className="relative">
                        <input
                          id="percent"
                          type="number"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-12 pl-4 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                          {...register('percent', {
                            required: 'Please enter percent',
                            valueAsNumber: true,
                            min: {
                              value: 1,
                              message: 'Must be greater than 0',
                            },
                            max: {
                              value: 99,
                              message: 'Must be smaller than 100',
                            },
                            validate: (value) =>
                              Number.isInteger(value) || 'Must be a whole number',
                          })}
                        />
                        <span className="absolute top-1/2 right-4 -translate-y-1/2 font-semibold text-gray-400">
                          %
                        </span>
                        <FieldErrorMessage message={errors.percent?.message} />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="code"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Promo Code
                      </label>
                      <input
                        id="code"
                        type="text"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono font-bold text-blue-600 uppercase transition focus:border-blue-500 focus:bg-white focus:outline-none"
                        {...register('code', {
                          required: 'Please enter code',
                        })}
                      />
                      <FieldErrorMessage message={errors.code?.message} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <CalendarIcon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Validity Period</h3>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="start_date"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Start Date
                    </label>
                    <input
                      id="start_date"
                      type="datetime-local"
                      {...register('start_date', {
                        required: 'Start time is required',
                        setValueAs: (v) => (v ? new Date(v).getTime() : null),
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                    <FieldErrorMessage message={errors.start_date?.message} />
                  </div>
                  <div>
                    <label
                      htmlFor="due_date"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Due Date
                    </label>
                    <input
                      id="due_date"
                      type="datetime-local"
                      {...register('due_date', {
                        required: 'Expiration time is required',
                        setValueAs: (v) => (v ? new Date(v).getTime() : null),
                        validate: (value) => {
                          if (!startDate || !value) return true;
                          return (
                            new Date(value).getTime() >= new Date(startDate).getTime() ||
                            'Invalid range: Expiration must be after start time'
                          );
                        },
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                    <FieldErrorMessage message={errors.due_date?.message} />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <CheckCircleIcon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Enable</h3>
                </div>
                <div className="space-y-4">
                  <label
                    htmlFor="is_enabled"
                    className="group relative flex cursor-pointer items-start rounded-xl border border-gray-200 p-4 transition-all duration-200 hover:border-emerald-200 hover:bg-gray-50 has-checked:border-emerald-500 has-checked:bg-emerald-50/30"
                  >
                    <div className="relative flex items-center">
                      <input
                        id="is_enabled"
                        type="checkbox"
                        className="peer sr-only"
                        {...register('is_enabled')}
                      />
                      <div className="peer h-6 w-11 shrink-0 rounded-full bg-gray-200 transition-colors peer-checked:bg-emerald-500 peer-focus:ring-2 peer-focus:ring-emerald-500/20 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </div>
                    <div className="ml-3 select-none">
                      <span className="block text-sm leading-none font-bold text-gray-900">
                        Enable Coupon
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">
                        Toggle to activate or deactivate this item.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {formType === 'edit' && (
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
                      <ClockIcon className="size-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">History</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                        Last Modified
                      </p>
                      <p className="text-sm font-medium text-gray-700">
                        {formatDateTime(coupon.modified_at)}
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

export default CouponForm;
