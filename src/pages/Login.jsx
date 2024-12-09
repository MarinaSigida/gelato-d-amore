import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, setUser } from '../features/userSlice';
import loginImage from '/assets/images/login-background.png';
import loginImageMobile from '/assets/images/login-background-mobile.png';
import showPassword from '../assets/images/view.png';
import hidePassword from '../assets/images/hide.png';
import { toast } from 'sonner';

const Login = () => {
  const [backgroundImage, setBackgroundImage] = useState(loginImageMobile);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);

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

  const handleLogin = async (values) => {
    try {
      const user = await dispatch(
        loginUser({ email: values.email, password: values.password })
      ).unwrap();
      toast.success('Connexion réussie ! Bienvenue à bord.');
      dispatch(setUser(user));
    } catch (error) {
      console.error('Échec de la connexion :', error);
      toast.error(
        'Échec de la connexion. Veuillez vérifier vos identifiants et réessayer.'
      );
    }
  };

  if (isAuthenticated) {
    return <div>Vous êtes connecté !</div>;
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
                  {errors.email && touched.email && (
                    <p className="form-error">{errors.email}</p>
                  )}
                  <div className="login-input password-input-wrapper">
                    <Field
                      type={showPasswordToggle ? 'text' : 'password'}
                      name="password"
                      placeholder="Votre mot de passe"
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
                </div>
                {error && (
                  <p className="form-error" style={{ marginBottom: '40px' }}>
                    Utilisateur non trouvé. Veuillez vérifier votre email et mot
                    de passe.
                  </p>
                )}
                <button type="submit">
                  {' '}
                  {loading ? 'Connexion en cours...' : 'Connexion'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="signup-link">
            <a href="register">Créer un compte</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
