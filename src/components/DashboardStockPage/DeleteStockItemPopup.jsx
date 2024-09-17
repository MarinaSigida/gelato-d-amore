import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';

const DeleteStockItemPopup = ({ isPopupOpen, closePopup }) => {
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
            Etes-vous sûr de vouloir supprimer la glace <span>Amande</span> ?
          </h3>
          <div className="popup-buttons">
            <button type="submit">Oui</button>
            <button onClick={closePopup}>Non</button>
          </div>
        </div>
      </div>
    </OverlayPopup>
  );
};

export default DeleteStockItemPopup;
