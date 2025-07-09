import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function PrepositionBox() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Prepositions')
    }

    return (
        <Container className="nounBox" onClick={handleClick}>
            <Row>
                <Col>
                    <h1>Prepositions</h1>
                    <p> A list of all Prepositions used for this project, including some example uses </p>
                </Col>
            </Row>
        </Container>
    )
 }

export default PrepositionBox;