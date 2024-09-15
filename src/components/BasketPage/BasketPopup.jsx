import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';
import weLoveYou from '../../assets/images/we-love-you.png';

const OrderPopup = ({ isPopupOpen, closePopup }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };
  return (
    <>
      <OverlayPopup onClick={handleBackdropClick}>
        <div
          className={`order-popup-container ${isPopupOpen ? 'open' : 'closed'}`}
        >
          <div onClick={closePopup} className="icon-close">
            <img src={cross} alt="close" />
          </div>
          <div className="order-popup-content">
            <div className="order-popup-content-img">
              <img src={weLoveYou} alt="Thank you for the order" />
            </div>
            <h4>Merci pour votre commande </h4>
            <h3>
              Bisous, <span>I love you!</span>
            </h3>
            <button onClick={closePopup}>Fermer</button>
          </div>
        </div>
      </OverlayPopup>
    </>
  );
};

export default OrderPopup;
