import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams, useNavigate } from "react-router-dom";


export default function CreateQuestionForm() {
  const [_contentquestion, setContentQuestion] = useState("");
  const [_answerA, setAnswerA] = useState("");
  const [_answerB, setAnswerB] = useState("");
  const [_answerC, setAnswerC] = useState("");
  const [_answerD, setAnswerD] = useState("");
  const [_rightanswer, setRightAnswer] = useState("");
  

const { id} = useParams();
const navigate = useNavigate();
  const addQuestion = () =>{
    Axios.post("http://localhost:3001/create",
     {
      tablename: "question",
      fieldname: {
        idexam: id,
        contentquestion: _contentquestion,
        a: _answerA,
        b:_answerB,
        c:_answerC,
        d:_answerD,
        rightanswer: _rightanswer
      }
     }).then(() =>{
      // navigate("/Question/" + id)
      console.log("summit")
     });
  }

  return (
    <div className="Formcreatequestion">
      <Form>
        <h2>Create Question</h2>
        <Form.Group className="mb-3" >
          <Form.Label>Content Question</Form.Label>
          <Form.Control as="textarea" 
          onChange={(e) => {
            setContentQuestion(e.target.value);
          }}
          placeholder="Enter content question" />
        </Form.Group>
        <InputGroup className="mb-3" >
          <InputGroup.Text>A</InputGroup.Text>
          <Form.Control type="text" 
          onChange={(e) => {
            setAnswerA(e.target.value);
          }}
          placeholder="Enter content answer A" />
        </InputGroup>
        <InputGroup className="mb-3" >
          <InputGroup.Text>B</InputGroup.Text>
          <Form.Control type="text" 
          onChange={(e) => {
            setAnswerB(e.target.value);
          }}
          placeholder="Enter content answer B" />
        </InputGroup>
        <InputGroup className="mb-3" >
          <InputGroup.Text>C</InputGroup.Text>
          <Form.Control type="text" 
          onChange={(e) => {
            setAnswerC(e.target.value);
          }}
          placeholder="Enter content answer C" />
        </InputGroup>
        <InputGroup className="mb-3" >
          <InputGroup.Text>D</InputGroup.Text>
          <Form.Control type="text" 
          onChange={(e) => {
            setAnswerD(e.target.value);
          }}
          placeholder="Enter content answer D" />
        </InputGroup>
        <InputGroup className="mb-3" >
          <InputGroup.Text>Right answer</InputGroup.Text>
          <Form.Control type="text" 
          onChange={(e) => {
            setRightAnswer(e.target.value);
          }}
          placeholder="Enter right answer" />
        </InputGroup>
        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={addQuestion} variant="primary">
                Create
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
