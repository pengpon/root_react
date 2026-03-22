import { addThousandsSeparator, logger, Toast } from '@repo/utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { fetchOrder } from '../api/order';
import { payOrder } from '../api/payment';

function Payment() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { id } = params;
  const [order, setOrder] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await payOrder(id, data);
      navigate('/payment/thanks');
    } catch (error) {
      logger.error(error.message, error);
      Toast.fire({
        position: 'top',
        icon: 'warning',
        title: `Something Wrong...`,
        color: '#fff',
        iconColor: '#fff',
        background: '#ff8f40',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await fetchOrder(id);
      setOrder(res.data.order);
      setIsLoading(false);
    })();
  }, [id, setOrder]);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isLoading]);

  return (
    <>
      {/* overlay */}
      {isLoading && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen bg-gray-800/50"></div>
      )}
      <section className="min-h-screen bg-surface-bright">
        <div className="container mx-auto px-4 py-12">
          {order.is_paid ? (
            <div className="text-center">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-12 animate-[bounce_2s_infinite]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <h1 className="mb-2 text-2xl font-bold text-brand">Payment Already Received</h1>
              <p className="mb-8 text-brand/60">
                This order <span className="font-bold text-secondary">ID: {order.id} </span>has
                already been paid for. <br />
                We are currently preparing your items for shipment.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-16 lg:flex-row">
              <div className="flex-1">
                <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-12">
                    <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-brand">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[10px] text-white">
                        3
                      </span>
                      Payment Method
                    </h2>
                    <div className="rounded-2xl border border-brand/10 bg-white p-6">
                      <div className="mb-4 flex items-center gap-4 border-b border-brand/5 pb-4">
                        <input type="radio" checked name="payment" className="accent-brand" />
                        <span className="text-sm font-bold text-brand">Credit Card</span>
                      </div>
                      <div className="space-y-4">
                        <div className="col-span-1">
                          <div className="relative">
                            <input
                              id="credit-card"
                              type="text"
                              placeholder=" "
                              className="peer w-full rounded-xl border border-brand/10 bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none focus:border-secondary"
                              {...register('credit-card', {
                                required: 'Enter a card number',
                                pattern: {
                                  value: /^[0-9]{13,19}$/,
                                  message: 'Enter a valid card number',
                                },
                              })}
                            />

                            <label
                              htmlFor="email"
                              className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-brand/50 capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                            >
                              Credit Card Number
                            </label>
                          </div>
                          {errors['credit-card'] && (
                            <span className="px-1 text-xs text-red-500">
                              {errors['credit-card'].message}
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-1">
                            <div className="relative">
                              <input
                                id="expiration-date"
                                type="text"
                                placeholder=" "
                                className="peer w-full rounded-xl border border-brand/10 bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none focus:border-secondary"
                                {...register('expiration-date', {
                                  required: 'Enter expiration date',
                                  pattern: {
                                    value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                                    message: 'Enter a valid expiration date',
                                  },
                                })}
                              />

                              <label
                                htmlFor="expiration-date"
                                className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-brand/50 capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                              >
                                Expiration Date (MM/YY)
                              </label>
                            </div>
                            {errors['expiration-date'] && (
                              <span className="px-1 text-xs text-red-500">
                                {errors['expiration-date'].message}
                              </span>
                            )}
                          </div>
                          <div className="col-span-1">
                            <div className="relative">
                              <input
                                id="cvv-code"
                                type="text"
                                placeholder=" "
                                className="peer w-full rounded-xl border border-brand/10 bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none focus:border-secondary"
                                {...register('cvv-code', {
                                  required: 'Enter the CVV or security code on your card',
                                  pattern: {
                                    value: /^[0-9]{3,4}$/,
                                    message: 'Enter the CVV or security code on your card',
                                  },
                                })}
                              />

                              <label
                                htmlFor="cvv-code"
                                className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-brand/50 capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                              >
                                CVV
                              </label>
                            </div>
                            {errors['cvv-code'] && (
                              <span className="px-1 text-xs text-red-500">
                                {errors['cvv-code'].message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-2xl bg-brand py-5 text-sm font-bold tracking-[0.2em] text-white shadow-2xl hover:bg-brand-dark"
                  >
                    CONFIRM
                  </button>
                </form>
              </div>
              <div className="w-full lg:w-100">
                <div className="sticky top-8 rounded-4xl border border-brand/5 bg-white p-10 shadow-sm">
                  <h3 className="mb-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    your order{' '}
                    <span className="text-xs font-bold tracking-tight uppercase">
                      {' '}
                      ({order.id})
                    </span>
                  </h3>
                  <div className="mb-8 space-y-6"></div>

                  <div className="space-y-3 border-t border-brand/5 pt-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="font-bold">
                        $ {addThousandsSeparator(Math.ceil(order.total) || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Shipping</span>
                      <span className="font-bold text-secondary">Free</span>
                    </div>
                    <div className="flex justify-between border-t border-brand/5 pt-4">
                      <span className="text-lg font-bold text-brand">Total</span>
                      <span className="text-2xl font-black tracking-tighter text-brand">
                        $ {addThousandsSeparator(Math.ceil(order.total) || 0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default Payment;
