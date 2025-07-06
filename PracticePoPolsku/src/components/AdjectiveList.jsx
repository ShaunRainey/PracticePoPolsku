import { Card, Row, Col, Container } from 'react-bootstrap'
import adjectiveFunctions from '../utilities/adjectives'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Table from 'react-bootstrap/Table';

function AdjectiveList() {

    const [adjectives, setAdjectives] = useState()

    useEffect(() => {
        const getAllAdjectives = async () => {
            const allAdjectives = await adjectiveFunctions.getAdjectives()

            const baseAdjectives = {}

            allAdjectives.forEach((adjective) => {
                const base = adjective.base_adjective
                const adjectiveInABox = [adjective]
                const holdingBox = []
                
                if (!baseAdjectives.hasOwnProperty(base)) {
                    baseAdjectives[base] = holdingBox;
                    baseAdjectives[base].push(adjectiveInABox)
                } 
                else {
                    baseAdjectives[base].push(adjectiveInABox)
                }
            })
            setAdjectives(Object.entries(baseAdjectives).sort())
        }
        getAllAdjectives()
    }, [])

    if (!adjectives) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base Adjective</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                {adjectives.map((adjective) => (
                    <tr key={adjective[0]} className='nounTable'>
                        <td>
                            <Link to={`/adjectives/${adjective[1][0][0]["adjective_id"]}`}>
                                {adjective[1][0][0]["base_adjective"]}
                            </Link>
                        </td>

                        <td>
                            <Link to={`/adjectives/${adjective[1][0][0]["adjective_id"]}`}>
                                {adjective[1][0][0]["meaning"]}
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        );
}

export default AdjectiveList;