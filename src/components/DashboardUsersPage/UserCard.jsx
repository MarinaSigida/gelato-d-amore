import placeholderUser from '../../assets/images/placeholder-user.png';

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
  return (
    <div className="user-card">
      <div className="user-card-image">
        <img src={placeholderUser} alt="default user picture" />
      </div>
      <div className="user-card-content">
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{email}</p>
        <p>{mobilePhone}</p>
        <p>{address}</p>
      </div>
      <div className="user-card-buttons">
        <button>Modifier</button>
        <button onClick={() => onDeleteClick(firstName, lastName)}>
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default UserCard;
