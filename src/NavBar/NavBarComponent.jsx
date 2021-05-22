import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import navigateToUrl from '../CommonServices/NavigationService';
import { useHistory } from 'react-router-dom';

function NavBarComponent (value, onChangeHandle){

    const history = useHistory();
  
    const changeUrl = (path) => {
        navigateToUrl(history, path);
      }

        return <Navbar bg="light" expand="lg">
        <Nav.Link onClick={() => changeUrl("")}>E-Commerse</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse onToggle={() => true} id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => changeUrl("")}>Home</Nav.Link>
            <Nav.Link onClick={() => changeUrl("/cart")}>Cart</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(txt) => this.onChangeHandle(txt.target.value)} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
}

export default NavBarComponent;