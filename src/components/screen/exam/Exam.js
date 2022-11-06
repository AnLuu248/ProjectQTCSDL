import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useState} from "react";
import {useNavigate} from 'react-router-dom';
      

export default function Exam() {
  const [_examlist, setExamList] = useState([]);
  const navigate = useNavigate();

  const getExam = () => {
    Axios.get("http://localhost:3001/fetch?tablename=exam").then((response) => {
      setExamList(response.data);
      navigate("/Question");
    });
  };

  return (
    <div>
        {/* <Button onClick={getExam}>show</Button> */}
      {_examlist.map((val, key) => {
        return (
          <Card style={{ width: "auto" }}>
            <Card.Body>
              <Card.Title>{val.name}, {val.idexam}</Card.Title>
              <Button onClick={getExam} variant="primary" type="button" >
                GoGo
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
