import ArticleCard from "../ArticleCard";

function LatestArticles({data}) {
  return (
    <>
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
