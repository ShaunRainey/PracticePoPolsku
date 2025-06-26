import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function NounBox() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Nouns')
    }

    return (
        <Container className="nounBox" onClick={handleClick}>
            <Row>
                <Col>
                    <h1>Nouns</h1>
                    <p> A list of all nouns used for this project, including case declined forms </p>
                </Col>
            </Row>
        </Container>
    )
}

export default NounBox;