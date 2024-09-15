import lemon from '../../assets/images/flavors/lemon.png';

const OrderItem = () => {
  return (
    <div className="flavor-card basket-item-card">
      <img src={lemon} alt="Lemon" />
      <h3>Citron</h3>
      <p className="flavor-category">Fruits</p>
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
      </div>
    </div>
  );
};

export default OrderItem;
