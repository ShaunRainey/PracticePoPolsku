import { Card, Row, Col, Container } from 'react-bootstrap';
import ConjunctionFunctions from '../utilities/Conjunctions';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function ConjunctionList() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base Conjunction</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    )
}

export default ConjunctionList;