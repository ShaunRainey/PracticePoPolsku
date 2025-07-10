import { Card, Row, Col, Container } from 'react-bootstrap';
import adverbFunctions from '../utilities/adverbs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Table from 'react-bootstrap/Table';

function AdverbList() {

        const [adverbs, setAdverbs] = useState()

    useEffect(() => {
        const getAllAdverbs = async () => {
            const allAdverbs = await adverbFunctions.getAdverbs()

            setAdverbs(allAdverbs)
        }
        getAllAdverbs()
    }, [])

    if (!adverbs) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base Adverb</th>
                    <th>Meaning</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                {adverbs.map((adverb) => (
                    <tr key={adverb["adverb_id"]} className='nounTable'>
                        <td>
                            <Link to={`adverbs/${adverb["adverb_id"]}`}>
                                {adverb["adverb"]}
                            </Link>
                        </td>
                        
                        <td>
                            <Link to={`adverbs/${adverb["adverb_id"]}`}>
                                {adverb["meaning"]}
                            </Link>
                        </td>

                        <td>
                            <Link to={`adverbs/${adverb["adverb_id"]}`}>
                                {adverb["example_1"]} <br />
                                {adverb["translation_1"]} <br /><br />
                                {adverb["example_2"]} <br />
                                {adverb["translation_2"]} <br /><br />
                                {adverb["example_3"]} <br />
                                {adverb["translation_3"]} <br /><br />                                
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default AdverbList;