import { fetchArticles } from '@/api/articles';
import { fetchCoupons } from '@/api/coupons';
import { fetchProducts } from '@/api/products';
import { Spinner } from '@repo/ui';
import { logger } from '@repo/utils';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    products: 0,
    coupons: 0,
    articles: 0,
  });
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [activeCouponsCount, setActiveCouponsCount] = useState(0);

  const getActiveCouponsCount = (coupons = []) => {
    const now = Date.now();
    return coupons.filter(
      (coupon) => coupon.is_enabled === 1 && now >= coupon.start_date && now <= coupon.due_date,
    ).length;
  };

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        const [productsRes, couponsRes, articlesRes] = await Promise.all([
          fetchProducts(),
          fetchCoupons(),
          fetchArticles(),
        ]);

        setStats({
          products: productsRes.data?.products?.length || 0,
          coupons: couponsRes.data?.coupons?.length || 0,
          articles: articlesRes.data?.articles?.length || 0,
        });
        const lowStock = productsRes.data.products.filter((p) => p.stock < 5);
        setLowStockProducts(lowStock);

        setActiveCouponsCount(getActiveCouponsCount(couponsRes.data.coupons));
      } catch (error) {
        logger.error(error.message, error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <section className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase">Total Products</p>
                <p className="mt-1 text-3xl font-bold text-gray-800">{stats.products}</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
                    clipRule="evenodd"
                  />
                  <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-red-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div>
              <p className="text-sm font-medium tracking-wider text-red-500 uppercase">Low Stock</p>
              <p className="mt-1 text-3xl font-bold text-gray-800">{lowStockProducts.length}</p>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <span>Threshold: Less than 5 units</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase">Active Coupons</p>
                <p className="mt-1 text-3xl font-bold text-gray-800">{activeCouponsCount}</p>
              </div>
              <div className="rounded-lg bg-amber-100 p-3 text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2 flex gap-1.5 text-xs text-gray-400">
              <div className="size-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </div>

              <span>
                Currently <span className="font-semibold">Enabled</span> and within the{' '}
                <span className="font-semibold">Valid Date</span> range.
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase">Articles</p>
                <p className="mt-1 text-3xl font-bold text-gray-800">{stats.articles}</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                    clipRule="evenodd"
                  />
                  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between border-b border-gray-50 p-6">
              <h3 className="text-lg font-bold text-gray-800">Inventory Alerts</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-xs tracking-wider text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Product Name</th>
                    <th className="px-6 py-4 text-center font-semibold">In Stock</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {lowStockProducts.map((item) => (
                    <tr key={item.id} className="transition hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{item.title}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                          {item.stock} units
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-800">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to={{ pathname: '/products/create' }}
                  state={{ type: 'create' }}
                  className="group flex w-full items-center rounded-xl border border-gray-100 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
                >
                  <div className="mr-4 rounded-lg bg-blue-100 p-2 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Add Product</span>
                </Link>
                <Link
                  to={{ pathname: '/coupons/create' }}
                  state={{ type: 'create' }}
                  className="group flex w-full items-center rounded-xl border border-gray-100 p-4 text-left transition hover:border-amber-200 hover:bg-amber-50"
                >
                  <div className="mr-4 rounded-lg bg-amber-100 p-2 text-amber-600 transition group-hover:bg-amber-600 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Create Coupon</span>
                </Link>
                <Link
                  to={{ pathname: '/articles/create' }}
                  state={{ type: 'create' }}
                  className="group flex w-full items-center rounded-xl border border-gray-100 p-4 text-left transition hover:border-green-200 hover:bg-green-50"
                >
                  <div className="mr-4 rounded-lg bg-green-100 p-2 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Write Article</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
