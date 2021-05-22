import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import getCategories from '../CommonServices/ProductServices';

export default function HomeComponent() {

        const [search, setSearch] = useState("");
        const [categories, setCategories] = useState([]);

    useEffect(() => {
      getcategories();
    },[])

      const getcategories = () => {
          getCategories()
            .then(data => setCategories(data))
            .catch(error => console.log(error));
      }

      // const onChangeUrl = (path, state) => {
      //   console.log(state)
      //   navigateToUrlParams(history, path, state);
      // }
          return <div className="body">
                    {categories.filter((item) => {
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
                    <AllProducts categories={categories}/>
                  </div>      
}