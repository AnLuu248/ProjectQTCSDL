import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Axios from "axios";
import { useState, useEffect } from "react";
import Exam from "./exam/Exam";
import { useGlobalState, createStore} from 'state-pool';
import {Link, useNavigate} from 'react-router-dom';

import "./Home.css";

import store from "./Store";

export default function Home() {

  const userlogin = store.getState("userlogin").value;
  const examid = store.getState("examid").value;
  const [_examlist, setExamList] = useState([]);
  const navigate = useNavigate();
  const getExamList = () => {
    Axios.get("http://localhost:3001/fetch?tablename=exam").then((response) => {
      setExamList(response.data);
      console.log(response.data);
      
        

    });
  };
  
  const getExam = (id) =>{
    const path = "/Question/" + id
    if(userlogin){
      navigate(path)
    }else{
      navigate("/Login")
    }
  }

  useEffect(() => {
    getExamList();
    // <Exam/>
    // if (userlogin === false){
    //   navigate("/Login")
    // }
  },[])

  const TableHeaderRow = () => {
    return <tr><th>Id</th><th>Name</th><th>Question</th><th>Time</th></tr>;
  }
  
  const TableRow = ({data}) => {
    return data.map((data) =>
        
        <Card style={{ width: "100vh", margin:"1%" , height: "150px"}}>
          <Card.Body>
            <Card.Title>{data.name},{data.idexam}</Card.Title>
            <Button onClick={()=>{getExam(data.idexam)}} variant="primary" type="button" >
              GoGo
            </Button>
          </Card.Body>
          
        </Card>
    );
  }
  
  const Table = ({data}) => {
    return (
      <table>
        
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
          <Table data={_examlist} />;
        </Col>
      
    </Row>
    
    </div>
    </div>
  );
}
