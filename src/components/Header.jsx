import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { clearBasket } from '../features/basketSlice';
import { clearOrders } from '../features/ordersSlice';
import logo from '../assets/images/logo.png';
import logoutIcon from '../assets/images/logout.png';
import BurgerMenuBtn from './BurgerMenu/BurgerMenuBtn';
import ModalBurgerMenu from './BurgerMenu/ModalBurgerMenu';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { items, totalQuantity } = useSelector((state) => state.basket);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getUserName = (email) => {
    return email ? email.split('@')[0] : '';
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearBasket());
    dispatch(clearOrders());
    navigate('/');
  };

  return (
    <div>
      <nav className="header">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" width={124} />
          </NavLink>
        </div>
        <div className="header-bar">
          <div className="header-name">
            <NavLink to="/">
              <h2>Gelato D'Amore</h2>
            </NavLink>
          </div>
          <div className="header-navigation">
            <NavLink to="/" end>
              Accueil
            </NavLink>
            <NavLink to="/about">A propos</NavLink>
            <NavLink to="/catalog">Catalogue</NavLink>
            {user && user.role === 'client' && (
              <NavLink to="/orders">Mes commandes</NavLink>
            )}
            <NavLink to="/contact">Contact</NavLink>
            {user && user.role === 'admin' && (
              <div className="dropdown">
                <NavLink to="/dashboard">Tableau de bord</NavLink>
                <div className="dropdown-content">
                  <NavLink to="/dashboard/stock">Stocks</NavLink>
                  <NavLink to="/dashboard/users">Utilisateurs</NavLink>
                  <NavLink to="/dashboard/orders">Commandes</NavLink>
                </div>
              </div>
            )}
          </div>

          <div className="basket-and-login">
            <div className="username">
              {user && <p>{getUserName(user.email)}</p>}
            </div>
            <NavLink to="/basket">
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
              <NavLink to="/login">
                <svg className="icon" alt="login">
                  <use
                    xlinkHref={`${import.meta.env.BASE_URL}sprite.svg#user`}
                  ></use>
                </svg>
              </NavLink>
            )}
            {user && (
              <button onClick={handleLogout} className="logout-button">
                <img src={logoutIcon} className="icon" alt="logout-icon" />
              </button>
            )}
          </div>
          <BurgerMenuBtn onClick={toggleModal} />
        </div>
      </nav>
      {isModalOpen && (
        <ModalBurgerMenu isModalOpen={isModalOpen} closeModal={toggleModal} />
      )}
    </div>
  );
};

export default Header;
