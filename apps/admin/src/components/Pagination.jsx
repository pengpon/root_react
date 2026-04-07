import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@repo/ui';

function Pagination({ pagination, onChange, range = 3 }) {
  const { current, total } = pagination;
  let pagesArr = [];

  const generateArr = (n, m) => Array.from({ length: m - n + 1 }, (_, i) => n + i);

  const handleOnChange = (e) => {
    let { page } = e.target.closest('button').dataset;
    page = Number(page);
    if (page) onChange(page);
  };

  const getPagesArr = () => {
    let arr = [];
    if (total <= range + 2) return generateArr(1, total);

    let start = current - Math.floor(range / 2);
    let end = current + Math.floor(range / 2);

    if (start < 2) {
      start = 2;
      end = 2 + range - 1;
    }
    if (end - total >= 0) {
      end = total - 1;
      start = end - range + 1;
    }

    arr = generateArr(start, end);
    if (arr[0] > 2) arr[0] = 'more'; // left more
    if (total - arr[arr.length - 1] > 1) arr[arr.length - 1] = 'more'; // right more
    return [1, ...arr, total];
  };

  pagesArr = getPagesArr();
  return (
    <>
      <div className="my-6" onClick={handleOnChange}>
        <div className="flex justify-center gap-2">
          <button
            type="button"
            disabled={current === 1}
            data-page={1}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          {pagesArr.map((page, index) => (
            <button
              type="button"
              key={index}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400 ${page === current ? `bg-gray-600 text-white hover:bg-gray-600` : ''} ${page === 'more' ? `cursor-text bg-transparent hover:bg-transparent` : ''}`}
              data-page={page}
            >
              {page === 'more' ? <EllipsisHorizontalIcon className="size-6" /> : page}
            </button>
          ))}

          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400"
            disabled={current === total}
            data-page={total}
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
