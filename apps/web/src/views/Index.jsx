import { fetchArticles } from '@/api/articles';
import { fetchAllProducts } from '@/api/products';
import { Spinner } from '@repo/ui';
import { logger } from '@repo/utils';
import { useEffect, useMemo, useState } from 'react';
import Collections from '../components/Home/Collections';
import CountdownSection from '../components/Home/CountdownSection';
import CouponCard from '../components/Home/CouponCard';
import Features from '../components/Home/Features';
import Hero from '../components/Home/Hero';
import LatestArticles from '../components/Home/LatestArticles';
import Newsletter from '../components/Home/Newsletter';
import SeasonalProducts from '../components/Home/SeasonalProducts';

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [allArticles, setAllArticles] = useState([]);

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

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <Hero />
      <Features />
      <CountdownSection />
      <Collections />
      <SeasonalProducts data={seasonalProducts} />
      <LatestArticles data={latestArticles} />
      <CouponCard />
      <Newsletter />
    </>
  );
}

export default Index;
