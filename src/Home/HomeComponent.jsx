import React from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../CommonServices/ProductServices';

// import ProductComponent from '../Product/ProductComponent';

export class HomeComponent extends React.Component{

  baseUrl = 'https://fakestoreapi.com/products/categories';

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
      }

      componentDidMount = () => {
        this.getCategory();
      }
     getCategory(){
      console.log(getCategories());
      //  await getCategories()
      //   .then(data => {
      //     console.log(data);
      //     this.setState({items: data});
      //   });
        // console.log(this.state.items);
      }

      render(){  
          return <div className="body">
          {/* <!-- <a routerLink="/product" (click) = "productCategory(category)" routerLinkActive="active" *ngFor="let category of categories" class="card"> --> onClick={() => this.getProducts(item)} */}
          {this.state.items.map((category, index) => (
            <Link to={`/e-commerse/product/${category}`} key={index}  className="card">
                <div className="container">
              <h3>{category}</h3>
            </div>
          </Link>
          ))}
      </div>
      }
}