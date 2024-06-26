import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <nav>
        <div>
          <h2>Gelato D'Amore</h2>
        </div>
        <div>
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/about">A propos</NavLink>
          <NavLink to="/catalog">Catalogue</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/dashboard">Tableau de bord</NavLink>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
