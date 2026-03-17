import { Spinner } from '@repo/ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import { checkAuthAsync } from '../../store/slices/authSlice';

function AdminGuard() {
  const dispatch = useDispatch();
  const { isAuth, isInitializing } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  if (isInitializing) {
    return (
      <div className="bg-root-bg absolute z-10 flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default AdminGuard;
