import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Marquee text='office address' />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
