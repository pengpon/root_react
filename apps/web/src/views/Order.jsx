import { addThousandsSeparator } from '@repo/utils';

const orders = [
  {
    id: 'ORD-2026031701',
    date: 'March 17, 2026',
    status: 'Processing',
    total: 215,
    items: [
      { name: 'Organic Green Tea', qty: 2, image: '/images/tea.jpg' },
      { name: 'Wooden Spoon Set', qty: 1, image: '/images/spoon.jpg' },
    ],
  },
];

function Order() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-brand">Your Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="transition-hover overflow-hidden rounded-2xl border border-brand/5 bg-white shadow-sm hover:shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand/5 bg-surface-bright px-6 py-4">
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    Order Placed
                  </p>
                  <p className="text-sm font-medium text-brand">{order.date}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    Total Amount
                  </p>
                  <p className="text-sm font-bold text-brand">
                    $ {addThousandsSeparator(order.total)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  Order ID
                </p>
                <p className="font-mono text-sm text-brand">{order.id}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                  ● {order.status}
                </span>
                <button className="text-xs font-bold text-secondary hover:underline">
                  View Details
                </button>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex shrink-0 items-center gap-3">
                    <div className="size-16 overflow-hidden rounded-xl border border-gray-100 bg-gray-100 object-cover">
                      <img src={item.image} alt={item.name} className="size-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand">{item.name}</p>
                      <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
