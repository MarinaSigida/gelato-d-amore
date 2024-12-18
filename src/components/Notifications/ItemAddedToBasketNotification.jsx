import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';
import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';

const imageKey = import.meta.env.VITE_IMAGE_KEY;

const ItemAddedToBasketNotification = ({ isPopupOpen, closePopup, item }) => {
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
                    item.image
                      ? `${imageKey}/${item.image}`
                      : iceCreamPlaceholder
                  }
                  alt={item.title}
                />
              </div>
              <div className="product-popup-main-content-text">
                <div className="item-add-to-basket-text">
                  <span>{item.title}</span> a été ajouté à votre panier !
                  <br />
                  Quantité : <span>{item.quantity}</span>
                  <br />
                  Montant total : <span>{item.quantity * item.price} €</span>
                </div>
                <div className="go-to-basket-btn-container">
                  <button onClick={closePopup}>Fermer</button>

                  <a href="/basket" className="go-to-basket-btn">
                    <svg className="icon" alt="basket">
                      <use
                        xlinkHref={`${
                          import.meta.env.BASE_URL
                        }sprite.svg#basket`}
                      ></use>
                    </svg>
                    <p>Panier</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OverlayPopup>
    </>
  );
};

export default ItemAddedToBasketNotification;
