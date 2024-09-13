import { useState, useEffect } from 'react';
import Review from './Review';

const Reviews = () => {
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
    <section className="testimonials">
      <h1>
        NOS CHERS <span>CLIENTS</span>
      </h1>
      <div className="testimonials-list">
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
            <Review />
          </swiper-slide>
          <swiper-slide>
            <Review />
          </swiper-slide>
          <swiper-slide>
            <Review />
          </swiper-slide>
          <swiper-slide>
            <Review />
          </swiper-slide>
          <swiper-slide>
            <Review />
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
};

export default Reviews;
