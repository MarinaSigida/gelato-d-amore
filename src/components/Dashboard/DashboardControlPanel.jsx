import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from '../Shared/Banner';
import bannerDashboard from '/assets/images/banner-dashboard.png';
import bannerDashboardMobile from '/assets/images/banner-dashboard-mobile.png';
import ordersImg from '../../assets/images/orders.png';
import usersImg from '../../assets/images/users.png';
import stockImg from '../../assets/images/stock.png';

const DashboardControlPanel = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBannerImage(bannerDashboardMobile);
      } else {
        setBannerImage(bannerDashboard);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Banner
        image={bannerImage}
        title="Tableau de bord"
        textColor="white"
        textPosition="center"
      />
      <div className="dashboard-control-panel">
        <div className="dashboard-control-panel-card">
          <Link to="/dashboard/stock">
            <img src={stockImg} alt="Gestion des stocks" />
            <h3>Gestion des stocks</h3>
          </Link>
        </div>
        <div className="dashboard-control-panel-card">
          <Link to="/dashboard/orders">
            <img src={ordersImg} alt="Gestion des commandes" />
            <h3>Gestion des commandes</h3>
          </Link>
        </div>
        <div className="dashboard-control-panel-card">
          <Link to="/dashboard/users">
            <img src={usersImg} alt="Gestion des commandes" />
            <h3>Gestion des utilisateurs</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardControlPanel;
