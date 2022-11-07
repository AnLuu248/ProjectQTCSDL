import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import { useGlobalState, createStore} from 'state-pool';

import store from "../Store";

function Login() {

  const [_username, setUsername] = useState("");
  const [_password, setPassword] = useState("");
  
  const [_checkuser, setCheckuser] = useState(false)
  
  
  const [userlogin, setUserLogin] = store.useState("userlogin");
  const [nameuser, setNameUser] = store.useState("nameuser")
  const navigate = useNavigate();

  async function Login() {
    const res = await  Axios.post("http://localhost:3001/login",
    {
        username: _username,
        password: _password
    });
    if(res.data === true){
      setCheckuser(true);
      setUserLogin(true);
      setNameUser(_username)
      
      navigate("/");
    }else{
      setCheckuser(false)
    }
    if (!res) {
      console.log("co loi ne")
    }
    

    
  }
  console.log(userlogin);
  // Login().then((data, callback) => {
    
  //   callback(response.json({ message: 'Request received!', data }))

  // }).catch(err => console.log(err))
 
  return (
    <div className="Formstyle">
      <Form>
        <h2>Login</h2>
        <FloatingLabel
          controlId="UsernameInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control type="text" 
          onChange={(e) => {
            setUsername(e.target.value)
          }}

          placeholder="Username" />
        </FloatingLabel>
        <FloatingLabel
          controlId="PasswordInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder="Password" />
        </FloatingLabel>
        
        <Row>
          <Col>
            <div className="d-grid gap-2">
             <Button onClick={Login}
              variant="primary" type="button">
                "Login"
              </Button>
            </div>
          </Col>
          {/* <Col>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" href="/Register">
                Register
              </Button>
            </div>
          </Col> */}
        </Row>
      </Form>
    </div>
  );
}

export default Login;
