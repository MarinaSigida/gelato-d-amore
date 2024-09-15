import { useNavigate } from 'react-router-dom';
import rightArrow from '../../assets/images/right-arrow.png';

const Order = ({ orderId, number }) => {
  const navigate = useNavigate();
  const handleOrderClick = (e) => {
    e.preventDefault();
    navigate(`/orders/${orderId}`);
  };

  return (
    <div onClick={handleOrderClick} className="order-container">
      <div className="icon-open">
        <img src={rightArrow} alt="open" />
      </div>
      <div className="order-number">
        <h3>#{number}</h3>
        <p>Date : 01.12.2024</p>
      </div>
      <div className="order-main-info">
        <div className="order-total">
          <div>
            <p>
              Coût total : <span>50€</span>
            </p>
            <p>
              Quantité : <span>2kg</span>
            </p>
          </div>
        </div>

        <div className="order-delivery-info">
          <p>Statut : Confirmé</p>
          <p>Mode de livraison : A domicile</p>
          <p>Adresse de livraison : 22 Victor Hugo, Nice , 06000</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
