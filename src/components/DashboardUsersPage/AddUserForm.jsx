import { Formik, Form, Field } from 'formik';
import placeholderUser from '../../assets/images/placeholder-user.png';

const AddUserForm = () => {
  return (
    <div className="modify-user-form-wrapper">
      <div className="modify-user-form-image">
        <img src={placeholderUser} alt="default user picture" />
      </div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          mobilePhone: '',
          address: '',
          createdAt: '',
          updatedAt: '',
          role: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="modify-user-form">
            <label htmlFor="firstName">Prénom</label>
            <div className="modify-user-input">
              <Field name="firstName" type="text" placeholder="Prénom" />
            </div>

            <label htmlFor="lastName">Nom de famille</label>
            <div className="modify-user-input">
              <Field name="lastName" type="text" placeholder="Nom de famille" />
            </div>

            <label htmlFor="email">Email</label>
            <div className="modify-user-input">
              <Field name="email" type="email" placeholder="Adresse email" />
            </div>

            <label htmlFor="mobilePhone">Téléphone mobile</label>
            <div className="modify-user-input">
              <Field
                name="mobilePhone"
                type="text"
                placeholder="Numéro de téléphone"
              />
            </div>

            <label htmlFor="address">Adresse</label>
            <div className="modify-user-input">
              <Field name="address" type="text" placeholder="Adresse" />
            </div>

            <div>
              <label htmlFor="role">Rôle</label>
              <Field as="select" name="role" id="role">
                <option value="client" label="Client" />
                <option value="admin" label="Admin" />
              </Field>
            </div>

            <div className="modify-user-form-buttons">
              <button type="reset">Annuler</button>
              <button type="submit">Ajouter</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AddUserForm;
