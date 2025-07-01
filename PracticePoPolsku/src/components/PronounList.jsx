import { Card, Row, Col, Container } from 'react-bootstrap'
import pronounFunctions from '../utilities/pronouns'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Table from 'react-bootstrap/Table';

function PronounList() {

    const [pronouns, setPronouns] = useState([])

    useEffect(() => {
        const getAllPronouns = async () => {
            const allPronouns = await pronounFunctions.getPronouns()
            setPronouns(allPronouns);
        }
        getAllPronouns()
    }, [])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base Noun</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                {pronouns.map((pronoun) => (
                    <tr key={pronoun.pronoun_id} className='nounTable'>
                        <td>
                            <Link to={`/pronouns/${pronoun.pronoun_id}`}>
                                {pronoun.pronoun}
                            </Link>
                        </td>

                        <td>
                            <Link to={`/pronouns/${pronoun.pronoun_id}`}>
                                {pronoun.meaning}
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        );
}

export default PronounList;