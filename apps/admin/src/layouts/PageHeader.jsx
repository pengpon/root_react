import { ArrowLeftIcon } from '@repo/ui';
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
        <ArrowLeftIcon className="size-5 stroke-2" />
      </button>
      <div>
        <Breadcrumbs />
        {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
      </div>
    </>
  );
}

export default PageHeader;
