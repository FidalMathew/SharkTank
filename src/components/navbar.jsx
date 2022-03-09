import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavBar() {
    document.body.style = 'background-color: #A3E7FF;';
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#home">SIH Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <AnchorLink href='#home' offset={() => 150}><Nav.Link >  Home</Nav.Link> </AnchorLink>
                            <AnchorLink href='#stats' offset={() => 150}><Nav.Link href="#link">Statistics</Nav.Link></AnchorLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;