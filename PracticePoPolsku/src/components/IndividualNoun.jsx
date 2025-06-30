import { Card, Row, Col, Container } from 'react-bootstrap'
import nounFunctions from '../utilities/nouns'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function IndividualNoun({ nounLimit }) {

    let { noun_id } = useParams();
    const [noun, setNoun] = useState(null);
    
    useEffect(() => {
        const getNoun = async (noun_id) => {
            const nounById = await nounFunctions.getNounById(noun_id);
            console.log("nounById", nounById[0]["base_noun"])

            console.log(noun_id === "1533")
            const nounById2 = noun_id === "1533" ? [{base_noun: "none of your business"}] : await nounFunctions.getNounById(Number(noun_id) + 1);
            console.log("nounById2", nounById2[0]["base_noun"])

            const nounById3 = noun_id === "1" ? [{base_noun: "still none of your business"}] : await nounFunctions.getNounById(Number(noun_id) - 1);
            console.log("nounById3", nounById3[0]["base_noun"])

            const nounsForDisplay = [];
            
            if (nounById[0]["singular_plural"] === "Singular") {
                nounsForDisplay.push(nounById[0])
                if (nounById[0]["base_noun"] === nounById2[0]["base_noun"]) {
                    nounsForDisplay.push(nounById2[0])
                }
            }
            else  {
                if (nounById[0]["base_noun"] === nounById3[0]["base_noun"]) {
                    nounsForDisplay.push(nounById3[0]);
                    nounsForDisplay.push(nounById[0])
                } else {
                    nounsForDisplay.push(nounById[0])
                }
            }  
            setNoun(nounsForDisplay)
        }
        getNoun(noun_id);
    }, [])

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
        {noun[0] && (
            <tr key={noun[0]?.noun_id} className='nounTable'>
                <td>{noun[0]?.base_noun || ''}</td>
                <td>{noun[0]?.meaning || ''}</td>
                <td>{noun[0]?.singular_plural || ''}</td>
                <td>{noun[0]?.gender || ''}</td>
                <td>{noun[0]?.nominative || ''}</td>
                <td>{noun[0]?.accusative || ''}</td>
                <td>{noun[0]?.instrumental || ''}</td>
                <td>{noun[0]?.genitive || ''}</td>
                <td>{noun[0]?.locative || ''}</td>
                <td>{noun[0]?.vocative || ''}</td>
                <td>{noun[0]?.dative || ''}</td>
            </tr>
        )}
        {noun[1] && (
            <tr key={noun[1]?.noun_id} className='nounTable'>
                <td></td>
                <td></td>
                <td>{noun[1]?.singular_plural || ''}</td>
                <td>{noun[1]?.gender || ''}</td>
                <td>{noun[1]?.nominative || ''}</td>
                <td>{noun[1]?.accusative || ''}</td>
                <td>{noun[1]?.instrumental || ''}</td>
                <td>{noun[1]?.genitive || ''}</td>
                <td>{noun[1]?.locative || ''}</td>
                <td>{noun[1]?.vocative || ''}</td>
                <td>{noun[1]?.dative || ''}</td>
            </tr>
)}
        </tbody>
        </Table>
        );
}

export default IndividualNoun;