import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import navigateToUrl from '../CommonServices/NavigationService';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom'; 

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
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
}

export default NavBarComponent;