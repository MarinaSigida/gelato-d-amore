import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, userRole, requiredRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (userRole !== requiredRole) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
