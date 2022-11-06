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
  const [_checkanswer, setCheckAnswer] = useState([]);
  const userlogin = store.getState("userlogin").value;


  const navigate = useNavigate();
  console.log(userlogin);
  useEffect(() => {
    if (userlogin === false) {
      navigate("/Login");
    }
  });

  const { answer} = _checkanswer;
const handleCheckanswer = () =>{

}
const handleSubmit = () =>{
  console.log(_checkanswer)
}
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
      <Form >
        {["radio"].map((type) => (
          <div key={`${type}`} className="mb-3">
            <Form.Check
              
              label={data.a}
              name="group1"
              type={type}
              id={`${type}-1`}
              onChange={() => {
                setCheckAnswer(data.rightanswer)
              }}
            />
            <Form.Check
              
              label={data.b}
              name="group1"
              type={type}
              id={`${type}-2`}
              onChange={() => {
                setCheckAnswer(data.rightanswer)
              }}


            />
            <Form.Check
              
              label={data.c}
              name="group1"
              type={type}
              id={`${type}-3`}
              onChange={handleCheckanswer}


            />
            <Form.Check
              
              label={data.d}
              name="group1"
              type={type}
              id={`${type}-4`}
              onChange={handleCheckanswer}

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
      <Button onClick={handleSubmit} type="submit" >submit</Button>
    </div>
  );
}
