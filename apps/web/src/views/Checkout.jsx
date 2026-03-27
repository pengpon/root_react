import { FieldErrorMessage } from '@repo/ui';
import { addThousandsSeparator, logger, Toast } from '@repo/utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { applyCoupon } from '../api/coupon';
import { createOrder } from '../api/order';
import { getCartAsync } from '../store/slices/cartSlice';

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const cartList = useSelector((state) => state.cart.cartList);
  const finalTotal = useSelector((state) => state.cart.finalTotal);
  const total = useSelector((state) => state.cart.total);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailRegexPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { message, ...user } = data;
    try {
      const res = await createOrder({ user, message });
      dispatch(getCartAsync());
      navigate(`/payment/${res.data.orderId}`);
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

  const handleApplyCoupon = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    await applyCoupon(data);
    dispatch(getCartAsync());
  };

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
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="flex-1">
              <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-12">
                  <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-brand">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[10px] text-white">
                      1
                    </span>
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          placeholder=" "
                          className="peer w-full rounded-xl border border-brand/10 bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none focus:border-secondary"
                          {...register('email', {
                            required: 'Please Enter Email Address',
                            pattern: {
                              value: emailRegexPattern,
                              message: 'Please Enter Valid Email Address',
                            },
                          })}
                        />

                        <label
                          htmlFor="email"
                          className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-brand/50 capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                        >
                          Email Address
                        </label>
                      </div>
                      <FieldErrorMessage message={errors.email?.message} />
                    </div>
                    <div className="col-span-1">
                      <div className="relative">
                        <input
                          id="tel"
                          type="tel"
                          placeholder=" "
                          className="peer w-full rounded-xl border border-brand/10 bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none focus:border-secondary"
                          {...register('tel', {
                            required: 'Please Enter Phone Number',
                            minLength: {
                              value: 8,
                              message: 'Enter a valid phone number',
                            },
                            pattern: {
                              value: /^[0-9]+$/,
                              message: 'Enter a valid phone number',
                            },
                          })}
                        />

                        <label
                          htmlFor="tel"
                          className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-brand/50 capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                        >
                          Phone Number
                        </label>
                      </div>
                      <FieldErrorMessage message={errors.tel?.message} />
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-brand">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[10px] text-white">
                      2
                    </span>
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          placeholder=" "
                          className="peer w-full rounded-xl border border-brand/10 bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none focus:border-secondary"
                          {...register('name', {
                            required: 'Please Enter Name',
                          })}
                        />
                        <label
                          htmlFor="name"
                          className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-brand/50 capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                        >
                          Name
                        </label>
                      </div>
                      <FieldErrorMessage message={errors.name?.message} />
                    </div>

                    <div className="col-span-2">
                      <div className="relative">
                        <input
                          id="address"
                          type="text"
                          placeholder=" "
                          className="peer w-full rounded-xl border border-brand/10 bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none focus:border-secondary"
                          {...register('address', {
                            required: 'Please Enter Address',
                          })}
                        />
                        <label
                          htmlFor="address"
                          className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-brand/50 capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                        >
                          Address
                        </label>
                      </div>
                      <FieldErrorMessage message={errors.address?.message} />
                    </div>

                    <div className="relative col-span-2">
                      <textarea
                        id="message"
                        type="text"
                        placeholder=" "
                        rows="2"
                        className="peer w-full rounded-xl border border-brand/10 bg-white px-4 pt-6 pb-2 text-sm placeholder-transparent outline-none focus:border-secondary"
                        {...register('message')}
                      />
                      <label
                        htmlFor="message"
                        className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-brand/50 capitalize transition-all peer-focus:h-7 peer-focus:items-start peer-focus:text-[10px] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:h-7 peer-[:not(:placeholder-shown)]:items-start peer-[:not(:placeholder-shown)]:text-[10px]"
                      >
                        Message
                      </label>
                    </div>
                  </div>
                </div>

                {/* <div className="mb-12">
                  <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-[#2C3E2D]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C3E2D] text-[10px] text-white">
                      3
                    </span>
                    Payment Method
                  </h2>
                  <div className="rounded-2xl border border-[#2C3E2D]/10 bg-white p-6">
                    <div className="mb-4 flex items-center gap-4 border-b border-[#2C3E2D]/5 pb-4">
                      <input type="radio" checked name="payment" className="accent-[#2C3E2D]" />
                      <span className="text-sm font-bold text-[#2C3E2D]">Credit Card</span>
                    </div>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full rounded-lg bg-[#FDFCF8] p-3 text-sm outline-none"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="MM / YY"
                          className="rounded-lg bg-[#FDFCF8] p-3 text-sm outline-none"
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          className="rounded-lg bg-[#FDFCF8] p-3 text-sm outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-2xl bg-brand py-5 text-sm font-bold tracking-[0.2em] text-white shadow-2xl hover:bg-brand-dark"
                >
                  COMPLETE ORDER
                </button>
              </form>
            </div>
            <div className="w-full lg:w-100">
              <div className="sticky top-8 rounded-4xl border border-brand/5 bg-white p-10 shadow-sm">
                <h3 className="mb-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  In your basket
                </h3>
                <div className="mb-8 space-y-6">
                  {cartList.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-surface-bright">
                        <img
                          src={item.product.imageUrl}
                          alt={`${item.product.title}-cover`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-brand">{item.title}</p>
                        <p className="text-[10px] text-gray-400">Qty: {item.qty}</p>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        {item.final_total !== item.total && (
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-secondary/10 px-1.5 py-0.5 text-[10px] font-medium text-secondary">
                              Coupon Applied
                            </span>
                            <span className="text-xs text-brand/30 line-through">
                              $ {addThousandsSeparator(item.total || 0)}
                            </span>
                          </div>
                        )}
                        <span className="text-base font-bold text-brand">
                          $ {addThousandsSeparator(item.final_total || item.product.price)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleApplyCoupon}>
                  <div className="mb-8 flex gap-2">
                    <input
                      name="code"
                      type="text"
                      placeholder="Gift Code"
                      required
                      className="flex-1 rounded-xl border border-transparent bg-surface-bright px-4 py-2 text-sm outline-none focus:border-secondary/20"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer rounded-xl bg-accent px-6 py-2 text-xs font-bold text-brand"
                    >
                      APPLY
                    </button>
                  </div>
                </form>

                <div className="space-y-3 border-t border-brand/5 pt-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-bold">$ {addThousandsSeparator(total || 0)}</span>
                  </div>
                  {total !== finalTotal && (
                    <div className="flex justify-between text-secondary">
                      <span className="font-medium">Discount</span>
                      <span className="font-bold">
                        - $ {addThousandsSeparator(Math.ceil(finalTotal) - total || 0)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-bold text-secondary">Free</span>
                  </div>
                  <div className="flex justify-between border-t border-brand/5 pt-4">
                    <span className="text-lg font-bold text-brand">Total</span>
                    <span className="text-2xl font-black tracking-tighter text-brand">
                      $ {addThousandsSeparator(Math.ceil(finalTotal) || 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Checkout;
