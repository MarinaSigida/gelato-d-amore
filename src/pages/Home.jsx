import { useState } from 'react';
import BannerHome from '../components/HomePage/BannerHome';
import Features from '../components/HomePage/Features';
import HowItsMade from '../components/HomePage/HowItsMade';
import ShortInfo from '../components/HomePage/ShortInfo';
import Flavors from '../components/HomePage/Flavors';
import BestSellers from '../components/HomePage/BestSellers';
import Reviews from '../components/HomePage/Reviews';
import ItemAddedToBasketNotification from '../components/Notifications/ItemAddedToBasketNotification';

const Home = () => {
  const [notificationData, setNotificationData] = useState(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const handleNotificationClose = () => {
    setIsNotificationOpen(false);
    setNotificationData(null);
  };

  const handleAddToBasket = (item) => {
    setNotificationData(item);
    setIsNotificationOpen(true);
  };
  return (
    <div className="main">
      <BannerHome />
      <Features />
      <ShortInfo />
      <HowItsMade />
      <Flavors onAddToBasket={handleAddToBasket} />
      <BestSellers />
      <Reviews />
      {isNotificationOpen && (
        <ItemAddedToBasketNotification
          isPopupOpen={isNotificationOpen}
          closePopup={handleNotificationClose}
          item={notificationData}
        />
      )}
    </div>
  );
};

export default Home;
