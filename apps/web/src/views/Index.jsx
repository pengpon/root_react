import { fetchAllProducts } from '@/api/products';
import { fetchArticles } from '@/api/articles';
import { useEffect, useMemo, useState, useRef } from 'react';

import { Spinner } from '@repo/ui';
import { logger } from '@repo/utils';
import ProductCard from '../components/ProductCard';
import ArticleCard from '../components/ArticleCard';

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [copied, setCopied] = useState(false);
  const promoCode = 'ROOT10';
  const timerRef = useRef(null);

  const seasonalProducts = useMemo(() => {
    if (!Array.isArray(allProducts)) {
      return [];
    }
    return allProducts.filter((item) => item.is_featured).slice(0, 4);
  }, [allProducts]);

  const latestArticles = useMemo(() => {
    if (!Array.isArray(allArticles)) return [];

    return allArticles
      .filter((article) => article.isPublic)
      .sort((a, b) => {
        return new Date(b.create_at).getTime() - new Date(a.create_at).getTime();
      })
      .slice(0, 3);
  }, [allArticles]);

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
    const init = async () => {
      try {
        setIsLoading(true);
        const [productsRes, articlesRes] = await Promise.all([fetchAllProducts(), fetchArticles()]);
        setAllProducts(productsRes.data.products || []);
        setAllArticles(articlesRes.data.articles || []);
      } catch (error) {
        logger.error(error.message, error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);

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

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="../src/assets/bright-oranges-cling-to-healthy-green-branches-of-orchard.jpg"
            className="h-full w-full object-cover opacity-80"
          />
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

          <button className="group mx-auto flex items-center gap-3 rounded-full bg-[#2C3E2D] px-10 py-4 font-bold text-[#F3EFDF] transition-all hover:bg-[#1a261b] hover:shadow-2xl active:scale-95">
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

          <div className="relative h-9 w-5 rounded-full border-2 border-white/30 backdrop-blur-[2px]">
            <div className="animate-scroll-dot absolute top-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white"></div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
          <div className="group space-y-4">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-12 w-12 text-(--color-brand-primary) transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <h3 className="text-secondary text-xl font-bold tracking-tight">Purely Traceable</h3>
            <p className="leading-relaxed text-(--color-content-muted)">
              From soil to table, every ingredient has a transparent story.
            </p>
          </div>

          <div className="group space-y-4">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-12 w-12 text-(--color-brand-primary) transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.456-2.454L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.454 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h3 className="text-secondary text-xl font-bold tracking-tight">Rooted Purity</h3>

            <p className="leading-relaxed text-(--color-content-muted)">
              No additives, just the raw nutrients and flavors of nature.
            </p>
          </div>

          <div className="group space-y-4">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-12 w-12 text-(--color-brand-primary) transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            <h3 className="text-secondary text-xl font-bold tracking-tight">Seasonal Peak</h3>
            <p className="leading-relaxed text-(--color-content-muted)">
              Grown by time, harvested at the peak of perfection.
            </p>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#2C3E2D] py-16 text-white">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
          <div className="mb-10 text-center md:mb-0 md:text-left">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#8C5E3C]"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#8C5E3C] uppercase">
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

            <button className="group flex items-center gap-3 rounded-full bg-[#8C5E3C] px-10 py-4 text-sm font-bold text-[#F3EFDF] transition-all hover:bg-[#a6724d] hover:shadow-xl active:scale-95">
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
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-secondary text-3xl font-bold tracking-tight md:text-4xl">
              Shop the Collection
            </h2>
            <p className="hidden text-(--color-content-muted) italic md:block">
              Handpicked from the earth, just for you.
            </p>
          </div>

          <div className="grid h-auto grid-cols-1 gap-6 md:h-162.5 md:grid-cols-3 md:grid-rows-2">
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-(--shadow-soft) md:col-span-2 md:row-span-2">
              <img
                src="../src/assets/fruit bundle-1.jpg"
                alt="Curated Bundles"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="from-secondary/60 absolute inset-0 flex items-end bg-linear-to-t via-transparent to-transparent p-10">
                <div>
                  <span className="mb-2 block text-xs font-bold tracking-widest text-(--color-brand-accent) uppercase">
                    Value Pack
                  </span>
                  <h3 className="text-3xl font-bold text-white md:text-4xl">Curated Bundles</h3>
                </div>
              </div>
            </div>

            <div className="group relative min-h-50 cursor-pointer overflow-hidden rounded-2xl shadow-(--shadow-soft)">
              <img
                src="../src/assets/broccoli-pieces-on-green-surface.jpg"
                alt="Vegetables"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
                <h3 className="text-xl font-bold tracking-wide text-white uppercase">Greens</h3>
              </div>
            </div>

            <div className="group relative min-h-50 cursor-pointer overflow-hidden rounded-2xl shadow-(--shadow-soft)">
              <img
                src="../src/assets/photo-1624821588855-a3ffb0b050ff.jpg"
                alt="Fruits"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
                <h3 className="text-xl font-bold tracking-wide text-white uppercase">Fruits</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F7F2] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[#8C5E3C]"></span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#8C5E3C] uppercase">
                  Fresh from the Soil
                </span>
              </div>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#2C3E2D] md:text-4xl">
                Seasonal Favorites
              </h2>
            </div>
            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-bold text-[#2C3E2D] transition-colors hover:text-[#8C5E3C]"
            >
              SHOP ALL PRODUCTS
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
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-10">
            {seasonalProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <ProductCard data={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[#8C5E3C]"></span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#8C5E3C] uppercase">
                  Thoughts & Perspectives
                </span>
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#2C3E2D] md:text-4xl">
                Root Journal
              </h2>
            </div>

            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-bold text-[#2C3E2D] uppercase transition-colors hover:text-[#8C5E3C]"
            >
              view all articles
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
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} data={article} />
            ))}
          </div>
        </div>
      </section>
      <section id="coupon-section" className="container mx-auto scroll-mt-20 px-4 py-32">
        <div className="relative flex flex-col items-center justify-around overflow-hidden rounded-4xl border-2 border-[#2C3E2D]/5 bg-[#F3EFDF] p-10 shadow-2xl md:flex-row md:p-16">
          <div className="absolute top-1/2 left-0 -ml-4 hidden h-16 w-8 -translate-y-1/2 rounded-r-full border-y-2 border-r-2 border-[#2C3E2D]/10 bg-white md:block"></div>
          <div className="absolute top-1/2 right-0 -mr-4 hidden h-16 w-8 -translate-y-1/2 rounded-l-full border-y-2 border-l-2 border-[#2C3E2D]/10 bg-white md:block"></div>

          <div className="relative z-10 mb-10 text-center md:mb-0 md:max-w-md md:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#8C5E3C]/10 px-4 py-1 text-[10px] font-bold tracking-[0.2em] text-[#8C5E3C] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8C5E3C] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8C5E3C]"></span>
              </span>
              Exclusive Welcome Gift
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-[#2C3E2D] md:text-5xl">
              A small taste of <span className="text-[#8C5E3C] italic">home.</span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-gray-600 md:text-base">
              We believe the purest flavors are meant to be shared. As a part of our community,
              enjoy <span className="font-bold text-[#2C3E2D]">10% off</span> your first harvest.
            </p>

            <div className="mt-8 hidden items-center gap-3 opacity-40 md:flex">
              <div className="flex h-14 w-14 rotate-12 items-center justify-center rounded-full border-2 border-dashed border-[#2C3E2D] text-[8px] font-bold">
                ROOTED
                <br />
                EST. 2024
              </div>
              <p className="text-[10px] tracking-widest uppercase">Verified Origin</p>
            </div>
          </div>

          <div className="mx-12 hidden h-40 border-l-2 border-dashed border-[#2C3E2D]/10 md:block"></div>
          <div className="my-8 w-full border-t-2 border-dashed border-[#2C3E2D]/10 md:hidden"></div>

          <div className="flex flex-col items-center">
            <div className="mb-6 text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
                Your Personal Code
              </span>
              <div className="mt-2 font-mono text-3xl font-black tracking-tighter text-[#2C3E2D]">
                ROOT10
              </div>
            </div>
            <button
              onClick={handleCopy}
              className={`group relative flex items-center gap-3 rounded-full px-12 py-5 font-bold text-white transition-all duration-300 active:scale-95 ${copied ? 'bg-[#8C5E3C] shadow-lg' : 'bg-[#2C3E2D] hover:shadow-2xl'} `}
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
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-stretch overflow-hidden rounded-[2.5rem] border border-[#2C3E2D]/5 bg-[#F3EFDF] shadow-xl md:flex-row">
            <div className="relative h-87.5 w-full overflow-hidden md:h-auto md:w-1/2">
              <img
                src="../src/assets/photo-1500382017468-9049fed747ef.jpg"
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

                <form className="flex flex-col gap-4">
                  <div className="group relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border-b-2 border-[#2C3E2D]/20 bg-transparent px-0 py-4 text-[#2C3E2D] transition-all duration-300 placeholder:text-gray-400 focus:border-[#2C3E2D] focus:outline-0 focus:outline-none"
                    />
                  </div>
                  <button className="mt-4 flex items-center gap-3 self-start rounded-full bg-[#2C3E2D] px-10 py-4 font-bold text-[#F3EFDF] shadow-lg shadow-[#2C3E2D]/20 transition-all hover:bg-[#3d563e] active:scale-95">
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

export default Index;
