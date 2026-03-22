import { useEffect, useRef, useState } from 'react';

function CouponCard() {
  const [copied, setCopied] = useState(false);
  const promoCode = 'ROOT10';
  const timerRef = useRef(null);

  const handleCopy = async () => {
    try {
      if (timerRef.current) clearTimeout(timerRef.current);
      await navigator.clipboard.writeText(promoCode);
      setCopied(true);

      timerRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return (
    <>
      <section id="coupon-section" className="container mx-auto scroll-mt-20 px-4 py-32">
        <div className="relative flex flex-col items-center justify-around overflow-hidden rounded-4xl border-2 border-brand/5 bg-accent p-10 shadow-2xl md:flex-row md:p-16">
          <div className="absolute top-1/2 left-0 -ml-4 hidden h-16 w-8 -translate-y-1/2 rounded-r-full border-y-2 border-r-2 border-brand/10 bg-white md:block"></div>
          <div className="absolute top-1/2 right-0 -mr-4 hidden h-16 w-8 -translate-y-1/2 rounded-l-full border-y-2 border-l-2 border-brand/10 bg-white md:block"></div>

          <div className="relative z-10 mb-10 text-center md:mb-0 md:max-w-md md:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1 text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
              </span>
              Exclusive Welcome Gift
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-brand md:text-5xl">
              A small taste of <span className="text-secondary italic">home.</span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-gray-600 md:text-base">
              We believe the purest flavors are meant to be shared. As a part of our community,
              enjoy <span className="font-bold text-brand">10% off</span> your first harvest.
            </p>

            <div className="mt-8 hidden items-center gap-3 opacity-40 md:flex">
              <div className="flex h-14 w-14 rotate-12 items-center justify-center rounded-full border-2 border-dashed border-brand text-[8px] font-bold">
                ROOTED
                <br />
                EST. 2024
              </div>
              <p className="text-[10px] tracking-widest uppercase">Verified Origin</p>
            </div>
          </div>

          <div className="mx-12 hidden h-40 border-l-2 border-dashed border-brand/10 md:block"></div>
          <div className="my-8 w-full border-t-2 border-dashed border-brand/10 md:hidden"></div>

          <div className="flex flex-col items-center">
            <div className="mb-6 text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
                Your Personal Code
              </span>
              <div className="mt-2 font-mono text-3xl font-black tracking-tighter text-brand">
                ROOT10
              </div>
            </div>
            <button
              onClick={handleCopy}
              className={`group relative flex items-center gap-3 rounded-full px-12 py-5 font-bold text-white transition-all duration-300 active:scale-95 ${copied ? 'bg-secondary shadow-lg' : 'bg-brand hover:shadow-2xl'} `}
            >
              <span className="relative">{copied ? 'COPIED!' : 'COPY CODE'}</span>

              <div className="relative flex items-center justify-center">
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="animate-in zoom-in fade-in size-5 duration-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5 opacity-70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                    />
                  </svg>
                )}
              </div>
            </button>
            <p className="mt-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
              * Valid for first order only
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CouponCard;
