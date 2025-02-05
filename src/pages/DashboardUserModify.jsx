import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Banner from '../components/Shared/Banner';
import bannerDashboardUsers from '/assets/images/banner-dashboard-users.png';
import bannerDashboardUsersMobile from '/assets/images/banner-dashboard-users-mobile.png';
import bannerDashboardUsersTablet from '/assets/images/banner-dashboard-users-tablet.png';
import placeholderUser from '../assets/images/placeholder-user.png';
import {
  fetchUserById,
  updateUser,
  resetUser,
} from '../features/usersDataSlice';
import { toast } from 'sonner';

const DashboardUserModify = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardUsersMobile);
  const { user, loading, error } = useSelector((state) => state.usersData);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetUser());
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

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

  const handleSubmit = async (values) => {
    const updatedUser = {
      email: values.email,
      role: values.role,
    };

    try {
      await dispatch(updateUser({ id: user._id, updatedUser })).unwrap();
      toast.success('Utilisateur modifiée avec succès !');
      navigate(`/dashboard/users`);
    } catch (err) {
      console.error('Failed to update user:', err);
      toast.error(`Échec de modification de d'utilisateur`);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while fetching user data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if there is any
  }

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
              email: user?.email || '',
              role: user?.role || '',
            }}
            onSubmit={handleSubmit}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "L'email est requis";
              }
              if (!values.role) {
                errors.role = 'Le rôle est requis';
              }
              return errors;
            }}
          >
            {({ errors, touched }) => (
              <Form className="modify-user-form">
                <label htmlFor="email">Email</label>
                <div className="modify-user-input">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Adresse email"
                  />
                </div>
                {errors.email && touched.email && (
                  <p className="form-error">{errors.email}</p>
                )}

                <div>
                  <label htmlFor="role">Rôle</label>
                  <Field as="select" name="role" id="role">
                    <option value="client" label="Client" />
                    <option value="admin" label="Admin" />
                  </Field>
                </div>
                {errors.role && touched.role && (
                  <p className="form-error">{errors.role}</p>
                )}

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
