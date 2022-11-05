import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Axios from "axios";
import { useState, useEffect } from "react";
import Exam from "./exam/Exam";
import "./Home.css";
export default function Home() {

  const [aaaaa, setExamList] = useState([]);

  const getExam = () => {
    Axios.get("http://localhost:3001/fetch?tablename=exam").then((response) => {
      setExamList(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    // getExam();
  })

  const TableHeaderRow = () => {
    return <tr><th>Id</th><th>Name</th><th>Question</th><th>Time</th></tr>;
  }
  
  const TableRow = ({data}) => {
    return data.map((data) =>
      <tr>
        <td>{data.idexam}</td><td>{data.name}</td><td>{data.numberquestion}</td><td>{data.time}</td><td><Button variant="primary" type="button" href="/Question">go</Button></td>
      </tr>
    );
  }
  
  const Table = ({data}) => {
    return (
      <table>
        <TableHeaderRow />
        <TableRow data={data} />
      </table>
    );
  }

  return (
  <div className="title">
    <h2>Chao mung tui m da den voi bai kiem tra :))</h2>
    
    <div className="Homestyle">
    <Row xs={1} md={2} className="g-2">
      
        <Col>
          <Exam/>
        </Col>
      
    </Row>
    <Table data={aaaaa} />;
    </div>
    </div>
  );
}
