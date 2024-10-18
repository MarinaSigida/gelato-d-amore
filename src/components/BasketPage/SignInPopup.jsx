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
            <h2>Comment souhaitez-vous poursuivre ?</h2>
            <ul className="signin-popup-benefits">
              <li>
                Profitez immédiatement des avantages du club de fidélité Gelato
                D'Amore
              </li>
              <li>Bénéficiez d'offres exclusives</li>
              <li>Gagnez du temps pour passer votre commande</li>
            </ul>
            <div className="signin-buttons">
              <button>
                <a href="/login">S'inscrire ou se connecter</a>
              </button>
              <div className="divider">
                <span>OU</span>
              </div>
              <button>
                <a href="/place-order"> Continuer en tant qu'invité</a>
              </button>
            </div>
            <p className="guest-note">
              En poursuivant en tant qu'invité, vous ne pourrez pas profiter des
              offres éventuelles accordées aux membres Gelato D'Amore Club.
            </p>
          </div>
        </div>
      </OverlayPopup>
    </>
  );
};

export default SignInPopup;
