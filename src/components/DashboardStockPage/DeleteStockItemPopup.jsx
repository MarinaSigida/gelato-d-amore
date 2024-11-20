import { useDispatch } from 'react-redux';
import { deleteStockItem } from '../../features/stockItemsSlice';
import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';
import { toast } from 'sonner';

const DeleteStockItemPopup = ({
  isPopupOpen,
  closePopup,
  itemTitle,
  itemId,
}) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteStockItem(itemId)).unwrap();
      toast.success('Article supprimé avec succés.');
      closePopup();
    } catch (err) {
      console.error('Failed to delete item:', err);
      toast.error("Échec de suppression de l'article.");
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
            Etes-vous sûr de vouloir supprimer la glace <span>{itemTitle}</span>{' '}
            ?
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

export default DeleteStockItemPopup;
