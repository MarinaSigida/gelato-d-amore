import caramel from '../../assets/images/flavors/caramel.png';
import vanille from '../../assets/images/flavors/vanille.png';
import apricot from '../../assets/images/flavors/caramel.png';
import lemon from '../../assets/images/flavors/lemon.png';

const Flavor = ({
  id,
  title,
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
      <img src={caramel} alt={title} onClick={onClick} />
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
