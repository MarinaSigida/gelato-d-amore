import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerContact from '/assets/images/banner-contact.png';
import bannerContactMobile from '/assets/images/banner-contact-mobile.png';

const Contact = () => {
  const [bannerImage, setBannerImage] = useState(bannerContactMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBannerImage(bannerContactMobile);
      } else {
        setBannerImage(bannerContact);
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

export default Contact;
