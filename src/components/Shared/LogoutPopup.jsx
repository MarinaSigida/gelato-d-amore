import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/userSlice';
import { clearBasket } from '../../features/basketSlice';
import { clearOrders } from '../../features/ordersSlice';
import { OverlayPopup } from './OverlayPopup.styled';
import cross from '../../assets/images/close.png';

const LogoutPopup = ({ isPopupOpen, closePopup }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearBasket());
    dispatch(clearOrders());
    closePopup();
    navigate('/');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const toggleLogoutPopup = () => {
    setIsLogoutPopupOpen(!isLogoutPopupOpen);
  };

  if (!isPopupOpen) return null;

  return (
    <OverlayPopup onClick={handleBackdropClick}>
      <div className={`popup-container ${isPopupOpen ? 'open' : 'closed'}`}>
        <div onClick={closePopup} className="icon-close">
          <img src={cross} alt="close" />
        </div>
        <div className="popup-content">
          <h3>Etes-vous sûr de vouloir vous déconnecter ?</h3>
          <div className="popup-buttons">
            <button onClick={handleLogout}>Oui</button>
            <button onClick={closePopup}>Non</button>
          </div>
        </div>
      </div>
    </OverlayPopup>
  );
};

export default LogoutPopup;
