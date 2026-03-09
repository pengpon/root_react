function ArticlePost() {
  return (
    <>
      <article className="bg-[#FDFCF8] pb-24">
        <header className="relative h-[70vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=1600"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="container mx-auto px-4">
              <span className="mb-4 inline-block text-xs font-bold tracking-[0.5em] text-white uppercase">
                Category: Farming
              </span>
              <h1 className="mx-auto text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:max-w-4xl">
                Finding the Pause: Why We Harvest at Dawn
              </h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4">
          <div className="relative -mt-20 rounded-[3rem] bg-[#FDFCF8] p-8 shadow-sm md:p-20 lg:mx-auto lg:max-w-4xl">
            <div className="mb-12 flex flex-col items-center justify-between border-b border-[#2C3E2D]/5 pb-12 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-[#F3EFDF]">
                  <img src="https://i.pravatar.cc/150?u=root" className="h-full w-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold tracking-wider text-[#2C3E2D] uppercase">
                    Written by
                  </p>
                  <p className="text-sm font-medium text-[#8C5E3C]">Elias Thorne, Head Farmer</p>
                </div>
              </div>
              <div className="mt-6 text-right md:mt-0">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  Published in
                </p>
                <p className="text-sm font-medium text-[#2C3E2D]">Spring Edition, 2024</p>
              </div>
            </div>

            <div className="prose prose-stone mx-auto max-w-none">
              <p className="text-xl leading-relaxed text-[#2C3E2D]/80 first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:text-[#8C5E3C]">
                There is a specific stillness that exists only at 5:00 AM. It is a moment where the
                earth seems to hold its breath. At ROOT, this is when our day begins.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-[#2C3E2D]">The Dew Factor</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Moisture is the lifeblood of taste. When we harvest before the first heat of the
                sun, the cellular structure of our greens remains firm and hydrated. This isn't just
                science; it's a commitment to the "Purest Gift."
              </p>

              <blockquote className="my-16 border-l-4 border-[#8C5E3C] py-2 pl-8 italic">
                <p className="text-2xl font-medium text-[#2C3E2D]">
                  "To farm is to listen to the silence of the soil and wait for its reply."
                </p>
              </blockquote>

              <p className="text-lg leading-relaxed text-gray-600">
                As we move through the seasons, we learn that the best things in life cannot be
                rushed. They require patience, observation, and respect for the cycle of the earth.
              </p>
            </div>

            <div className="mt-16 flex flex-wrap gap-2 border-t border-[#2C3E2D]/5 pt-8">
              <span className="mr-4 text-xs font-bold tracking-widest text-[#8C5E3C] uppercase">
                Tags:
              </span>
              <a href="#" className="text-xs font-medium text-gray-500 hover:text-[#2C3E2D]">
                #Sustainable
              </a>
              <a href="#" className="text-xs font-medium text-gray-500 hover:text-[#2C3E2D]">
                #Harvesting
              </a>
              <a href="#" className="text-xs font-medium text-gray-500 hover:text-[#2C3E2D]">
                #SlowLiving
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
export default ArticlePost;
