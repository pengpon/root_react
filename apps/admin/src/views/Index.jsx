import { fetchArticles } from '@/api/articles';
import { fetchCoupons } from '@/api/coupons';
import { fetchProducts } from '@/api/products';
import {
  InboxStackIconSolid,
  InformationCircleIcon,
  NewspaperIconSolid,
  PencilSquareIcon,
  PlusCircleIcon,
  Spinner,
  TicketIcon,
} from '@repo/ui';
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
                <InboxStackIconSolid className="size-6" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-red-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div>
              <p className="text-sm font-medium tracking-wider text-red-500 uppercase">Low Stock</p>
              <p className="mt-1 text-3xl font-bold text-gray-800">{lowStockProducts.length}</p>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-400">
              <InformationCircleIcon className="size-5" />
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
                <InformationCircleIcon className="size-5" />
              </div>
            </div>
            <div className="mt-2 flex gap-1.5 text-xs text-gray-400">
              <div className="size-5">
                <InformationCircleIcon className="size-5" />
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
                <NewspaperIconSolid className="size-6" />
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
                    <PlusCircleIcon className="h-6 w-6 stroke-2" />
                  </div>
                  <span className="font-medium text-gray-700">Add Product</span>
                </Link>
                <Link
                  to={{ pathname: '/coupons/create' }}
                  state={{ type: 'create' }}
                  className="group flex w-full items-center rounded-xl border border-gray-100 p-4 text-left transition hover:border-amber-200 hover:bg-amber-50"
                >
                  <div className="mr-4 rounded-lg bg-amber-100 p-2 text-amber-600 transition group-hover:bg-amber-600 group-hover:text-white">
                    <TicketIcon className="h-6 w-6 stroke-2" />
                  </div>
                  <span className="font-medium text-gray-700">Create Coupon</span>
                </Link>
                <Link
                  to={{ pathname: '/articles/create' }}
                  state={{ type: 'create' }}
                  className="group flex w-full items-center rounded-xl border border-gray-100 p-4 text-left transition hover:border-green-200 hover:bg-green-50"
                >
                  <div className="mr-4 rounded-lg bg-green-100 p-2 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <PencilSquareIcon className="h-6 w-6 stroke-2" />
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
