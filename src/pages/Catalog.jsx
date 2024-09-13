import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import CatalogFilter from '../components/CatalogPage/CatalogFilter';
import Flavor from '../components/HomePage/Flavor';
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
      <section className="catalog">
        <h2>
          NOS <span>GOÛTS</span>
        </h2>
        <div className="catalog-filters-bar">
          <CatalogFilter category={'Tous'} />
          <CatalogFilter category={'Crème'} />
          <CatalogFilter category={'Fruits'} />
          <CatalogFilter category={'Noix'} />
          <CatalogFilter category={'Fruits rouges'} />
        </div>
        <div className="catalog-list">
          <Flavor />
          <Flavor />
          <Flavor />
          <Flavor />
          <Flavor />
          <Flavor />
          <Flavor />
          <Flavor />
          <Flavor />
          <Flavor />
          <Flavor />
          <Flavor />
        </div>
      </section>
    </div>
  );
};

export default Catalog;
