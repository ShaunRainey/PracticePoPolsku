import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function AdjectiveBox() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Adjectives')
    }

    return (
        <Container className="nounBox" onClick={handleClick}>
            <Row>
                <Col>
                    <h1>Adjectives</h1>
                    <p> A list of all Adjectives used for this project, including case declined forms </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AdjectiveBox;