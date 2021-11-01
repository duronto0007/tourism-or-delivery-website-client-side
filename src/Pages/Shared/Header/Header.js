import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const {user, logOut} = UseAuth();
    return (
        
            <>
                <Navbar className="header" variant="dark" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                    <Navbar.Brand href="#home">SKYLINE</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white" as={HashLink}  to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink}  to="/home#tours">Tours</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink}  to="/home#about">About</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink}  to="/home#addtour">AddTour</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink}  to="/home#manageTours">ManageTours</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#contact">Contact</Nav.Link>
                        {
                            user?.email?
                            <Button className="logout" onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link className="text-white" as={Link}  to="/login">Login</Nav.Link>
                        
                        }
                            <Navbar.Text>
                            <a href="#login"> {user?.displayName}</a>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    
                    </Container>
                </Navbar>

                
                
                </>
        
    );
};

export default Header;