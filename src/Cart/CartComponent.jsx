import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import navigateToUrl from '../CommonServices/NavigationService';

export const CartComponent = () => {
        const history = useHistory();

        const changeUrl = (path) =>{
            navigateToUrl(history, path);
        }
        return <div>
            <h1>Hello</h1>
            <Button onClick={() => changeUrl("")}>"Please Go Back!"</Button>
        </div>
}