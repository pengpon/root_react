function ProductItem() {
  return (
    <>
      <section class="bg-[#FDFCF8] py-12 md:py-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-col gap-12 lg:flex-row lg:gap-20">
            <div class="w-full lg:w-3/5">
              <div class="relative aspect-4/5 overflow-hidden rounded-4xl bg-white shadow-sm">
                <span class="absolute top-6 left-6 z-10 rounded-full bg-[#8C5E3C] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg">
                  New
                </span>
                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                  alt="Product Main Image"
                  class="h-full w-full object-cover"
                />
              </div>

              <div class="mt-6 grid grid-cols-4 gap-4">
                <div class="aspect-square cursor-pointer overflow-hidden rounded-xl border-2 border-[#2C3E2D] ring-offset-2 transition-all">
                  <img
                    src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="aspect-square cursor-pointer overflow-hidden rounded-xl border-transparent opacity-60 transition-all hover:opacity-100">
                  <img
                    src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1767868606069.jpg"
                    class="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div class="flex w-full flex-col lg:w-2/5">
              <nav class="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-[#8C5E3C] uppercase">
                <a href="#" class="hover:underline">
                  Shop
                </a>
                <span>/</span>
                <span>Vegetables</span>
              </nav>

              <h1 class="text-4xl font-bold tracking-tight text-[#2C3E2D] md:text-5xl">
                Seasonal Fresh Broccoli
              </h1>

              <div class="mt-6 flex items-baseline gap-4">
                <span class="text-3xl font-black tracking-tighter text-[#2C3E2D]">$80</span>
                <span class="text-lg text-gray-400 line-through opacity-60">$120</span>
              </div>

              <div class="my-8 h-px w-full bg-[#2C3E2D]/10"></div>

              <div class="space-y-4">
                <h3 class="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Description
                </h3>
                <p class="text-base leading-relaxed text-gray-600">
                  Hand-picked from our sustainable farms, this seasonal broccoli captures the
                  essence of the morning dew. Rich in antioxidants and minerals, it's a testament to
                  nature's purity.
                </p>
              </div>

              <div class="mt-8 flex flex-wrap gap-2">
                <span class="rounded-lg bg-[#F3EFDF] px-3 py-1 text-[10px] font-bold tracking-wider text-[#2C3E2D] uppercase">
                  Organic Certified
                </span>
                <span class="rounded-lg bg-[#F3EFDF] px-3 py-1 text-[10px] font-bold tracking-wider text-[#2C3E2D] uppercase">
                  Zero Pesticides
                </span>
              </div>

              <div class="mt-12 space-y-4">
                <div class="flex items-center gap-4">
                  <div class="flex items-center rounded-xl border border-[#2C3E2D]/10 bg-white p-1">
                    <button class="flex h-12 w-12 items-center justify-center rounded-lg text-[#2C3E2D] transition-colors hover:bg-[#F3EFDF]">
                      -
                    </button>
                    <input
                      type="number"
                      value="1"
                      class="w-12 bg-transparent text-center font-bold text-[#2C3E2D] focus:outline-none"
                    />
                    <button class="flex h-12 w-12 items-center justify-center rounded-lg text-[#2C3E2D] transition-colors hover:bg-[#F3EFDF]">
                      +
                    </button>
                  </div>

                  <button class="flex-1 rounded-xl bg-[#2C3E2D] py-4 text-sm font-bold tracking-widest text-white shadow-2xl transition-all hover:bg-[#1a261b] hover:shadow-[#2C3E2D]/20 active:scale-95">
                    ADD TO BASKET
                  </button>
                </div>

                <button class="w-full rounded-xl border-2 border-[#2C3E2D] py-4 text-sm font-bold tracking-widest text-[#2C3E2D] transition-all hover:bg-[#2C3E2D] hover:text-white">
                  BUY IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductItem;
