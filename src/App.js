import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Contacts from './Components/Contacts';
import ContactForm from './Components/ContactForm';

// to create a state we need a class component, constructor and super
class App  extends Component {
  constructor(props){
    super(props);
    this.state = {
        contacts:[
          
        { 
          name: "Jonathan Edwards",          
          location: "USA",
          phone: +233244646214         
        },

      { 
        name: "Charles Finney",        
        location: "United Kingdom",
        phone:    +233244695847      
      }, 

        ]
    }
  }

  //update the contact state
  addNewContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact ]
    })
  }

  render(){
  return (
    <div className="back">
    <Container fluid className="back" style={{marginTop:"3rem",paddingTop:"3rem", marginBotton:"3rem"
    , marginRight: "1rem", backgroundColor:"lightgray", backgroundImage: `url("background.jpg")`}} >
      <Row>
        <Col md="4">
          <h5>Contact Form</h5>
          <ContactForm  addContact= {this.addNewContact}/>
        </Col>

        <Col>
        <h5 className="moveRight">Contact List</h5>

          <Contacts  contactData = {this.state.contacts} />
        </Col>

      </Row>
    </Container>
     
    </div>
  );}
}

export default App;
