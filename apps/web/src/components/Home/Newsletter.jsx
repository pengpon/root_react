import { useState } from 'react';
import coverImage from '../../assets/newsletter-cover.avif'
import { ArrowRightIcon, CheckCircleIcon } from '@repo/ui';
function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('is_subscribed') === 'true';
    }
    return false;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();

    setIsSubscribed(true);
    localStorage.setItem('is_subscribed', 'true');
  };

  return (
    <>
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-stretch overflow-hidden rounded-[2.5rem] border border-brand/5 bg-accent shadow-xl md:flex-row">
            <div className="relative h-87.5 w-full overflow-hidden md:h-auto md:w-1/2">
              <img
                src={coverImage}
                alt="Morning Farm"
                className="h-full w-full object-cover brightness-[0.95] contrast-[0.9] sepia-[0.2] filter"
              />
              <div className="pointer-events-none absolute inset-0 bg-secondary/5 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-linear-to-r from-black/10 to-transparent"></div>
            </div>

            <div className="flex w-full flex-col justify-center p-10 md:w-1/2 md:p-20">
              <div className="max-w-md">
                <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-secondary uppercase">
                  The Rural Letter
                </span>
                <h2 className="mb-6 font-serif text-3xl leading-[1.1] font-normal text-brand italic md:text-5xl">
                  Live Rooted
                </h2>
                <p className="mb-10 text-sm leading-relaxed text-gray-600 md:text-base">
                  Every Sunday, we share stories from the soil, seasonal planting guides, and a list
                  of what's peaking in our harvest.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                  <div className="group relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full border-b-2 border-brand/20 bg-transparent px-0 py-4 text-brand transition-all duration-300 placeholder:text-gray-400 focus:border-brand focus:outline-0 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 flex items-center gap-3 self-start rounded-full bg-brand px-10 py-4 font-bold text-accent shadow-lg shadow-brand/20 transition-all hover:bg-brand-muted active:scale-95"
                  >
                    {isSubscribed ? (
                      'Thank you for joining!'
                    ) : (
                      <>
                        SUBSCRIBE
                        <ArrowRightIcon className="size-4 stroke-2" />
                      </>
                    )}
                  </button>
                </form>
                <p className="mt-8 flex items-center gap-2 text-[11px] text-gray-400">
                  <CheckCircleIcon className="size-3" />
                  Respecting your privacy as we respect the land.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
