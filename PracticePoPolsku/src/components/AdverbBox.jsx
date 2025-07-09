import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function AdverbBox() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Adverbs')
    }

    return (
        <Container className="nounBox" onClick={handleClick}>
            <Row>
                <Col>
                    <h1>Adverbs</h1>
                    <p> A list of all Adverbs used for this project, including some example uses </p>
                </Col>
            </Row>
        </Container>
    )
 }

export default AdverbBox;