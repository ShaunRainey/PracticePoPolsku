import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function ImpVerbBox() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Imperfective-Verbs')
    }

    return (
        <Container className="nounBox" onClick={handleClick}>
            <Row>
                <Col>
                    <h1>Imperfective Verbs</h1>
                    <p> All imperfective verbs used in this project, including conjugations </p>
                </Col>
            </Row>
        </Container>
    )
 }

export default ImpVerbBox;