import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import BasketItem from '../components/BasketPage/BasketItem';
import OrderForm from '../components/BasketPage/OrderForm';
import bannerBasket from '/assets/images/banner-basket.png';
import bannerBasketMobile from '/assets/images/banner-basket-mobile.png';

const Basket = () => {
  const [bannerImage, setBannerImage] = useState(bannerBasketMobile);

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
                  <p>50€</p>
                </div>
              </div>
              <div className="basket-total-quantity">
                <p>Quantité</p>
                <div className="quantity">
                  <p>2kg</p>
                </div>
              </div>
            </div>
            <div className="basket-items">
              <BasketItem />
              <BasketItem />
              <BasketItem />
              <BasketItem />
            </div>
          </div>
          <div className="basket-form">
            <OrderForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Basket;
