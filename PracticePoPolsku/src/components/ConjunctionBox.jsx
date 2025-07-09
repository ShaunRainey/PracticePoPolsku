import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function ConjunctionBox() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Conjunctions')
    }

    return (
        <Container className="nounBox" onClick={handleClick}>
            <Row>
                <Col>
                    <h1>Conjunctions</h1>
                    <p> A list of all Conjunctions used for this project, including some example uses </p>
                </Col>
            </Row>
        </Container>
    )
 }

export default ConjunctionBox;