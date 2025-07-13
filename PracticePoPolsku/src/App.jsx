import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Routes, Route } from "react-router";
import { Row, Col, Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import NounList from './components/NounList';
import IndividualNoun from './components/IndividualNoun'
import PronounList from './components/PronounList';
import IndividualPronoun from './components/IndividualPronoun';
import AdjectiveList from './components/AdjectiveList';
import IndividualAdjective from './components/IndividualAdjective';
import AdverbList from './components/AdverbList';
import ConjunctionList from './components/ConjunctionList';
import PrepositionList from './components/PrepositionList';
import SentenceList from './components/SentenceList';
import ImpVerbList from './components/ImpVerbList';
import IndividualImpVerb from './components/IndividualImpVerb';
import PerVerbList from './components/PerVerbList';
import IndividualPerVerb from './components/IndividualPerVerb'; 


function App() {

  const [nounLimit, setNounLimit] = useState(0)

  return (
    <Container>
      
      <NavBar />
      
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/Nouns' element={<NounList nounLimit={nounLimit} setNounLimit={setNounLimit} />}></Route>
        <Route path='/Nouns/:noun_id' element={<IndividualNoun nounLimit={nounLimit} />}></Route>
        <Route path='/Pronouns' element={<PronounList />}></Route>
        <Route path='/Pronouns/:pronoun_id' element={<IndividualPronoun />}></Route>
        <Route path='/Adjectives' element={<AdjectiveList />}></Route>
        <Route path='/Adjectives/:adjective_id' element={<IndividualAdjective />}></Route>
        <Route path='/Adverbs' element={<AdverbList/>}></Route>
        {/* <Route path='/Adverbs/:adverb_id' element={}></Route> */}
        <Route path='/Conjunctions' element={<ConjunctionList/>}></Route>
        {/* <Route path='/Conjunctions/:conjunction_id' element={}></Route> */}
        <Route path='/Prepositions' element={<PrepositionList/>}></Route>
        {/* <Route path='/Prepositions/:preposition_id' element={}></Route> */}
        <Route path='/Sentences' element={<SentenceList/>}></Route>
        {/* <Route path='/Sentences/:sentence_id' element={}></Route> */}
        <Route path='/Imperfective-Verbs' element={<ImpVerbList />}></Route>
        <Route path='/Imperfective-Verbs/:verb_id' element={<IndividualImpVerb />}></Route>
        <Route path='/Perfective-Verbs' element={<PerVerbList />}></Route>
        <Route path='/Perfective-Verbs/:verb_id' element={<IndividualPerVerb />}></Route>
        <Route path='/Quiz' element={<HomePage />}></Route>
        <Route path='/Grammar-Notes' element={<HomePage />}></Route>
        <Route path='/About' element={<HomePage />}></Route>
      </Routes>
    </Container>
  )
}

export default App
