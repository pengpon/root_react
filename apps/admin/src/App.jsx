import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router';
import './App.css';
import routes from './routes';
import { checkAuthAsync } from './store/slices/authSlice';

const router = createHashRouter(routes);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
