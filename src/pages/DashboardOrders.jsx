import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../features/ordersSlice';
import Banner from '../components/Shared/Banner';
import bannerDashboardOrders from '/assets/images/banner-dashboard-orders.png';
import bannerDashboardTablet from '/assets/images/banner-dashboard-orders-tablet.png';
import bannerDashboardMobile from '/assets/images/banner-dashboard-orders-mobile.png';
import DashboardOrder from '../components/DashboardOrdersPage/DashboardOrder';
import ScrollUpButton from '../components/Shared/ScrollUpButton';

const DashboardOrders = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardMobile);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const dispatch = useDispatch();
  const { orders, loading, error, currentPage, totalPages, totalOrders } =
    useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders({ page, limit }));
  }, [dispatch, page, limit]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 430) {
        setBannerImage(bannerDashboardMobile);
      } else if (width <= 768) {
        setBannerImage(bannerDashboardTablet);
      } else {
        setBannerImage(bannerDashboardOrders);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="main">
      <Banner
        image={bannerImage}
        titleSpan="Gestion des commandes"
        textPosition="right"
      />
      <section className="orders">
        <p className="orders-number">Nombre de commandes: {totalOrders}</p>

        {loading ? (
          <p>Loading...</p>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <DashboardOrder
              key={order._id}
              id={order._id}
              number={order.number}
              userId={order.userId}
              status={order.status}
              deliveryOption={order.deliveryOption}
              deliveryAddress={order.deliveryAddress}
              createdAt={order.createdAt}
              updatedAt={order.updatedAt}
              orderItems={order.orderItems}
              firstName={order.firstName}
              lastName={order.lastName}
              mobilePhone={order.mobilePhone}
              comment={order.comment}
            />
          ))
        ) : (
          <p>Vous n'avez pas encore de commandes</p>
        )}
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
      </section>
      <ScrollUpButton />
    </div>
  );
};

export default DashboardOrders;
