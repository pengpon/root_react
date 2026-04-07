import { deleteAllOrders, deleteOrder, fetchOrders } from '@/api/orders';
import { Alert, ArchiveBoxXMarkIcon, Spinner } from '@repo/ui';
import { Toast, logger } from '@repo/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import PageHeader from '../layouts/PageHeader';

function Orders() {
  const pageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ordersData, setOrdersData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [pagination, setPagination] = useState({
    current: null,
    total: null,
  });

  const navigate = useNavigate();

  const columns = [
    { header: 'Order Date', key: 'create_at' },
    { header: 'Order ID', key: 'id' },
    { header: 'Customer', key: 'user' },
    { header: 'Message', key: 'message' },
    { header: 'Status', key: 'is_paid' },
    { header: 'Actions', key: 'actions' },
  ];

  const onActionClick = (type, id) => {
    const item = ordersData.find((order) => order.id === id) || {};
    setSelectedOrder({ ...item, title: id });

    switch (type) {
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

  const getOrderByQuery = useCallback(async (page) => {
    const res = await fetchOrders(page);
    const { current_page: current, total_pages: total } = res.data.pagination;
    setPagination({ current, total });
    setOrdersData(res.data.orders);
  }, []);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await deleteOrder(selectedOrder.id);
      const title = 'Deleted!';

      Toast.fire({
        position: 'top',
        icon: 'success',
        title: res.data.success ? title : 'Error',
        color: '#1f2937',
        iconColor: '#10b981',
        background: '#ffffff',
      });
      await getOrderByQuery(1);
      setIsLoading(false);
      setIsAlertOpen(false);
    } catch (error) {
      logger.error(error.message, error);
      throw error;
    }
  };

  const handleDeleteAll = async () => {
    console.log('here');
    setIsLoading(true);
    try {
      const res = await deleteAllOrders();
      const title = 'Deleted!';

      Toast.fire({
        position: 'top',
        icon: 'success',
        title: res.data.success ? title : 'Error',
        color: '#1f2937',
        iconColor: '#10b981',
        background: '#ffffff',
      });
      await getOrderByQuery(1);
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
      await getOrderByQuery(page);
      setIsLoading(false);
    },
    [getOrderByQuery],
  );

  useEffect(() => {
    const init = async () => {
      await getOrderByQuery(1);
      setIsLoading(false);
    };
    init();
  }, [getOrderByQuery]);

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
          <div className="flex items-center justify-end border-b border-gray-50 bg-gray-50/30 p-6">
            <button
              type="button"
              className="flex cursor-pointer items-center rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
              onClick={() => {
                setSelectedOrder({ title: 'All Orders' });
                setIsAlertOpen(true);
              }}
            >
              <ArchiveBoxXMarkIcon className="mr-2 h-4 w-4 stroke-2" />
              Delete All
            </button>
          </div>

          <div className="overflow-x-auto">
            <Table columns={columns} data={ordersData} onActionClick={onActionClick} />
          </div>
        </div>
        <Pagination pagination={pagination} onChange={handlePageChange} />
        {isAlertOpen && (
          <Alert
            title="Order"
            data={selectedOrder}
            onConfirm={selectedOrder?.id ? handleDelete : handleDeleteAll}
            onCancel={() => setIsAlertOpen(false)}
          />
        )}
      </section>
    </>
  );
}

export default Orders;
