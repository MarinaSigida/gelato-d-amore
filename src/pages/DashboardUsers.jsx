import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import bannerDashboardUsers from '/assets/images/banner-dashboard-users.png';
import bannerDashboardUsersMobile from '/assets/images/banner-dashboard-users-mobile.png';
import bannerDashboardUsersTablet from '/assets/images/banner-dashboard-users-tablet.png';
import UserCard from '../components/DashboardUsersPage/UserCard';
import DeleteUserPopup from '../components/DashboardUsersPage/DeleteUserPopup';
import users from '../resources/users.json';
import AddUserForm from '../components/DashboardUsersPage/AddUserForm';

const DashboardUsers = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardUsersMobile);
  const [isUsersListOpen, setIsUsersListOpen] = useState(true);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
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

  const toggleOpenUserList = (e) => {
    e.preventDefault();
    setIsUsersListOpen(true);
    setIsAddUserOpen(false);
  };

  const toggleOpenAddUser = (e) => {
    e.preventDefault();
    setIsUsersListOpen(false);
    setIsAddUserOpen(true);
  };

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
        <div className="stock-buttons">
          <button onClick={toggleOpenUserList}>Liste des utilisateurs</button>
          <button onClick={toggleOpenAddUser}>Ajouter un utilisateur</button>
        </div>
        {isUsersListOpen && !isAddUserOpen && (
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
        )}
        {!isUsersListOpen && isAddUserOpen && <AddUserForm />}
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
