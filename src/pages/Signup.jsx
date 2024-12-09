import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, setUser } from '../features/userSlice';
import signupImage from '/assets/images/signup-background.jpg';
import signupImageMobile from '/assets/images/signup-background-mobile.png';
import showPassword from '../assets/images/view.png';
import hidePassword from '../assets/images/hide.png';
import { toast } from 'sonner';

const Signup = () => {
  const [backgroundImage, setBackgroundImage] = useState(signupImageMobile);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [showConfirmPasswordToggle, setShowConfirmPasswordToggle] =
    useState(false);
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBackgroundImage(signupImageMobile);
      } else {
        setBackgroundImage(signupImage);
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

  const handleSignup = async (values) => {
    try {
      const user = await dispatch(
        registerUser({ email: values.email, password: values.password })
      ).unwrap();
      toast.success('Inscription réussie ! Vous êtes connecté.');
      dispatch(setUser(user));
    } catch (error) {
      if (error) {
        toast.error(error);
      } else {
        toast.error(
          "Une erreur est survenue lors de l'inscription. Veuillez réessayer plus tard."
        );
      }
    }
  };
  if (isAuthenticated) {
    return <div>You are logged in!</div>;
  }

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
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={handleSignup}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "L'email est requis";
              }
              if (values.password !== values.confirmPassword) {
                errors.confirmPassword =
                  'Les mots de passe ne correspondent pas';
              }
              return errors;
            }}
          >
            {({ errors, touched }) => (
              <Form className="login-form">
                <h2>BIENVENUE</h2>
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
                  {loading ? "Création d'un compte..." : 'Créer un compte'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="signup-link">
            <a href="login">J'ai déja un compte</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
