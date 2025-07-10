import { Card, Row, Col, Container } from 'react-bootstrap';
import sentenceFunctions from '../utilities/Sentences';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function SentenceList() {
    const [sentences, setSentences] = useState()

    useEffect(() => {
        const getAllSentences = async () => {
            const allSentences = await sentenceFunctions.getSentences()
            console.log(allSentences)
            setSentences(allSentences)
        }
        getAllSentences()
    }, [])

    if (!sentences) {
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
                    <th>Polish</th>
                    <th>English</th>
                </tr>
            </thead>
            <tbody>
                {sentences.map((sentence) => (
                    <tr key={sentence["sentence_id"]} className='nounTable'>
                        <td>
                            <Link to={`sentences/${sentence["sentence_id"]}`}>
                                {sentence["unit"]}
                            </Link>
                        </td>
                        
                        <td>
                            <Link to={`sentences/${sentence["sentence_id"]}`}>
                                {sentence["topic"]}
                            </Link>
                        </td>

                        <td>
                            <Link to={`sentences/${sentence["sentence_id"]}`}>
                                {sentence["polish"]} <br />                               
                            </Link>
                        </td>

                        <td>
                            <Link to={`sentences/${sentence["sentence_id"]}`}>
                                {sentence["english"]} <br />                               
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default SentenceList;