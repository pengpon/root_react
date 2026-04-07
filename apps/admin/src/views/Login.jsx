import { FieldErrorMessage } from '@repo/ui';
import { Toast } from '@repo/utils';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import logoWhite from '../assets/logo_white.png';
import { loginAsync } from '../store/slices/authSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(loginAsync(data)).unwrap();
      navigate('/');
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
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 shadow-lg">
              <img src={logoWhite} alt="logo" className="h-10 w-10" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Console</h1>
            <p className="mt-2 text-sm font-medium text-slate-500">
              Sign in to manage your platform
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-xl shadow-slate-200/50">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>
                <div className="space-y-1">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>
                    <input
                      type="email"
                      id="username"
                      placeholder="admin@example.com"
                      autoComplete="email"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pr-4 pl-12 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:outline-none"
                      {...register('username', {
                        required: 'Please enter your email',
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Invalid email format',
                        },
                      })}
                    />
                  </div>
                  <FieldErrorMessage message={errors.username?.message} />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                </div>
                <div className="space-y-1">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </span>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pr-4 pl-12 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:outline-none"
                      {...register('password', {
                        required: 'Please enter your password',
                        minLength: { value: 6, message: 'Password must be at least 6 characters' },
                      })}
                    />
                  </div>
                  <FieldErrorMessage message={errors.password?.message} />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-800 py-4 text-sm font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-900 active:scale-[0.98]"
              >
                Sign In to Console
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
