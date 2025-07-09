import { Card, Row, Col, Container } from 'react-bootstrap';
import PrepositionFunctions from '../utilities/Prepositions';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function PrepositionList() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base Preposition</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    )
}

export default PrepositionList;