import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import Button from "react-bootstrap/esm/Button";
import CreateQuestionForm from "./CreateQuestionForm";

import { useState, useEffect } from "react";
import { useNavigate ,useParams} from "react-router-dom";
import store from "../Store";

export default function QuestionForm() {
  const {id} = useParams();
  
  const [_questions, setQuestions] = useState([]);
  const userlogin = store.getState("userlogin").value;
  const examid = store.getState("examid").value;
  console.log(examid)
  const navigate = useNavigate();
  console.log(userlogin);
  useEffect(() => {
    if (userlogin === false) {
      navigate("/Login");
    }
  });
  const getQuestions = () => {
    Axios.get("http://localhost:3001/fetch?tablename=question").then(
      (response) => {
        setQuestions(response.data);
      }
    );
  };
  const path = "/Question/" + id + "/CreateQuestion"
  useEffect(() =>{
    getQuestions();
  },[])

  const TableRow = ({data}) => {
    return data.map((data) =>
        
    <Card style={{ width: "90%", margin: "10px auto" }}>
    <Card.Body>
      
      <Card.Title>
        
        {data.contentquestion}
      </Card.Title>
      <Form>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label={data.a}
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label={data.b}
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label={data.c}
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label={data.d}
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
      </Form>
    </Card.Body>
  </Card>
    );
  }
  const Table = ({data}) => {
    return (
      
        
        <TableRow data={data} />
      
    );
  }
  return (
    <div>
      <Button href={path} >+</Button>
      <Table data={_questions} />;
    </div>
  );
}
