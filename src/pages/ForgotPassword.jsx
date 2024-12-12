import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendResetPasswordEmail } from '../features/userSlice';

import forgotPasswordImage from '/assets/images/banner-forgot-password.png';
import loginImageMobile from '/assets/images/login-background-mobile.png';

import { toast } from 'sonner';

const ForgotPassword = () => {
  const [backgroundImage, setBackgroundImage] = useState(loginImageMobile);

  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBackgroundImage(loginImageMobile);
      } else {
        setBackgroundImage(forgotPasswordImage);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (values) => {
    try {
      await dispatch(sendResetPasswordEmail(values.email)).unwrap();
      toast.success(
        'E-mail de réinitialisation envoyé avec succès. Vérifiez votre boîte de réception.'
      );
    } catch (error) {
      toast.error(
        "Échec de l'envoi de l'e-mail de réinitialisation. Veuillez réessayer plus tard ou contacter le support."
      );
    }
  };

  return (
    <div className="main">
      <div className="login-container">
        <div
          className="login-background-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="login-form-wrapper">
          <Formik
            initialValues={{ email: '' }}
            onSubmit={handleSubmit}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "L'email est requis";
              }
              return errors;
            }}
          >
            {({ errors, touched }) => (
              <Form className="login-form">
                <h3 className="form-header">
                  Veuillez entrer votre adresse e-mail pour réinitialiser votre
                  mot de passe
                </h3>
                <div className="login-inputs">
                  <div className="login-input">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Votre adresse email"
                      required
                    />
                  </div>
                  {errors.email && touched.email && (
                    <p className="form-error">{errors.email}</p>
                  )}
                </div>
                {error && (
                  <p className="form-error" style={{ marginBottom: '40px' }}>
                    Utilisateur non trouvé. Veuillez vérifier votre email.
                  </p>
                )}
                <button type="submit">
                  {' '}
                  {loading ? 'Envoi en cours...' : 'Confirmer'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="signup-link">
            <a href="login">Retourner à la connexion</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
