import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Banner from '../components/Shared/Banner';
import bannerDashboardUsers from '/assets/images/banner-dashboard-users.png';
import bannerDashboardUsersMobile from '/assets/images/banner-dashboard-users-mobile.png';
import bannerDashboardUsersTablet from '/assets/images/banner-dashboard-users-tablet.png';
import placeholderUser from '../assets/images/placeholder-user.png';
import { toast } from 'sonner';


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
              email: '',
              role: '',
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form className="modify-user-form">
                <label htmlFor="email">Email</label>
                <div className="modify-user-input">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Adresse email"
                  />
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
