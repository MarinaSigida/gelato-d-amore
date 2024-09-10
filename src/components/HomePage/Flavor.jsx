import caramel from '../../assets/images/flavors/caramel.png';
import vanille from '../../assets/images/flavors/vanille.png';
import apricot from '../../assets/images/flavors/caramel.png';
import lemon from '../../assets/images/flavors/lemon.png';

const Flavor = () => {
  return (
    <div className="flavor-card">
      <img src={caramel} alt="Caramel" />
      <h2>CARAMEL</h2>
      <p className="category">Crème</p>
      <div className="price">
        <p>5 €</p>
      </div>
    </div>
  );
};

export default Flavor;
