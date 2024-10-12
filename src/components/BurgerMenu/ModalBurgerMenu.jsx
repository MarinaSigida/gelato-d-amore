import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OverlayBurgerMenu } from './OverlayBurgerMenu';
import cross from '../../assets/images/close.png';

const ModalBurgerMenu = ({ isModalOpen, closeModal }) => {
  const user = useSelector((state) => state.user.user);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

   const getUserName = (email) => {
     return email ? email.split('@')[0] : '';
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
              {user && <p>{getUserName(user.email)}</p>}
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
            <NavLink to="/orders" onClick={closeModal}>
              Mes commandes
            </NavLink>
            <NavLink to="/contact" onClick={closeModal}>
              Contact
            </NavLink>
            <NavLink to="/dashboard/stock" onClick={closeModal}>
              Stocks
            </NavLink>
            <NavLink to="/dashboard/users" onClick={closeModal}>
              Utilisateurs
            </NavLink>
            <NavLink to="/dashboard/orders" onClick={closeModal}>
              Commandes
            </NavLink>
          </div>
          <div className="burger-menu-basket-and-login">
            <NavLink to="/basket" onClick={closeModal}>
              <svg className="icon" alt="basket">
                <use
                  xlinkHref={`${import.meta.env.BASE_URL}sprite.svg#basket`}
                ></use>
              </svg>
            </NavLink>
            <NavLink to="/login" onClick={closeModal}>
              <svg className="icon" alt="login">
                <use
                  xlinkHref={`${import.meta.env.BASE_URL}sprite.svg#user`}
                ></use>
              </svg>
            </NavLink>
          </div>
        </div>
      </OverlayBurgerMenu>
    </>
  );
};

export default ModalBurgerMenu;
