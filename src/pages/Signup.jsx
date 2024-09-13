import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import signupImage from '/assets/images/signup-background.jpg';
import signupImageMobile from '/assets/images/signup-background-mobile.png';

const Signup = () => {
  const [backgroundImage, setBackgroundImage] = useState(signupImageMobile);

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
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="login-input">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
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
                  <div className="login-input">
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirmez votre mot de passe"
                      required
                    />
                  </div>
                </div>
                <button type="submit">Créer un compte</button>
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
