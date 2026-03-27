import { FieldErrorMessage } from '@repo/ui';
import { addThousandsSeparator, logger, Toast } from '@repo/utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router';
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
      <section className="bg-surface-bright min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {order.is_paid ? (
            <div className="text-center">
              <div className="bg-secondary/10 text-secondary mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full">
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
              <h1 className="text-brand mb-2 text-2xl font-bold">Payment Already Received</h1>
              <p className="text-brand/60 mb-8">
                This order <span className="text-secondary font-bold">ID: {order.id} </span>has
                already been paid for. <br />
                We are currently preparing your items for shipment.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-16 lg:flex-row">
              <div className="flex-1">
                <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-12">
                    <h2 className="text-brand mb-8 flex items-center gap-3 text-xl font-bold">
                      <span className="bg-brand flex h-6 w-6 items-center justify-center rounded-full text-[10px] text-white">
                        3
                      </span>
                      Payment Method
                    </h2>
                    <div className="border-brand/10 rounded-2xl border bg-white p-6">
                      <div className="border-brand/5 mb-4 flex items-center gap-4 border-b pb-4">
                        <input
                          type="radio"
                          defaultChecked
                          name="payment"
                          className="accent-brand"
                        />
                        <span className="text-brand text-sm font-bold">Credit Card</span>
                      </div>
                      <div className="space-y-4">
                        <div className="col-span-1">
                          <div className="relative">
                            <input
                              id="credit-card"
                              autoComplete="cc-number"
                              inputMode="numeric"
                              type="text"
                              placeholder=" "
                              className="peer border-brand/10 focus:border-secondary w-full rounded-xl border bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none"
                              {...register('credit-card', {
                                required: 'Enter a card number',
                                pattern: {
                                  value: /^[0-9]{13,19}$/,
                                  message: 'Enter a valid card number',
                                },
                              })}
                            />

                            <label
                              htmlFor="credit-card"
                              className="text-brand/50 peer-focus:text-secondary pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                            >
                              Credit Card Number
                            </label>
                          </div>
                          <FieldErrorMessage message={errors['credit-card']?.message} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-1">
                            <div className="relative">
                              <input
                                id="expiration-date"
                                type="text"
                                placeholder=" "
                                className="peer border-brand/10 focus:border-secondary w-full rounded-xl border bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none"
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
                                className="text-brand/50 peer-focus:text-secondary pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                              >
                                Expiration Date (MM/YY)
                              </label>
                            </div>
                            <FieldErrorMessage message={errors['expiration-date']?.message} />
                          </div>
                          <div className="col-span-1">
                            <div className="relative">
                              <input
                                id="cvv-code"
                                type="text"
                                placeholder=" "
                                className="peer border-brand/10 focus:border-secondary w-full rounded-xl border bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none"
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
                                className="text-brand/50 peer-focus:text-secondary pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                              >
                                CVV
                              </label>
                            </div>
                            <FieldErrorMessage message={errors['cvv-code']?.message} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-brand hover:bg-brand-dark w-full cursor-pointer rounded-2xl py-5 text-sm font-bold tracking-[0.2em] text-white shadow-2xl"
                  >
                    CONFIRM
                  </button>
                </form>
              </div>
              <div className="w-full lg:w-100">
                <div className="border-brand/5 sticky top-8 rounded-4xl border bg-white p-10 shadow-sm">
                  <h3 className="mb-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    your order
                    <span className="text-xs font-bold tracking-tight uppercase">
                      （#{order.id}）
                    </span>
                  </h3>
                  <Link
                    to={`/order-detail/${order.id}`}
                    className="group text-secondary mt-3 flex items-center gap-2 text-xs font-bold"
                  >
                    <span>View Order Details</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <div className="mb-8 space-y-6"></div>

                  <div className="border-brand/5 space-y-3 border-t pt-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="font-bold">
                        $ {addThousandsSeparator(Math.ceil(order.total) || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Shipping</span>
                      <span className="text-secondary font-bold">Free</span>
                    </div>
                    <div className="border-brand/5 flex justify-between border-t pt-4">
                      <span className="text-brand text-lg font-bold">Total</span>
                      <span className="text-brand text-2xl font-black tracking-tighter">
                        $ {addThousandsSeparator(Math.ceil(order.total) || 0)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-dashed border-gray-100 pt-6">
                    <button
                      type="button"
                      onClick={() => navigate(`/order/${order.id}`)}
                      className="w-full text-center"
                    >
                      <span className="mb-1 block text-[10px] tracking-wider text-gray-400 uppercase">
                        Your order is confirmed
                      </span>
                      <span className="text-brand hover:text-secondary text-xs font-bold underline underline-offset-4 transition-colors">
                        Finish Payment Later
                      </span>
                    </button>
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
