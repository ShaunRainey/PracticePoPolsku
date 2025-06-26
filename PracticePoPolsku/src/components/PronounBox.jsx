import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function PronounBox() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Quiz')
    }

    return (
        <Container className="nounBox" onClick={handleClick}>
            <Row>
                <Col>
                    <h1>Pronouns</h1>
                    <p> A list of all pronouns used for this project, including case declined forms </p>
                </Col>
            </Row>
        </Container>
    )
}

export default PronounBox;