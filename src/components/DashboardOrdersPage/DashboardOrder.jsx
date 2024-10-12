import { useNavigate } from 'react-router-dom';
import rightArrow from '../../assets/images/right-arrow.png';
import {
  statusTranslations,
  deliveryTranslations,
} from '../../utils/orderUtils';

const DashboardOrder = ({
  id,
  number,
  createdAt,
  status,
  deliveryOption,
  orderItems,
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
        <p>Date : {new Date(createdAt).toLocaleDateString()}</p>
      </div>
      <div className="order-main-info">
        <div className="order-total">
          <div>
            <p>
              Coût total :{' '}
              <span>
                {orderItems.reduce(
                  (total, item) =>
                    total + item.quantity * item.stockItemId.pricePerUnit,
                  0
                )}
                €
              </span>
            </p>
            <p>
              Quantité :{' '}
              <span>
                {(orderItems.reduce((total, item) => total + item.quantity, 0) *
                  450) /
                  1000}{' '}
                kg
              </span>
            </p>
          </div>
        </div>

        <div className="order-delivery-info">
          <p>Statut : {statusTranslations[status] || 'Statut inconnu'}</p>
          <p>
            Mode de livraison :{' '}
            {deliveryTranslations[deliveryOption] || 'Option inconnue'}
          </p>
          <p>Adresse de livraison : 22 Victor Hugo, Nice , 06000</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrder;
