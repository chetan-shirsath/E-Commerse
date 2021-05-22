import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartComponent } from '../src/Cart/CartComponent';
import ProductComponent from '../src/Product/ProductComponent';
import HomeComponent from '../src/Home/HomeComponent';
import ErrorPageComponent from '../src/ErrorPage/ErrorPageComponent';
import NavBarComponent from './NavBar/NavBarComponent';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBarComponent/>
      {/* <header className="App-header">
       <sapn> <Link to="/e-commerse">Home</Link> </sapn>
       <sapn> <Link to="/e-commerse/cart">Cart</Link> </sapn> */}
        {/* <HomeComponent /> */}
      {/* </header> */}
     
          <Route exact path='/e-commerse'>
            <HomeComponent />
          </Route>
          <Route path='/e-commerse/product/:category' component={ProductComponent} />
          <Route path='/e-commerse/error' component={ErrorPageComponent} />
          <Route path='/e-commerse/cart' component={CartComponent} />

    </div>
    
    </Router>
  );
}

export default App;
