import React from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import getProducts from '../CommonServices/ProductServices';
// import ListItem from './ListItem'
// import ProductComponent from '../Product/ProductComponent';

export class ProductComponent extends React.Component{

   baseUrl = 'https://fakestoreapi.com/products';
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          category: this.props.match.params.category
        };
      }

      componentDidMount = () => {
        this.getProducts(this.state.category);
      }
      getProducts(category){
        getProducts(category)
        .then(data => this.setState({items: data}));
      }

      render(){
          return <div className="body">
             {this.state.items.map((item) => (
          <Card key = {item.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
              {item.description}
              </Card.Text>
              <Button variant="primary">{item.price}</Button>
            </Card.Body>
          </Card>
))}
{/* <!-- <a routerLink="/product" (click) = "productCategory(category)" routerLinkActive="active" *ngFor="let category of categories" class="card"> --> */}


          {/* {this.state.items.map((item) => (
            <div key = {item.id} className="card">
               <img src={item.image} alt="Avatar" />
              <div className="container">
                <h4><b>{item.title}</b></h4>
              </div>
            </div>
          ))} */}
      </div>
      }
}