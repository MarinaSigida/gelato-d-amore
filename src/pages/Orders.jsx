import Banner from '../components/Shared/Banner';
//import bannerOrders from '/assets/images/banner-orders.png';
import bannerOrders from '/assets/images/banner-orders.png';

const Orders = () => {
  return (
    <div className="main">
      <Banner
        image={bannerOrders}
        title="Voici vos commandes"
        textColor="white"
        textPosition="left"
      />
    </div>
  );
};

export default Orders;
