import { Spinner } from '@repo/ui';
import { logger } from '@repo/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchProduct } from '../api/products';

function ProductItem() {
  const params = useParams();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (e) => {
    setActiveImage(e.target.src);
  };

  const handleQuantityChange = (e) => {
    const type = e.target.dataset.type;

    if (type === 'plus') {
      setQuantity((prev) => {
        const current = Number(prev) || 0;
        return current + 1;
      });
    } else {
      setQuantity((prev) => {
        const current = Number(prev) || 0;

        return Math.max(current - 1, 0);
      });
    }
  };
  const handleQuantityInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setQuantity(value);
    }
  };
  const handleQuantityInputBlur = () => {
    if (!quantity) setQuantity(0);
  };

  useEffect(() => {
    const getProduct = async (id) => {
      try {
        const res = await fetchProduct(id);
        setProduct(res?.data?.product);
        setActiveImage(res.data?.product?.imageUrl);
      } catch (error) {
        logger.error(error.message, error);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) getProduct(id);
  }, [id]);
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-100 h-screen w-screen bg-gray-700/60">
          <Spinner />
        </div>
      )}
      <section className="bg-[#FDFCF8] py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-around gap-12 lg:flex-row lg:gap-20">
            <div className="w-full lg:w-2/5">
              <div className="relative aspect-square overflow-hidden rounded-4xl bg-white shadow-sm">
                {product?.badge && (
                  <span className="absolute top-6 left-6 z-10 rounded-full bg-[#8C5E3C] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg">
                    {product?.badge}
                  </span>
                )}

                <img
                  src={activeImage || 'https://dummyimage.com/600x400/eeeeee/fff'}
                  alt="Product Main Image"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 grid grid-cols-4 gap-4">
                {product?.imagesUrl?.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="aspect-square cursor-pointer overflow-hidden rounded-xl border border-[#2C3E2D] ring-offset-2 transition-all"
                    onClick={handleImageClick}
                  >
                    <img
                      src={image || 'https://dummyimage.com/600x400/eeeeee/fff'}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col lg:w-2/5">
              <nav className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-[#8C5E3C] uppercase">
                <a href="#" className="hover:underline">
                  Shop
                </a>
                <span>/</span>
                <span className="uppercase">{product.category}</span>
              </nav>

              <h1 className="text-4xl font-bold tracking-tight text-[#2C3E2D] md:text-5xl">
                {product.title}
              </h1>

              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-3xl font-black tracking-tighter text-[#2C3E2D]">
                  ${product.price}
                </span>
                <span className="text-lg text-gray-400 line-through opacity-60">
                  ${product.origin_price}
                </span>
              </div>

              <div className="my-8 h-px w-full bg-[#2C3E2D]/10"></div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Description
                </h3>
                <p className="text-base leading-relaxed text-gray-600">{product.description}</p>
              </div>

              {/* <div className="mt-8 flex flex-wrap gap-2">
                <span className="rounded-lg bg-[#F3EFDF] px-3 py-1 text-[10px] font-bold tracking-wider text-[#2C3E2D] uppercase">
                  Organic Certified
                </span>
                <span className="rounded-lg bg-[#F3EFDF] px-3 py-1 text-[10px] font-bold tracking-wider text-[#2C3E2D] uppercase">
                  Zero Pesticides
                </span>
              </div> */}

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-xl border border-[#2C3E2D]/10 bg-white p-1">
                    <button
                      data-type="minus"
                      onClick={handleQuantityChange}
                      className="flex h-12 w-12 items-center justify-center rounded-lg text-[#2C3E2D] transition-colors hover:bg-[#F3EFDF]"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      className="w-12 bg-transparent text-center font-bold text-[#2C3E2D] focus:outline-none"
                      onChange={handleQuantityInputChange}
                      onBlur={handleQuantityInputBlur}
                    />
                    <button
                      data-type="plus"
                      onClick={handleQuantityChange}
                      className="flex h-12 w-12 items-center justify-center rounded-lg text-[#2C3E2D] transition-colors hover:bg-[#F3EFDF]"
                    >
                      +
                    </button>
                  </div>

                  <button className="flex-1 rounded-xl bg-[#2C3E2D] py-4 text-sm font-bold tracking-widest text-white shadow-2xl transition-all hover:bg-[#1a261b] hover:shadow-[#2C3E2D]/20 active:scale-95">
                    ADD TO BASKET
                  </button>
                </div>

                <button className="w-full rounded-xl border-2 border-[#2C3E2D] py-4 text-sm font-bold tracking-widest text-[#2C3E2D] transition-all hover:bg-[#2C3E2D] hover:text-white">
                  BUY IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductItem;
