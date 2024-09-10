import { NavLink } from 'react-router-dom';
import sprite from '../assets/images/sprite.svg';

const Footer = () => {
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
                  <use xlinkHref={`${sprite}#instagram`}></use>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/gelatodamorenice"
                target="_blank"
              >
                <svg className="icon" alt="facebook">
                  <use xlinkHref={`${sprite}#facebook`}></use>
                </svg>
              </a>
            </div>

            <div className="footer-text">
              <p>Bisous, I love you!</p>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contactez-nous</h3>
            <p>125 Rue de France, Nice</p>
            <p>Ouvert tous les jours</p>
            <p>De 10h à 19h</p>
            <p>07 63 45 83 58</p>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-navigation">
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/about">A propos</NavLink>
          <NavLink to="/catalog">Catalogue</NavLink>
          <NavLink to="/orders">Mes commandes</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
