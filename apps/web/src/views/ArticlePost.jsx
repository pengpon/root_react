import { Spinner } from '@repo/ui';
import { logger } from '@repo/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchArticle } from '../api/articles';
function ArticlePost() {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const params = useParams();
  const { id } = params;
  const formattedDate = (timestamp) => {
    const ms = timestamp < 10000000000 ? timestamp * 1000 : timestamp;
    return new Date(ms).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        const res = await fetchArticle(id);
        setArticle(res.data.article || {});
      } catch (error) {
        logger.error(error.message, error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, [id]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <article className="bg-surface-bright pb-24">
        <header className="relative h-[70vh] w-full overflow-hidden">
          <img src={article.imageUrl} alt={article.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="container mx-auto px-4">
              <span className="mb-4 inline-block text-xs font-bold tracking-[0.5em] text-white uppercase">
                Category: {article.category}
              </span>
              <h1 className="mx-auto text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:max-w-4xl">
                {article.title}
              </h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4">
          <div className="relative -mt-20 rounded-[3rem] bg-surface-bright p-8 shadow-sm md:p-20 lg:mx-auto lg:max-w-4xl">
            <div className="mb-12 flex flex-col items-center justify-between border-b border-brand/5 pb-12 md:flex-row">
              <div className="flex items-center gap-4">
                {/* <div className="h-12 w-12 overflow-hidden rounded-full bg-[#F3EFDF]">
                  <img
                    src=""
                    className="h-full w-full object-cover"
                  />
                </div> */}
                <div className="text-left">
                  <p className="text-xs font-bold tracking-wider text-brand uppercase">
                    Written by
                  </p>
                  <p className="text-sm font-medium text-secondary">{article.author}</p>
                </div>
              </div>
              <div className="mt-6 text-right md:mt-0">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  Updated on
                </p>
                <p className="text-sm font-medium text-brand">
                  {formattedDate(article.modified_at)}
                </p>
              </div>
            </div>

            <div className="prose prose-stone mx-auto max-w-none">
              <p className="text-xl leading-relaxed text-brand/80 first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:text-secondary">
                {article.description}
              </p>

              {/* <h2 className="mt-12 text-3xl font-bold text-[#2C3E2D]">The Dew Factor</h2> */}
              <p className="mt-6 text-lg leading-relaxed text-gray-600">{article.content}</p>

              {/* <blockquote className="my-16 border-l-4 border-[#8C5E3C] py-2 pl-8 italic">
                <p className="text-2xl font-medium text-[#2C3E2D]">
                  "To farm is to listen to the silence of the soil and wait for its reply."
                </p>
              </blockquote> */}

              {/* <p className="text-lg leading-relaxed text-gray-600">
                As we move through the seasons, we learn that the best things in life cannot be
                rushed. They require patience, observation, and respect for the cycle of the earth.
              </p> */}
            </div>

            {/* <div className="mt-16 flex flex-wrap gap-2 border-t border-[#2C3E2D]/5 pt-8">
              <span className="mr-4 text-xs font-bold tracking-widest text-[#8C5E3C] uppercase">
                Tags:
              </span>
              <a href="#" className="text-xs font-medium text-gray-500 hover:text-[#2C3E2D]">
                #Sustainable
              </a>
              <a href="#" className="text-xs font-medium text-gray-500 hover:text-[#2C3E2D]">
                #Harvesting
              </a>
              <a href="#" className="text-xs font-medium text-gray-500 hover:text-[#2C3E2D]">
                #SlowLiving
              </a>
            </div> */}
          </div>
        </div>
      </article>
    </>
  );
}
export default ArticlePost;
