import React from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardDeck } from 'react-bootstrap';
import { getProducts } from '../CommonServices/ProductServices';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router';
// import { ErrorPageComponent } from '../ErrorPage/ErrorPageComponent';
// import { navigate } from "@reach/router";

export class ProductComponent extends React.Component{

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
          .then(data => this.setState({items: data}))
          .catch(error => console.log(error));
      }

      render(){
          return <div>
            <CardDeck>
                    {this.state.items.map((item) => (
                      <Card key = {item.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                          {item.description}
                          </Card.Text>
                          <Button variant="primary">${item.price}</Button>
                          <Button variant="primary"><Link to='/e-commerse/cart'>Add to cart</Link></Button>
                        </Card.Body>
                      </Card>
                    ))}
              </CardDeck>
                 </div>
      }
}