import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
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
import './sass/main.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserFromToken, setUser } from './features/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = setUserFromToken();
    console.log(user);
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
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardControlPanel />} />
            <Route path="stock" element={<DashboardStock />} />
            <Route path="stock/:id" element={<DashboardStockModifyItem />} />
            <Route path="users" element={<DashboardUsers />} />
            <Route path="users/:id" element={<DashboardUserModify />} />
            <Route path="orders" element={<DashboardOrders />} />
            <Route path="orders/:id" element={<DashboardOrderModify />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="basket" element={<Basket />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
