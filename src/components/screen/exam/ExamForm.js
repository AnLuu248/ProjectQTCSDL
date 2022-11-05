import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Axios from 'axios';
export default function ExamForm() {
  const [_nameExam, setNameExam] = useState("");
  const [_numberquestion,setNumberQuestion] = useState("");
  const [_time, setTime] = useState("");


  const addExam = () =>{
    Axios.post("http://localhost:3001/create",
    {
      tablename: "exam",
      fieldname: {
        name:_nameExam,
        numberquestion:_numberquestion,
        time:_time
      }
    }).then(() =>{
      console.log("success");
     });
  }
  return (
    <div className="Formstyle">
    <Form>
      <h2>Create Exam</h2>
      <Form.Group className="mb-3" controlId="formBasicNameExam">
        <Form.Label>Name Exam</Form.Label>
        <Form.Control type="text" 
        onChange={(e) => {
          setNameExam(e.target.value);
        }}
        placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumberquestion">
        <Form.Label>Number Question</Form.Label>
        <Form.Control type="number" 
        onChange={(e) => {
          setNumberQuestion(e.target.value);
        }}
        placeholder="..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicExamTime">
        <Form.Label>Exam Time</Form.Label>
        <Form.Control type="number" 
        onChange={(e) => {
          setTime(e.target.value);
        }}
        placeholder="time" />
      </Form.Group>

      <Row>
        <Col>
          <div className="d-grid gap-2">
            <Button onClick={addExam} variant="primary" type="button">
              Create
            </Button>
          </div>
        </Col>

      </Row>
    </Form>
  </div>
  )
}
