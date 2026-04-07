import { CheckIcon } from '@repo/ui';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Footer() {
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();

    setIsJoined(true);
    setEmail('');
  };

  useEffect(() => {
    let timer;
    if (isJoined) {
      timer = setTimeout(() => {
        setIsJoined(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isJoined]);

  return (
    <>
      <footer className="bg-brand py-12 text-white/90 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <p className="mb-4 text-2xl font-bold tracking-tighter text-white">ROOT</p>
              <p className="mb-6 hidden text-sm leading-relaxed text-white/60 italic md:block">
                Eat Real, Live Rooted.
                <br />
                Honoring the Earth’s generosity through whole, real food.
              </p>
              <p className="mb-4 text-xs text-white/50 italic md:hidden">Eat Real, Live Rooted.</p>
            </div>

            <div className="col-span-1">
              <p className="mb-4 text-[10px] font-bold tracking-widest text-white uppercase md:mb-6 md:text-xs">
                Collections
              </p>
              <ul className="space-y-3 text-sm text-white/60 md:space-y-4 md:text-white/90">
                <li>
                  <Link
                    to="/products"
                    className="inline-block transition-transform hover:translate-x-1"
                  >
                    <span className="hidden md:inline">Curated </span>Bundles
                  </Link>
                </li>
                <li>
                  <Link
                    to={{ pathname: '/products' }}
                    state={{ activeCategory: 'Vegetable' }}
                    className="inline-block transition-transform hover:translate-x-1"
                  >
                    <span className="hidden md:inline">Earth's </span>Greens
                  </Link>
                </li>
                <li>
                  <Link
                    to={{ pathname: '/products' }}
                    state={{ activeCategory: 'Fruit' }}
                    className="inline-block transition-transform hover:translate-x-1"
                  >
                    <span className="hidden md:inline">Seasonal </span>Fruits
                  </Link>
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubscribe}>
              <div className="col-span-2 mt-4 md:col-span-1 md:mt-0">
                <p className="mb-4 text-[10px] font-bold tracking-widest text-white uppercase md:mb-6 md:text-xs">
                  Stay Rooted
                </p>
                <p className="mb-4 hidden text-sm text-white/60 md:block">
                  Join our newsletter for seasonal harvest updates.
                </p>
                <div className="flex max-w-sm md:max-w-none">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    autoComplete="email"
                    className="focus:border-secondary w-full rounded-l-lg border border-white/20 bg-white/10 px-4 py-2 text-sm transition-colors focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isJoined}
                    className={`min-w-20 rounded-r-lg px-4 py-2 text-sm font-bold text-white transition-all ${
                      isJoined
                        ? 'bg-brand-muted animate-pop cursor-default opacity-90'
                        : 'bg-secondary cursor-pointer hover:brightness-110 active:scale-100'
                    } `}
                  >
                    {isJoined ? (
                      <span className="flex items-center justify-center gap-1">
                        <CheckIcon className="size-4 shrink-0 stroke-3" />
                        Joined
                      </span>
                    ) : (
                      'Join'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[10px] text-white/40 md:flex-row md:text-xs">
            <p>
              © 2026 ROOT Concept Store.
              <span className="hidden md:inline">All rights reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
