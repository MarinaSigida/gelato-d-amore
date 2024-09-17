import { Formik, Form, Field } from 'formik';
import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';

const AddStockItemForm = () => {
  return (
    <div className="add-stock-item-form-wrapper">
      <div className="add-stock-item-form-image">
        <img src={iceCreamPlaceholder} alt="ice cream placeholder" />
      </div>
      <Formik
        initialValues={{
          title: '',
          category: '',
          description: '',
          imgUrl: '',
          quantity: 0,
          pricePerUnit: 0,
          status: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="add-stock-item-form">
            <label htmlFor="title">Nom de la glace</label>
            <div className="add-stock-item-input">
              <Field name="title" type="text" placeholder="Nom de la glace" />
            </div>

            <div>
              <label htmlFor="category">Categorie de la glace</label>
              <Field as="select" name="category" id="option" required>
                <option value="cream" label="Crème" />
                <option value="fruits" label="Fruits" />
                <option value="berries" label="Fruits rouges" />
                <option value="nuts" label="Noix" />
              </Field>
            </div>

            <label htmlFor="description">Description</label>
            <div className="add-stock-item-input">
              <Field
                name="description"
                as="textarea"
                placeholder="Description"
              />
            </div>
            <label htmlFor="imgUrl">Url de l'image</label>
            <div className="add-stock-item-input">
              <Field name="imgUrl" type="text" placeholder="Url de l'image" />
            </div>
            <label htmlFor="quantity">Quantité</label>
            <div className="add-stock-item-input">
              <Field name="quantity" type="number" placeholder="Quantité" />
            </div>
            <label htmlFor="pricePerUnit">Prix</label>
            <div className="add-stock-item-input">
              <Field name="pricePerUnit" type="number" placeholder="Prix" />
            </div>
            <div className="add-stock-item-form-buttons">
              <button type="reset">Annuler</button>
              <button type="submit">Ajouter</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddStockItemForm;
