import { Spinner } from '@repo/ui';
import { addThousandsSeparator, formatDateTime, logger } from '@repo/utils';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { fetchOrder } from '../api/order';

function Order() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        const res = await fetchOrder(id);
        setOrder(res.data.order || {});
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
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-brand mb-8 text-3xl font-bold">Order Info.</h1>
        <div className="space-y-6">
          {order && (
            <div
              key={order.id}
              className="transition-hover border-brand/5 overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md"
            >
              <div className="border-brand/5 bg-surface-bright flex flex-wrap items-center justify-between gap-4 border-b px-6 py-4">
                <div className="flex gap-8">
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                      Order Placed
                    </p>
                    <p className="text-brand text-sm font-medium">
                      {formatDateTime(order?.create_at)}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                      Total Amount
                    </p>
                    <p className="text-brand text-sm font-bold">
                      $ {addThousandsSeparator(Math.ceil(order?.total) || 0)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    Order ID
                  </p>
                  <p className="text-brand font-mono text-sm">{order.id}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      order.is_paid
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-amber-50 text-amber-600'
                    }`}
                  >
                    ● {order.is_paid ? 'Paid' : 'Unpaid'}
                  </span>
                  {!order.is_paid && (
                    <button
                      onClick={() => navigate(`/payment/${order.id}`)}
                      className="bg-brand hover:bg-brand-dark rounded-xl px-6 py-2 text-xs font-bold text-white shadow-md transition-all hover:-translate-y-0.5"
                    >
                      Pay Now
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  {Object.values(order?.products || {}).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 border-b border-gray-50 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-100">
                        <img
                          src={item?.product?.imageUrl}
                          alt={item?.product?.title}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-brand text-sm font-bold">{item?.product?.title}</p>
                        <p className="text-xs text-gray-400">Quantity: {item?.qty}</p>
                      </div>
                      <p className="text-brand text-sm font-medium">
                        $ {addThousandsSeparator(item?.final_total || 0)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Order;
