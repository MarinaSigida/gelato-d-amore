import { useNavigate } from 'react-router-dom';
import { OverlayPopup } from '../Shared/OverlayPopup.styled';
import cross from '../../assets/images/close.png';

const SignInPopup = ({ isPopupOpen, closePopup }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };
  return (
    <>
      <OverlayPopup onClick={handleBackdropClick}>
        <div className={`popup-container ${isPopupOpen ? 'open' : 'closed'}`}>
          <div onClick={closePopup} className="icon-close">
            <img src={cross} alt="close" />
          </div>
          <div className="signin-popup-content">
            <h2>Connexion ou inscription requise</h2>
            <ul className="signin-popup-benefits">
              <li>
                Pour passer une commande, vous devez être connecté ou créer un
                compte.
              </li>
            </ul>
            <div className="signin-buttons">
              <div className="signin-button">
                <button>
                  <a href="/login">Se connecter</a>
                </button>
              </div>
              <div className="divider">
                <span>OU</span>
              </div>
              <div className="signin-button">
                <button>
                  <a href="/register">S'inscrire</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </OverlayPopup>
    </>
  );
};

export default SignInPopup;
