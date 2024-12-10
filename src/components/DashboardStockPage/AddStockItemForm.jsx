import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addStockItem } from '../../features/stockItemsSlice';
import iceCreamPlaceholder from '../../assets/images/placeholder-ice-cream.png';
import { toast } from 'sonner';

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
      toast.success('Article ajouté avec succès !');
      resetForm();
      setPreviewImage(iceCreamPlaceholder);
      window.location.reload(); //refresh the page
    } catch (error) {
      console.error('Failed to add item:', error);
      toast.error(`Échec d'ajout de l'article.`);
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
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Le nom est requis';
          }
          if (!values.category) {
            errors.category = 'La catégorie est requise';
          }
          if (!values.description) {
            errors.description = 'La description est requise';
          }
          if (!values.image || !(values.image instanceof File)) {
            errors.image = 'Veuillez télécharger une image.';
          }
          if (!values.quantity || values.quantity === 0) {
            errors.quantity = 'La quantité est requise';
          } else if (values.quantity < 0) {
            errors.quantity = 'La quantité ne peut pas être négative';
          }
          if (!values.pricePerUnit || values.pricePerUnit === 0) {
            errors.pricePerUnit = 'Le prix est requis';
          } else if (values.pricePerUnit < 0) {
            errors.pricePerUnit = 'Le prix ne peut pas être négatif';
          }
          return errors;
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="add-stock-item-form">
            <label htmlFor="title">Nom de la glace</label>
            <div className="add-stock-item-input">
              <Field name="title" type="text" placeholder="Nom de la glace" />
            </div>
            {errors.title && touched.title && (
              <p className="form-error">{errors.title}</p>
            )}

            <div>
              <label htmlFor="category">Categorie de la glace</label>
              <Field as="select" name="category" id="option" required>
                <option value="Crème" label="Crème" />
                <option value="Fruits" label="Fruits" />
                <option value="Fruits rouges" label="Fruits rouges" />
                <option value="Noix" label="Noix" />
              </Field>
            </div>
            {errors.category && touched.category && (
              <p className="form-error">{errors.category}</p>
            )}

            <label htmlFor="description">Description</label>
            <div className="add-stock-item-input">
              <Field
                name="description"
                as="textarea"
                placeholder="Description"
              />
            </div>
            {errors.description && touched.description && (
              <p className="form-error">{errors.description}</p>
            )}

            <label htmlFor="image">Image</label>
            <div className="add-stock-item-input">
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(event, setFieldValue)}
              />
            </div>
            {errors.image && touched.image && (
              <p className="form-error">{errors.image}</p>
            )}

            <label htmlFor="quantity">Quantité</label>
            <div className="add-stock-item-input">
              <Field
                name="quantity"
                type="number"
                min="0"
                placeholder="Quantité"
              />
            </div>
            {errors.quantity && touched.quantity && (
              <p className="form-error">{errors.quantity}</p>
            )}

            <label htmlFor="pricePerUnit">Prix</label>
            <div className="add-stock-item-input">
              <Field
                name="pricePerUnit"
                type="number"
                min="0"
                placeholder="Prix"
              />
            </div>
            {errors.pricePerUnit && touched.pricePerUnit && (
              <p className="form-error">{errors.pricePerUnit}</p>
            )}

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
