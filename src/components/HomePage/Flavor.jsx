import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';

const imageKey = import.meta.env.VITE_IMAGE_KEY;

const Flavor = ({
  id,
  title,
  image,
  description,
  quantity,
  pricePerUnit,
  category,
  createdAt,
  updatedAt,
  status,
  onClick,
}) => {
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
          <p>{pricePerUnit} €</p>
        </div>
        <div className="quantity">
          <p>1</p>
        </div>
        <div className="quantity-btn-container">
          <button className="quantity-btn">+</button>
          <button className="quantity-btn">-</button>
        </div>
      </div>
      <button className="buy-btn">Ajouter au panier</button>
    </div>
  );
};

export default Flavor;
