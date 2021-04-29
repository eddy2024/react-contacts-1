import React from "react";
import {Card, Col, Body, SubTitle, Text} from'react-bootstrap';

const Contact = (props) => {
  return (
    <Col md="4">
      
      <Card style={{ width: "18rem" }}>
        <Card.Body>         
          <Card.Subtitle className="mb-2 text-muted">
            Contact Form
          </Card.Subtitle>
          <Card.Title> {props.contactInfo.name} </Card.Title>
          <Card.Text>            
            <p>Location:  {props.contactInfo.location} </p> 
            <p>Phone number: {props.contactInfo.phone} </p>
          </Card.Text>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Contact;
