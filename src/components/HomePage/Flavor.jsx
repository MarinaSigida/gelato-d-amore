import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../features/basketSlice';
import { useState } from 'react';

const imageKey = import.meta.env.VITE_IMAGE_KEY;

const Flavor = ({
  id,
  title,
  image,
  pricePerUnit,
  category,
  onClick,
  onAddToBasket,
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handdleAddToBasket = () => {
    const item = { id, title, image, price: pricePerUnit, quantity };
    dispatch(addToBasket(item));
    onAddToBasket(item);
    setQuantity(1);
  };

  return (
    <div className="flavor-card">
      <div className="flavor-card-image">
        <img
          src={image ? `${imageKey}/${image}` : iceCreamPlaceholder}
          alt={title}
          onClick={onClick}
        />
      </div>
      <h3 className="flavor-title" onClick={onClick}>
        {title}
      </h3>
      <p className="flavor-category">{category}</p>
      <div className="flavor-size">
        <p>Poids : 450 g</p>
      </div>
      <div className="price-and-quantity">
        <div className="price">
          <p>{pricePerUnit * quantity} €</p>
        </div>
        <div className="quantity">
          <p>{quantity}</p>
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
      <button className="buy-btn" onClick={handdleAddToBasket}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default Flavor;
