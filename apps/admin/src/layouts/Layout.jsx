import { Outlet } from 'react-router';
import Aside from './Aside';
import Header from './Header';

function Layout() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Aside />

        <main className="flex min-w-0 flex-1 flex-col">
          <Header />

          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
