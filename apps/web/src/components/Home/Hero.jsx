import { GiftIcon } from '@repo/ui';
import bgImage from '../../assets/hero-bg.avif';

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
          <img src={bgImage} fetchPriority="high" className="h-full w-full object-cover opacity-80" alt='key-view' />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 px-4 text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-accent/40"></div>

            <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">
              Eat Real, Live Rooted
            </span>
            <div className="h-px w-8 bg-accent/40"></div>
          </div>

          <h1 className="mb-10 text-6xl leading-[0.9] font-extrabold tracking-tighter text-white md:text-8xl">
            Nature's Purest Gift.
          </h1>

          <button
            type="button"
            onClick={handleScroll}
            className="group mx-auto flex items-center gap-3 rounded-full bg-brand px-10 py-4 font-bold text-accent transition-all hover:bg-brand-dark hover:shadow-2xl active:scale-95"
          >
            <span>RECEIVE THE GIFT</span>
            <GiftIcon className="size-5 stroke-2 transition-transform group-hover:rotate-12" />
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
