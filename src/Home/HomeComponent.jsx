import React from 'react';

export class HomeComponent extends React.Component{

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
          const { items } = this.state; 
          return <div className="body">
          {/* <!-- <a routerLink="/product" (click) = "productCategory(category)" routerLinkActive="active" *ngFor="let category of categories" class="card"> --> */}
          {items.map((item, index) => (
            <a href="/e-commerse/product" className="card">
                <div className="container">
              <h3 key={index}>{item}</h3>
            </div>
          </a>
          ))}
      </div>
      }
}