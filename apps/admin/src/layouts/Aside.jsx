import { NavLink } from 'react-router';

function Aside() {
  const navItemClass = ({ isActive }) =>
    `flex items-center rounded-lg px-4 py-3 transition duration-200 ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
    }`;

  return (
    <>
      <aside className="z-20 flex w-64 shrink-0 flex-col bg-slate-800 text-white shadow-xl">
        <NavLink to="/">
          <div className="flex items-center gap-2 border-b border-slate-700 p-6 text-2xl font-bold">
            <div className="size-12">
              <img src="../src/assets/logo_white.png" alt="logo" />
            </div>
            <span>Admin</span>
          </div>
        </NavLink>

        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          <p className="px-4 pb-2 text-xs font-semibold text-slate-500 uppercase">Main Menu</p>
          <NavLink to="/" className={navItemClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-3 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
            Dashboard
          </NavLink>
          <NavLink to="/products" className={navItemClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-3 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
            Products
          </NavLink>
          <NavLink to="/coupons" className={navItemClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-3 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
              />
            </svg>
            Coupons
          </NavLink>
          <NavLink to="/articles" className={navItemClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-3 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Articles
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
