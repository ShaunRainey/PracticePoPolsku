import { Card, Row, Col, Container } from 'react-bootstrap'
import adjectiveFunctions from '../utilities/adjectives'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function IndividualAdjective() {
    
    const { adjective_id } = useParams();
    console.log(adjective_id)

    return (
        <p>Hello</p>
    )
}

export default IndividualAdjective;