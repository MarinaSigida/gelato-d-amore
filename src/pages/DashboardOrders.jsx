import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerDashboardOrders from '/assets/images/banner-dashboard-orders.png';
import bannerDashboardTablet from '/assets/images/banner-dashboard-orders-tablet.png';
import bannerDashboardMobile from '/assets/images/banner-dashboard-orders-mobile.png';
import DashboardOrder from '../components/DashboardOrdersPage/OrderDashboard';
import ordersData from '../resources/orders.json';

const DashboardOrders = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardMobile);

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
        {ordersData.map((order) => (
          <DashboardOrder
            key={order.id}
            id={order.id}
            number={order.number}
            userId={order.userId}
            status={order.status}
            deliveryOption={order.deliveryOption}
            createdAt={order.createdAt}
            updatedAt={order.updatedAt}
          />
        ))}
      </section>
    </div>
  );
};

export default DashboardOrders;
