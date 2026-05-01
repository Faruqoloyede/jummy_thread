import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Marquee text='Shop no.1, Adeshina house, opposite junction site imam, Offa, Kwara state' />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
