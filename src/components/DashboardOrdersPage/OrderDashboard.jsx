import { useNavigate } from 'react-router-dom';
import rightArrow from '../../assets/images/right-arrow.png';

const DashboardOrder = ({
  id,
  number,
  userId,
  createdAt,
  updateAt,
  status,
  deliveryOption,
}) => {
  const navigate = useNavigate();
  const handleOrderClick = (e) => {
    e.preventDefault();
    navigate(`/dashboard/orders/${id}`);
  };

  return (
    <div onClick={handleOrderClick} className="order-container">
      <div className="icon-open">
        <img src={rightArrow} alt="open" />
      </div>
      <div className="order-number">
        <h3>#{number}</h3>
        <p>Date : {createdAt}</p>
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
          <p>Statut : {status}</p>
          <p>Mode de livraison : {deliveryOption}</p>
          <p>Adresse de livraison : 22 Victor Hugo, Nice , 06000</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrder;
