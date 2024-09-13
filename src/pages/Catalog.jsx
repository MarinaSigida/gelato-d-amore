import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerCatalog from '/assets/images/banner-catalog.png';
import bannerCatalogMobile from '/assets/images/banner-catalog-mobile.png';

const Catalog = () => {
  const [bannerImage, setBannerImage] = useState(bannerCatalogMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBannerImage(bannerCatalogMobile);
      } else {
        setBannerImage(bannerCatalog);
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
        title="Bisous, "
        textPosition="center"
        titleSpan="I love you!"
      />
    </div>
  );
};

export default Catalog;
