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
  deliveryAddress,
  firstName,
  lastName,
  mobilePhone,
  comment,
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
              <span className="info-bold">
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
              <span className="info-bold">
                {(orderItems.reduce((total, item) => total + item.quantity, 0) *
                  450) /
                  1000}{' '}
                kg
              </span>
            </p>
          </div>
        </div>

        <div className="order-delivery-info">
          <p className="info-bold">
            {firstName} {lastName}, {mobilePhone}
          </p>
          <p>
            Statut :{' '}
            <span className="info-bold">
              {' '}
              {statusTranslations[status] || 'Statut inconnu'}
            </span>{' '}
          </p>
          <p>
            Mode de livraison :{' '}
            {deliveryTranslations[deliveryOption] || 'Option inconnue'}
          </p>
          {deliveryOption === 'delivery' && (
            <p>
              Adresse de livraison :{' '}
              <span className="info-bold">{deliveryAddress}</span>
            </p>
          )}
          {comment && <p>Commantaire: {comment}</p>}
        </div>
      </div>
    </div>
  );
};

export default DashboardOrder;
