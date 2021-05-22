import React, { useEffect, useState } from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardColumns } from 'react-bootstrap';
import { getProducts } from '../CommonServices/ProductServices';
import { useHistory, useParams } from 'react-router-dom';
import navigateToUrl from '../CommonServices/NavigationService';

export default function ProductComponent(props){
  
      const [products, setProducts] = useState([]);
      const [search, setSearch] = useState("");
      const history = useHistory();
      const {category} = useParams();


      useEffect(() => {
        getProduct(category);     
      },[]);

      const getProduct = (category) => {
        getProducts(category)
          .then(data => setProducts(data))
          .catch(error => console.log(error));
      }

      const changeUrl = (path) => {
        navigateToUrl(history, path);
      }

  //     onChangeHandle = (txt) => {
  //       this.setState({
  //         search: txt
  //       }); 
  //  };

          return <div className="body">
            
            <CardColumns>
                    {products.filter((item) => {
                        if(search === "") return item
                        else if(item.title.toLowerCase().includes(search.toLowerCase()))
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
                          <Button onClick={() => changeUrl("/cart")}variant="primary">Add to cart</Button>
                        </Card.Body>
                      </Card>
                    ))}
              </CardColumns>
                 </div>
}