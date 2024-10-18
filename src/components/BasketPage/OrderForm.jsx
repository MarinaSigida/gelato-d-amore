import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserByEmail } from '../../features/userSlice';
import { createOrder } from '../../features/ordersSlice';

const OrderForm = ({ openPopup }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    navigate(`/catalog`);
  };

  const handleSubmit = async (values) => {
    const {
      email,
      firstName,
      lastName,
      mobilePhone,
      comment,
      deliveryOption,
      deliveryAddress,
    } = values;
    console.log(values);

    const userResponse = await dispatch(fetchUserByEmail(email)).unwrap();
    const userId = userResponse.id;

    const orderData = {
      userId,
      comment,
      deliveryOption,
      deliveryAddress,
      mobilePhone,
      firstName,
      lastName,
    };

    const orderResponse = await dispatch(createOrder(orderData)).unwrap();
    const orderId = orderResponse.id;

    const basketItems = items; // Fetch items from basket state (you can pass them as props)
    const orderItems = basketItems.map((item) => ({
      orderId,
      stockItemId: item.id,
      quantity: item.quantity,
    }));

    await dispatch(createOrderItems(orderItems));

    handleClearBasket();

    openPopup();
  };

  return (
    <div className="order-form-wrapper">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          mobilePhone: '',
          comment: '',
          deliveryOption: 'takeAway',
          deliveryAddress: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="order-form">
            <h3>Veuillez remplir les informations suivantes</h3>
            <div className="order-inputs">
              <label htmlFor="firstName">Informations personnelles</label>
              <div className="order-input-name">
                <div className="order-input">
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Nom"
                    required
                  />
                </div>
                <div className="order-input">
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Prénom"
                    required
                  />
                </div>
              </div>
              <label htmlFor="email">E-mail</label>
              <div className="order-input">
                <Field
                  type="email"
                  name="email"
                  placeholder="Votre e-mail"
                  required
                />
              </div>
              <label htmlFor="mobilePhone">Numéro de téléphone</label>
              <div className="order-input">
                <Field
                  type="phone"
                  name="mobilePhone"
                  placeholder="Numéro de téléphone"
                  required
                />
              </div>
              <label htmlFor="comment">Commentaire</label>
              <div className="order-input">
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Avez-vous des précisions concernant votre commande?"
                />
              </div>
              <div>
                <label htmlFor="deliveryOption">
                  Je souhaite recuperer ma commande:
                </label>
                <Field as="select" name="deliveryOption" id="option" required>
                  <option value="takeAway" label="Sur place" />
                  <option value="delivery" label="Par une livraison" />
                </Field>
              </div>
              {values.deliveryOption === 'delivery' && (
                <div>
                  <label htmlFor="deliveryAddress">Adresse de livraison</label>
                  <div className="order-input">
                    <Field
                      type="text"
                      name="deliveryAddress"
                      placeholder="Adresse de livraison"
                      required
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="order-buttons">
              <button onClick={handleCancelClick}>Annuler</button>
              <button type="submit">Commander</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default OrderForm;
