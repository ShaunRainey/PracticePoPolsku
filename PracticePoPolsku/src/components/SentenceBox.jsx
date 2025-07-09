import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function SentenceBox() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Sentences')
    }

    return (
        <Container className="nounBox" onClick={handleClick}>
            <Row>
                <Col>
                    <h1>Sentences</h1>
                    <p>A list of all Sentences used for this project</p>
                </Col>
            </Row>
        </Container>
    )
}

export default SentenceBox;