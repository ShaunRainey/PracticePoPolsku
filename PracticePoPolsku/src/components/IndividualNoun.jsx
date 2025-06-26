import { Card, Row, Col, Container } from 'react-bootstrap'
import nounFunctions from '../utilities/nouns'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function IndividualNoun() {

    let { noun_id } = useParams()
    const [noun, setNoun] = useState()
    
    useEffect(() => {
        const getNoun = async (noun_id) => {
            const nounById = await nounFunctions.getNounById(noun_id);
            setNoun(nounById[0]);
        }
        getNoun(noun_id);
    }, [])
    
    console.log(noun)

    if (!noun) {
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
            <th>Vocative</th>
            <th>Dative</th>
            </tr>
        </thead>
        <tbody>
            <tr key={noun.noun_id} className='nounTable'>
                <td>{noun.base_noun}</td>
                <td>{noun.meaning}</td>
                <td>{noun["singular_plural"]}</td>
                <td>{noun.gender}</td>
                <td>{noun.nominative}</td>
                <td>{noun.accusative}</td>
                <td>{noun.instrumental}</td>
                <td>{noun.genitive}</td>
                <td>{noun.locative}</td>
                <td>{noun.vocative}</td>
                <td>{noun.dative}</td>
                   
            </tr>
        </tbody>
        </Table>
        );
}

export default IndividualNoun;