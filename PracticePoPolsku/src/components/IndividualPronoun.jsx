import { Card, Row, Col, Container } from 'react-bootstrap'
import pronounFunctions from '../utilities/pronouns'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function IndividualPronoun() {

    let { pronoun_id } = useParams();
    const [pronoun, setPronoun] = useState(null);
    
    useEffect(() => {
        const getPronoun = async (noun_id) => {
            const pronounById = await pronounFunctions.getPronounById(pronoun_id);
            console.log("pronounById", pronounById[0])

            setPronoun(pronounById)
        }
        getPronoun(pronoun_id);
    }, [])

    if (!pronoun) {
        return (
            <p>Hello</p>
        )
    }

   return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Base Noun</th>
            <th>Meaning</th>
            <th>Singular/Plural</th>
            <th>Gender</th>
            <th>Nominative</th>
            <th>Accusative</th>
            <th>Instrumental</th>
            <th>Genitive</th>
            <th>Locative</th>
            <th>Dative</th>
            </tr>
        </thead>
           <tbody>
        {pronoun[0] && (
            <tr key={pronoun[0]?.pronoun_id} className='nounTable'>
                <td>{pronoun[0]?.pronoun || ''}</td>
                <td>{pronoun[0]?.meaning || ''}</td>
                <td>{pronoun[0]?.singular_plural || ''}</td>
                <td>{pronoun[0]?.gender || ''}</td>
                <td>{pronoun[0]?.nominative || ''}</td>
                <td>{pronoun[0]?.accusative || ''}</td>
                <td>{pronoun[0]?.instrumental || ''}</td>
                <td>{pronoun[0]?.genitive || ''}</td>
                <td>{pronoun[0]?.locative || ''}</td>
                <td>{pronoun[0]?.dative || ''}</td>
            </tr>
        )}
        </tbody>
        </Table>
        );
}

export default IndividualPronoun;