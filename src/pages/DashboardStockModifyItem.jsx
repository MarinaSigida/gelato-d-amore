import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { updateStockItem } from '../features/stockItemsSlice';
import Banner from '../components/Shared/Banner';
import bannerDashboardProducts from '/assets/images/banner-dashboard-products.png';
import bannerDashboardProductsMobile from '/assets/images/banner-dashboard-products-mobile.png';
import iceCreamPlaceholder from '../assets/images/placeholder-ice-cream.png';
import { toast } from 'sonner';

const imageKey = import.meta.env.VITE_IMAGE_KEY;
const DashboardStockModifyItem = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardProductsMobile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stockItem = useSelector((state) => state.stockItems.selectedItem);
  const [stockItemData, setStockItemData] = useState(null);
  const [previewImage, setPreviewImage] = useState(iceCreamPlaceholder);

  useEffect(() => {
    if (stockItem) {
      setStockItemData(stockItem);
      setPreviewImage(
        stockItem.image ? `${imageKey}/${stockItem.image}` : iceCreamPlaceholder
      );
    }
  }, [stockItem]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBannerImage(bannerDashboardProductsMobile);
      } else {
        setBannerImage(bannerDashboardProducts);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCancelClick = (e) => {
    e.preventDefault();
    navigate(`/dashboard/stock`);
  };

  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Update the preview image
        setFieldValue('image', file); // Set the selected file for Formik
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      setPreviewImage(iceCreamPlaceholder); // Reset to placeholder if no file is selected
    }
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('category', values.category);
    formData.append('description', values.description);
    formData.append('quantity', values.quantity);
    formData.append('pricePerUnit', values.pricePerUnit);
    formData.append('status', values.status);
    formData.append('image', values.image);
    try {
      await dispatch(
        updateStockItem({ id: stockItem._id, updatedItem: formData })
      ).unwrap();
      toast.success('Article modifié avec succès !');
      navigate('/dashboard/stock');
    } catch (error) {
      console.error('Failed to update item:', error);
      toast.error(`Échec de modification de l'article.`);
    }
  };

  return (
    <div className="main">
      <Banner
        image={bannerImage}
        titleSpan="Modifiez l'article"
        textColorExtra="white"
        textPosition="left"
      />
      <section className="modify-stock-item">
        <div className="add-stock-item-form-wrapper">
          <div className="add-stock-item-form-image">
            <img src={previewImage} alt="Stock Item" />
          </div>
          <Formik
            initialValues={{
              title: stockItemData.title || '',
              category: stockItemData.category || '',
              description: stockItemData.description || '',
              quantity: stockItemData.quantity || 0,
              pricePerUnit: stockItemData.pricePerUnit || 0,
              status: stockItemData.status || '',
              image: stockItemData.image || '',
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
                  <Field
                    name="title"
                    type="text"
                    placeholder="Nom de la glace"
                  />
                </div>
                {errors.title && touched.title && (
                  <p className="form-error">{errors.title}</p>
                )}

                <div>
                  <label htmlFor="category">Catégorie de la glace</label>
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
                    onChange={(event) => {
                      handleImageChange(event, setFieldValue);
                      setFieldValue('image', event.currentTarget.files[0]);
                    }}
                    onBlur={() => setFieldValue('touched.image', true)}
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
                  <button onClick={handleCancelClick}>Annuler</button>
                  <button type="submit">Modifier</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};
export default DashboardStockModifyItem;
