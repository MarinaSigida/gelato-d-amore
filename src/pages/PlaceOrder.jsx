import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../features/basketSlice';
import OrderPlacedPopup from '../components/BasketPage/OrderPlacedPopup';
import Banner from '../components/Shared/Banner';
import BasketItem from '../components/BasketPage/BasketItem';
import OrderForm from '../components/BasketPage/OrderForm';
import bannerBasket from '/assets/images/banner-basket.png';
import bannerBasketMobile from '/assets/images/banner-basket-mobile.png';

const PlaceOrder = () => {
  const [bannerImage, setBannerImage] = useState(bannerBasketMobile);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.basket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBannerImage(bannerBasketMobile);
      } else {
        setBannerImage(bannerBasket);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="main">
      <Banner image={bannerImage} />
      <section className="basket">
        <h2 className="basket-title">
          Completez votre <span>commande</span>
        </h2>
        <div className="basket-content">
          <div className="basket-items-total">
            <div className="basket-total">
              <div className="basket-total-price">
                <p>Coût total</p>
                <div className="price">
                  <p>{totalAmount} €</p>
                </div>
              </div>
              <div className="basket-total-quantity">
                <p>Quantité</p>
                <div className="quantity">
                  <p>{(totalQuantity * 450) / 1000} kg</p>
                </div>
              </div>
              {items.length > 0 && (
                <div>
                  <button
                    className="empty-basket-button"
                    onClick={handleClearBasket}
                  >
                    <p>Vider le panier</p>
                  </button>
                </div>
              )}
            </div>
            <div className="basket-items">
              {items.length > 0 ? (
                items.map((item) => <BasketItem key={item.id} item={item} />)
              ) : (
                <div className="empty-basket-message">
                  <p>Votre panier est vide.</p>
                </div>
              )}
            </div>
          </div>
          <div className="basket-form">
            <OrderForm openPopup={openPopup} />
          </div>
        </div>
      </section>
      {isPopupOpen && (
        <OrderPlacedPopup isPopupOpen={isPopupOpen} closePopup={closePopup} />
      )}
    </div>
  );
};

export default PlaceOrder;
