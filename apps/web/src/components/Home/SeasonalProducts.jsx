import { Link } from 'react-router';
import ProductCard from '../ProductCard';
import { ArrowRightIcon } from '@repo/ui';

function SeasonalProducts({ data }) {
  return (
    <>
      <section className="py-20 bg-surface ">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-secondary"></span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-secondary uppercase">
                  Fresh from the Soil
                </span>
              </div>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand md:text-4xl">
                Seasonal Favorites
              </h2>
            </div>
            <Link
              to="/products"
              className="group flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-secondary"
            >
              SHOP ALL PRODUCTS
              <ArrowRightIcon className="size-4 stroke-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-10">
            {data.map((product) => (
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

export default SeasonalProducts;
