function Footer() {
  return (
    <>
      <footer class="bg-[#2C3E2D] py-12 text-white/90 md:py-16">
        <div class="container mx-auto px-4">
          <div class="mb-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-12">
            <div class="col-span-2 md:col-span-1">
              <h2 class="mb-4 text-2xl font-bold tracking-tighter text-white">ROOT</h2>
              <p class="mb-6 hidden text-sm leading-relaxed text-white/60 italic md:block">
                Eat Real, Live Rooted.
                <br />
                Honoring the Earth’s generosity through whole, real food.
              </p>
              <p class="mb-4 text-xs text-white/50 italic md:hidden">Eat Real, Live Rooted.</p>

              <div class="flex gap-4 text-sm">
                <a href="#" class="transition-colors hover:text-[#8C5E3C]">
                  Instagram
                </a>
                <a href="#" class="transition-colors hover:text-[#8C5E3C]">
                  Facebook
                </a>
              </div>
            </div>

            <div class="col-span-1">
              <h4 class="mb-4 text-[10px] font-bold tracking-widest text-white uppercase md:mb-6 md:text-xs">
                Collections
              </h4>
              <ul class="space-y-3 text-sm text-white/60 md:space-y-4 md:text-white/90">
                <li>
                  <a href="#" class="inline-block transition-transform hover:translate-x-1">
                    <span class="hidden md:inline">Curated </span>Bundles
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-block transition-transform hover:translate-x-1">
                    <span class="hidden text-white/40 md:inline">Earth's </span>Greens
                  </a>
                </li>
                <li class="hidden md:block">
                  <a href="#" class="inline-block transition-transform hover:translate-x-1">
                    Seasonal Fruits
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-block transition-transform hover:translate-x-1">
                    <span class="md:hidden">Pins</span>
                    <span class="hidden md:inline">Little Harvests</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-span-1">
              <h4 class="mb-4 text-[10px] font-bold tracking-widest text-white uppercase md:mb-6 md:text-xs">
                About
              </h4>
              <ul class="space-y-3 text-sm text-white/60 md:space-y-4 md:text-white/90">
                <li>
                  <a href="#" class="inline-block transition-transform hover:translate-x-1">
                    Story
                  </a>
                </li>
                <li class="hidden md:block">
                  <a href="#" class="inline-block transition-transform hover:translate-x-1">
                    Traceability
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-block transition-transform hover:translate-x-1">
                    Journal
                  </a>
                </li>
                <li class="hidden md:block">
                  <a href="#" class="inline-block transition-transform hover:translate-x-1">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-span-2 mt-4 md:col-span-1 md:mt-0">
              <h4 class="mb-4 text-[10px] font-bold tracking-widest text-white uppercase md:mb-6 md:text-xs">
                Stay Rooted
              </h4>
              <p class="mb-4 hidden text-sm text-white/60 md:block">
                Join our newsletter for seasonal harvest updates.
              </p>
              <div class="flex max-w-sm md:max-w-none">
                <input
                  type="email"
                  placeholder="Email address"
                  class="w-full rounded-l-lg border border-white/20 bg-white/10 px-4 py-2 text-sm transition-colors focus:border-[#8C5E3C] focus:outline-none"
                />
                <button class="rounded-r-lg bg-[#8C5E3C] px-4 py-2 text-sm font-bold text-white transition-all hover:brightness-110">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[10px] text-white/40 md:flex-row md:text-xs">
            <p>
              © 2026 ROOT Concept Store.
              <span class="hidden md:inline">All rights reserved.</span>
            </p>
            <div class="flex gap-6 md:gap-8">
              <a href="#" class="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" class="transition-colors hover:text-white">
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
