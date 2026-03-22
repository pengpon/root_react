import { Spinner } from '@repo/ui';
import { addThousandsSeparator, logger, Toast } from '@repo/utils';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { removeCartItem, updateCartItem } from '../api/cart';
import { getCartAsync, setDrawerOpen } from '../store/slices/cartSlice';

function Cart({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const finalTotal = useSelector((state) => state.cart.finalTotal);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [localCartItems, setLocalCartItems] = useState(null);
  const displayItems = localCartItems || cartList;
  const timerRef = useRef(null);

  const handleQuantityChange = async (id, type) => {
    const currentItems = localCartItems || cartList;
    const targetItem = currentItems.find((item) => item.id === id);
    if (!targetItem) return;

    const diff = type === 'plus' ? 1 : -1;
    const newQty = targetItem.qty + diff;

    const updatedItems = currentItems.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item,
    );
    const updateItem = updatedItems.find((item) => item.id === id);

    setLocalCartItems(updatedItems);
    setIsActionLoading(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(async () => {
      try {
        await updateCartItem(id, {
          product_id: updateItem.product_id,
          qty: updateItem.qty,
        });
        await dispatch(getCartAsync()).unwrap();
      } catch (error) {
        logger.error(error.message);
      } finally {
        setLocalCartItems(null);
        setIsActionLoading(false);
      }
    }, 500);
  };

  const handleRemove = async (id) => {
    await removeCartItem(id);
    dispatch(getCartAsync());
  };

  useEffect(() => {
    const init = async () => {
      try {
        dispatch(getCartAsync());
      } catch (error) {
        Toast.fire({
          position: 'top',
          icon: 'warning',
          title: `Something Wrong...`,
          color: '#fff',
          iconColor: '#fff',
          background: '#ff8f40',
        });
        logger.error(error.message, error);
      }
    };
    init();
  }, [dispatch]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-100 transition-all duration-500 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          onClick={onClose}
          className={`bg-brand/40 absolute inset-0 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        <div
          className={`bg-surface-bright absolute inset-y-0 right-0 w-full max-w-md shadow-2xl transition-transform duration-500 ease-in-out md:w-112.5 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="border-brand/5 flex items-center justify-between border-b p-8">
              <h2 className="text-brand text-2xl font-bold tracking-tighter">
                Your Bag {cartList.length === 0 && 'Is Empty'}.
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="group p-2 transition-transform hover:rotate-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="group-hover:text-brand size-6 text-gray-400"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {displayItems && displayItems.length > 0 ? (
              <>
                <div className="no-scrollbar flex-1 overflow-y-auto p-8">
                  <div className="space-y-10">
                    {displayItems.map((item) => (
                      <div key={item.id} className="flex gap-5">
                        <div className="h-28 w-20 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
                          <img
                            src={item.product.imageUrl}
                            alt={`${item.product.title}-cover`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between py-1">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="text-brand text-sm font-bold">{item.product.title}</h4>
                              <p className="mt-1 text-[10px] tracking-wider text-gray-400 capitalize italic">
                                1 {item.product.unit}
                              </p>
                            </div>
                            <button
                              type="button"
                              className="text-gray-800 transition-colors hover:text-red-700"
                              onClick={() => handleRemove(item.id)}
                            >
                              <svg
                                className="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex items-end justify-between border-t border-gray-50 pt-3">
                            <div className="border-brand/10 flex items-center rounded-lg border bg-white px-1 py-1">
                              <button
                                type="button"
                                className="text-brand rounded-l-lg p-2 text-xs font-bold hover:bg-gray-50"
                                onClick={() => handleQuantityChange(item.id, 'minus')}
                              >
                                -
                              </button>
                              <span className="min-w-6 text-center text-xs font-bold">
                                {isActionLoading ? (
                                  <div className="mx-auto size-3">
                                    <Spinner />
                                  </div>
                                ) : (
                                  item.qty
                                )}
                              </span>
                              <button
                                type="button"
                                className="text-brand rounded-r-lg p-2 text-xs font-bold hover:bg-gray-50"
                                onClick={() => handleQuantityChange(item.id, 'plus')}
                              >
                                +
                              </button>
                            </div>

                            <div className="flex flex-col items-end gap-1">
                              {item.final_total !== item.total && (
                                <div className="flex items-center gap-2">
                                  <span className="bg-secondary/10 text-secondary rounded px-1.5 py-0.5 text-[10px] font-medium">
                                    Coupon Applied
                                  </span>
                                  <span className="text-brand/30 text-xs line-through">
                                    $ {addThousandsSeparator(item.total || 0)}
                                  </span>
                                </div>
                              )}
                              <span className="text-brand text-base font-bold">
                                $ {addThousandsSeparator(item.final_total || item.product.price)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-brand/5 border-t bg-white p-8">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-gray-400">Subtotal</span>

                    <span className="text-brand font-bold">
                      {isActionLoading ? (
                        <div className="size-3.5">
                          <Spinner />
                        </div>
                      ) : (
                        `$ ${addThousandsSeparator(Math.ceil(finalTotal), ',')}`
                      )}
                    </span>
                  </div>
                  <p className="mb-8 text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                    Shipping and taxes calculated at checkout
                  </p>

                  <Link
                    to="/checkout"
                    onClick={() => dispatch(setDrawerOpen(false))}
                    className="bg-brand block w-full rounded-2xl py-5 text-center text-xs font-bold tracking-[0.3em] text-white uppercase shadow-xl transition-all hover:bg-brand-dark active:scale-95"
                  >
                    Check out
                  </Link>

                  <Link
                    to="/products"
                    onClick={() => dispatch(setDrawerOpen(false))}
                    className="hover:text-brand mt-6 block w-full text-center text-[10px] font-bold tracking-widest text-gray-400 uppercase underline underline-offset-8 transition-colors"
                  >
                    Or continue shopping
                  </Link>
                </div>
              </>
            ) : (
              <div className="border-brand/5 border-t p-8">
                <Link
                  to="/products"
                  onClick={() => dispatch(setDrawerOpen(false))}
                  className="hover:text-brand mt-6 block w-full text-center text-sm font-bold tracking-widest text-gray-400 uppercase underline underline-offset-8 transition-colors"
                >
                  continue shopping
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
