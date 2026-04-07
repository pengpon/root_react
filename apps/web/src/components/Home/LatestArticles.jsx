import { Link } from 'react-router';
import ArticleCard from '../ArticleCard';
import { ArrowRightIcon } from '@repo/ui';

function LatestArticles({ data }) {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-secondary"></span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-secondary uppercase">
                  Thoughts & Perspectives
                </span>
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand md:text-4xl">
                Root Journal
              </h2>
            </div>

            <Link
              to="/posts"
              className="group flex items-center gap-2 text-sm font-bold text-brand uppercase transition-colors hover:text-secondary"
            >
              view all articles
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1 stroke-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.map((article) => (
              <ArticleCard key={article.id} data={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestArticles;
