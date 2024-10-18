import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="social-media">
              <a
                href="https://www.instagram.com/gelatodamorenice/"
                target="_blank"
              >
                <svg className="icon" alt="instagram">
                  <use
                    xlinkHref={`${
                      import.meta.env.BASE_URL
                    }sprite.svg#instagram`}
                  ></use>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/gelatodamorenice"
                target="_blank"
              >
                <svg className="icon" alt="facebook">
                  <use
                    xlinkHref={`${import.meta.env.BASE_URL}sprite.svg#facebook`}
                  ></use>
                </svg>
              </a>
            </div>
            <div className="footer-text">
              <p>Bisous, I love you!</p>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contactez-nous</h3>
            <address>
              <p>125 Rue de France, Nice</p>
              <p>Ouvert tous les jours</p>
              <p>De 10h à 19h</p>
              <a href="tel:+33763458358">07 63 45 83 58</a>
            </address>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-navigation">
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/about">A propos</NavLink>
          <NavLink to="/catalog">Catalogue</NavLink>
          {user && user.role === 'client' && (
            <NavLink to="/orders">Mes commandes</NavLink>
          )}
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
