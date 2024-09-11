import Banner from '../components/Shared/Banner';
import bannerDashboardOrders from '/assets/images/banner-dashboard-orders.png';

const DashboardOrders = () => {
  return (
    <div className="main">
      <Banner
        image={bannerDashboardOrders}
        titleSpan="Gestion des commandes"
        titleExtra="Bienvenue Chef !"
        textPosition="right"
      />
    </div>
  );
};

export default DashboardOrders;
