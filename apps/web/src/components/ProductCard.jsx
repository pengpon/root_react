function ProductCard({ data }) {
  const BADGE_TYPE_STYLES = {
    new: 'bg-[#8C5E3C]',
    top: 'bg-amber-500',
    limited: 'bg-[#2C3E2D]',
    default: 'bg-gray-500',
  };
  const badgeStyle = BADGE_TYPE_STYLES[data.badge.toLowerCase()] || BADGE_TYPE_STYLES.default;
  return (
    <>
      <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-2xl bg-white shadow-sm">
        {data.badge && (
          <span
            className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-[9px] font-extrabold tracking-wider text-white uppercase ${badgeStyle}`}
          >
            {data.badge}
          </span>
        )}

        <div className="aspect-square overflow-hidden">
          <img
            src={data.imageUrl}
            alt="Product Name"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
          <button className="w-full rounded-xl bg-[#2C3E2D] py-3 text-xs font-bold text-white shadow-xl">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="px-1">
        <h3 className="text-sm font-bold text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]">
          {data.title}
        </h3>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-xs font-medium text-gray-400 italic">1 {data.unit}</p>
          <p className="font-bold text-[#2C3E2D]">${data.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
