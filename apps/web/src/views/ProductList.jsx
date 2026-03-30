import { Spinner } from '@repo/ui';
import { logger } from '@repo/utils';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { fetchAllProducts, fetchProducts } from '../api/products';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(location?.state?.activeCategory || 'All');
  const [products, setProducts] = useState([]);

  const CATEGORIES = [
    { id: 'all', label: 'All Products', value: 'All' },
    { id: 'vegetable', label: 'Vegetable', value: 'Vegetable' },
    { id: 'fruit', label: 'Fruit', value: 'Fruit' },
  ];

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.dataset.value);
  };

  const fetchProductsData = useCallback(async (category) => {
    setIsLoading(true);
    try {
      let res;
      if (category === 'All') {
        res = await fetchAllProducts();
      } else {
        res = await fetchProducts(1, category);
      }

      setProducts(res.data.products || []);
    } catch (error) {
      logger.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const newState = location?.state?.activeCategory || 'All';
    if (newState) {
      setActiveCategory(newState);
    }
  }, [location.pathname, location.state]);

  useEffect(() => {
    fetchProductsData(activeCategory);
  }, [activeCategory, fetchProductsData]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <section className="bg-surface-bright py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-5xl font-bold tracking-tighter text-brand">The Harvest.</h1>
            </div>

            <div
              className="no-scrollbar flex gap-3 overflow-x-auto pb-2 md:pb-0"
              onClick={handleCategoryChange}
            >
              {CATEGORIES.map((item) => (
                <button
                  key={item.id}
                  className={`cursor-pointer rounded-full px-6 py-2 text-xs font-bold whitespace-nowrap ${activeCategory === item.value ? `bg-brand text-white shadow-lg` : `border border-brand/10 bg-white text-brand transition-all hover:border-brand`}`}
                  data-value={item.value}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-10">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
                <ProductCard data={product} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductList;
