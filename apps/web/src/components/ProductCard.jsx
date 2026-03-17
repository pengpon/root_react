import { Spinner } from '@repo/ui';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCartAsync } from '../store/slices/cartSlice';

function ProductCard({ data }) {
  const dispatch = useDispatch();
  const [isAddToCartLoading, setIsAddToCartLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const timeRef = useRef(null);

  const BADGE_TYPE_STYLES = {
    new: 'bg-[#8C5E3C]',
    top: 'bg-amber-500',
    limited: 'bg-[#2C3E2D]',
    default: 'bg-gray-500',
  };
  const badgeStyle = BADGE_TYPE_STYLES[data?.badge?.toLowerCase()] || BADGE_TYPE_STYLES.default;

  const onAddToCart = async (e) => {
    setIsAddToCartLoading(true);

    e.stopPropagation();
    e.preventDefault();

    await dispatch(addToCartAsync({ product_id: data.id, qty: 1 }));
    setIsAddToCartLoading(false);
    setIsSuccess(true);
    if (timeRef.current) clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <>
      <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-2xl bg-white shadow-sm">
        {data?.badge && (
          <span
            className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-[9px] font-extrabold tracking-wider text-white uppercase ${badgeStyle}`}
          >
            {data?.badge}
          </span>
        )}

        <div className="aspect-4/5 overflow-hidden">
          <figure className="w-full h-full overflow-hidden relative">
            <img
              src={data?.imageUrl || 'https://placehold.co/600x400/89986D/FFFFFF?text=Oops'}
              alt={data?.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="opacity-0 transition-all duration-700 group-hover:opacity-100">
              <img
                src={
                  (data?.imagesUrl && data.imagesUrl[0]) ||
                  data.imageUrl ||
                  'https://placehold.co/600x400/89986D/FFFFFF?text=Oops'
                }
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
          </figure>
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            className="w-full rounded-xl bg-[#2C3E2D] py-3 text-xs font-bold text-white shadow-xl cursor-pointer"
            onClick={onAddToCart}
          >
            <div className="flex justify-center items-center gap-2 min-h-[24px]">
              {isAddToCartLoading ? (
                <div className="size-4">
                  <Spinner />
                </div>
              ) : isSuccess ? (
                <svg
                  className="size-4 animate-success-pop"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path className="animate-draw-check" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                'ADD TO BASKET'
              )}
            </div>
          </button>
        </div>
      </div>
      <div className="px-1">
        <h3 className="text-sm font-bold text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]">
          {data?.title}
        </h3>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-xs font-medium text-gray-400 italic">1 {data?.unit}</p>
          <p className="font-bold text-[#2C3E2D]">${data?.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
