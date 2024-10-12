import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/userSlice';
import loginImage from '/assets/images/login-background.png';
import loginImageMobile from '/assets/images/login-background-mobile.png';

const Login = () => {
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
        setBackgroundImage(loginImage);
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

  const handleLogin = (values) => {
    dispatch(loginUser({ email: values.email, password: values.password }));
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
            initialValues={{ email: '', password: '' }}
            onSubmit={handleLogin}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "L'email est requis";
              }
              if (!values.password) {
                errors.password = 'Le mot de passe est requis';
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
                </div>
                <button type="submit">
                  {' '}
                  {loading ? 'Connexion en cours...' : 'Connexion'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="signup-link">
            <a href="signup">Créer un compte</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
