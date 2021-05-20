import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProductComponent } from '../src/Product/ProductComponent';
import { HomeComponent } from '../src/Home/HomeComponent';


function App() {
  return (
    <Router>
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <HomeComponent /> */}
      {/* </header> */}
      
      {/* <Switch> */}
          <Route exact path='/e-commerse'>
            <HomeComponent />
          </Route>
          <Route path='/e-commerse/product/:category' component={ProductComponent} />
            {/* <ProductComponent /> */}
          {/* </Route> */}
        {/* </Switch> */}

    </div>
    
    </Router>
  );
}

export default App;
