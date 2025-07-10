import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function PerVerbBox() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Perfective-Verbs')
    }

    return (
        <Container className="nounBox" onClick={handleClick}>
            <Row>
                <Col>
                    <h1>Perfective Verbs</h1>
                    <p> All perfective verbs used in this project, including conjugations </p>
                </Col>
            </Row>
        </Container>
    )
 }

export default PerVerbBox;