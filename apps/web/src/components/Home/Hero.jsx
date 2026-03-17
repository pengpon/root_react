import bgImage from '../../assets/hero-bg.jpg';

function Hero() {
  const handleScroll = () => {
    const element = document.getElementById('coupon-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 px-4 text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-[#F3EFDF]/40"></div>
            <span className="text-xs font-bold tracking-[0.3em] text-[#F3EFDF] uppercase">
              Eat Real, Live Rooted
            </span>
            <div className="h-px w-8 bg-[#F3EFDF]/40"></div>
          </div>

          <h1 className="mb-10 text-6xl leading-[0.9] font-extrabold tracking-tighter text-white md:text-8xl">
            Nature's Purest Gift.
          </h1>

          <button
            type="button"
            onClick={handleScroll}
            className="group mx-auto flex items-center gap-3 rounded-full bg-[#2C3E2D] px-10 py-4 font-bold text-[#F3EFDF] transition-all hover:bg-[#1a261b] hover:shadow-2xl active:scale-95"
          >
            <span>RECEIVE THE GIFT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5 transition-transform group-hover:rotate-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] font-extrabold tracking-[0.5em] text-white/70 uppercase drop-shadow-md">
            Scroll
          </span>

          <div className="relative flex h-9 w-5 justify-center rounded-full border-2 border-white/30 backdrop-blur-[2px]">
            <div className="animate-scroll-dot mt-2 h-1.5 w-1.5 rounded-full bg-white"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
