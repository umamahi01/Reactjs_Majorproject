import {Button ,NavDropdown,Navbar,Nav,Form,Container }from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import image from '../images/img5.jpg';
import './Navbar.css';
import Footer from '../Footer/Footer.js';

import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../contact/Contact';
import Acadamic from '../Academics/Acadamic.js';
import Admin from "../Admissions/Admin.js";
import Curriculam from '../Academics/Curriculam';
import Campus from '../Academics/Campus'
function NavScrollExample() {
  return (
      <Router >
        
    <Navbar  className='child'  variant="dark" expand="lg" style={{ backgroundColor: 'rgb(182, 135, 135)',height:"300px"}} >
    
      <Container fluid>
        <Navbar.Brand className="Anymain" > 
        <div className="image-container">
        <span className="textOverlay">  INTERNATIONAL SCHOOL</span>
        <img src={image} alt="/" className='navbar-image' ></img>
       
       </div>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
          <Nav  
            className="ms-auto my-2 my-lg-0"
            style={{ fontSize: '1.4rem' ,fontWeight: 'bold',maxHeight: '100px' }}
            navbarScroll
          > 
            <Nav.Link as={Link} to="/"  className='nav-item'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'className='nav-item'>About Us</Nav.Link>
            {/* <Nav.Link as={Link} to='/acadamic'>ACADAMICS</Nav.Link> */}
            <Nav.Link as={Link} to="/admissions"className='nav-item' >Admissions</Nav.Link>
            <NavDropdown title=" Student life " id="navbarScrollingDropdown"className='nav-item'>
              <NavDropdown.Item as={Link} to="/curriculam">Our Curriculam</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/acadamic'>
               Our Academics
              </NavDropdown.Item>
                <NavDropdown.Item  as={Link} to='/Campus'>
                INfrastructure
               
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/contact'className='nav-item'>
             Contact
            </Nav.Link>
           
           
            
          </Nav>
         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <div>
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/about' element={< About />}></Route>
      <Route exact path='/contact' element={< Contact />}></Route>
      <Route exact path='/curriculam' element={< Curriculam  />}></Route>
      <Route exact path='/admissions' element={< Admin />}></Route>
      <Route exact path='/acadamic' element={< Acadamic />}></Route>
      <Route exact path='/Campus' element={< Campus />}></Route>
      </Routes>
      <Footer/>
 </div>
 
    </Router>
  );
}

export default NavScrollExample;