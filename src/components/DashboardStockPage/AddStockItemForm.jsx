import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addStockItem } from '../../features/stockItemsSlice';
import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';

const AddStockItemForm = () => {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState(iceCreamPlaceholder);

  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue('image', file);
    // Display a preview of the uploaded image
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('category', values.category);
    formData.append('description', values.description);
    formData.append('quantity', values.quantity);
    formData.append('pricePerUnit', values.pricePerUnit);
    formData.append('status', values.status);
    formData.append('image', values.image);
    try {
      await dispatch(addStockItem(formData)).unwrap();
      resetForm();
      setPreviewImage(iceCreamPlaceholder);
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };

  return (
    <div className="add-stock-item-form-wrapper">
      <div className="add-stock-item-form-image">
        <img src={previewImage} alt="ice cream placeholder" />
      </div>
      <Formik
        initialValues={{
          title: '',
          category: 'Crème',
          description: '',
          quantity: 0,
          pricePerUnit: 0,
          status: 'available',
          image: null,
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="add-stock-item-form">
            <label htmlFor="title">Nom de la glace</label>
            <div className="add-stock-item-input">
              <Field name="title" type="text" placeholder="Nom de la glace" />
            </div>

            <div>
              <label htmlFor="category">Categorie de la glace</label>
              <Field as="select" name="category" id="option" required>
                <option value="Crème" label="Crème" />
                <option value="Fruits" label="Fruits" />
                <option value="Fruits rouges" label="Fruits rouges" />
                <option value="Noix" label="Noix" />
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
            <label htmlFor="image">Image</label>
            <div className="add-stock-item-input">
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(event, setFieldValue)}
              />
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
