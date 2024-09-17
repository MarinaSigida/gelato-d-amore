import { useNavigate } from 'react-router-dom';
import almond from '../../assets/images/flavors/almond.png';

const StockItem = ({
  id,
  title,
  description,
  quantity,
  pricePerUnit,
  category,
  status,
  onDeleteClick,
}) => {
  const navigate = useNavigate();
  const handleStockItemClick = (e) => {
    e.preventDefault();
    navigate(`/dashboard/stock/${id}`);
  };
  return (
    <div className="flavor-card basket-item-card">
      <img src={almond} alt="Lemon" />
      <h3>{title}</h3>
      <p className="flavor-category">{category}</p>
      <div className="flavor-size">
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
        <button onClick={() => onDeleteClick(title)}>Supprimer</button>
      </div>
    </div>
  );
};

export default StockItem;
