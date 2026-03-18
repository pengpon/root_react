// apps/admin/src/components/Guard/AdminGuard.jsx
import { Spinner } from '@repo/ui';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';

function AdminGuard() {
  const { isAuth, isInitializing } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isInitializing) {
    return (
      <div className="bg-root-bg fixed inset-0 z-50 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default AdminGuard;
