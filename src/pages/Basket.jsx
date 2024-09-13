import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerBasket from '/assets/images/banner-basket.png';
import bannerBasketMobile from '/assets/images/banner-basket-mobile.png';

const Basket = () => {
  const [bannerImage, setBannerImage] = useState(bannerBasketMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setBannerImage(bannerBasketMobile);
      } else {
        setBannerImage(bannerBasket);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="main">
      <Banner image={bannerImage} />
    </div>
  );
};

export default Basket;
