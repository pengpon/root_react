function Footer() {
  return (
    <>
      <footer className="bg-[#2C3E2D] py-12 text-white/90 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <h2 className="mb-4 text-2xl font-bold tracking-tighter text-white">ROOT</h2>
              <p className="mb-6 hidden text-sm leading-relaxed text-white/60 italic md:block">
                Eat Real, Live Rooted.
                <br />
                Honoring the Earth’s generosity through whole, real food.
              </p>
              <p className="mb-4 text-xs text-white/50 italic md:hidden">Eat Real, Live Rooted.</p>

              <div className="flex gap-4 text-sm">
                <a href="#" className="transition-colors hover:text-[#8C5E3C]">
                  Instagram
                </a>
                <a href="#" className="transition-colors hover:text-[#8C5E3C]">
                  Facebook
                </a>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="mb-4 text-[10px] font-bold tracking-widest text-white uppercase md:mb-6 md:text-xs">
                Collections
              </h4>
              <ul className="space-y-3 text-sm text-white/60 md:space-y-4 md:text-white/90">
                <li>
                  <a href="#" className="inline-block transition-transform hover:translate-x-1">
                    <span className="hidden md:inline">Curated </span>Bundles
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block transition-transform hover:translate-x-1">
                    <span className="hidden text-white/40 md:inline">Earth's </span>Greens
                  </a>
                </li>
                <li className="hidden md:block">
                  <a href="#" className="inline-block transition-transform hover:translate-x-1">
                    Seasonal Fruits
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block transition-transform hover:translate-x-1">
                    <span className="md:hidden">Pins</span>
                    <span className="hidden md:inline">Little Harvests</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="mb-4 text-[10px] font-bold tracking-widest text-white uppercase md:mb-6 md:text-xs">
                About
              </h4>
              <ul className="space-y-3 text-sm text-white/60 md:space-y-4 md:text-white/90">
                <li>
                  <a href="#" className="inline-block transition-transform hover:translate-x-1">
                    Story
                  </a>
                </li>
                <li className="hidden md:block">
                  <a href="#" className="inline-block transition-transform hover:translate-x-1">
                    Traceability
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block transition-transform hover:translate-x-1">
                    Journal
                  </a>
                </li>
                <li className="hidden md:block">
                  <a href="#" className="inline-block transition-transform hover:translate-x-1">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 mt-4 md:col-span-1 md:mt-0">
              <h4 className="mb-4 text-[10px] font-bold tracking-widest text-white uppercase md:mb-6 md:text-xs">
                Stay Rooted
              </h4>
              <p className="mb-4 hidden text-sm text-white/60 md:block">
                Join our newsletter for seasonal harvest updates.
              </p>
              <div className="flex max-w-sm md:max-w-none">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-l-lg border border-white/20 bg-white/10 px-4 py-2 text-sm transition-colors focus:border-[#8C5E3C] focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-r-lg bg-[#8C5E3C] px-4 py-2 text-sm font-bold text-white transition-all hover:brightness-110"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[10px] text-white/40 md:flex-row md:text-xs">
            <p>
              © 2026 ROOT Concept Store.
              <span className="hidden md:inline">All rights reserved.</span>
            </p>
            <div className="flex gap-6 md:gap-8">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
