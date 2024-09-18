import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Banner from '../components/Shared/Banner';
import bannerDashboardUsers from '/assets/images/banner-dashboard-users.png';
import bannerDashboardUsersMobile from '/assets/images/banner-dashboard-users-mobile.png';
import bannerDashboardUsersTablet from '/assets/images/banner-dashboard-users-tablet.png';
import placeholderUser from '../assets/images/placeholder-user.png';

const DashboardUserModify = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardUsersMobile);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 430) {
        setBannerImage(bannerDashboardUsersMobile);
      } else if (width <= 768) {
        setBannerImage(bannerDashboardUsersTablet);
      } else {
        setBannerImage(bannerDashboardUsers);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCancelClick = (e) => {
    e.preventDefault();
    navigate(`/dashboard/users`);
  };

  return (
    <div className="main">
      <Banner
        image={bannerImage}
        titleSpan="Modifiez l'utilisateurs"
        textColorExtra="white"
        textPosition="left"
      />
      <section className="modify-user">
        <div className="modify-user-form-wrapper">
          <div className="modify-user-form-image">
            <img src={placeholderUser} alt="default user picture" />
          </div>
          <Formik
            initialValues={{
              id: { id },
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
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Nom de famille"
                  />
                </div>

                <label htmlFor="email">Email</label>
                <div className="modify-user-input">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Adresse email"
                  />
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
export default DashboardUserModify;
