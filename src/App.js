import './App.css';
import { Route } from 'wouter';
import Login from './pages/login/Login';
import Register from './pages/register/Registrar';
import HomeAdmin from './pages/home-admin/HomeAdmin';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard'

function App() {
  return (
    <>
      <Route path='/'>
        <HomeAdmin />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/admin/users'>
        <AdminDashboard />
      </Route>
    </>
  );
}

export default App;
