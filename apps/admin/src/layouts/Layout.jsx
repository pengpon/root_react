import { Outlet } from 'react-router';
import Header from './Header';
import Aside from './Aside';

function Layout() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Aside />

        <main className="flex min-w-0 flex-1 flex-col">
          <Header />

          <Outlet/>
        </main>
      </div>
    </>
  );
}

export default Layout;
