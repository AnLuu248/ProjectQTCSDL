import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { Axios } from "axios";
function Login() {
  const [_username, setUsername] = useState("");
  const [_password, setPassword] = useState("");
  const [_user, setUser] = useState([]);
  

  const Login = () =>{
    Axios.get("http://localhost:3001/fetch?tablename=user").then((response) =>{
      setUser(response.data);
    console.log("success");
     });
  }
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
              <Button onClick={Login} variant="primary" type="submit">
                Login
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
