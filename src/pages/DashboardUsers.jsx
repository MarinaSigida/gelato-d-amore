import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllUsers } from '../features/usersDataSlice';
import Banner from '../components/Shared/Banner';
import bannerDashboardUsers from '/assets/images/banner-dashboard-users.png';
import bannerDashboardUsersMobile from '/assets/images/banner-dashboard-users-mobile.png';
import bannerDashboardUsersTablet from '/assets/images/banner-dashboard-users-tablet.png';
import UserCard from '../components/DashboardUsersPage/UserCard';
import DeleteUserPopup from '../components/DashboardUsersPage/DeleteUserPopup';
import ScrollUpButton from '../components/Shared/ScrollUpButton';

const DashboardUsers = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardUsersMobile);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedUserEmail, setSelectedUserEmail] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.usersData);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

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

  const toggleDeleteUserPopup = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  const handleDeleteClick = (id, email) => {
    setSelectedUserId(id);
    setSelectedUserEmail(email);
    toggleDeleteUserPopup();
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
              key={user._id}
              id={user._id}
              email={user.email}
              role={user.role}
              onDeleteClick={() => handleDeleteClick(user._id, user.email)}
            />
          ))}
        </div>
      </section>
      <DeleteUserPopup
        isPopupOpen={isDeletePopupOpen}
        closePopup={toggleDeleteUserPopup}
        email={selectedUserEmail}
        userId={selectedUserId}
      />
      <ScrollUpButton />
    </div>
  );
};

export default DashboardUsers;
