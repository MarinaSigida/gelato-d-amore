import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Basket from './pages/Basket';
import './sass/main.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="orders" element={<Orders />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
