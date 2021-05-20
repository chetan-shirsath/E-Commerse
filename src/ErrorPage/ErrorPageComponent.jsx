import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class ErrorPageComponent extends React.Component{
    render(){
        return <div>
            <h1>Somthing is Wrong!</h1>
            <Button><Link to='/e-commerse'>Please Go Back!</Link></Button>
        </div>
    }
}