import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleDashboardClick = (e) => {
    e.preventDefault();
    navigate('/dashboard/products');
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
              <NavLink
                to="/dashboard"
                className={({ isActive, isPartiallyActive }) =>
                  isActive || isPartiallyActive ? 'active' : ''
                }
                onClick={handleDashboardClick}
              >
                Tableau de bord
              </NavLink>
              <div className="dropdown-content">
                <NavLink to="/dashboard/products">Stocks</NavLink>
                <NavLink to="/dashboard/users">Utilisateurs</NavLink>
                <NavLink to="/dashboard/orders">Commandes</NavLink>
              </div>
            </div>
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
        </div>
      </nav>
    </div>
  );
};

export default Header;
