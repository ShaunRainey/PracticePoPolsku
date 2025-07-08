import { Card, Row, Col, Container } from 'react-bootstrap'
import adjectiveFunctions from '../utilities/adjectives'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function IndividualAdjective() {
    
    const { adjective_id } = useParams();

        const [adjective, setAdjective] = useState()

    useEffect(() => {
        const getAnAdjectiveById = async () => {
            const allAdjectives = await adjectiveFunctions.getAdjectives();
            const adjectiveById = await adjectiveFunctions.getAdjectiveById(adjective_id);

            const parentAdjective = adjectiveById[0]["base_adjective"];

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
            setAdjective(baseAdjectives[parentAdjective])
        }
        getAnAdjectiveById()
    }, [])

    
    if (!adjective) {
        return (
            <p>Loading</p>
        )
    } else {
        console.log(adjective[0][0])
    }
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Base Adjective</th>
                    <th>Meaning</th>
                    <th>Singular/Plural</th>
                    <th>Gender</th>
                    <th>Nominative</th>
                    <th>Nominative Comparative</th>
                    <th>Nominative Superlative</th>
                    <th>Accusative Animate</th>
                    <th>Accusative Inanimate</th>
                    <th>Instrumental</th>
                    <th>Genitive</th>
                    <th>Locative</th>
                    <th>Dative</th>
                </tr>
            </thead>
            <tbody>
                <tr key={adjective[0][0]["adjective_id"]}>
                    <td>{adjective[0][0]["base_adjective"]}</td>
                    <td>{adjective[0][0]["meaning"]}</td>
                    <td>{adjective[0][0]["singular_plural"]}</td>
                    <td>{adjective[0][0]["gender"]}</td>
                    <td>{adjective[0][0]["nominative"]}</td>
                    <td>{adjective[0][0]["nominative_comparative"]}</td>
                    <td>{adjective[0][0]["nominative_superlative"]}</td>
                    <td>{adjective[0][0]["accusative_animate"]}</td>
                    <td>{adjective[0][0]["accusative_inanimate"]}</td>
                    <td>{adjective[0][0]["instrumental"]}</td>
                    <td>{adjective[0][0]["genitive"]}</td>
                    <td>{adjective[0][0]["locative"]}</td>
                    <td>{adjective[0][0]["dative"]}</td>
                </tr>
                <tr key={adjective[1][0]["adjective_id"]}>
                    <td></td>
                    <td></td>
                    <td>{adjective[1][0]["singular_plural"]}</td>
                    <td>{adjective[1][0]["gender"]}</td>
                    <td>{adjective[1][0]["nominative"]}</td>
                    <td>{adjective[1][0]["nominative_comparative"]}</td>
                    <td>{adjective[1][0]["nominative_superlative"]}</td>
                    <td>{adjective[1][0]["accusative_animate"]}</td>
                    <td>{adjective[1][0]["accusative_inanimate"]}</td>
                    <td>{adjective[1][0]["instrumental"]}</td>
                    <td>{adjective[1][0]["genitive"]}</td>
                    <td>{adjective[1][0]["locative"]}</td>
                    <td>{adjective[1][0]["dative"]}</td>
                </tr>
                <tr key={adjective[2][0]["adjective_id"]}>
                    <td></td>
                    <td></td>
                    <td>{adjective[2][0]["singular_plural"]}</td>
                    <td>{adjective[2][0]["gender"]}</td>
                    <td>{adjective[2][0]["nominative"]}</td>
                    <td>{adjective[2][0]["nominative_comparative"]}</td>
                    <td>{adjective[2][0]["nominative_superlative"]}</td>
                    <td>{adjective[2][0]["accusative_animate"]}</td>
                    <td>{adjective[2][0]["accusative_inanimate"]}</td>
                    <td>{adjective[2][0]["instrumental"]}</td>
                    <td>{adjective[2][0]["genitive"]}</td>
                    <td>{adjective[2][0]["locative"]}</td>
                    <td>{adjective[2][0]["dative"]}</td>
                </tr>
                <tr key={adjective[3][0]["adjective_id"]}>
                    <td></td>
                    <td></td>
                    <td>{adjective[3][0]["singular_plural"]}</td>
                    <td>{adjective[3][0]["gender"]}</td>
                    <td>{adjective[3][0]["nominative"]}</td>
                    <td>{adjective[3][0]["nominative_comparative"]}</td>
                    <td>{adjective[3][0]["nominative_superlative"]}</td>
                    <td>{adjective[3][0]["accusative_animate"]}</td>
                    <td>{adjective[3][0]["accusative_inanimate"]}</td>
                    <td>{adjective[3][0]["instrumental"]}</td>
                    <td>{adjective[3][0]["genitive"]}</td>
                    <td>{adjective[3][0]["locative"]}</td>
                    <td>{adjective[3][0]["dative"]}</td>
                </tr>
                <tr key={adjective[4][0]["adjective_id"]}>
                    <td></td>
                    <td></td>
                    <td>{adjective[4][0]["singular_plural"]}</td>
                    <td>{adjective[4][0]["gender"]}</td>
                    <td>{adjective[4][0]["nominative"]}</td>
                    <td>{adjective[4][0]["nominative_comparative"]}</td>
                    <td>{adjective[4][0]["nominative_superlative"]}</td>
                    <td>{adjective[4][0]["accusative_animate"]}</td>
                    <td>{adjective[4][0]["accusative_inanimate"]}</td>
                    <td>{adjective[4][0]["instrumental"]}</td>
                    <td>{adjective[4][0]["genitive"]}</td>
                    <td>{adjective[4][0]["locative"]}</td>
                    <td>{adjective[4][0]["dative"]}</td>
                </tr>
        
            </tbody>

        </Table>
    )
}

export default IndividualAdjective;