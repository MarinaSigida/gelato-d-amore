import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from '../Shared/Banner';
import bannerDashboard from '/assets/images/banner-dashboard.png';
import bannerDashboardMobile from '/assets/images/banner-dashboard-mobile.png';

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
        <h2>Dashboard Control Panel</h2>
        <ul>
          <li>
            <Link to="/dashboard/stock">Stock Management</Link>
          </li>
          <li>
            <Link to="/dashboard/orders">Order Management</Link>
          </li>
          <li>
            <Link to="/dashboard/users">User Management</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardControlPanel;
