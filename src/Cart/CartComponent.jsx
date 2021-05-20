import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class CartComponent extends React.Component{
    render(){
        return <div>
            <h1>Hello</h1>
            <Button variant="primary"><Link to='/e-commerse'>Please Go Back!</Link></Button>
        </div>
    }
}