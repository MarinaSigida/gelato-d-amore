import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateOrder } from '../../features/ordersSlice';
import { Formik, Form, Field } from 'formik';
import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';
import { toast } from 'sonner';

const ModifyOrderPopup = ({ isPopupOpen, closePopup }) => {
  const dispatch = useDispatch();
  const selectedOrder = useSelector(
    (state) => state.orders.selectedOrder.order
  );
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleSubmit = async (values) => {
    const updatedOrder = {
      number: selectedOrder.number,
      userId: selectedOrder.userId,
      status: values.status,
      deliveryOption: values.deliveryOption,
      firstName: values.firstName,
      lastName: values.lastName,
      comment: values.comment,
      deliveryAddress: values.deliveryAddress,
      mobilePhone: values.mobilePhone,
    };

    try {
      await dispatch(
        updateOrder({ id: selectedOrder._id, updatedOrder })
      ).unwrap();
      toast.success('Commande modifiée avec succès !');

      closePopup();
    } catch (err) {
      toast.error(`Échec de modification de commande.`);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };
  if (!isPopupOpen) return null;

  return (
    <OverlayPopup onClick={handleBackdropClick}>
      <div
        className={`popup-container order-form ${
          isPopupOpen ? 'open' : 'closed'
        }`}
      >
        <div onClick={closePopup} className="icon-close">
          <img src={cross} alt="close" />
        </div>
        <div className="popup-content-modify-order-form">
          {selectedOrder && (
            <Formik
              initialValues={{
                status: selectedOrder.status,
                deliveryOption: selectedOrder.deliveryOption,
                firstName: selectedOrder.firstName,
                lastName: selectedOrder.lastName,
                comment: selectedOrder.comment,
                deliveryAddress: selectedOrder.deliveryAddress,
                mobilePhone: selectedOrder.mobilePhone,
              }}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="modify-order-form">
                  <label htmlFor="status">Status de la commande</label>
                  <div>
                    <Field as="select" name="status" required>
                      <option value="pending" label="En attente" />
                      <option value="processing" label="En cours" />
                      <option value="shipped" label="Expédiée" />
                      <option value="canceled" label="Annulée" />
                    </Field>
                  </div>
                  <a
                    className="info-bold"
                    onClick={() =>
                      setShowAdditionalFields(!showAdditionalFields)
                    }
                  >
                    {showAdditionalFields
                      ? 'Masquer  infos'
                      : "Modifier d'autres infos"}
                  </a>
                  {showAdditionalFields && (
                    <div className="modify-order-form-other-info">
                      <label htmlFor="deliveryOption">
                        Option de livraison
                      </label>
                      <div>
                        <Field as="select" name="deliveryOption" required>
                          <option value="delivery" label="Livraison" />
                          <option value="pickup" label="Retrait" />
                        </Field>
                      </div>

                      <label htmlFor="lastName">Nom</label>
                      <div className="modify-order-form-input">
                        <Field name="lastName" type="text" placeholder="Nom" />
                      </div>

                      <label htmlFor="firstName">Prénom</label>
                      <div className="modify-order-form-input">
                        <Field
                          name="firstName"
                          type="text"
                          placeholder="Prénom"
                        />
                      </div>

                      <label htmlFor="deliveryAddress">
                        Adresse de livraison
                      </label>
                      <div className="modify-order-form-input">
                        <Field
                          name="deliveryAddress"
                          as="textarea"
                          placeholder="Adresse de livraison"
                        />
                      </div>

                      <label htmlFor="mobilePhone">Numéro de téléphone</label>
                      <div className="modify-order-form-input">
                        <Field
                          name="mobilePhone"
                          type="tel"
                          placeholder="Numéro de téléphone"
                        />
                      </div>
                    </div>
                  )}

                  <div className="modify-order-form-buttons">
                    <button type="submit">Modifier</button>
                    <button onClick={closePopup}>Annuler</button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </OverlayPopup>
  );
};

export default ModifyOrderPopup;
