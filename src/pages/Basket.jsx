import Banner from '../components/Shared/Banner';
import bannerBasket from '/assets/images/banner-basket.png';

const Basket = () => {
  return (
    <div className="main">
      <Banner image={bannerBasket} />
    </div>
  );
};

export default Basket;
