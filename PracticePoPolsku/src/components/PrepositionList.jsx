import { Card, Row, Col, Container } from 'react-bootstrap';
import prepositionFunctions from '../utilities/Prepositions';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function PrepositionList() {
    const [prepositions, setPrepositions] = useState()

    useEffect(() => {
        const getAllPrepositions = async () => {
            const allPrepositions = await prepositionFunctions.getPrepositions()
            console.log(allPrepositions)
            setPrepositions(allPrepositions)
        }
        getAllPrepositions()
    }, [])

    if (!prepositions) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base Preposition</th>
                    <th>Meaning</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                {prepositions.map((preposition) => (
                    <tr key={preposition["preposition_id"]} className='nounTable'>
                        <td>
                            <Link to={`prepositions/${preposition["preposition_id"]}`}>
                                {preposition["preposition"]}
                            </Link>
                        </td>
                        
                        <td>
                            <Link to={`prepositions/${preposition["preposition_id"]}`}>
                                {preposition["meaning"]}
                            </Link>
                        </td>

                        <td>
                            <Link to={`prepositions/${preposition["preposition_id"]}`}>
                                {preposition["examples"]} <br />
                                {preposition["translation_1"]} <br /><br />                                
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default PrepositionList;