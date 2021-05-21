import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const CartComponent = () => {
        const history = useHistory();

        const changeUrl = () =>{
            history.push("/e-commerse");
        }
        return <div>
            <h1>Hello</h1>
            <Button onClick={changeUrl}>"Please Go Back!"</Button>
        </div>
}