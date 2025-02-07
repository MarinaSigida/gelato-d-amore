import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cancelOrder } from '../../features/ordersSlice';
import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';
import { toast } from 'sonner';

const CancelOrderPopup = ({
  isPopupOpen,
  closePopup,
  orderNumber,
  orderId,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const handleCancelOrder = async () => {
    try {
      await dispatch(cancelOrder(orderId)).unwrap();
      closePopup();
      if (user?.role === 'admin') {
        toast.success('Commande annulée avec succés.');
        navigate('/dashboard/orders');
      } else if (user?.role === 'client') {
        toast.success('Commande annulée avec succés.');
        navigate('/orders');
      } else {
        toast.success('Commande annulée avec succés.');
        navigate('/');
      }
    } catch (err) {
      toast.error("Échec d'annulation de la commande.");
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
