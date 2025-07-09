import { Card, Row, Col, Container } from 'react-bootstrap';
import adverbFunctions from '../utilities/adverbs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function AdverbList() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base Adverb</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    )
}

export default AdverbList;