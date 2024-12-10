import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Order from '../components/OrdersPage/Order';
import Banner from '../components/Shared/Banner';
import bannerOrders from '/assets/images/banner-orders.png';
import { fetchOrdersByUserId } from '../features/ordersSlice';
import ScrollUpButton from '../components/Shared/ScrollUpButton';

const Orders = () => {
  const { orders, loading, error, currentPage, totalPages, totalOrders } =
    useSelector((state) => state.orders);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (isAuthenticated && user && user.id) {
      dispatch(fetchOrdersByUserId({ userId: user.id, page, limit }));
    }
  }, [dispatch, isAuthenticated, user, page, limit]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

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
        <p className="orders-number">Nombre de commandes: {totalOrders}</p>
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
        {totalOrders > limit && (
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={page === 1}>
              <svg
                fill="#fff"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                transform="scale(-1 1)"
              >
                <path d="m250.606 154.389-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 0 0 0-21.213z" />
              </svg>
            </button>
            <div className="pagination-text">
              <p>
                Page {currentPage} sur {totalPages}
              </p>
            </div>
            <button onClick={handleNextPage} disabled={page === totalPages}>
              <svg
                fill="#fff"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
              >
                <path d="m250.606 154.389-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 0 0 0-21.213z" />
              </svg>
            </button>
          </div>
        )}
      </section>
      <ScrollUpButton />
    </div>
  );
};

export default Orders;
