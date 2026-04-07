import { ArrowRightStartOnRectangleIcon } from '@repo/ui';
import { Toast } from '@repo/utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutAsync } from '../store/slices/authSlice';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logoutAsync()).unwrap();
      Toast.fire({
        position: 'top',
        icon: 'success',
        title: 'Successfully Logged Out',
        color: '#1f2937',
        iconColor: '#10b981',
        background: '#ffffff',
      });
      navigate('/login');
    } catch (errorMessage) {
      Toast.fire({
        position: 'top',
        icon: 'error',
        title: errorMessage,
        color: '#1f2937',
        iconColor: '#ef4444',
        background: '#ffffff',
      });
    }
  };

  return (
    <>
      <header className="z-10 flex h-16 items-center justify-between bg-white px-8 shadow-sm">
        <div className="flex items-center">
          <button type="button" className="mr-4 text-gray-600 md:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
          <h2 className="text-xl font-semibold text-gray-800">Dashboard Overview</h2>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <span className="text-gray-600">Hello, Admin</span>
          </div>
          <button
            onClick={handleLogout}
            type="button"
            className="rounded-lg bg-slate-100 px-2 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-500 hover:text-white cursor-pointer"
          >
            <ArrowRightStartOnRectangleIcon className="size-6 stroke-2" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
