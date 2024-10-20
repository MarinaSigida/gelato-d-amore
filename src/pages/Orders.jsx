import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Order from '../components/OrdersPage/Order';
import Banner from '../components/Shared/Banner';
import bannerOrders from '/assets/images/banner-orders.png';
import { fetchOrdersByUserId } from '../features/ordersSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && user.id) {
      dispatch(fetchOrdersByUserId(user.id));
    }
    console.log('orders:', orders);
  }, [dispatch, user]);

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
        {orders.map((order) => (
          <Order
            key={order.order._id}
            id={order.order._id}
            number={order.order.number}
            userId={order.order.userId}
            status={order.order.status}
            deliveryOption={order.order.deliveryOption}
            deliveryAddress={order.order.deliveryAddress}
            createdAt={order.order.createdAt}
            updatedAt={order.order.updatedAt}
            orderItems={order.orderItems}
            firstName={order.order.firstName}
            lastName={order.order.lastName}
            mobilePhone={order.order.mobilePhone}
            comment={order.order.comment}
          />
        ))}
      </section>
    </div>
  );
};

export default Orders;
