function ArticleList() {
  return (
    <>
      <section class="bg-[#FDFCF8] py-20">
        <div class="container mx-auto px-4">
          <div class="mb-20 text-center">
            <h3 class="mb-4 text-xs font-bold tracking-[0.4em] text-[#8C5E3C] uppercase">
              Our Stories
            </h3>
            <h1 class="text-5xl font-bold tracking-tighter text-[#2C3E2D] md:text-7xl">
              The Journal.
            </h1>
            <p class="mx-auto mt-6 max-w-lg text-gray-500 italic">
              Exploring the connection between soil, soul, and the rhythm of nature.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            <article class="group cursor-pointer">
              <div class="relative mb-6 aspect-16/10 overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=800"
                  alt="Article Cover"
                  class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div class="absolute top-4 left-4">
                  <span class="rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#2C3E2D] uppercase shadow-sm backdrop-blur-sm">
                    Farming
                  </span>
                </div>
              </div>

              <div class="px-2">
                <div class="mb-3 flex items-center gap-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  <span>March 12, 2024</span>
                  <span class="h-1 w-1 rounded-full bg-gray-300"></span>
                  <span>5 min read</span>
                </div>
                <h2 class="text-2xl leading-tight font-bold text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]">
                  Finding the Pause: Why We Harvest at Dawn
                </h2>
                <p class="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
                  The morning dew holds secrets that the afternoon sun forgets. Discover why the
                  timing of harvest changes everything...
                </p>
                <div class="mt-6 flex items-center gap-2 text-xs font-bold tracking-widest text-[#2C3E2D] uppercase">
                  <span>Read Story</span>
                  <div class="h-px w-8 bg-[#2C3E2D] transition-all group-hover:w-12"></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
export default ArticleList;
