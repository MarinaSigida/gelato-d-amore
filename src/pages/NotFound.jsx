import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerNotFoundDesktop from '/assets/images/banner-notfound-desktop.png';
import bannerNotFoundTablet from '/assets/images/banner-notfound-tablet.png';
import bannerNotFoundMobile from '/assets/images/banner-notfound-mobile.png';

const NotFound = () => {
  const [bannerImage, setBannerImage] = useState(bannerNotFoundMobile);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 430) {
        setBannerImage(bannerNotFoundMobile);
      } else if (width <= 768) {
        setBannerImage(bannerNotFoundTablet);
      } else {
        setBannerImage(bannerNotFoundDesktop);
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
        titleSpan="Page non trouvée"
        textColorExtra="white"
        textPosition="center"
      />
    </div>
  );
};

export default NotFound;
