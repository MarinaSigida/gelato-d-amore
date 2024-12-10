import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchStockItemById } from '../../features/stockItemsSlice';
import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';

const imageKey = import.meta.env.VITE_IMAGE_KEY;

const StockItem = ({
  id,
  title,
  description,
  quantity,
  pricePerUnit,
  category,
  status,
  onClick,
  image,
  onDeleteClick,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleStockItemClick = async (e) => {
    e.preventDefault();
    await dispatch(fetchStockItemById(id));
    navigate(`/dashboard/stock/${id}`);
  };
  return (
    <div className="flavor-card basket-item-card">
      <div className="flavor-card-image">
        <img
          src={image ? `${imageKey}/${image}` : iceCreamPlaceholder}
          onClick={onClick}
          alt={title}
        />
      </div>
      <h3 className="flavor-title" onClick={onClick}>
        {title}
      </h3>
      <p className="flavor-category" onClick={onClick}>
        {category}
      </p>
      <div className="flavor-size" onClick={onClick}>
        <p>Poids : 450 g</p>
      </div>
      <div className="price-and-quantity">
        <div className="price">
          <p>{pricePerUnit} €</p>
        </div>
        <div className="quantity">
          <p>{quantity}</p>
        </div>
      </div>
      <div className="stock-item-buttons">
        <button onClick={handleStockItemClick}>Modifier</button>
        <button onClick={() => onDeleteClick(id, title)}>Supprimer</button>
      </div>
    </div>
  );
};

export default StockItem;
