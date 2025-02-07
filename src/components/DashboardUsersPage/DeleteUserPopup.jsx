import { useDispatch } from 'react-redux';
import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import { deleteUser } from '../../features/usersDataSlice';
import { fetchAllUsers } from '../../features/usersDataSlice';
import cross from '../../assets/images/close.png';
import { toast } from 'sonner';

const DeleteUserPopup = ({ isPopupOpen, closePopup, email, userId }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteUser(userId)).unwrap();
      toast.success('Utilisateur supprimé avec succés.');
      dispatch(fetchAllUsers());
      closePopup();
    } catch (err) {
      toast.error("Échec de suppression de l'utilisateur.");
    }
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  if (!isPopupOpen) return null;

  return (
    <OverlayPopup onClick={handleBackdropClick}>
      <div className={`popup-container ${isPopupOpen ? 'open' : 'closed'}`}>
        <div onClick={closePopup} className="icon-close">
          <img src={cross} alt="close" />
        </div>
        <div className="popup-content">
          <h3>
            Etes-vous sûr de vouloir supprimer l'utilisateur{' '}
            <span>{email}</span>?
          </h3>
          <div className="popup-buttons">
            <button onClick={handleDelete}>Oui</button>
            <button onClick={closePopup}>Non</button>
          </div>
        </div>
      </div>
    </OverlayPopup>
  );
};

export default DeleteUserPopup;
