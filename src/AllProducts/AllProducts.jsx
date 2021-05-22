import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { getAllProducts } from '../CommonServices/ProductServices';
import { NavDropdown } from 'react-bootstrap';


export default function AllProducts(props){

    const [products, setProducts] = useState([]);
    const categories = props.categories;
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        getAllProduct();
    },[])

    const getAllProduct = () => {
        getAllProducts()
        .then(data => setProducts(data))
        .catch(error => console.log(error));
    }

    return <div>
        <NavDropdown title="Filter By" id="basic-nav-dropdown">
            <NavDropdown.Item onSelect={() => setFilterText("")}>All</NavDropdown.Item>
            {categories.map((category, index) => (
                <NavDropdown.Item key={index} onSelect={() => setFilterText(category)}>{category}</NavDropdown.Item>
            ))}
        </NavDropdown>
            {products.filter((item) => {
                if(filterText === "") return item;
                else if(filterText === item.category)
                        return item;
            }).map((product) => (
                <Card key={product.id}>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                    </Card.Body>
                </Card>
        ))}
            </div>
}