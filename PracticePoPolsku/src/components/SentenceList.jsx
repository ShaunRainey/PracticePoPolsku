import { Card, Row, Col, Container } from 'react-bootstrap';
import SentenceFunctions from '../utilities/Sentences';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function SentenceList() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base Sentence</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    )
}

export default SentenceList;