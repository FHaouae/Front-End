import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Mon App</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link to={'/'} className='nav-link'> Films</Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;


