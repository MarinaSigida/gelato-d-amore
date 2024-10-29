import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cancelOrder } from '../../features/ordersSlice';
import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';

const CancelOrderPopup = ({
  isPopupOpen,
  closePopup,
  orderNumber,
  orderId,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCancelOrder = async () => {
    console.log(orderId);
    try {
      await dispatch(cancelOrder(orderId)).unwrap();
      closePopup();
      navigate('/orders');
    } catch (err) {
      console.error('Failed to delete order:', err);
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
            Etes-vous sûr de vouloir annuler la commande{' '}
            <span>#{orderNumber}</span> ?
          </h3>
          <div className="popup-buttons">
            <button onClick={handleCancelOrder}>Oui</button>
            <button onClick={closePopup}>Non</button>
          </div>
        </div>
      </div>
    </OverlayPopup>
  );
};

export default CancelOrderPopup;
