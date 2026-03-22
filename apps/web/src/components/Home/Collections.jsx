import { Link } from 'react-router';
import bundleImage from '../../assets/collections-bundle.jpg';
import fruitImage from '../../assets/collections-fruit.jpg';
import vegetableImage from '../../assets/collections-vegetable.jpg';

function Collections() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-secondary text-3xl font-bold tracking-tight md:text-4xl">
              Shop the Collection
            </h2>
            <p className="hidden text-(--color-content-muted) italic md:block">
              Handpicked from the earth, just for you.
            </p>
          </div>

          <div className="grid h-auto grid-cols-1 gap-6 md:h-162.5 md:grid-cols-3 md:grid-rows-2">
            <Link
              to={{ pathname: '/products' }}
              state={{ activeCategory: 'All' }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-(--shadow-soft) md:col-span-2 md:row-span-2"
            >
              <img
                src={bundleImage}
                alt="Curated Bundles"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="from-accent/60 absolute inset-0 flex items-end bg-linear-to-t via-transparent to-transparent p-10">
                <div>
                  <span className="mb-2 block text-xs font-bold tracking-widest text-(--color-brand-accent) uppercase">
                    Value Pack
                  </span>
                  <h3 className="text-3xl font-bold text-white md:text-4xl">Curated Bundles</h3>
                </div>
              </div>
            </Link>

            <Link
              to={{ pathname: '/products' }}
              state={{ activeCategory: 'Vegetable' }}
              className="group relative min-h-50 cursor-pointer overflow-hidden rounded-2xl shadow-(--shadow-soft)"
            >
              <img
                src={vegetableImage}
                alt="Vegetables"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
                <h3 className="text-xl font-bold tracking-wide text-white uppercase">Greens</h3>
              </div>
            </Link>

            <Link
              to={{ pathname: '/products' }}
              state={{ activeCategory: 'Fruit' }}
              className="group relative min-h-50 cursor-pointer overflow-hidden rounded-2xl shadow-(--shadow-soft)"
            >
              <img
                src={fruitImage}
                alt="Fruits"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
                <h3 className="text-xl font-bold tracking-wide text-white uppercase">Fruits</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Collections;
