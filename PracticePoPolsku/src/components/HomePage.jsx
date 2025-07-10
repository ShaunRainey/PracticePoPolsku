import { Container, Row, Col } from "react-bootstrap";
import NounBox from "./NounBox";
import PronounBox from "./PronounBox";
import AdjectiveBox from "./AdjectiveBox";
import AdverbBox from "./AdverbBox";
import ConjunctionBox from "./ConjunctionBox";
import PrepositionBox from "./PrepositionBox";
import SentenceBox from "./SentenceBox";
import ImpVerbBox from "./ImpVerbBox";
import PerVerbBox from "./PerVerbBox";

function HomePage() {
    return (
        <Container>
            <Row>
                <Col>
                    < ImpVerbBox/>
                </Col>
                <Col>
                    < PerVerbBox/>
                </Col>
            </Row>
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
                    < AdjectiveBox/>
                </Col>
                <Col>
                    < AdverbBox/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ConjunctionBox />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PrepositionBox />
                </Col>
            </Row>
            <Row>
                <Col>
                    <SentenceBox />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;