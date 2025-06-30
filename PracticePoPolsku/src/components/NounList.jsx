import { Card, Row, Col, Container } from 'react-bootstrap'
import nounFunctions from '../utilities/nouns'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Table from 'react-bootstrap/Table';

function NounList({nounLimit, setNounLimit}) {

    const [nouns, setNouns] = useState([])
    console.log(nounLimit)

    useEffect(() => {
        const getAllNouns = async () => {
            const allNouns = await nounFunctions.getNouns()
            
            setNounLimit(allNouns.length)
    
            const filteredNouns = new Set();
            const uniqueByBaseNoun = allNouns.filter(obj => {
                if (filteredNouns.has(obj.base_noun)) {
                    return false;
                }
            filteredNouns.add(obj.base_noun);
            return true;
            });
        
            uniqueByBaseNoun.sort((a, b) => a.base_noun.localeCompare(b.base_noun));
            setNouns(uniqueByBaseNoun);
        }
        getAllNouns()
    }, [])

    // return (
    //     <Table striped bordered hover>
    //     <thead>
    //         <tr>
    //         <th>Base Noun</th>
    //         <th>Meaning</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {nouns.map((noun) => (
    //         <tr key={noun.noun_id} className='nounTable'>
    //             <td>{noun.base_noun}</td>
    //             <td>{noun.meaning}</td>
    //         </tr>
    //         ))}
    //     </tbody>
    //     </Table>
    //     );
    
        return (
        <Container>
            <p>Click a noun for case declensions!</p>
            <p>For now, ctrl+F to find a desired noun. Improved functionality upcoming</p>
                {nouns.map((noun) => {
                    return (
                        <div className='nounBox2' key={noun.noun_id}>
                            <Link to={`/nouns/${noun.noun_id}`}>
                                <Row>
                                    <Col>
                                        <p>{noun.base_noun}</p>
                                    </Col> 
                                    <Col>
                                        <p>{noun.meaning}</p>
                                    </Col>
                                    {/* <Col>
                                        <p>{noun.gender}</p>
                                    </Col> */}
                                </Row>
                            </Link>
                        </div>
                    )})}
        </Container>
    )
}

export default NounList;