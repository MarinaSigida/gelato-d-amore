import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="main">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
