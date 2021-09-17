import Home from './components/Home/Home';
import './assets/css/global.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDashboard from './components/Users/UserDashboard/UserDashboard';
import Login from './components/Login/User/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminPrivateRoute from './components/PrivateRoute/AdminPrivateRoute';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import AdminLogin from './components/Login/Admin/AdminLogin';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [adminLoggedIn, setAdminLoggedIn] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, adminLoggedIn, setAdminLoggedIn]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/userDashboard/:serviceId">
            <UserDashboard />
          </PrivateRoute>
          <AdminPrivateRoute path="/adminDashboard">
            <AdminDashboard></AdminDashboard>
          </AdminPrivateRoute>
          <Route path="/adminLogin">
            <AdminLogin></AdminLogin>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
