import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditContactForm from "./EditContactsForm";

const Contact = (props) => {
  //modal function
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handle delete function

  const handleDeleteContact = (e) => {
    e.preventDefault();
    props.deleteContact(props.contactInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm
            contactInfo={props.contactInfo}
            editContact={props.editContact}
            closeModal = {handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md="4">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Contact Form
            </Card.Subtitle>
            <Card.Title> {props.contactInfo.name} </Card.Title>
            <Card.Text>
              <p>Location: {props.contactInfo.location} </p>
              <p>Phone number: {props.contactInfo.phone} </p>
            </Card.Text>
            <Card.Link href="#">
              <Button
                variant="success"
                style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
                onClick={handleShow}
              >
                <span className="edit">Edit</span>
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" onClick={handleDeleteContact}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Contact;
