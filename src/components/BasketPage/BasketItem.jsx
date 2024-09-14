import apricot from '../../assets/images/flavors/apricot.png';

const BasketItem = () => {
  return (
    <div className="flavor-card basket-item-card">
      <img src={apricot} alt="Caramel" />
      <h3>ABRICOT</h3>
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
        <div className="quantity-btn-container">
          <button className="quantity-btn">+</button>
          <button className="quantity-btn">-</button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
