import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Order from '../components/OrdersPage/Order';
import Banner from '../components/Shared/Banner';
import bannerOrders from '/assets/images/banner-orders.png';
import { fetchOrdersByUserId } from '../features/ordersSlice';
import ScrollUpButton from '../components/Shared/ScrollUpButton';

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  useLayoutEffect(() => {
    if (isAuthenticated && user && user.id) {
      dispatch(fetchOrdersByUserId(user.id));
    }
  }, [dispatch, isAuthenticated, user]);

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
        {loading ? (
          <p>Loading...</p>
        ) : orders.length > 0 ? (
          orders.map((order) =>
            order && order.order && order.order._id ? (
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
            ) : null
          )
        ) : (
          <p>Vous n'avez pas encore de commandes</p>
        )}
      </section>
      <ScrollUpButton />
    </div>
  );
};

export default Orders;
