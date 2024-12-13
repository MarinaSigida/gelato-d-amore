import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OverlayBurgerMenu } from './OverlayBurgerMenu';
import { useState } from 'react';
import logoutIcon from '../../assets/images/logout.png';
import cross from '../../assets/images/close.png';
import LogoutPopup from '../Shared/LogoutPopup';

const ModalBurgerMenu = ({ isModalOpen, closeModal }) => {
  const user = useSelector((state) => state.user.user);
  const { items, totalQuantity } = useSelector((state) => state.basket);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const getUserName = (email) => {
    return email ? email.split('@')[0] : '';
  };

  const toggleLogoutPopup = () => {
    setIsLogoutPopupOpen(!isLogoutPopupOpen);
  };

  return (
    <>
      <OverlayBurgerMenu onClick={handleBackdropClick}>
        <div
          className={`modal-burger-menu-container ${
            isModalOpen ? 'open' : 'closed'
          }`}
        >
          <div onClick={closeModal} className="icon-close">
            <img src={cross} alt="close" />
          </div>
          <div className="burger-menu-navigation">
            <div className="username">
              {user && <p>{`Bienvenue ${getUserName(user.email)}`}</p>}
            </div>
            <NavLink to="/" end onClick={closeModal}>
              Accueil
            </NavLink>
            <NavLink to="/about" onClick={closeModal}>
              A propos
            </NavLink>
            <NavLink to="/catalog" onClick={closeModal}>
              Catalogue
            </NavLink>
            {user && user.role === 'client' && (
              <NavLink to="/orders" onClick={closeModal}>
                Mes commandes
              </NavLink>
            )}
            <NavLink to="/contact" onClick={closeModal}>
              Contact
            </NavLink>
            {user && user.role === 'admin' && (
              <>
                <NavLink to="/dashboard/stock" onClick={closeModal}>
                  Stocks
                </NavLink>
                <NavLink to="/dashboard/users" onClick={closeModal}>
                  Utilisateurs
                </NavLink>
                <NavLink to="/dashboard/orders" onClick={closeModal}>
                  Commandes
                </NavLink>
              </>
            )}
          </div>
          <div className="burger-menu-basket-and-login">
            <NavLink to="/basket" onClick={closeModal}>
              <div className="basket-icon-container">
                <svg className="icon" alt="basket">
                  <use
                    xlinkHref={`${import.meta.env.BASE_URL}sprite.svg#basket`}
                  ></use>
                </svg>
                {items.length > 0 && (
                  <div className="basket-quantity">{totalQuantity}</div>
                )}
              </div>
            </NavLink>
            {!user && (
              <NavLink to="/login" onClick={closeModal}>
                <svg className="icon" alt="login">
                  <use
                    xlinkHref={`${import.meta.env.BASE_URL}sprite.svg#user`}
                  ></use>
                </svg>
              </NavLink>
            )}
            {user && (
              <button onClick={toggleLogoutPopup} className="logout-button">
                <img src={logoutIcon} className="icon" alt="logout-icon" />
              </button>
            )}
          </div>
        </div>
      </OverlayBurgerMenu>
      <LogoutPopup
        isPopupOpen={isLogoutPopupOpen}
        closePopup={toggleLogoutPopup}
      />
    </>
  );
};

export default ModalBurgerMenu;
