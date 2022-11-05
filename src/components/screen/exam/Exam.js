import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useState } from "react";
export default function Exam() {
  const [_examlist, setExamList] = useState([]);

  const getExam = () => {
    Axios.get("http://localhost:3001/fetch?tablename=exam").then((response) => {
      setExamList(response.data);
    });
  };
  return (
    <div>
        <Button onClick={getExam}>show</Button>
      {_examlist.map((val, key) => {
        return (
          <Card style={{ width: "auto" }}>
            <Card.Body>
              <Card.Title>{val.name}, {val.idexam}</Card.Title>
              <Button variant="primary" href="/Question" >
                GoGo
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
