import { useDispatch } from 'react-redux';
import {
  updateBasketQuantity,
  removeFromBasket,
} from '../../features/basketSlice';
import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';
import trashBin from '../../assets/images/trash-bin.png';

const imageKey = import.meta.env.VITE_IMAGE_KEY;

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(
      updateBasketQuantity({ id: item.id, quantity: item.quantity + 1 })
    );
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(
        updateBasketQuantity({ id: item.id, quantity: item.quantity - 1 })
      );
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromBasket(item.id));
  };
  return (
    <div
      className="flavor-card basket-item-card"
      style={{ position: 'relative' }}
    >
      <div className="flavor-card-image">
        <img
          src={item.image ? `${imageKey}/${item.image}` : iceCreamPlaceholder}
          alt={item.title}
        />
      </div>
      <button onClick={handleRemoveItem} className="remove-item-container">
        <img src={trashBin} alt="remove item button" width="24" height="24" />
      </button>
      <h3>{item.title}</h3>
      <p className="flavor-category">{item.category}</p>
      <div className="flavor-size">
        <p>Poids : 450 g</p>
      </div>
      <div className="price-and-quantity">
        <div className="price">
          <p>{item.quantity * item.price} €</p>
        </div>
        <div className="quantity">
          <p>{item.quantity}</p>
        </div>
        <div className="quantity-btn-container">
          <button className="quantity-btn" onClick={handleIncrement}>
            +
          </button>
          <button className="quantity-btn" onClick={handleDecrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
