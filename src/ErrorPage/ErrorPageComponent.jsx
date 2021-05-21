import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function ErrorPageComponent() {
    const history = useHistory();
    const changeUrl = () =>{
        history.push("/e-commerse");
    }
        return (<div>
            <h1>Somthing is Wrong!</h1>
            <Button onClick={changeUrl}>"Please Go Back!"</Button>
        </div>);
}