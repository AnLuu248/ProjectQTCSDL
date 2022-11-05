import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Axios from "axios";

import "./style.css";
function Register() {

  const [_fullname, setFullname] = useState("");
  const [_username, setUsername] = useState("");
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const [_confpassword, setConfPassword] = useState("")
  const [_checkpassword,setCheckpassword] = useState(true)
  // async function sendDataToServer() {
  //   const json = {
  //     tablename: "user",
  //     fieldname: {
  //       fullname: _fullname,
  //       username: _username,
  //       email:_email,
  //       password:_password
  //     }
  //   }
  // }

  const addUser = () =>{
    Axios.post("http://localhost:3001/create",
     {
      tablename: "user",
      fieldname: {
        fullname: _fullname,
        username: _username,
        email:_email,
        password:_password,
        isAdmin: 0
      }
     }).then(() =>{
      console.log("success");
     });
  }


  return (
    <div className="Formstyle">
      <Form>
        <h2>Register</h2>
        <Form.Group className="mb-3" controlId="formBasicFullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" 
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" 
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
           placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
           placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          {_password == _confpassword ? <Form.Control type="password" 
          onChange={(e) =>{
            setConfPassword(e.target.value)
          }}
          placeholder="Confirm Password"/>
          : <Form.Control type="password" 
          onChange={(e) =>{
            setConfPassword(e.target.value)
          }}
          placeholder="Confirm Password" required isInvalid/>}
        </Form.Group>

        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={() => {if (_password == _confpassword)  addUser() }} variant="primary" type="button">
                Register
              </Button>
            </div>
          </Col>
          {/* <Col>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" href="/Login">
                Login
              </Button>
            </div>
          </Col> */}
        </Row>
      </Form>
    </div>
  );
}
export default Register;
