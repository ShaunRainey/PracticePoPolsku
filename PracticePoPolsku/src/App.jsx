import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Routes, Route } from "react-router";
import { Row, Col, Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import NounList from './components/NounList';
import IndividualNoun from './components/IndividualNoun'

function App() {

  return (
    <Container>
      
      <NavBar />
      
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/Nouns' element={<NounList />}></Route>
        <Route path='/Nouns/:noun_id' element={<IndividualNoun/>}></Route>
        <Route path='/Quiz' element={<HomePage />}></Route>
        <Route path='/Grammar-Notes' element={<HomePage />}></Route>
        <Route path='/About' element={<HomePage />}></Route>
      </Routes>
    </Container>
  )
}

export default App
