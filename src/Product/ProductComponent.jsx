import React from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardDeck, CardGroup, CardColumns, FormControl, Form } from 'react-bootstrap';
import { getProducts } from '../CommonServices/ProductServices';
import { Link } from 'react-router-dom';

export class ProductComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          category: this.props.match.params.category,
          search: ""
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

      onChangeHandle = (txt) => {
        this.setState({
          search: txt
        }); 
   };

      render(){
          return <div className="body">
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(txt) => this.onChangeHandle(txt.target.value)} />
          </Form>
            <CardColumns>
                    {this.state.items.filter((item) => {
                        if(this.state.search === "") return item
                        else if(item.title.toLowerCase().includes(this.state.search.toLowerCase()))
                              return item;
                    }).map((item) => (
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
              </CardColumns>
                 </div>
      }
}