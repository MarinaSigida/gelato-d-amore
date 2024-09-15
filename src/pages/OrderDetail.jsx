import { useParams } from 'react-router-dom';
import OrderItem from '../components/OrderDetailPage/OrderItem';
import Banner from '../components/Shared/Banner';
import bannerOrders from '/assets/images/banner-orders.png';

const OrderDetail = () => {
  const { id } = useParams();
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
          <div className="order-number">
            <h3>#{id}</h3>
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
        <div className="order-items-container">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </section>
    </div>
  );
};

export default OrderDetail;
