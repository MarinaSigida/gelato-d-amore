import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../features/basketSlice';
import SignInPopup from '../components/BasketPage/SignInPopup';
import Banner from '../components/Shared/Banner';
import BasketItem from '../components/BasketPage/BasketItem';
import bannerBasket from '/assets/images/banner-basket.png';
import bannerBasketMobile from '/assets/images/banner-basket-mobile.png';

const Basket = () => {
  const [bannerImage, setBannerImage] = useState(bannerBasketMobile);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.basket
  );
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
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

  const handlePlaceOrder = () => {
    console.log(user);
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
                items.map((item) => <BasketItem key={item.id} item={item} />)
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
    </div>
  );
};

export default Basket;