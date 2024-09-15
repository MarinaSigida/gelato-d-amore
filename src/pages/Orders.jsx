import Order from '../components/OrdersPage/Order';
import Banner from '../components/Shared/Banner';
import bannerOrders from '/assets/images/banner-orders.png';

const Orders = () => {
  const orderList = [
    { id: 1, number: '1020241001' },
    { id: 2, number: '1020241002' },
    { id: 3, number: '1020241003' },
    // More orders...
  ];

  return (
    <div className="main">
      <Banner
        image={bannerOrders}
        title="Voici vos "
        textPosition="left"
        titleSpan="commandes"
        textColor={'white'}
      />
      <section className="orders">
        {orderList.map((order) => (
          <Order key={order.id} orderId={order.id} number={order.number} />
        ))}
      </section>
    </div>
  );
};

export default Orders;
