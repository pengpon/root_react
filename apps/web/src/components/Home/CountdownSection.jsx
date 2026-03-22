import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);

      const diff = midnight.getTime() - now.getTime();

      if (diff > 0) {
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          hours: h.toString().padStart(2, '0'),
          minutes: m.toString().padStart(2, '0'),
          seconds: s.toString().padStart(2, '0'),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <section className="relative overflow-hidden bg-brand py-16 text-white">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
          <div className="mb-10 text-center md:mb-0 md:text-left">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-secondary"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-secondary uppercase">
                Limited Harvest
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Organic Heirloom Roots
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Seasonal Offer: <span className="text-lg font-bold text-white">20% OFF</span>. <br />
              Experience pure flavor, captured exactly at its peak.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:items-end">
            <div className="flex gap-4">
              <div className="min-w-17.5 rounded-xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-md">
                <span className="block font-mono text-2xl font-bold">{timeLeft.hours}</span>
                <span className="text-[9px] tracking-widest uppercase opacity-50">Hours</span>
              </div>
              <div className="min-w-17.5 rounded-xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-md">
                <span className="block font-mono text-2xl font-bold">{timeLeft.minutes}</span>
                <span className="text-[9px] tracking-widest uppercase opacity-50">Mins</span>
              </div>
              <div className="min-w-17.5 rounded-xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-md">
                <span
                  key={timeLeft.seconds}
                  className="animate-pop block font-mono text-2xl font-bold"
                >
                  {timeLeft.seconds}
                </span>
                <span className="text-[9px] tracking-widest uppercase opacity-50">Secs</span>
              </div>
            </div>

            <Link to="/products" className="group flex items-center gap-3 rounded-full bg-secondary px-10 py-4 text-sm font-bold text-accent transition-all hover:bg-secondary-light hover:shadow-xl active:scale-95">
              SHOP THE HARVEST
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-4 transition-transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CountdownSection;
