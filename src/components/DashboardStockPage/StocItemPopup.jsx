import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';
import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';

const imageKey = import.meta.env.VITE_IMAGE_KEY;

const StockItemPopup = ({ isPopupOpen, closePopup, product }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <>
      <OverlayPopup onClick={handleBackdropClick}>
        <div className={`popup-container ${isPopupOpen ? 'open' : 'closed'}`}>
          <div onClick={closePopup} className="icon-close">
            <img src={cross} alt="close" />
          </div>
          <div className="product-popup-content">
            <div className="product-popup-main-content">
              <div className="product-popup-main-content-img">
                <img
                  src={
                    product.image
                      ? `${imageKey}/${product.image}`
                      : iceCreamPlaceholder
                  }
                  alt={product.title}
                />
              </div>
              <div className="product-popup-main-content-text">
                <h3>{product.title}</h3>
                <p className="flavor-category">{product.category}</p>
                <p className="flavor-description">{product.description}</p>
                <div className="flavor-size">
                  <p>Poids : 450 g</p>
                </div>
              </div>
            </div>
            <div className="price-and-quantity">
              <div className="price">
                <p>{product.pricePerUnit} €</p>
              </div>
              <div className="quantity">
                <p>{product.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </OverlayPopup>
    </>
  );
};

export default StockItemPopup;
