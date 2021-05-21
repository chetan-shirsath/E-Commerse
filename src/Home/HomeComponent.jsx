import React from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../CommonServices/ProductServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, FormControl } from 'react-bootstrap';
export class HomeComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          search: ""
        };
      }

      componentDidMount = () => {
        this.getCategory();
      }

      onChangeHandle = (txt) => {
           this.setState({
             search: txt
           }); 
      };
     getCategory(){
        getCategories()
          .then(data => this.setState({items: data}))
          .catch(error => console.log(error));
        }

      render(){  
          return <div className="body">
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(txt) => this.onChangeHandle(txt.target.value)} />
          </Form>
                    {this.state.items.filter((item) => {
                        if(this.state.search === "") 
                          return item;
                        else 
                          if(item.toLowerCase().includes(this.state.search.toLowerCase())) 
                                return item;
                    }).map((category, index) => (
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