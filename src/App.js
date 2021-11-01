import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddTour from './Pages/AddTour/AddTour';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageTours from './Pages/ManageTours/ManageTours';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
             <Login></Login>
          </Route>
         <PrivateRoute path="/booking/:tourId">
            <Booking></Booking>
         </PrivateRoute>
         <Route path="/addtour">
           <AddTour></AddTour>
         </Route>
         <Route path="/manageTours">
           <ManageTours></ManageTours>
         </Route>
        </Switch>
        <Route path="/footer">
          <Footer></Footer>
        </Route>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
