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
  const [cartItems, setCartItems] = useState(null);
  const timerRef = useRef(null);

  const handleQuantityChange = async (id, type) => {
    setIsActionLoading(true);
    const currentItem = cartItems.find((item) => item.id === id);
    const diff = type === 'plus' ? 1 : -1;
    const newQty = currentItem.qty + diff;

    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item,
    );

    setCartItems(updatedItems);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(async () => {
      await updateCart(id, updatedItems);
      setIsActionLoading(false);
    }, 500);
  };

  const updateCart = async (id, data) => {
    const updateItem = data.find((item) => item.id === id);

    await updateCartItem(id, {
      product_id: updateItem.product_id,
      qty: updateItem.qty,
    });
    dispatch(getCartAsync());
    setIsActionLoading(false);
  };

  const handleRemove = async (id) => {
    setCartItems((prev) => {
      const updatedItems = prev.filter((item) => item.id !== id);
      return updatedItems;
    });
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

  useEffect(() => {
    setCartItems([...cartList]);
  }, [cartList]);

  return (
    <>
      <div
        className={`fixed inset-0 z-100 transition-all duration-500 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          onClick={onClose}
          className={`absolute inset-0 bg-[#2C3E2D]/40 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        <div
          className={`absolute inset-y-0 right-0 w-full max-w-md bg-[#FDFCF8] shadow-2xl transition-transform duration-500 ease-in-out md:w-112.5 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-[#2C3E2D]/5 p-8">
              <h2 className="text-2xl font-bold tracking-tighter text-[#2C3E2D]">Your Bag.</h2>
              <button onClick={onClose} className="group p-2 transition-transform hover:rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-6 text-gray-400 group-hover:text-[#2C3E2D]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="no-scrollbar flex-1 overflow-y-auto p-8">
              <div className="space-y-10">
                {cartList.map((item) => (
                  <div key={item.id} className="flex gap-5">
                    <div className="h-28 w-20 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
                      <img src={item.product.imageUrl} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-[#2C3E2D]">{item.product.title}</h4>
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-[#2C3E2D]/10 bg-white px-2 py-1">
                          <button
                            type="button"
                            className="px-2 text-xs font-bold text-[#2C3E2D]"
                            onClick={() => handleQuantityChange(item.id, 'minus')}
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-bold">
                            {isActionLoading ? (
                              <div className="size-3">
                                <Spinner />
                              </div>
                            ) : (
                              item.qty
                            )}
                          </span>
                          <button
                            className="px-2 text-xs font-bold text-[#2C3E2D]"
                            onClick={() => handleQuantityChange(item.id, 'plus')}
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm font-bold text-[#2C3E2D]">
                          $ {addThousandsSeparator(item.product.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#2C3E2D]/5 bg-white p-8">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-gray-400">Subtotal</span>
                <span className="font-bold text-[#2C3E2D]">
                  {isActionLoading ? (
                    <div className="size-3.5">
                      <Spinner />
                    </div>
                  ) : (
                    `$ ${addThousandsSeparator(finalTotal, ',')}`
                  )}
                </span>
              </div>
              <p className="mb-8 text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                Shipping and taxes calculated at checkout
              </p>

              <Link
                to="/checkout"
                onClick={() => dispatch(setDrawerOpen(false))}
                className="w-full text-center block  rounded-2xl bg-[#2C3E2D] py-5 text-xs font-bold tracking-[0.3em] text-white uppercase shadow-xl transition-all hover:bg-[#1a261b] active:scale-95"
              >
                Check out
              </Link>

              <Link
                to="/products"
                className="block mt-6 w-full text-center text-[10px] font-bold tracking-widest text-gray-400 uppercase underline underline-offset-8 transition-colors hover:text-[#2C3E2D]"
              >
                Or continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
