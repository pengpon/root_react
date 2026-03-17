import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function Layout() {
  return (
    <>
      <div className="bg-[#F9F7F2] font-sans text-[#2C3E2D]">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
