import { Link } from 'react-router';

function ArticleCard({ data }) {
  const formattedDate = (timestamp) => {
    const ms = timestamp < 10000000000 ? timestamp * 1000 : timestamp;
    return new Date(ms).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <>
      <article className="group relative cursor-pointer">
        <div className="relative mb-6 aspect-16/10 overflow-hidden rounded-3xl bg-white shadow-sm">
          <img
            src={data.imageUrl}
            alt="Article Cover"
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#2C3E2D] uppercase shadow-sm backdrop-blur-sm">
              {data.category}
            </span>
          </div>
        </div>

        <div className="px-2">
          <div className="mb-3 flex items-center gap-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
            <span>{formattedDate(data.create_at)}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
            <span>{data.readingTime} min read</span>
          </div>
          <h2 className="text-2xl leading-tight font-bold text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]">
            {data.title}
          </h2>
          {data.description && (
            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
              {data.description}
            </p>
          )}

          <div className="mt-6 flex items-center gap-2 text-xs font-bold tracking-widest text-[#2C3E2D] uppercase">
            <span>Read Story</span>
            <div className="h-px w-8 bg-[#2C3E2D] transition-all group-hover:w-12"></div>
          </div>
        </div>
        <Link
          to={`/post/${data.id}`}
          className="absolute inset-0 z-10"
          aria-label={`Read more about ${data.title}`}
        ></Link>
      </article>
    </>
  );
}

export default ArticleCard;
