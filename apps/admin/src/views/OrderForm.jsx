import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  FieldErrorMessage,
  Spinner,
  TruckIcon,
} from '@repo/ui';
import { formatDateTime, Toast } from '@repo/utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router';
import { editOrder } from '../api/orders';
import FormActions from '../layouts/FormActions';
import PageHeader from '../layouts/PageHeader';

function OrderForm() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  let params = useParams();
  const formType = location.state.type;
  const order = location.state.data;

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const ACTIONS_TEXT_MAP = {
    edit: {
      submitText: 'Save Changes',
      discardText: 'Discard',
    },
  };

  const { submitText, discardText } = ACTIONS_TEXT_MAP[formType];
  const title = `Edit: Order`;

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const finalPayload = {
        ...data,
        is_enabled: data.is_enabled ? 1 : 0,
        modified_at: Date.now(),
      };

      let res = await editOrder(params.id, finalPayload);

      const title = 'Order Updated!';

      Toast.fire({
        position: 'top',
        icon: 'success',
        title: res.data.success ? title : 'Error',
        color: '#1f2937',
        iconColor: '#10b981',
        background: '#ffffff',
      });
      navigate('/orders');
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
    if (order) {
      reset({
        ...order,
        is_paid: order.is_paid === 1,
      });
    }
  }, [order, reset]);

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
                    <TruckIcon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Delivery Information</h3>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="md:col-span-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Recipient Name
                    </label>
                    <input
                      {...register('user.name', {
                        required: 'Please enter recipient name',
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                    <FieldErrorMessage message={errors.user?.name?.message} />
                  </div>
                  <div className="md:col-span-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      {...register('user.tel', {
                        required: 'Please enter phone number',
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                    <FieldErrorMessage message={errors.user?.tel?.message} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      {...register('user.email', {
                        required: 'Please enter email',
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                    <FieldErrorMessage message={errors.user?.email?.message} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Shipping Address
                    </label>
                    <input
                      {...register('user.address', {
                        required: 'Please enter address',
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                    <FieldErrorMessage message={errors.user?.address?.message} />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <ChatBubbleBottomCenterTextIcon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Customer Message</h3>
                </div>
                <textarea
                  {...register('message')}
                  rows="4"
                  placeholder="No specific message from customer..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                ></textarea>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircleIcon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Payment Status</h3>
                </div>

                <label className="group relative flex cursor-pointer items-center rounded-xl border border-gray-200 p-4 transition-all hover:bg-gray-50 has-checked:border-emerald-500 has-checked:bg-emerald-50/30">
                  <input {...register('is_paid')} type="checkbox" className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-emerald-500 after:absolute after:top-4.5 after:left-4.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full"></div>
                  <span className="ml-3 text-sm font-bold text-gray-900">Mark as Paid</span>
                </label>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-sm shadow-sm">
                <h3 className="mb-4 font-bold tracking-wider text-gray-800 uppercase">
                  Order Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-500">
                    <span>Order ID:</span>
                    <span className="font-mono text-gray-900">{order.id}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Created At:</span>
                    <span className="text-gray-900">{formatDateTime(order.create_at)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default OrderForm;
