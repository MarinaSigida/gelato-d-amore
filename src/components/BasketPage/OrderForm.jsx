import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserByEmail } from '../../features/userSlice';
import { createOrder } from '../../features/ordersSlice';
import { createOrderItem } from '../../features/orderItemsSlice';
import {
  updateStockItemQuantity,
  fetchStockItemById,
} from '../../features/stockItemsSlice';

const OrderForm = ({ openPopup, basketItems, handleClearBasket }) => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancelClick = (e) => {
    e.preventDefault();
    navigate(`/catalog`);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const {
        email,
        firstName,
        lastName,
        mobilePhone,
        comment,
        deliveryOption,
        deliveryAddress,
      } = values;

      const userResponse = await dispatch(fetchUserByEmail(email)).unwrap();

      const userId = userResponse._id;

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
      const orderId = orderResponse._id;

      const orderItems = basketItems.map((item) => ({
        orderId,
        stockItemId: item.id,
        quantity: item.quantity,
      }));

      await Promise.all(
        orderItems.map((item) => dispatch(createOrderItem(item)).unwrap())
      );

      await Promise.all(
        basketItems.map(async (item) => {
          const stockItem = await dispatch(
            fetchStockItemById(item.id)
          ).unwrap();
          const currentStockQuantity = stockItem.quantity;
          const newQuantity = currentStockQuantity - item.quantity;

          return dispatch(
            updateStockItemQuantity({
              id: item.id,
              updatedItem: { quantity: newQuantity },
            })
          ).unwrap();
        })
      );

      handleClearBasket();
      resetForm();
      openPopup();
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  return (
    <div className="order-form-wrapper">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: user.email,
          mobilePhone: '',
          comment: '',
          deliveryOption: 'pickup',
          deliveryAddress: '',
        }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "L'email est requis";
          }
          if (!values.lastName) {
            errors.lastName = 'Le nom est requis';
          }
          if (!values.firstName) {
            errors.firstName = 'Le prénom est requis';
          }
          if (!values.mobilePhone) {
            errors.mobilePhone = 'Le téléphone mobile est requis';
          }
          if (!values.deliveryOption) {
            errors.deliveryOption = 'Vous devez choisir un mode de livraison';
          }
          if (values.deliveryOption === 'delivery' && !values.deliveryAddress) {
            errors.deliveryAddress = "L'adresse de livraison est requise";
          }
          return errors;
        }}
      >
        {({ values, errors, touched }) => (
          <Form className="order-form">
            <h3>Veuillez remplir les informations suivantes</h3>
            <div className="order-inputs">
              <label htmlFor="firstName">Informations personnelles</label>
              <div className="order-input-name">
                <div>
                  <div className="order-input">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Nom"
                      required
                    />
                  </div>
                  {errors.lastName && touched.lastName && (
                    <p className="order-form-error">{errors.lastName}</p>
                  )}
                </div>
                <div>
                  <div className="order-input">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Prénom"
                      required
                    />
                  </div>
                  {errors.firstName && touched.firstName && (
                    <p className="order-form-error">{errors.firstName}</p>
                  )}
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
              {errors.email && touched.email && (
                <p className="order-form-error">{errors.email}</p>
              )}
              <label htmlFor="mobilePhone">Numéro de téléphone</label>
              <div className="order-input">
                <Field
                  type="phone"
                  name="mobilePhone"
                  placeholder="Numéro de téléphone"
                  required
                />
              </div>
              {errors.mobilePhone && touched.mobilePhone && (
                <p className="order-form-error">{errors.mobilePhone}</p>
              )}
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
                  <option value="pickup" label="A emporter" />
                  <option value="delivery" label="Par une livraison" />
                </Field>
              </div>
              {errors.deliveryOption && touched.deliveryOption && (
                <p className="order-form-error">{errors.deliveryOption}</p>
              )}
              {values.deliveryOption === 'delivery' && (
                <div>
                  <label htmlFor="deliveryAddress">Adresse de livraison</label>
                  <div className="order-input">
                    <Field
                      type="text"
                      name="deliveryAddress"
                      placeholder="Adresse de livraison"
                    />
                  </div>
                  {errors.deliveryAddress && touched.deliveryAddress && (
                    <p className="order-form-error">{errors.deliveryAddress}</p>
                  )}
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
