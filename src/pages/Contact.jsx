import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import Map from '../components/ContactPage/Map';
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
      <section className="contacts">
        <div className="contacts-info">
          <h2>
            Le moment quand vous allez venir nous connaître, <br /> c’est la que{' '}
            <span>notre histoire d’amour</span> commence! 
          </h2>
          <div className="contacts-info-container">
            <div className="contacts-info-box">
              <p>
                Ouvert tous les jours <br />
                De 10h à 19h
              </p>
            </div>
            <div className="contacts-info-box">
              <address>
                125 Rue de France, Nice
                <br />
                <a href="mailto:gelatodanice@gmail.com">
                  gelatodanice@gmail.com
                </a>
                <br />
                <a href="tel:+33763458358">07 63 45 83 58</a>
              </address>
            </div>
          </div>
        </div>
        <h2>
          COMMENT NOUS <span>TROUVER</span> ?
        </h2>
        <Map />
      </section>
    </div>
  );
};

export default Contact;
