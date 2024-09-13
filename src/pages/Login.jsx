import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import loginImage from '/assets/images/login-background.png';
import loginImageMobile from '/assets/images/login-background-mobile.png';

const Login = () => {
  const [backgroundImage, setBackgroundImage] = useState(loginImageMobile);

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
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
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
                  <div className="login-input">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Votre mot de passe"
                      required
                    />
                  </div>
                </div>
                <button type="submit">Connexion</button>
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
