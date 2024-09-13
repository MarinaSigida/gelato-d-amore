import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerDashboardUsers from '/assets/images/banner-dashboard-users.png';
import bannerDashboardUsersMobile from '/assets/images/banner-dashboard-users-mobile.png';
import bannerDashboardUsersTablet from '/assets/images/banner-dashboard-users-tablet.png';

const DashboardUsers = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardUsersMobile);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 375) {
        setBannerImage(bannerDashboardUsersMobile);
      } else if (width <= 768) {
        setBannerImage(bannerDashboardUsersTablet);
      } else {
        setBannerImage(bannerDashboardUsers);
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
        titleSpan="Gestion des utilisateurs"
        textColorExtra="white"
        textPosition="left"
      />
    </div>
  );
};

export default DashboardUsers;
