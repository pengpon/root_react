import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
import { setDrawerOpen } from '../store/slices/cartSlice';
import Cart from './Cart';

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
              <button type="button" className="group ml-2 p-1 lg:hidden" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-7 text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <ul className="hidden text-sm font-bold tracking-widest text-[#2C3E2D] uppercase lg:flex lg:items-center lg:gap-8">
              <li className="group relative">
                <Link to="/products" className="transition-colors hover:text-[#8C5E3C]">
                  shop
                </Link>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8C5E3C] transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              {/* <li className="group relative">
                <a href="#" className="transition-colors hover:text-[#8C5E3C]">
                  boxes
                </a>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8C5E3C] transition-all duration-300 ease-out group-hover:w-full"></span>
              </li> */}
              <li className="group relative">
                <Link to="/posts" className="transition-colors hover:text-[#8C5E3C]">
                  journal
                </Link>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8C5E3C] transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link to="/origin" className="transition-colors hover:text-[#8C5E3C]">
                  origin
                </Link>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8C5E3C] transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
            </ul>
          </div>

          <div className="flex h-full py-4">
            <Link to="/" className="flex h-full items-center">
              <span className="sr-only">ROOT Concept Store</span>
              <img className="h-8 w-auto object-contain lg:h-12" src={logo} alt="ROOT logo" />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end gap-4 text-[#2C3E2D]">
            <button type="button" className="group relative cursor-pointer" onClick={toggleCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6 transform transition-all duration-300 group-hover:scale-110 group-hover:text-[#8C5E3C]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span
                key={totalQuantity}
                className="animate-badge absolute -top-2 -right-2 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#8C5E3C] px-1 text-[10px] font-bold text-[#F3EFDF] ring-2 ring-[#F3EFDF] transition-transform group-hover:scale-110"
              >
                {totalQuantity > 99 ? '99+' : totalQuantity}
              </span>
            </button>
          </div>
        </div>

        <div className="fixed inset-0 z-60 hidden bg-[#2C3E2D]/40 backdrop-blur-sm"></div>

        <div
          className={`fixed top-0 left-0 z-70 h-screen w-75 bg-white px-8 py-10 shadow-2xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex h-full flex-col">
            <div className="mb-12 flex items-center justify-between text-[#2C3E2D]">
              <button
                type="button"
                className="transition-transform duration-300 hover:rotate-90 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1">
              <ul className="flex flex-col gap-6 text-2xl font-bold text-[#2C3E2D]">
                <li>
                  <Link
                    to="/products"
                    onClick={toggleMenu}
                    className="transition-colors hover:text-[#8C5E3C]"
                  >
                    SHOP
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="transition-colors hover:text-[#8C5E3C]">
                    BOXES
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/posts"
                    onClick={toggleMenu}
                    className="transition-colors hover:text-[#8C5E3C]"
                  >
                    JOURNAL
                  </Link>
                </li>
                <li>
                  <Link
                    to="/origin"
                    onClick={toggleMenu}
                    className="transition-colors hover:text-[#8C5E3C]"
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
