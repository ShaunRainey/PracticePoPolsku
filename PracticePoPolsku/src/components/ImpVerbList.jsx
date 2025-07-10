import { Card, Row, Col, Container } from 'react-bootstrap';
import impVerbFunctions from '../utilities/imperfectiveVerbs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function ImpVerbList() {

    const [impVerbs, setImpVerbs] = useState()

    useEffect(() => {
        const getAllImpVerbs = async () => {
            const impVerbs = await impVerbFunctions.getPresentTenseImpVerbs()
            console.log(impVerbs)
            setImpVerbs(impVerbs)
        }
        getAllImpVerbs()
    }, [])

    if (!impVerbs) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Unit</th>
                    <th>Topic</th>
                    <th>Base Verb</th>
                    <th>Meaning</th>
                    <th>Conjugation Type</th>
                </tr>
            </thead>
            <tbody>
                {impVerbs.map((verb) => (
                    <tr key={verb["verb_id"]} className='nounTable'>
                        <td>
                            <Link to={`/Imperfective-Verbs/${verb["verb_id"]}`}>
                                {verb["unit"]}
                            </Link>
                        </td>

                         <td>
                            <Link to={`/Imperfective-Verbs/${verb["verb_id"]}`}>
                                {verb["topic"]}
                            </Link>
                        </td>

                         <td>
                            <Link to={`/Imperfective-Verbs/${verb["verb_id"]}`}>
                                {verb["verb"]}
                            </Link>
                        </td>

                         <td>
                            <Link to={`/Imperfective-Verbs/${verb["verb_id"]}`}>
                                {verb["meaning"]}
                            </Link>
                        </td>

                         <td>
                            <Link to={`/Imperfective-Verbs/${verb["verb_id"]}`}>
                                {verb["conjugation"]}
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ImpVerbList;