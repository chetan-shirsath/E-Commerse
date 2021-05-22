import React from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../CommonServices/ProductServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

export default function HomeComponent() {

    // constructor(props) {
        // super(props);
        let [items, search] = useState([]);
        // state = {
        //   items: [],
        //   search: ""
        // };
      // }

    useEffect(() => {
      getCategories()
      .then(data => {})
      .catch(error => console.log(error));
      console.log(items);
      })

      // getCategory = () => {
      //   getCategories()
      //     .then(data => this.setState({items: data}))
      //     .catch(error => console.log(error));
      //   }
      // const getCategory = () => {
      //   getCategories()
      //     .then(data => items = data)
      //     .catch(error => console.log(error));
      //   }

          return <div className="body">
                  <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(txt) => search = txt.target.value} />
                  </Form>
                    {items.filter((item) => {
                        if(search === "") 
                          return item;
                        else 
                          if(item.toLowerCase().includes(search.toLowerCase())) 
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