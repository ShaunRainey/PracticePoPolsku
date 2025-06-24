import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router";
import { Row, Col, Container } from 'react-bootstrap'
import HelloThere from './components/helloThere';
import GeneralKenobi from './components/GeneralKenobi';
import MyNameIsJeff from './components/MyNameIsJeff';
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {

  return (
    <Container>
      
      <NavBar />
      
      <Routes>
        <Route path='/' element={<HelloThere />}></Route>
        <Route path='/Quiz' element={<GeneralKenobi />}></Route>
        <Route path='/Grammar-Notes' element={<MyNameIsJeff />}></Route>
        <Route path='/About' element={<GeneralKenobi />}></Route>
      </Routes>
    </Container>
  )
}

export default App
