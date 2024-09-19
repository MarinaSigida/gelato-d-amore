import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderItem from '../components/OrderDetailPage/OrderItem';
import Banner from '../components/Shared/Banner';
import bannerDashboardOrders from '/assets/images/banner-dashboard-orders.png';
import bannerDashboardTablet from '/assets/images/banner-dashboard-orders-tablet.png';
import bannerDashboardMobile from '/assets/images/banner-dashboard-orders-mobile.png';
import CancelOrderPopup from '../components/DashboardOrdersPage/CancelOrderPopup';

const DashboardOrderModify = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardMobile);
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
  const [selectedOrderNumber, setSelectedOrderNumber] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 430) {
        setBannerImage(bannerDashboardMobile);
      } else if (width <= 768) {
        setBannerImage(bannerDashboardTablet);
      } else {
        setBannerImage(bannerDashboardOrders);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCancelOrderPopup = () => {
    setIsCancelPopupOpen(!isCancelPopupOpen);
  };

  //CHANGE TO ID TO ORDER_NUMBER AFTER FETCHING ALL ORDER'S INFO

  const handleCancelOrderClick = () => {
    setSelectedOrderNumber(id);
    toggleCancelOrderPopup();
  };

  return (
    <div className="main">
      <Banner
        image={bannerImage}
        titleSpan="Gestion des commandes"
        textPosition="right"
      />
      <section className="order-detail">
        <div className="order-container">
          <div className="order-number">
            <h3>#{id}</h3>
            <p>Date : 01.12.2024</p>
          </div>
          <div className="order-main-info">
            <div className="order-total">
              <div>
                <p>
                  Coût total : <span>50€</span>
                </p>
                <p>
                  Quantité : <span>2kg</span>
                </p>
              </div>
            </div>
            <div className="order-delivery-info">
              <p>Statut : Confirmé</p>
              <p>Mode de livraison : A domicile</p>
              <p>Adresse de livraison : 22 Victor Hugo, Nice , 06000</p>
            </div>
          </div>
          <div className="dashboard-order-modify-buttons">
            {/* enabled only when the status is penging */}
            <button id="confirm-btn">Confirmer</button>
            {/* to change the items in the order */}
            <button id="modify-btn">Modifier</button>
            {/* to cancel the order */}
            <button onClick={handleCancelOrderClick} id="cancel-btn">
              Annuler
            </button>
          </div>
        </div>
        <div className="order-items-container">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </section>
      <CancelOrderPopup
        orderNumber={selectedOrderNumber}
        isPopupOpen={isCancelPopupOpen}
        closePopup={toggleCancelOrderPopup}
      />
    </div>
  );
};

export default DashboardOrderModify;
