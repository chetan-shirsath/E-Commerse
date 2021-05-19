import React from 'react';
import './Products.css';

export class ProductComponent extends React.Component{

  baseUrl = 'https://fakestoreapi.com/products/categories';
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
       
      }

      componentDidMount(){
        this.getCategories()
      }
      async getCategories(){
        const response = await fetch(this.baseUrl);
        const data = await response.json();
        console.log(data);
        this.setState({ items: data })
      }
      render(){
          return <div className="body">
          {/* <!-- <a routerLink="/product" (click) = "productCategory(category)" routerLinkActive="active" *ngFor="let category of categories" class="card"> --> */}
            <a href="/e-commerse/product" className="card">
            {/* <!-- <img src="img_avatar.png" alt="Avatar" style="width:100%"> --> */}
            <div className="container">
              <h4><b></b></h4>
            </div>
          </a>
      </div>
      }
}