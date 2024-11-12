import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById } from '../features/usersDataSlice';
import { fetchOrderById } from '../features/ordersSlice';
import OrderItem from '../components/OrderDetailPage/OrderItem';
import Banner from '../components/Shared/Banner';
import bannerDashboardOrders from '/assets/images/banner-dashboard-orders.png';
import bannerDashboardTablet from '/assets/images/banner-dashboard-orders-tablet.png';
import bannerDashboardMobile from '/assets/images/banner-dashboard-orders-mobile.png';
import CancelOrderPopup from '../components/DashboardOrdersPage/CancelOrderPopup';
import ModifyOrderPopup from '../components/DashboardOrdersPage/ModifyOrderPopup';
import { statusTranslations, deliveryTranslations } from '../utils/orderUtils';
import goBack from '../assets/images/turn-back.png';

const DashboardOrderModify = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardMobile);
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
  const [isModifyPopupOpen, setIsModifyPopupOpen] = useState(false);
  const [selectedOrderNumber, setSelectedOrderNumber] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  const loading = useSelector((state) => state.orders.loading);
  const user = useSelector((state) => state.usersData.user);

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    console.log('selectedOrder', selectedOrder);

    if (selectedOrder && selectedOrder.order.userId) {
      dispatch(fetchUserById(selectedOrder.order.userId));
    }
  }, [selectedOrder, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 430) {
        setBannerImage(bannerDashboardMobile);
      } else if (width <= 768) {
        setBannerImage(bannerDashboardTablet);
      } else {
        setBannerImage(bannerDashboardOrders);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGoBackClick = () => {
    navigate('/dashboard/orders');
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
  const toggleModifyOrderPopup = () => {
    setIsModifyPopupOpen(!isModifyPopupOpen);
  };

  const handleCancelOrderClick = () => {
    setSelectedOrderNumber(order.number);
    setSelectedOrderId(order._id);
    toggleCancelOrderPopup();
  };
  const handleModifyOrderClick = () => {
    toggleModifyOrderPopup();
  };

  return (
    <div className="main">
      <Banner
        image={bannerImage}
        titleSpan="Gestion des commandes"
        textPosition="right"
      />
      <section className="order-detail">
        <div className="order-container">
          <div className="icon-open" onClick={handleGoBackClick}>
            <img src={goBack} alt="close" />
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
                  <span>
                    {' '}
                    {orderItems?.reduce(
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
                    {' '}
                    {(orderItems?.reduce(
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
                  {user && user.email ? user.email : 'Email non disponible'}
                </span>
              </p>
              <p>
                Statut :{' '}
                <span className="info-bold">
                  {statusTranslations[order.status] || 'Statut inconnu'}
                </span>
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
            {order.status != 'canceled' && (
              <button onClick={handleModifyOrderClick} id="modify-btn">
                Modifier
              </button>
            )}
            {order.status !== 'canceled' && (
              <button onClick={handleCancelOrderClick} id="cancel-btn">
                Annuler
              </button>
            )}
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
      <ModifyOrderPopup
        isPopupOpen={isModifyPopupOpen}
        closePopup={toggleModifyOrderPopup}
      />
      <CancelOrderPopup
        orderNumber={selectedOrderNumber}
        orderId={selectedOrderId}
        isPopupOpen={isCancelPopupOpen}
        closePopup={toggleCancelOrderPopup}
      />
    </div>
  );
};

export default DashboardOrderModify;
