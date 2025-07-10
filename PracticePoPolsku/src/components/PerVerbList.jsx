import { Card, Row, Col, Container } from 'react-bootstrap';
import perVerbFunctions from '../utilities/perfectiveVerbs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function PerVerbList() {

    const [perVerbs, setPerVerbs] = useState()

    useEffect(() => {
        const getAllPerVerbs = async () => {
            const perVerbs = await perVerbFunctions.getFutureTensePerVerbs()
            setPerVerbs(perVerbs)
        }
        getAllPerVerbs()
    }, [])

    if (!perVerbs) {
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
                {perVerbs.map((verb) => (
                    <tr key={verb["verb_id"]} className='nounTable'>
                        <td>
                            <Link to={`/Perfective-Verbs/${verb["verb_id"]}`}>
                                {verb["unit"]}
                            </Link>
                        </td>

                         <td>
                            <Link to={`/Perfective-Verbs/${verb["verb_id"]}`}>
                                {verb["topic"]}
                            </Link>
                        </td>

                         <td>
                            <Link to={`/Perfective-Verbs/${verb["verb_id"]}`}>
                                {verb["verb"]}
                            </Link>
                        </td>

                         <td>
                            <Link to={`/Perfective-Verbs/${verb["verb_id"]}`}>
                                {verb["meaning"]}
                            </Link>
                        </td>

                         <td>
                            <Link to={`/Perfective-Verbs/${verb["verb_id"]}`}>
                                {verb["conjugation"]}
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default PerVerbList;