import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div className="page-container">
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="content">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLayout;
