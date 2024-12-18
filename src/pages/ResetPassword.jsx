import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../features/userSlice';
import resetPasswordImage from '/assets/images/banner-reset-password.jpg';
import resetPasswordImageMobile from '/assets/images/banner-mobile-reset-password.png';
import showPassword from '../assets/images/view.png';
import hidePassword from '../assets/images/hide.png';
import { toast } from 'sonner';

const ResetPassword = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    resetPasswordImageMobile
  );
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [showConfirmPasswordToggle, setShowConfirmPasswordToggle] =
    useState(false);
  const dispatch = useDispatch();
  const { resetToken } = useParams();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBackgroundImage(resetPasswordImageMobile);
      } else {
        setBackgroundImage(resetPasswordImage);
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

  const handleResetPassword = async (values) => {
    try {
      await dispatch(
        resetPassword({ resetToken, password: values.password })
      ).unwrap();
      toast.success('Votre mot de passe a été réinitialisé avec succès !');
      navigate('/login');
    } catch (error) {
      toast.error(
        'Une erreur est survenue lors de la réinitialisation du mot de passe.'
      );
    }
  };

  const validatePassword = (value) => {
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!value) {
      return 'Le mot de passe est requis';
    } else if (!passwordPattern.test(value)) {
      return 'Le mot de passe doit contenir au moins 8 caractères, un chiffre, et un symbole';
    }
    return null;
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
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validate={(values) => {
              const errors = {};

              if (values.password !== values.confirmPassword) {
                errors.confirmPassword =
                  'Les mots de passe ne correspondent pas';
              }
              return errors;
            }}
            onSubmit={(values) => handleResetPassword(values, resetToken)}
          >
            {({ errors, touched }) => (
              <Form className="login-form">
                <h3 className="form-header">
                  Veuillez créer un nouveau mot de passe
                </h3>
                <div className="login-inputs">
                  <div className="login-input password-input-wrapper">
                    <Field
                      type={showPasswordToggle ? 'text' : 'password'}
                      name="password"
                      placeholder="Votre mot de passe"
                      validate={validatePassword}
                      required
                    />
                    <img
                      src={showPasswordToggle ? hidePassword : showPassword}
                      className="show-hide-password-icon"
                      alt="Toggle Password"
                      onClick={() => setShowPasswordToggle(!showPasswordToggle)}
                    />
                  </div>
                  {errors.password && touched.password && (
                    <p className="form-error">{errors.password}</p>
                  )}
                  {!errors.password && touched.password && (
                    <p style={{ color: 'green', fontSize: '14px' }}>
                      Mot de passe valide ✅
                    </p>
                  )}
                  <div className="login-input password-input-wrapper">
                    <Field
                      type={showConfirmPasswordToggle ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirmez votre mot de passe"
                      required
                    />
                    <img
                      src={
                        showConfirmPasswordToggle ? hidePassword : showPassword
                      }
                      className="show-hide-password-icon"
                      alt="Toggle Password"
                      onClick={() =>
                        setShowConfirmPasswordToggle(!showConfirmPasswordToggle)
                      }
                    />
                  </div>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="form-error">{errors.confirmPassword}</p>
                  )}
                </div>
                {error && (
                  <p className="form-error" style={{ marginBottom: '40px' }}>
                    {error}
                  </p>
                )}
                <button type="submit">
                  {' '}
                  {loading
                    ? 'Réinitialisation...'
                    : 'Réinitialiser le mot de passe'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
