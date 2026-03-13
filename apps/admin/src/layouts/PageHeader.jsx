import { useNavigate } from 'react-router';
import Breadcrumbs from '../components/Breadcrumbs';

function PageHeader({ title }) {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div>
        <Breadcrumbs />
        {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
      </div>
    </>
  );
}

export default PageHeader;
