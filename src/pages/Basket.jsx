import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../features/basketSlice';
import { fetchStockItems } from '../features/stockItemsSlice';

import SignInPopup from '../components/BasketPage/SignInPopup';
import Banner from '../components/Shared/Banner';
import BasketItem from '../components/BasketPage/BasketItem';
import bannerBasket from '/assets/images/banner-basket.png';
import bannerBasketMobile from '/assets/images/banner-basket-mobile.png';
import ScrollUpButton from '../components/Shared/ScrollUpButton';

const Basket = () => {
  const [bannerImage, setBannerImage] = useState(bannerBasketMobile);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.basket
  );
  const stockItems = useSelector((state) => state.stockItems.items);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  useEffect(() => {
    if (!stockItems.length) {
      dispatch(fetchStockItems());
    }
  }, [dispatch, stockItems.length]);

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

  const handlePlaceOrder = () => {
    if (!user) {
      setIsPopupOpen(true);
    } else {
      navigate('/place-order');
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="main">
      <Banner image={bannerImage} />
      <section className="basket">
        <h2 className="basket-title">
          bienvenue dans votre <span>panier</span>!
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
                items.map((item) => {
                  const stockItem = stockItems.find(
                    (stock) => stock._id === item.id
                  );
                  return (
                    <BasketItem
                      key={item.id}
                      item={item}
                      stockItem={stockItem}
                    />
                  );
                })
              ) : (
                <div className="empty-basket-message">
                  <p>Votre panier est vide.</p>
                </div>
              )}
            </div>
            {items.length > 0 && (
              <div>
                <button onClick={handlePlaceOrder}>Passer commande</button>
              </div>
            )}
          </div>
        </div>
      </section>
      {isPopupOpen && (
        <SignInPopup isPopupOpen={isPopupOpen} closePopup={handleClosePopup} />
      )}
      <ScrollUpButton />
    </div>
  );
};

export default Basket;
