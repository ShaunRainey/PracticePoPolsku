import { Card, Row, Col, Container } from 'react-bootstrap'
import perVerbFunctions from '../utilities/perfectiveVerbs'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function IndividualImpVerb() {

    let { verb_id } = useParams();
    const [perVerb, setPerVerb] = useState();
    
    useEffect(() => {
        const getPerVerb = async (verb_id) => {
            const pastVerbById = await perVerbFunctions.getFutureTensePerVerbById(verb_id);
            const presVerbById = await perVerbFunctions.getPastTensePerVerbById(verb_id);
            const condVerbById = await perVerbFunctions.getConditionalTensePerVerbById(verb_id);

            setPerVerb([pastVerbById, presVerbById, condVerbById])
        }
        getPerVerb(verb_id);
    }, [])

    if (!perVerb) {
        return (
            <p>Loading</p>
        )
    }

   return (
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Base Verb</th>
                <th>Meaning</th>
                <th>Conjugation</th>
                <th>Tense</th>
                <th>Ja</th>
                <th>Ty</th>
                <th>On / Ona</th>
                <th>My</th>
                <th>Wy</th>
                <th>Oni / One</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{perVerb[1][0]["verb"]}</td>
                <td>{perVerb[1][0]["meaning"]}</td>
                <td>{perVerb[1][0]["conjugation"]}</td>   
                <td>Present</td>
                <td>{perVerb[1][0]["ja"]}</td>
                <td>{perVerb[1][0]["ty"]}</td>
                <td>{perVerb[1][0]["on_ona"]}</td>   
                <td>{perVerb[1][0]["my"]}</td>
                <td>{perVerb[1][0]["wy"]}</td>
                <td>{perVerb[1][0]["oni_one"]}</td> 
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>   
                <td>Past</td>
                <td>{perVerb[0][0]["ja"]}</td>
                <td>{perVerb[0][0]["ty"]}</td>
                <td>{perVerb[0][0]["on_ona"]}</td>   
                <td>{perVerb[0][0]["my"]}</td>
                <td>{perVerb[0][0]["wy"]}</td>
                <td>{perVerb[0][0]["oni_one"]}</td> 
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>   
                <td>Conditional</td>
                <td>{perVerb[2][0]["ja"]}</td>
                <td>{perVerb[2][0]["ty"]}</td>
                <td>{perVerb[2][0]["on_ona"]}</td>   
                <td>{perVerb[2][0]["my"]}</td>
                <td>{perVerb[2][0]["wy"]}</td>
                <td>{perVerb[2][0]["oni_one"]}</td> 
            </tr>
        </tbody>
        </Table>
        );
}

export default IndividualImpVerb;