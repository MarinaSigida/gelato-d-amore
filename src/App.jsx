import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from './components/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Orders = lazy(() => import('./pages/Orders'));
const OrderDetail = lazy(() => import('./pages/OrderDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Basket = lazy(() => import('./pages/Basket'));
const DashboardUsers = lazy(() => import('./pages/DashboardUsers'));
const DashboardStock = lazy(() => import('./pages/DashboardStock.jsx'));
const DashboardOrders = lazy(() => import('./pages/DashboardOrders'));
const DashboardStockModifyItem = lazy(() =>
  import('./pages/DashboardStockModifyItem')
);
const DashboardUserModify = lazy(() => import('./pages/DashboardUserModify'));
const DashboardOrderModify = lazy(() => import('./pages/DashboardOrderModify'));
const DashboardControlPanel = lazy(() =>
  import('./components/Dashboard/DashboardControlPanel')
);
const Signup = lazy(() => import('./pages/Signup'));
const PlaceOrder = lazy(() => import('./pages/PlaceOrder'));
const RGPD = lazy(() => import('./pages/RGPD'));
const TermsOfSales = lazy(() => import('./pages/TermsOfSales'));

import './sass/main.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setUserFromToken,
  setUser,
  monitorTokenExpiration,
  logout,
} from './features/userSlice';

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = setUserFromToken();
    if (user) {
      dispatch(setUser(user));
      monitorTokenExpiration(dispatch);
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="catalog" element={<Catalog />} />
          <Route
            path="orders/*"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                userRole={user?.role}
                requiredRole="client"
              />
            }
          >
            <Route index element={<Orders />} />
            <Route path=":id" element={<OrderDetail />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route
            path="dashboard/*"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                userRole={user?.role}
                requiredRole="admin"
              />
            }
          >
            <Route index element={<DashboardControlPanel />} />
            <Route path="stock" element={<DashboardStock />} />
            <Route path="stock/:id" element={<DashboardStockModifyItem />} />
            <Route path="users" element={<DashboardUsers />} />
            <Route path="users/:id" element={<DashboardUserModify />} />
            <Route path="orders" element={<DashboardOrders />} />
            <Route path="orders/:id" element={<DashboardOrderModify />} />
          </Route>
          <Route path="basket" element={<Basket />} />
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                userRole={user?.role}
                requiredRole="client"
              />
            }
          >
            <Route path="place-order" element={<PlaceOrder />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="rgpd" element={<RGPD />} />
          <Route path="terms" element={<TermsOfSales />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
