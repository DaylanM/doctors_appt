import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';


const MainNavbar = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link>
              <Link to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/doctors'>
                Doctors
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/users'>
                Patients
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default MainNavbar;