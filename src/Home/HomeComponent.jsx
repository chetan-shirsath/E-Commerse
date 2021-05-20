import React from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../CommonServices/ProductServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
export class HomeComponent extends React.Component{

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
      getCategories()
      .then(data => this.setState({items: data}));
      }

      render(){  
          return <div className="body">
                    {this.state.items.map((category, index) => (
                      <Card key = {index} style={{ width: '18rem' }}>
                        <Link to={`/e-commerse/product/${category}`}>
                        <Card.Body>
                          <Card.Title>{category}</Card.Title>
                          {/* <Card.Text>
                          {item.description}
                          </Card.Text> */}
                          {/* <Button variant="primary">{item.price}</Button> */}
                        </Card.Body>
                        </Link>
                      </Card>
                    ))}
                  </div>      
      }
}