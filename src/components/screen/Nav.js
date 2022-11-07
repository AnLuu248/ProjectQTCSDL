import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import store from "./Store";


export default function Navjs(req) {
  const [checkuserlogin, setCheckUserLogin] = useState("")


  const userlogin = store.getState("userlogin").value;
  const nameuser = store.getState("nameuser").value;
 console.log(req)
  return (  
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand><Link style={{textDecoration: "none", color: "#ccc"}} to="/" >CTU</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link style={{textDecoration: "none", color: "#ccc"}} to="/" >Home</Link></Nav.Link>
            
            <Nav.Link><Link style={{textDecoration: "none", color: "#ccc"}} to="/CreateExam" >Create Exam</Link></Nav.Link>
            

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {(req.req)  ? (
            <Navbar.Text>
              <a>wellcome {nameuser} </a>
              <a href="/Login">Logout</a>
            </Navbar.Text>
          ) : (
            <Navbar.Text>
            
            <a href="/Login">Login</a>
            <a> </a>
            <a href="/Register">Register</a>
          </Navbar.Text>
          )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}
