import { formatDate, formatDateTime } from '@repo/utils';

const ActionButtons = ({ onActionClick }) => {
  return (
    <>
      <button
        type="button"
        className="rounded-full p-2 text-gray-500 hover:bg-white hover:text-blue-600"
        onClick={onActionClick}
        data-type="edit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
      <button
        type="button"
        className="rounded-full p-2 text-gray-500 hover:bg-white hover:text-red-600"
        onClick={onActionClick}
        data-type="delete"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </>
  );
};

function TableRow({ columns, data, onActionClick }) {
  return (
    <>
      <tr className="transition hover:bg-gray-50">
        {columns.map((col) => {
          if (col.key === 'actions') {
            return (
              <td key={col.key} className="px-6 py-4 text-sm">
                <div className="flex space-x-2">
                  <ActionButtons
                    onActionClick={(e) => onActionClick(e.currentTarget.dataset.type, data.id)}
                  />
                </div>
              </td>
            );
          }
          // product
          if (col.key === 'summary') {
            return (
              <td key={col.key} className="flex items-center px-6 py-4 font-medium text-gray-800">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                  <img
                    src={data.imageUrl || 'https://placehold.co/300x300?text=Empty'}
                    alt="Product-Cover"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/300x300/9CAB84/FFF?text=Error';
                    }}
                  />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{data.title}</div>
                  <p className="line-clamp-1 w-48 truncate text-xs text-gray-400">
                    {data.description}
                  </p>
                </div>
              </td>
            );
          }

          if (col.key === 'is_enabled') {
            return (
              <td key={col.key} className="px-6 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    data.is_enabled
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                      : 'bg-amber-50 text-amber-700 ring-amber-600/20'
                  }`}
                >
                  {data.is_enabled ? 'Enabled' : 'Disabled'}
                </span>
              </td>
            );
          }

          if (col.key === 'price') {
            return (
              <td key={col.key} className="px-6 py-4">
                <div className="text-sm font-semibold text-gray-900">${data.price}</div>
                <div className="text-xs text-gray-400 lowercase">/ {data.unit}</div>
              </td>
            );
          }

          if (col.key === 'stock') {
            return (
              <td key={col.key} className="px-6 py-4">
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                  {data.stock !== undefined && data.stock !== null
                    ? `${data.stock} units`
                    : 'No stock info'}
                </span>
              </td>
            );
          }

          // coupon
          if (col.key === 'detail') {
            return (
              <td key={col.key} className="px-6 py-4">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">{data.title}</div>
                    <div className="font-mono text-xs text-blue-500 uppercase">{data.code}</div>
                  </div>
                </div>
              </td>
            );
          }

          if (col.key === 'percent') {
            return (
              <td key={col.key} className="px-6 py-4 font-medium text-gray-600">
                {100 - data.percent}% OFF
              </td>
            );
          }

          if (col.key === 'duration') {
            return (
              <td key={col.key} className="px-6 py-4 text-xs text-gray-500">
                {formatDateTime(data.start_date)} to <br />
                {formatDateTime(data.due_date)}
              </td>
            );
          }
          if (col.key === 'status') {
            const now = Date.now();
            const isActive =
              data.is_enabled === 1 && now >= data.start_date && now <= data.due_date;

            return (
              <td key={col.key} className="px-6 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                      : 'bg-gray-50 text-gray-600 ring-gray-500/10'
                  }`}
                >
                  <span
                    className={`mr-1.5 h-1.5 w-1.5 rounded-full ${isActive ? 'animate-pulse bg-emerald-500' : 'bg-gray-400'}`}
                  ></span>
                  {isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
            );
          }
          // article
          if (col.key === 'isPublic') {
            return (
              <td key={col.key} className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    data.isPublic
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                      : 'bg-amber-50 text-amber-700 ring-amber-600/20'
                  }`}
                >
                  {data.isPublic ? (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Public
                    </>
                  ) : (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Private
                    </>
                  )}
                </span>
              </td>
            );
          }
          if (col.key === 'create_at') {
            return (
              <td key={col.key} className="px-6 py-4 text-sm text-gray-500">
                {formatDate(data.create_at)}
              </td>
            );
          }

          return (
            <td key={col.key} className="px-6 py-4 text-sm text-gray-600">
              {' '}
              {data[col.key]}
            </td>
          );
        })}
      </tr>
    </>
  );
}

export default TableRow;
