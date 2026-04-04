import { Link, useLocation } from 'react-router';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbNameMap = {
    '/': 'Home',
    '/products': 'Product List',
    '/coupons': 'Coupon List',
    '/coupons/create': 'Create New Coupon',
    '/articles': 'Article List',
    '/articles/create': 'Create New Article',
    '/orders': 'Order List',
  };

  return (
    <nav className="mb-1 flex text-sm text-gray-500 capitalize">
      <ul className="flex items-center">
        <li>
          <Link to="/" className="transition-colors hover:text-blue-600">
            home
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const name = breadcrumbNameMap[to] || value;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>

              {last || name === 'edit' ? (
                <span className="font-medium text-gray-600">{name}</span>
              ) : (
                <Link to={to} className="transition-colors hover:text-blue-600">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
