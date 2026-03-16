import { useState } from 'react';

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
          <div className="flex flex-col items-stretch overflow-hidden rounded-[2.5rem] border border-[#2C3E2D]/5 bg-[#F3EFDF] shadow-xl md:flex-row">
            <div className="relative h-87.5 w-full overflow-hidden md:h-auto md:w-1/2">
              <img
                src="../src/assets/newsletter-cover.jpg"
                alt="Morning Farm"
                className="h-full w-full object-cover brightness-[0.95] contrast-[0.9] sepia-[0.2] filter"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#8C5E3C]/5 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-linear-to-r from-black/10 to-transparent"></div>
            </div>

            <div className="flex w-full flex-col justify-center p-10 md:w-1/2 md:p-20">
              <div className="max-w-md">
                <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-[#8C5E3C] uppercase">
                  The Rural Letter
                </span>
                <h2 className="mb-6 font-serif text-3xl leading-[1.1] font-normal text-[#2C3E2D] italic md:text-5xl">
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
                      className="w-full border-b-2 border-[#2C3E2D]/20 bg-transparent px-0 py-4 text-[#2C3E2D] transition-all duration-300 placeholder:text-gray-400 focus:border-[#2C3E2D] focus:outline-0 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 flex items-center gap-3 self-start rounded-full bg-[#2C3E2D] px-10 py-4 font-bold text-[#F3EFDF] shadow-lg shadow-[#2C3E2D]/20 transition-all hover:bg-[#3d563e] active:scale-95"
                  >
                    {isSubscribed ? (
                      'Thank you for joining!'
                    ) : (
                      <>
                        SUBSCRIBE
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
                <p className="mt-8 flex items-center gap-2 text-[11px] text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
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
