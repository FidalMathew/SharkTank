import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Container fluid>
                <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link eventKey="2" href="#home">Home</Nav.Link>
                            <Nav.Link eventKey="2" href="#features">Features</Nav.Link>
                            <Nav.Link eventKey="2" href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
}

export default NavBar;