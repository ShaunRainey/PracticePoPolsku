import { Container, Row, Col } from "react-bootstrap";
import NounBox from "./NounBox";
import PronounBox from "./PronounBox";

function HomePage() {
    return (
        <Container>
            <Row>
                <Col>
                    < NounBox/>
                </Col>
                <Col>
                    < PronounBox/>
                </Col>
            </Row>
            <Row>
                <Col>
                    < NounBox/>
                </Col>
                <Col>
                    < NounBox/>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;