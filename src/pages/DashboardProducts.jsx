import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerDashboardProducts from '/assets/images/banner-dashboard-products.png';
import bannerDashboardProductsMobile from '/assets/images/banner-dashboard-products-mobile.png';

const DashboardProducts = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardProductsMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBannerImage(bannerDashboardProductsMobile);
      } else {
        setBannerImage(bannerDashboardProducts);
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
        titleSpan="Gestion des stocks"
        textColorExtra="white"
        textPosition="left"
      />
    </div>
  );
};

export default DashboardProducts;
