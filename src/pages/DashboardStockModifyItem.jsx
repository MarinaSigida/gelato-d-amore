import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Banner from '../components/Shared/Banner';
import bannerDashboardProducts from '/assets/images/banner-dashboard-products.png';
import bannerDashboardProductsMobile from '/assets/images/banner-dashboard-products-mobile.png';
import almond from '../assets/images/flavors/almond.png';

const DashboardStockModifyItem = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardProductsMobile);
  const { id } = useParams();
  const navigate = useNavigate();

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
            <img src={almond} alt="ice cream placeholder" />
          </div>
          <Formik
            initialValues={{
              title: { id },
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
                  <Field
                    name="title"
                    type="text"
                    placeholder="Nom de la glace"
                  />
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
                  <Field
                    name="imgUrl"
                    type="text"
                    placeholder="Url de l'image"
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
