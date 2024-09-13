import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerDashboardOrders from '/assets/images/banner-dashboard-orders.png';
import bannerDashboardTablet from '/assets/images/banner-dashboard-orders-tablet.png';
import bannerDashboardMobile from '/assets/images/banner-dashboard-orders-mobile.png';

const DashboardOrders = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardMobile);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 375) {
        setBannerImage(bannerDashboardMobile);
      } else if (width <= 768) {
        setBannerImage(bannerDashboardTablet);
      } else {
        setBannerImage(bannerDashboardOrders);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="main">
      <Banner
        image={bannerImage}
        titleSpan="Gestion des commandes"
        textPosition="right"
      />
    </div>
  );
};

export default DashboardOrders;
