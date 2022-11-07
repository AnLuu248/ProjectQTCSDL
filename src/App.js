// import Axios from 'axios'
// import { useState } from 'react';
import './App.css';
import Login from './components/screen/user/Login';
import Register from './components/screen/user/Register';
import Nav from './components/screen/Nav';
import QuestionForm from './components/screen/exam/QuestionForm';
import CreateQuestionForm from './components/screen/exam/CreateQuestionForm';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ExamForm from './components/screen/exam/ExamForm';
import Home from './components/screen/Home';

import store from './components/screen/Store';
function App() {

  const userlogin = store.getState("userlogin").value;


  return (
    <div style={{ height:"100%"}}>
      
    <BrowserRouter>
    <Nav req = {userlogin}></Nav>
      <Routes>
      
        <Route path="/"  element={<Home/>}></Route>      
        <Route path="/Login" element={<Login/>}></Route>      
        <Route path="/Register"  element={<Register/>}></Route>
        <Route path="/CreateExam"  element={<ExamForm/>}></Route>      
        <Route path="/Question/:id/CreateQuestion"  element={<CreateQuestionForm/>}></Route>      
        <Route path="/Question/:id"  element={<QuestionForm/>}></Route>      

      </Routes>
      
    </BrowserRouter>
    </div>
  )

}

export default App;
