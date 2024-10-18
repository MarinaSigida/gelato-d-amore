import { useDispatch } from 'react-redux';
import { addToBasket } from '../../features/basketSlice';
import { useState } from 'react';
import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';
import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';

const imageKey = import.meta.env.VITE_IMAGE_KEY;

const ProductPopup = ({ isPopupOpen, closePopup, product, onAddToBasket }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handdleAddToBasket = () => {
    const item = {
      id: product._id,
      title: product.title,
      image: product.image,
      price: product.pricePerUnit,
      quantity,
    };
    dispatch(addToBasket(item));
    onAddToBasket(item);
    closePopup();
    setQuantity(1);
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
                <p>{product.pricePerUnit * quantity} €</p>
              </div>
              <div className="quantity">
                <p>{quantity}</p>
              </div>
              <div className="quantity-btn-container">
                <button className="quantity-btn" onClick={handleIncrement}>
                  +
                </button>
                <button className="quantity-btn" onClick={handleDecrement}>
                  -
                </button>
              </div>
            </div>
            <button
              className="buy-btn"
              onClick={handdleAddToBasket}
              style={{ padding: '8px 14px' }}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </OverlayPopup>
    </>
  );
};

export default ProductPopup;
