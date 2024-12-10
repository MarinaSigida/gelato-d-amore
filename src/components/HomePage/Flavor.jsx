import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../features/basketSlice';
import { useState } from 'react';
import { toast } from 'sonner';

const imageKey = import.meta.env.VITE_IMAGE_KEY;

const Flavor = ({
  id,
  title,
  image,
  pricePerUnit,
  category,
  quantity,
  onClick,
  onAddToBasket,
}) => {
  const [quantityToBuy, setQuantityToBuy] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantityToBuy((prevQuantity) => {
      if (prevQuantity < quantity) {
        return prevQuantity + 1;
      } else {
        toast.error(
          `Vous ne pouvez pas ajouter plus de ${quantity} glaces ${title} à votre panier`
        );
        return prevQuantity;
      }
    });
  };

  const handleDecrement = () => {
    if (quantityToBuy > 1) {
      setQuantityToBuy((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToBasket = () => {
    const item = { id, title, image, price: pricePerUnit, quantityToBuy };
    dispatch(addToBasket(item));
    onAddToBasket(item);
    setQuantityToBuy(1);
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
      <p className="flavor-category" onClick={onClick}>
        {category}
      </p>
      <div className="flavor-size" onClick={onClick}>
        <p>Poids : 450 g</p>
      </div>

      <div className="price-and-quantity">
        <div className="price">
          <p>{pricePerUnit * quantityToBuy} €</p>
        </div>
        <div className="quantity">
          <p>{quantityToBuy}</p>
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
      <button className="buy-btn" onClick={handleAddToBasket}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default Flavor;
