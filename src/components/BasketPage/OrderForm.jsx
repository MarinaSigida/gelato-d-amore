import { Formik, Form, Field } from 'formik';

const OrderForm = () => {
  return (
    <div className="order-form-wrapper">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          comment: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="order-form">
            <h3>Veuillez remplir les informations suivantes</h3>
            <div className="order-inputs">
              <label htmlFor="firstName">Informations personnelles</label>
              <div className="order-input-name">
                <div className="order-input">
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Prénom"
                    required
                  />
                </div>
                <div className="order-input">
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Nom"
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
                  required
                />
              </div>
              <div>
                <label htmlFor="delivery">
                  Je souhaite recuperer ma commande:
                </label>
                <Field as="select" name="delivery" id="option" required>
                  <option value="takeAway" label="Sur place" />
                  <option value="delivery" label="Par une livraison" />
                </Field>
              </div>
            </div>
            <div className="order-buttons">
              <button>
                <a href="catalog">Annuler</a>
              </button>
              <button type="submit">Commander</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default OrderForm;
