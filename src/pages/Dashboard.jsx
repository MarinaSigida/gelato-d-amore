import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerDashboard from '/assets/images/banner-dashboard.png';
import bannerDashboardMobile from '/assets/images/banner-dashboard-mobile.png';

const Dashboard = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardMobile);

  const location = useLocation();
  const showControlPanel = location.pathname === '/dashboard';

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
    <div className="main">
      {/* <Banner
        image={bannerImage}
        title="Tableau de bord"
        textColor="white"
        textPosition="center"
      />
      {showControlPanel && (
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
      )} */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
