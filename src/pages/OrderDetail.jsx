import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderById } from '../features/ordersSlice';
import { fetchUserEmailById } from '../features/userOrderSlice';
import OrderItem from '../components/OrderDetailPage/OrderItem';
import Banner from '../components/Shared/Banner';
import bannerOrders from '/assets/images/banner-orders.png';
import CancelOrderPopup from '../components/DashboardOrdersPage/CancelOrderPopup';
import { statusTranslations, deliveryTranslations } from '../utils/orderUtils';
import cross from '../assets/images/close.png';

const OrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
  const [selectedOrderNumber, setSelectedOrderNumber] = useState('');
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  const loading = useSelector((state) => state.orders.loading);
  const [userEmail, setUserEmail] = useState(null);
  const currentUser = useSelector((state) => state.user.user);

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedOrder && selectedOrder.order.userId) {
      dispatch(fetchUserEmailById(selectedOrder.order.userId)).then(
        (action) => {
          if (fetchUserEmailById.fulfilled.match(action)) {
            setUserEmail(action.payload);
          }
        }
      );
    }
  }, [selectedOrder, dispatch]);

  useEffect(() => {
    if (selectedOrder && selectedOrder.order.userId !== currentUser?.id) {
      navigate('/orders');
    }
  }, [selectedOrder, currentUser, navigate]);
  const handleGoBackClick = () => {
    navigate('/orders');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedOrder) {
    return <div>No order found</div>;
  }
  const { order, orderItems } = selectedOrder;

  const toggleCancelOrderPopup = () => {
    setIsCancelPopupOpen(!isCancelPopupOpen);
  };

  const handleCancelOrderClick = () => {
    setSelectedOrderNumber(order.number);
    toggleCancelOrderPopup();
  };

  return (
    <div className="main">
      <Banner
        image={bannerOrders}
        title="Details de votre "
        textPosition="left"
        titleSpan="commande"
        textColor={'white'}
      />
      <section className="order-detail">
        <div className="order-container">
          <div className="icon-open" onClick={handleGoBackClick}>
            <img src={cross} alt="open" />
          </div>

          <div className="order-number">
            <h3>#{order.number}</h3>
            <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="order-main-info">
            <div className="order-total">
              <div>
                <p>
                  Coût total :{' '}
                  <span className="info-bold">
                    {' '}
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
                    {' '}
                    {(orderItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    ) *
                      450) /
                      1000}{' '}
                    kg
                  </span>
                </p>
              </div>
            </div>
            <div className="order-delivery-info">
              <p className="info-bold">
                {order.firstName} {order.lastName}, {order.mobilePhone}
              </p>
              <p>
                Email :{' '}
                <span className="info-bold">
                  {userEmail || 'Email non disponible'}
                </span>
              </p>
              <p>
                Statut : {statusTranslations[order.status] || 'Statut inconnu'}
              </p>
              <p>
                Mode de livraison :{' '}
                {deliveryTranslations[order.deliveryOption] ||
                  'Option inconnue'}
              </p>
              {order.deliveryOption === 'delivery' && (
                <p>
                  Adresse de livraison :{' '}
                  <span className="info-bold">{order.deliveryAddress}</span>
                </p>
              )}
              {order.comment && <p>Commantaire: {order.comment}</p>}
            </div>
          </div>
          <div className="dashboard-order-modify-buttons">
            {/* enabled only when the status is pending */}
            <button id="confirm-btn">
              <a href="/dashboard/orders">Confirmer</a>
            </button>
            {/* to change the items in the order */}
            <button id="modify-btn">Modifier</button>
            {/* to cancel the order */}
            <button onClick={handleCancelOrderClick} id="cancel-btn">
              Annuler
            </button>
          </div>
        </div>
        <div className="order-items-container">
          {orderItems && orderItems.length > 0 ? (
            orderItems.map((item) => (
              <OrderItem
                key={item._id}
                title={item.stockItemId.title}
                category={item.stockItemId.category}
                price={item.stockItemId.pricePerUnit}
                quantity={item.quantity}
                image={item.stockItemId.image}
              />
            ))
          ) : (
            <div>Aucun article dans la commande</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OrderDetail;
