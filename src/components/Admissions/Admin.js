import React from "react";
import { Container, Row, Col, Form, Image, FormControl,Carousel ,Button} from "react-bootstrap";
import pic from '../images/Admissions.jpg'

import "./Admin.css";

const Admin = () => {
  return (
    <Container fluid>
       <Row className="first-container">
       <Row lg={12}>
          <Image classname="image-container" src={pic} fluid />
        </Row>
        <Col lg={6} className="d-flex align-items-center">
       
          <div className="text-overlay">
          
            <h2 className="text-black">Explore our international school</h2>
            <p className="text-black" styel={{fontFamily: "'Roboto', sans-serif"}}>
              Ellided Campus
            </p>
          </div>
        </Col>
        
      </Row>
      
     
      <div style={{margin:"5px"}}>
      <Row className="second-container">
        <Col md={12}>
          <h2 style={{marginLeft:"50px"}}>Admission Enquiry</h2>
          <Form>
            <Form.Group controlId="formParentName">
              <Form.Label>Parent Name</Form.Label>
              <FormControl type="text" placeholder="Enter Parent Name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <FormControl type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <FormControl type="tel" placeholder="Enter Mobile Number" />
            </Form.Group>
            <Form.Group controlId="formChildName">
              <Form.Label>Child Name</Form.Label>
              <FormControl type="text" placeholder="Enter Child Name" />
            </Form.Group>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <FormControl type="date" placeholder="Enter Date of Birth" />
            </Form.Group>
            <Form.Group controlId="formGrade">
              <Form.Label>Grade</Form.Label>
              <FormControl as="select">
              <option>lower-KG</option>
                <option>upper-kG</option>
                <option>1-grade</option>
                <option>2-grade</option>
                <option>3-grade</option>
                <option>4-grade</option>
                <option>5-grade</option>
              </FormControl>
            </Form.Group>
            <Button variant="primary" type="submit" style={{margin:"20px"}}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      </div>
      <Row  md={12}  className="third-container">
       
      <Carousel style={{color:"#000000"}}>
      <Carousel.Item style={{color:"#ffffff"}}>
        <Row className="align-items-center d-flex justify-content-center">
          <Col xs={12} md={4}>
            <h1 style={{marginLeft:"20px"}}>what our parents say...</h1>
            <h3>parent Tina </h3>
            <p>so happy to join here</p>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item style={{color:"#ffffff"}}>
        <Row className="align-items-center d-flex justify-content-center">
          <Col xs={12} md={4}>
          <h1 style={{marginLeft:"20px"}}>what our parents say...</h1>
            <h3>parent Retha</h3>
            <p>full pontentail school</p>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item style={{color:"#ffffff"}}>
        <Row className="align-items-center d-flex justify-content-center">
          <Col xs={12} md={4}>
          <h1 style={{marginLeft:"20px"}}>what our parents say...</h1>
            <h3>parent selena</h3>
            <p>future is here for childrens</p>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
      </Row>
      
    </Container>
  );
};

export default Admin;
