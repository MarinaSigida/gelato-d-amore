import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerDashboardUsers from '/assets/images/banner-dashboard-users.png';
import bannerDashboardUsersMobile from '/assets/images/banner-dashboard-users-mobile.png';
import bannerDashboardUsersTablet from '/assets/images/banner-dashboard-users-tablet.png';
import UserCard from '../components/DashboardUsersPage/UserCard';
import DeleteUserPopup from '../components/DashboardUsersPage/DeleteUserPopup';
import users from '../resources/users.json';

const DashboardUsers = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardUsersMobile);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedUserFirstName, setSelectedUserFirstName] = useState('');
  const [selectedUserLastName, setSelectedUserLastName] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 430) {
        setBannerImage(bannerDashboardUsersMobile);
      } else if (width <= 768) {
        setBannerImage(bannerDashboardUsersTablet);
      } else {
        setBannerImage(bannerDashboardUsers);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDeleteStockItemPopup = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  const handleDeleteClick = (firstName, lastName) => {
    setSelectedUserFirstName(firstName);
    setSelectedUserLastName(lastName);
    toggleDeleteStockItemPopup();
  };

  return (
    <div className="main">
      <Banner
        image={bannerImage}
        titleSpan="Gestion des utilisateurs"
        textColorExtra="white"
        textPosition="left"
      />
      <section className="users">
        <div className="users-list">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              mobilePhone={user.mobilePhone}
              address={user.address}
              createdAt={user.createdAt}
              updatedAt={user.updatedAt}
              role={user.role}
              onDeleteClick={() =>
                handleDeleteClick(user.firstName, user.lastName)
              }
            />
          ))}
        </div>
      </section>
      <DeleteUserPopup
        isPopupOpen={isDeletePopupOpen}
        closePopup={toggleDeleteStockItemPopup}
        firstName={selectedUserFirstName}
        lastName={selectedUserLastName}
      />
    </div>
  );
};

export default DashboardUsers;
