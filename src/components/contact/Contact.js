import React from 'react';
import {Container, Row, Col, Form } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
  return (
    <Container fluid className="Bg-Image">
    <Row className="align-items-center h-100">
      <Col xs={12} md={6} className="mx-auto Form-Holder">
        <Form>
          <h1 style={{marginLeft:"50px"}}>Contact Us</h1>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formSuggestions">
            <Form.Label>Suggestions</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <div class="submit-button-holder" >
            <button style={{backgroundColor:"#000000",color:"#ffff",width:"70px" ,height:"40px"}} type="submit">Submit</button>
          </div>
        </Form>
      </Col>
    </Row>
  
  </Container>
  );
};

export default Contact;
