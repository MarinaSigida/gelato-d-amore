import { useNavigate } from 'react-router-dom';
import placeholderUser from '../../assets/images/placeholder-user.png';
import placeholderAdmin from '../../assets/images/userNew.png';

const UserCard = ({
  id,
  firstName,
  lastName,
  email,
  mobilePhone,
  address,
  createdAt,
  updatedAt,
  role,
  onDeleteClick,
}) => {
  const navigate = useNavigate();
  const handleUserClick = (e) => {
    e.preventDefault();
    navigate(`/dashboard/users/${id}`);
  };
  return (
    <div className="user-card">
      <div>
        <div className="user-card-image">
          <img
            src={role === 'admin' ? placeholderAdmin : placeholderUser}
            alt={role === 'admin' ? 'Admin picture' : 'User picture'}
          />
        </div>
        <div className="user-card-content">
          <h3>
            {firstName} {lastName}
          </h3>
          <p>{email}</p>
          <p>{mobilePhone}</p>
          <p>{address}</p>
        </div>
      </div>
      <div className="user-card-buttons">
        <button onClick={handleUserClick}>Modifier</button>
        <button onClick={() => onDeleteClick(firstName, lastName)}>
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default UserCard;
