import { PencilSquareIcon, TicketIcon, TrashIcon } from '@repo/ui';
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
        <PencilSquareIcon className="h-5 w-5 stroke-2" />
      </button>
      <button
        type="button"
        className="rounded-full p-2 text-gray-500 hover:bg-white hover:text-red-600"
        onClick={onActionClick}
        data-type="delete"
      >
        <TrashIcon className="h-5 w-5 stroke-2" />
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
                    <TicketIcon className="size-6 stroke-2" />
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
          // order
          if (col.key === 'user') {
            return (
              <td key={col.key} className="px-6 py-4 text-sm text-gray-500">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">{data.user.name}</span>
                  <span className="text-xs text-gray-400">{data.user.email}</span>
                </div>
              </td>
            );
          }
          if (col.key === 'is_paid') {
            return (
              <td key={col.key} className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    data.is_paid
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                      : 'bg-amber-50 text-amber-700 ring-amber-600/20'
                  }`}
                >
                  {data.is_paid ? (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Paid
                    </>
                  ) : (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Unpaid
                    </>
                  )}
                </span>
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
