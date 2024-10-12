import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../features/ordersSlice';
import Banner from '../components/Shared/Banner';
import bannerDashboardOrders from '/assets/images/banner-dashboard-orders.png';
import bannerDashboardTablet from '/assets/images/banner-dashboard-orders-tablet.png';
import bannerDashboardMobile from '/assets/images/banner-dashboard-orders-mobile.png';
import DashboardOrder from '../components/DashboardOrdersPage/DashboardOrder';

const DashboardOrders = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardMobile);
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

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

  return (
    <div className="main">
      <Banner
        image={bannerImage}
        titleSpan="Gestion des commandes"
        textPosition="right"
      />
      <section className="orders">
        {orders.map((order) => (
          <DashboardOrder
            key={order._id}
            id={order._id}
            number={order.number}
            userId={order.userId}
            status={order.status}
            deliveryOption={order.deliveryOption}
            createdAt={order.createdAt}
            updatedAt={order.updatedAt}
            orderItems={order.orderItems}
          />
        ))}
      </section>
    </div>
  );
};

export default DashboardOrders;
