import Banner from '../components/Shared/Banner';
import bannerDashboardUsers from '/assets/images/banner-dashboard-users.png';

const DashboardUsers = () => {
  return (
    <div className="main">
      <Banner
        image={bannerDashboardUsers}
        titleSpan="Gestion des utilisateurs"
        titleExtra="Bienvenue Chef !"
        textColorExtra="white"
        textPosition="left"
      />
    </div>
  );
};

export default DashboardUsers;
