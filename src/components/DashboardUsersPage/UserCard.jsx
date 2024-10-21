import { useNavigate } from 'react-router-dom';
import placeholderUser from '../../assets/images/placeholder-user.png';
import placeholderAdmin from '../../assets/images/userNew.png';

const UserCard = ({ id, email, role, onDeleteClick }) => {
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
          <p>{email}</p>
          <p>
            Rôle :<span className="info-bold"> {role}</span>
          </p>
        </div>
      </div>
      <div className="user-card-buttons">
        <button onClick={handleUserClick}>Modifier</button>
        <button onClick={() => onDeleteClick(email)}>Supprimer</button>
      </div>
    </div>
  );
};

export default UserCard;
