import TableRow from './TableRow';

function ProductTable({ columns, data, onActionClick }) {
  return (
    <>
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-xs tracking-wider text-gray-500 uppercase">
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col" className="px-6 py-4 font-semibold">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm">
          {data.map((item) => (
            <TableRow key={item.id} columns={columns} data={item} onActionClick={onActionClick} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
