import { useState, useEffect } from 'react';
import Flavor from './Flavor';

const Flavors = () => {
  const [swiperThemeColor, setSwiperThemeColor] = useState(
    'rgba(255, 255, 255, 0)'
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSwiperThemeColor('rgba(255, 255, 255, 0)');
      } else {
        setSwiperThemeColor('#9F233E');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flavors">
      <h1>
        NOS <span>GOÛTS</span>
      </h1>
      <div className="flavors-list">
        <swiper-container
          pagination="dynamic-bullets"
          navigation="true"
          space-between="18"
          slides-per-view="auto"
          style={{
            width: '100%',
            padding: '0 30px',
            '--swiper-pagination-color': '#9F233E',
            '--swiper-pagination-bottom': '0',
            '--swiper-theme-color': swiperThemeColor,
            '--swiper-navigation-size': '20px',
            '--swiper-navigation-top-offset': '30%',
          }}
        >
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
        </swiper-container>
      </div>
      <div className="slider"></div>
    </section>
  );
};

export default Flavors;
