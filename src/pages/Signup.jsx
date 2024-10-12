import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, setUser } from '../features/userSlice';
import signupImage from '/assets/images/signup-background.jpg';
import signupImageMobile from '/assets/images/signup-background-mobile.png';

const Signup = () => {
  const [backgroundImage, setBackgroundImage] = useState(signupImageMobile);
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
      dispatch(setUser(user));
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  if (isAuthenticated) {
    return <div>You are logged in!</div>;
  }

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
              if (!values.password) {
                errors.password = 'Le mot de passe est requis';
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
                  {errors.email && touched.email && <p>{errors.email}</p>}
                  <div className="login-input">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Votre mot de passe"
                      required
                    />
                  </div>
                  {errors.password && touched.password && (
                    <p>{errors.password}</p>
                  )}
                  <div className="login-input">
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirmez votre mot de passe"
                      required
                    />
                  </div>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p>{errors.confirmPassword}</p>
                  )}
                </div>
                {error && (
                  <p className="error-message">
                    L'utilisateur avec cette adresse e-mail existe déjà
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
