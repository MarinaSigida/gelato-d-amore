import Banner from '../components/Shared/Banner';
import bannerDashboardProducts from '/assets/images/banner-dashboard-products.png';

const DashboardProducts = () => {
  return (
    <div className="main">
      <Banner
        image={bannerDashboardProducts}
        titleSpan="Gestion des stocks"
        titleExtra="Bienvenue Chef !"
        textColorExtra="white"
        textPosition="left"
      />
    </div>
  );
};

export default DashboardProducts;
