import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import logo from '../assets/logo_full.png';
import { setDrawerOpen } from '../store/slices/cartSlice';
import Cart from './Cart';
import { Bars3CenterLeftIcon, ShoppingBagIcon, XMarkIcon } from '@repo/ui';

function Header() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isCartOpen = useSelector((state) => state.cart.isDrawerOpen);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => dispatch(setDrawerOpen(!isCartOpen));

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleMediaChange = (e) => {
      if (e.matches) setIsMenuOpen(false);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (isMenuOpen || isCartOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen, isCartOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="flex h-16 items-center justify-between px-4 transition-all duration-300 lg:h-20 lg:px-10">
          <div className="flex flex-1 items-center">
            <div className="lg:hidden">
              <button type="button" className="group ml-2 p-1 lg:hidden" onClick={toggleMenu} aria-label="Toggle navigation">
                <Bars3CenterLeftIcon className="size-7 stroke-[2.5] text-brand transition-colors group-hover:text-secondary" />
              </button>
            </div>

            <ul className="hidden text-sm font-bold tracking-widest text-brand uppercase lg:flex lg:items-center lg:gap-8">
              <li className="group relative">
                <Link to="/products" className="transition-colors hover:text-secondary">
                  shop
                </Link>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link to="/posts" className="transition-colors hover:text-secondary">
                  journal
                </Link>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link to="/origin" className="transition-colors hover:text-secondary">
                  origin
                </Link>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
            </ul>
          </div>

          <div className="flex h-full py-4">
            <Link to="/" className="flex h-full items-center">
              <span className="sr-only">ROOT Concept Store</span>
              <img className="h-8 w-auto object-contain lg:h-12" src={logo} alt="ROOT logo" />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end gap-4 text-brand">
            <button type="button" className="group relative cursor-pointer" onClick={toggleCart}>
              <ShoppingBagIcon className="size-6 stroke-2 transform transition-all duration-300 group-hover:scale-110 group-hover:text-secondary" />
              <span
                key={totalQuantity}
                className="animate-badge absolute -top-2 -right-2 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-accent ring-2 ring-accent transition-transform group-hover:scale-110"
              >
                {totalQuantity > 99 ? '99+' : totalQuantity}
              </span>
            </button>
          </div>
        </div>

        <div className="fixed inset-0 z-60 hidden bg-brand/40 backdrop-blur-sm"></div>

        <div
          className={`fixed top-0 left-0 z-70 h-screen w-75 bg-white px-8 py-10 shadow-2xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex h-full flex-col">
            <div className="mb-12 flex items-center justify-between text-brand">
              <button
                type="button"
                className="transition-transform duration-300 hover:rotate-90 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <XMarkIcon className="size-6 stroke-2" />
              </button>
            </div>

            <nav className="flex-1">
              <ul className="flex flex-col gap-6 text-2xl font-bold text-brand">
                <li>
                  <Link
                    to="/products"
                    onClick={toggleMenu}
                    className="transition-colors hover:text-secondary"
                  >
                    SHOP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/posts"
                    onClick={toggleMenu}
                    className="transition-colors hover:text-secondary"
                  >
                    JOURNAL
                  </Link>
                </li>
                <li>
                  <Link
                    to="/origin"
                    onClick={toggleMenu}
                    className="transition-colors hover:text-secondary"
                  >
                    ORIGIN
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Cart isOpen={isCartOpen} onClose={toggleCart} />
      </header>
    </>
  );
}

export default Header;
