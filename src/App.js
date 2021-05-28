import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./Components/Contacts";
import ContactForm from "./Components/ContactForm";

// to create a state we need a class component, constructor and super
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Jonathan Edwards",
          location: "USA",
          phone: +233244646214,
          id: "12121212",
        },

        {
          name: "Charles Finney",
          location: "United Kingdom",
          phone: +233244695847,
          id: "4545454545",
        },
      ],
    };
  }

  //update the contact state
  addNewContact = (contact) => {
    contact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  //delete contact function
  deleteContact = (id) => {
    let undeletedContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: undeletedContacts,
    });
  };

  // create edit function
  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      ),
    });
  };

  render() {
    return (
      <div className="back">
        <Container
          fluid
          className="back"
          style={{  
                     
            paddingTop: "3rem",            
            marginRight: "1rem",   
                      
            backgroundImage: `url("background.jpg")`
          
          }}
        >
          <Row>
            <Col md="4">
              <h5>Contact Form</h5>
               <br/>
              <ContactForm addContact={this.addNewContact} />
            </Col>

            <Col>
              <h5 className="moveRight">Contact List</h5>
              <br />
              <Contacts
                contactData={this.state.contacts}
                deleteContact={this.deleteContact}
                editContact={this.editContact}   // props pass down - pass to contacts
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
