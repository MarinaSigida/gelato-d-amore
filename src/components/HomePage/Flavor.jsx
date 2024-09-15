import caramel from '../../assets/images/flavors/caramel.png';
import vanille from '../../assets/images/flavors/vanille.png';
import apricot from '../../assets/images/flavors/caramel.png';
import lemon from '../../assets/images/flavors/lemon.png';

const Flavor = () => {
  return (
    <div className="flavor-card">
      <img src={caramel} alt="Caramel" />
      <h3>CARAMEL</h3>
      <p className="flavor-category">Crème</p>
      <div className="flavor-size">
        <p>Poids : 450 g</p>
      </div>
      <div className="price-and-quantity">
        <div className="price">
          <p>10 €</p>
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