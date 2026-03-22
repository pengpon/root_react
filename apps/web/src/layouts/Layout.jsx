import { Outlet, ScrollRestoration } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-surface font-sans text-brand">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
