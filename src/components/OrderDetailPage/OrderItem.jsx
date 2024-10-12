import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';

const imageKey = import.meta.env.VITE_IMAGE_KEY;

const OrderItem = ({ title, quantity, price, image, category }) => {
  return (
    <div className="flavor-card basket-item-card">
      <div className="flavor-card-image">
        <img
          src={image ? `${imageKey}/${image}` : iceCreamPlaceholder}
          alt={title}
        />
      </div>
      <h3>{title}</h3>
      <p className="flavor-category">{category}</p>
      <div className="flavor-size">
        <p>Poids : 450 g</p>
      </div>
      <div className="price-and-quantity">
        <div className="price">
          <p>{price * quantity} €</p>
        </div>
        <div className="quantity">
          <p>{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
