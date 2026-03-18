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
            className="rounded-lg bg-slate-100 px-2 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-red-50 hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
