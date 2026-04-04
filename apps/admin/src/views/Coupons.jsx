import { deleteCoupon, fetchCoupons } from '@/api/coupons';
import { Alert, Spinner } from '@repo/ui';
import { Toast, logger } from '@repo/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import PageHeader from '../layouts/PageHeader';

function Coupons() {
  const pageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [couponsData, setCouponsData] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState({});
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [pagination, setPagination] = useState({
    current: null,
    total: null,
  });

  const navigate = useNavigate();

  const columns = [
    { header: 'Coupon Detail', key: 'detail' },
    { header: 'Discount', key: 'percent' },
    { header: 'Duration', key: 'duration' },
    { header: 'Enable', key: 'is_enabled' },
    { header: 'Status', key: 'status' },
    { header: 'Actions', key: 'actions' },
  ];

  const onActionClick = (type, id) => {
    const item = couponsData.find((product) => product.id === id) || {};
    setSelectedCoupon(item);

    switch (type) {
      case 'create':
        navigate('create', {
          state: {
            type: 'create',
          },
        });
        break;
      case 'edit':
        navigate(`edit/${id}`, {
          state: {
            data: item,
            type: 'edit',
          },
        });
        break;
      case 'delete':
        setIsAlertOpen(true);
        break;
      default:
        break;
    }
  };

  const getCouponByQuery = useCallback(async (page) => {
    const res = await fetchCoupons(page);
    const { current_page: current, total_pages: total } = res.data.pagination;
    setPagination({ current, total });
    setCouponsData(res.data.coupons);
  }, []);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await deleteCoupon(selectedCoupon.id);
      const title = 'Deleted!';

      Toast.fire({
        position: 'top',
        icon: 'success',
        title: res.data.success ? title : 'Error',
        color: '#1f2937',
        iconColor: '#10b981',
        background: '#ffffff',
      });
      await getCouponByQuery(1);
      setIsLoading(false);
      setIsAlertOpen(false);
    } catch (error) {
      logger.error(error.message, error);
      throw error;
    }
  };

  const handlePageChange = useCallback(
    async (page) => {
      setIsLoading(true);
      setPagination((prev) => ({ ...prev, current: page }));
      await getCouponByQuery(page);
      setIsLoading(false);
    },
    [getCouponByQuery],
  );

  useEffect(() => {
    const init = async () => {
      await getCouponByQuery(1);
      setIsLoading(false);
    };
    init();
  }, [getCouponByQuery]);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pagination]);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <section className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className="mb-8 flex items-center gap-4">
          <PageHeader />
        </div>
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-gray-50 p-6">
            <button
              type="button"
              className="mr-4 flex items-center rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
              onClick={() => onActionClick('create', '')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="mr-2 h-4 w-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="font-medium"> Create Coupon </span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <Table columns={columns} data={couponsData} onActionClick={onActionClick} />
          </div>
        </div>
        <Pagination pagination={pagination} onChange={handlePageChange} />
        {isAlertOpen && (
          <Alert
            title="Coupon"
            data={selectedCoupon}
            onConfirm={handleDelete}
            onCancel={() => setIsAlertOpen(false)}
          />
        )}
      </section>
    </>
  );
}

export default Coupons;
