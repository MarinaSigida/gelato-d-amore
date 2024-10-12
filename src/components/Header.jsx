import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/images/logo.png';
import dashboardIcon from '../assets/images/dashboard.png';
import BurgerMenuBtn from './BurgerMenu/BurgerMenuBtn';
import ModalBurgerMenu from './BurgerMenu/ModalBurgerMenu';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getUserName = (email) => {
    return email ? email.split('@')[0] : '';
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
            <NavLink to="/orders">Mes commandes</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <div className="dropdown">
              <NavLink to="/dashboard">Tableau de bord</NavLink>
              <div className="dropdown-content">
                <NavLink to="/dashboard/stock">Stocks</NavLink>
                <NavLink to="/dashboard/users">Utilisateurs</NavLink>
                <NavLink to="/dashboard/orders">Commandes</NavLink>
              </div>
            </div>
          </div>
          <div className="username">
            {user && <p>{getUserName(user.email)}</p>}
          </div>
          <div className="basket-and-login">
            <NavLink to="/basket">
              <svg className="icon" alt="basket">
                <use
                  xlinkHref={`${import.meta.env.BASE_URL}sprite.svg#basket`}
                ></use>
              </svg>
            </NavLink>
            <NavLink to="/login">
              <svg className="icon" alt="login">
                <use
                  xlinkHref={`${import.meta.env.BASE_URL}sprite.svg#user`}
                ></use>
              </svg>
            </NavLink>
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
