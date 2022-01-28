
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div>
      <AuthProvider>
      <Router>
        
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/products'>
            <Products></Products>
          </Route>
          <Route path='/contact'>
           <Contact></Contact>
          </Route>
        <PrivateRoute path='/buynow/:id'>
          <Booking></Booking>
        </PrivateRoute>

        <PrivateRoute path='/dashboard'>
          <Dashboard></Dashboard>
        </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
       
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
