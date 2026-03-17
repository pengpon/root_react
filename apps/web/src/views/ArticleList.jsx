import { Spinner } from '@repo/ui';
import { logger } from '@repo/utils';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../api/articles';
import ArticleCard from '../components/ArticleCard';

function ArticleList() {
  const [isLoading, setIsLoading] = useState(true);
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        const res = await fetchArticles();
        setAllArticles(res.data.articles || []);
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
      <section className="bg-[#FDFCF8] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h3 className="mb-4 text-xs font-bold tracking-[0.4em] text-[#8C5E3C] uppercase">
              Our Stories
            </h3>
            <h1 className="text-5xl font-bold tracking-tighter text-[#2C3E2D] md:text-7xl">
              The Journal.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-gray-500 italic">
              Exploring the connection between soil, soul, and the rhythm of nature.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {allArticles.map((article) => (
              <ArticleCard key={article.id} data={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default ArticleList;
