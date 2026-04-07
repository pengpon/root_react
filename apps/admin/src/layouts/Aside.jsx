import {
  ArrowTrendingUpIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ClipboardDocumentListIcon,
  CubeIcon,
  PencilSquareIcon,
  TicketIcon,
} from '@repo/ui';
import { useState } from 'react';
import { NavLink } from 'react-router';
import logoWhite from '../assets/logo_white.png';

function Aside() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const navItemClass = ({ isActive }) =>
    `flex items-center rounded-lg px-4 py-3 transition duration-200 ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
    }`;

  return (
    <>
      <aside
        className={`relative z-20 flex shrink-0 flex-col bg-slate-800 text-white shadow-xl ${isCollapsed ? 'w-20' : 'w-64'}`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-slate-700 p-6 text-2xl font-bold">
            {!isCollapsed && (
              <NavLink to="/" className="flex items-center gap-2">
                <div className="size-12">
                  <img src={logoWhite} alt="logo" />
                </div>
                <span>Admin</span>
              </NavLink>
            )}

            <button
              onClick={toggleSidebar}
              className="rounded-lg p-2 transition-colors hover:bg-slate-700"
            >
              {isCollapsed ? (
                <ChevronDoubleRightIcon className="size-6 shrink-0 stroke-[1.5]" />
              ) : (
                <ChevronDoubleLeftIcon className="size-6 shrink-0 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          <p className="px-4 pb-2 text-xs font-semibold text-slate-500 uppercase">Main Menu</p>
          <NavLink to="/" className={navItemClass}>
            <ArrowTrendingUpIcon className="mr-3 size-6 shrink-0 stroke-[1.5]" />

            <span
              className={`ml-3 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'w-0 overflow-hidden opacity-0' : 'opacity-100'}`}
            >
              Dashboard
            </span>
          </NavLink>
          <NavLink to="/products" className={navItemClass}>
            <CubeIcon className="mr-3 size-6 shrink-0 stroke-[1.5]" />

            <span
              className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'w-0 overflow-hidden opacity-0' : 'opacity-100'}`}
            >
              Products
            </span>
          </NavLink>
          <NavLink to="/coupons" className={navItemClass}>
            <TicketIcon className="mr-3 size-6 shrink-0 stroke-[1.5]" />

            <span
              className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'w-0 overflow-hidden opacity-0' : 'opacity-100'}`}
            >
              Coupons
            </span>
          </NavLink>
          <NavLink to="/articles" className={navItemClass}>
            <PencilSquareIcon className="mr-3 size-6 shrink-0 stroke-[1.5]" />

            <span
              className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'w-0 overflow-hidden opacity-0' : 'opacity-100'}`}
            >
              Articles
            </span>
          </NavLink>
          <NavLink to="/orders" className={navItemClass}>
            <ClipboardDocumentListIcon className="mr-3 size-6 shrink-0 stroke-[1.5]" />

            <span
              className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'w-0 overflow-hidden opacity-0' : 'opacity-100'}`}
            >
              Orders
            </span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
