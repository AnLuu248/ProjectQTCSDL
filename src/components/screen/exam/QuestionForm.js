import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import Button from "react-bootstrap/esm/Button";
import CreateQuestionForm from "./CreateQuestionForm";
import { useState } from "react";

export default function QuestionForm() {
  const [_questions, setQuestions] = useState([]);

  const getQuestions= () => {
    Axios.get("http://localhost:3001/fetch?tablename=question").then((response) => {
      setQuestions(response.data);
    });
  };
  return (
    <div>
      <Button href="/Question/CreateQuestion">+</Button>
      <Card style={{ width: "90%", margin: "10px auto" }}>
        <Card.Body>
          <Card.Title>Card Titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Card.Title>
          <Form >
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="a"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="b"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="c"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="d"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              
                
              </div>
            ))}
          </Form>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", marginTop: "10px" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>

          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="1"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="2"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
        </Card.Body>
      </Card>
    </div>
    
  );
}
