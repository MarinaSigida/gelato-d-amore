import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import Contact from './pages/Contact';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Basket from './pages/Basket';
import DashboardUsers from './pages/DashboardUsers';
import DashboardStock from './pages/DashboardStock.jsx';
import DashboardOrders from './pages/DashboardOrders';
import DashboardStockModifyItem from './pages/DashboardStockModifyItem';
import DashboardUserModify from './pages/DashboardUserModify';
import DashboardOrderModify from './pages/DashboardOrderModify';
import DashboardControlPanel from './components/Dashboard/DashboardControlPanel';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import PlaceOrder from './pages/PlaceOrder';
import './sass/main.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUserFromToken, setUser } from './features/userSlice';

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = setUserFromToken();
    if (user) {
      dispatch(setUser(user));
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
            <Route path="orders/:id" element={<OrderDetail />} />
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
