import { Card, Row, Col, Container } from 'react-bootstrap';
import conjunctionFunctions from '../utilities/Conjunctions';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function ConjunctionList() {

    const [conjunctions, setConjunctions] = useState()

    useEffect(() => {
        const getAllConjunctions = async () => {
            const allConjunctions = await conjunctionFunctions.getConjunctions()

            setConjunctions(allConjunctions)
        }
        getAllConjunctions()
    }, [])

    if (!conjunctions) {
        return (
            <p>Loading</p>
        )
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base conjunction</th>
                    <th>Meaning</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                {conjunctions.map((conjunction) => (
                    <tr key={conjunction["conjunction_id"]} className='nounTable'>
                        <td>
                            <Link to={`conjunctions/${conjunction["conjunction_id"]}`}>
                                {conjunction["conjunction"]}
                            </Link>
                        </td>
                        
                        <td>
                            <Link to={`conjunctions/${conjunction["conjunction_id"]}`}>
                                {conjunction["meaning"]}
                            </Link>
                        </td>

                        <td>
                            <Link to={`conjunctions/${conjunction["conjunction_id"]}`}>
                                {conjunction["example_1"]} <br />
                                {conjunction["translation_1"]} <br /><br />
                                {conjunction["example_2"]} <br />
                                {conjunction["translation_2"]} <br /><br />
                                {conjunction["example_3"]} <br />
                                {conjunction["translation_3"]} <br /><br />                                
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ConjunctionList;