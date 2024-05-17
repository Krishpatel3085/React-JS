import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





export default function Navbar2() {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Radhe Krishna</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>

                            <Nav.Link ><Link to="/" id='css'> Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/" id='css'>About us</Link></Nav.Link>
                            <Nav.Link> <Link to="/" id='css'>Contect Us</Link> </Nav.Link>

                        </Nav>
                        <Form className="d-flex me-5 pe-5">
                            <NavDropdown title="User" id="navbarScrollingDropdown" className='me-5'>
                                <NavDropdown.Item href="#"> <Link to="/User" id='css'>Sing Up</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#">   <Link to="/login" id='css'>Login </Link></NavDropdown.Item>
                                <NavDropdown.Divider />

                            </NavDropdown>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

