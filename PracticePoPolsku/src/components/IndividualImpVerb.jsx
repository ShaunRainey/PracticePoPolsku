import { Card, Row, Col, Container } from 'react-bootstrap'
import impVerbFunctions from '../utilities/imperfectiveVerbs'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function IndividualImpVerb() {

    let { verb_id } = useParams();
    const [impVerb, setImpVerb] = useState();
    
    useEffect(() => {
        const getImpVerb = async () => {
            const pastVerbById = await impVerbFunctions.getPastTenseImpVerbById(verb_id);
            const presVerbById = await impVerbFunctions.getPresentTenseImpVerbById(verb_id);
            const condVerbById = await impVerbFunctions.getConditionalTenseImpVerbById(verb_id);

            setImpVerb([pastVerbById, presVerbById, condVerbById])
        }
        getImpVerb(verb_id);
    }, [])

    if (!impVerb) {
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
                <td>{impVerb[1][0]["verb"]}</td>
                <td>{impVerb[1][0]["meaning"]}</td>
                <td>{impVerb[1][0]["conjugation"]}</td>   
                <td>Present</td>
                <td>{impVerb[1][0]["ja"]}</td>
                <td>{impVerb[1][0]["ty"]}</td>
                <td>{impVerb[1][0]["on_ona"]}</td>   
                <td>{impVerb[1][0]["my"]}</td>
                <td>{impVerb[1][0]["wy"]}</td>
                <td>{impVerb[1][0]["oni_one"]}</td> 
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>   
                <td>Past</td>
                <td>{impVerb[0][0]["ja"]}</td>
                <td>{impVerb[0][0]["ty"]}</td>
                <td>{impVerb[0][0]["on_ona"]}</td>   
                <td>{impVerb[0][0]["my"]}</td>
                <td>{impVerb[0][0]["wy"]}</td>
                <td>{impVerb[0][0]["oni_one"]}</td> 
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>   
                <td>Conditional</td>
                <td>{impVerb[2][0]["ja"]}</td>
                <td>{impVerb[2][0]["ty"]}</td>
                <td>{impVerb[2][0]["on_ona"]}</td>   
                <td>{impVerb[2][0]["my"]}</td>
                <td>{impVerb[2][0]["wy"]}</td>
                <td>{impVerb[2][0]["oni_one"]}</td> 
            </tr>
        </tbody>
        </Table>
        );
}

export default IndividualImpVerb;