import { Link } from 'react-router';

function Header() {
  return (
    <>
      <header class="sticky top-0 z-50 w-full bg-white shadow-md">
        <div class="flex h-16 items-center justify-between px-4 transition-all duration-300 lg:h-20 lg:px-10">
          <div class="flex flex-1 items-center">
            <div class="lg:hidden">
              <button class="group ml-2 p-1 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="size-7 text-[#2C3E2D] transition-colors group-hover:text-[#8C5E3C]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <ul class="hidden text-sm font-bold tracking-widest text-[#2C3E2D] uppercase lg:flex lg:items-center lg:gap-8">
              <li class="group relative">
                <Link to="/products" class="transition-colors hover:text-[#8C5E3C]">
                  Shop
                </Link>
                <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8C5E3C] transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li class="group relative">
                <a href="#" class="transition-colors hover:text-[#8C5E3C]">
                  boxes
                </a>
                <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8C5E3C] transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li class="group relative">
                <Link to="/posts" class="transition-colors hover:text-[#8C5E3C]">
                  journal
                </Link>
                <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8C5E3C] transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li class="group relative">
                <Link to="/origin" class="transition-colors hover:text-[#8C5E3C]">
                  origin
                </Link>
                <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8C5E3C] transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
            </ul>
          </div>

          <div class="flex h-full py-4">
            <Link to="/" class="flex h-full items-center">
              <span class="sr-only">ROOT Concept Store</span>
              <img
                class="h-8 w-auto object-contain lg:h-12"
                src="../src/assets/logo.png"
                alt="ROOT logo"
              />
            </Link>
          </div>

          <div class="flex flex-1 items-center justify-end gap-4 text-[#2C3E2D]">
            <a href="#" class="group relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-6 transform transition-all duration-300 group-hover:scale-110 group-hover:text-[#8C5E3C]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span class="absolute -top-2 -right-2 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#8C5E3C] px-1 text-[10px] font-bold text-[#F3EFDF] ring-2 ring-[#F3EFDF] transition-transform group-hover:scale-110">
                3
              </span>
            </a>
          </div>
        </div>

        <div class="fixed inset-0 z-60 hidden bg-[#2C3E2D]/40 backdrop-blur-sm"></div>

        <div class="fixed top-0 left-0 z-70 h-screen w-75 -translate-x-full bg-white px-8 py-10 shadow-2xl transition-transform duration-500 ease-in-out">
          <div class="flex h-full flex-col">
            <div class="mb-12 flex items-center justify-between text-[#2C3E2D]">
              <button class="transition-transform duration-300 hover:rotate-90 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav class="flex-1">
              <ul class="flex flex-col gap-6 text-2xl font-bold text-[#2C3E2D]">
                <li>
                  <a href="#" class="transition-colors hover:text-[#8C5E3C]">
                    SHOP
                  </a>
                </li>
                <li>
                  <a href="#" class="transition-colors hover:text-[#8C5E3C]">
                    BOXES
                  </a>
                </li>
                <li>
                  <a href="#" class="transition-colors hover:text-[#8C5E3C]">
                    JOURNAL
                  </a>
                </li>
                <li>
                  <a href="#" class="transition-colors hover:text-[#8C5E3C]">
                    ORIGIN
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
