function ProductList() {
  return (
    <>
      {' '}
      <section className="bg-[#FDFCF8] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <nav className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                <a href="#" className="hover:text-[#2C3E2D]">
                  Home
                </a>
                <span>/</span>
                <span className="text-[#8C5E3C]">Shop All</span>
              </nav>
              <h1 className="text-5xl font-bold tracking-tighter text-[#2C3E2D]">The Harvest.</h1>
            </div>

            <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2 md:pb-0">
              <button className="rounded-full bg-[#2C3E2D] px-6 py-2 text-xs font-bold whitespace-nowrap text-white shadow-lg">
                All Products
              </button>
              <button className="rounded-full border border-[#2C3E2D]/10 bg-white px-6 py-2 text-xs font-bold whitespace-nowrap text-[#2C3E2D] transition-all hover:border-[#2C3E2D]">
                Vegetables
              </button>
              <button className="rounded-full border border-[#2C3E2D]/10 bg-white px-6 py-2 text-xs font-bold whitespace-nowrap text-[#2C3E2D] transition-all hover:border-[#2C3E2D]">
                Fruit
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-10">
            <div className="group cursor-pointer">
              <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-2xl bg-white shadow-sm">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#8C5E3C] px-3 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
                  New
                </span>

                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                  alt="Product Name"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <button className="w-full rounded-xl bg-[#2C3E2D] py-3 text-xs font-bold text-white shadow-xl transition-all hover:bg-[#1a261b] active:scale-95">
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="px-1">
                <h3 className="text-sm font-bold text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]">
                  Seasonal Fresh Broccoli
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-400 italic">500g</p>
                  <p className="font-bold text-[#2C3E2D]">$80</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-2xl bg-white shadow-sm">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#8C5E3C] px-3 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
                  New
                </span>

                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                  alt="Product Name"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <button className="w-full rounded-xl bg-[#2C3E2D] py-3 text-xs font-bold text-white shadow-xl transition-all hover:bg-[#1a261b] active:scale-95">
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="px-1">
                <h3 className="text-sm font-bold text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]">
                  Seasonal Fresh Broccoli
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-400 italic">500g</p>
                  <p className="font-bold text-[#2C3E2D]">$80</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-2xl bg-white shadow-sm">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#8C5E3C] px-3 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
                  New
                </span>

                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                  alt="Product Name"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <button className="w-full rounded-xl bg-[#2C3E2D] py-3 text-xs font-bold text-white shadow-xl transition-all hover:bg-[#1a261b] active:scale-95">
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="px-1">
                <h3 className="text-sm font-bold text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]">
                  Seasonal Fresh Broccoli
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-400 italic">500g</p>
                  <p className="font-bold text-[#2C3E2D]">$80</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-2xl bg-white shadow-sm">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#8C5E3C] px-3 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
                  New
                </span>

                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                  alt="Product Name"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <button className="w-full rounded-xl bg-[#2C3E2D] py-3 text-xs font-bold text-white shadow-xl transition-all hover:bg-[#1a261b] active:scale-95">
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="px-1">
                <h3 className="text-sm font-bold text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]">
                  Seasonal Fresh Broccoli
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-400 italic">500g</p>
                  <p className="font-bold text-[#2C3E2D]">$80</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-2xl bg-white shadow-sm">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#8C5E3C] px-3 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
                  New
                </span>

                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                  alt="Product Name"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <button className="w-full rounded-xl bg-[#2C3E2D] py-3 text-xs font-bold text-white shadow-xl transition-all hover:bg-[#1a261b] active:scale-95">
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="px-1">
                <h3 className="text-sm font-bold text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]">
                  Seasonal Fresh Broccoli
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-400 italic">500g</p>
                  <p className="font-bold text-[#2C3E2D]">$80</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <button className="flex items-center gap-4 border-b-2 border-[#2C3E2D] pb-2 text-sm font-bold tracking-widest text-[#2C3E2D] transition-all hover:gap-6">
              LOAD MORE HARVEST
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductList;
