import { Spinner } from '@repo/ui';
import { logger } from '@repo/utils';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { addToCart, updateCartItem } from '../api/cart';
import { fetchProduct } from '../api/products';
import { getCartAsync } from '../store/slices/cartSlice';

function ProductItem() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const params = useParams();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAddToCartLoading, setIsAddToCartLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const timeRef = useRef(null);

  const handleImageClick = (e) => {
    setActiveImage(e.target.src);
  };

  const handleQuantityChange = (e) => {
    const type = e.target.dataset.type;

    if (type === 'plus') {
      setQuantity((prev) => {
        const current = Number(prev) || 1;
        return current + 1;
      });
    } else {
      setQuantity((prev) => {
        const current = Number(prev) || 1;

        return Math.max(current - 1, 1);
      });
    }
  };
  const handleQuantityInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setQuantity(value);
    }
  };
  const handleQuantityInputBlur = () => {
    if (!quantity) setQuantity(0);
  };

  const handleAddToCart = async () => {
    setIsAddToCartLoading(true);

    const existingItemIndex = cartList.findIndex((item) => item.product_id === product.id);

    try {
      if (existingItemIndex >= 0) {
        await updateCartItem(cartList[existingItemIndex].id, {
          product_id: product.id,
          qty: cartList[existingItemIndex].qty + Number(quantity),
        });
      } else {
        await addToCart({
          product_id: product.id,
          qty: quantity,
        });
      }
      setIsSuccess(true);

      // 控制 check icon 顯示
      if (timeRef.current) clearTimeout(timeRef.current);
      timeRef.current = setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
      dispatch(getCartAsync());
    } catch (error) {
      logger.error(error.message, error);
    } finally {
      setIsAddToCartLoading(false);
    }
  };

  useEffect(() => {
    const getProduct = async (id) => {
      try {
        const res = await fetchProduct(id);
        setProduct(res?.data?.product);
        setActiveImage(res.data?.product?.imageUrl);
      } catch (error) {
        logger.error(error.message, error);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) getProduct(id);
  }, [id]);
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <section className="bg-surface-bright py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-around gap-12 lg:flex-row lg:gap-20">
            <div className="w-full lg:w-2/5">
              <div className="relative aspect-square overflow-hidden rounded-4xl bg-white shadow-sm">
                {product?.badge && (
                  <span className="absolute top-6 left-6 z-10 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg">
                    {product?.badge}
                  </span>
                )}

                <img
                  src={activeImage || 'https://dummyimage.com/600x400/eeeeee/fff'}
                  alt="Product Main Image"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 grid grid-cols-4 gap-4">
                {product?.imagesUrl?.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="aspect-square cursor-pointer overflow-hidden rounded-xl border border-brand ring-offset-2 transition-all"
                    onClick={handleImageClick}
                  >
                    <img
                      src={image || 'https://dummyimage.com/600x400/eeeeee/fff'}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col lg:w-2/5">
              <nav className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-secondary uppercase">
                <a href="#" className="hover:underline">
                  Shop
                </a>
                <span>/</span>
                <span className="uppercase">{product.category}</span>
              </nav>

              <h1 className="text-4xl font-bold tracking-tight text-brand md:text-5xl">
                {product.title}
              </h1>

              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-3xl font-black tracking-tighter text-brand">
                  ${product.price}
                </span>
                <span className="text-lg text-gray-400 line-through opacity-60">
                  ${product.origin_price}
                </span>
              </div>

              <div className="my-8 h-px w-full bg-brand/10"></div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Description
                </h3>
                <p className="text-base leading-relaxed text-gray-600">{product.description}</p>
              </div>
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-xl border border-brand/10 bg-white p-1">
                    <button
                      type="button"
                      data-type="minus"
                      onClick={handleQuantityChange}
                      className="flex h-12 w-12 items-center justify-center rounded-lg text-brand transition-colors hover:bg-accent cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      className="w-12 bg-transparent text-center font-bold text-brand focus:outline-none"
                      onChange={handleQuantityInputChange}
                      onBlur={handleQuantityInputBlur}
                    />
                    <button
                      type="button"
                      data-type="plus"
                      onClick={handleQuantityChange}
                      className="flex h-12 w-12 items-center justify-center rounded-lg text-brand transition-colors hover:bg-accent cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex-1 rounded-xl bg-brand py-4 text-sm font-bold tracking-widest text-white shadow-2xl transition-all hover:bg-brand-dark hover:shadow-brand/20 active:scale-95 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80"
                    onClick={handleAddToCart}
                    disabled={isAddToCartLoading && !isSuccess}
                  >
                    <div className="flex h-5 items-center justify-center">
                      {isAddToCartLoading ? (
                        <Spinner className="size-5" />
                      ) : isSuccess ? (
                        <svg
                          className="size-6 animate-pop"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path className="animate-draw-check" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        'ADD TO BASKET'
                      )}
                    </div>
                  </button>
                </div>

                <Link
                  to="/checkout"
                  className="w-full rounded-xl border-2 border-brand py-4 text-sm font-bold tracking-widest text-brand transition-all hover:bg-brand hover:text-white cursor-pointer"
                >
                  BUY IT NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductItem;
