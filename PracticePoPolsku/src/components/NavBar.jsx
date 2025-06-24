import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router'

function NavBar() {
    
    const navigate = useNavigate();

    return (
        <nav className="navBar">
        <Container>
            <Row>
                <Col md={3}>
                    <Link to="/" /*onClick={()=> {window.reload()}}*/>Home</Link>
                </Col>

                <Col md={3}>
                    <Link to="/Quiz/" /*onClick={handleAllArtworksClick}*/>Quiz</Link>
                </Col>

                <Col md={3}>
                    <Link to="/Grammar-Notes" /*onClick={()=> {window.reload()}}*/ >Grammar Notes</Link>
                </Col>

                <Col md={3}>
                    <Link to="/About">General info</Link>
                </Col>
            </Row>
        </Container>
        </nav>
    );
}

export default NavBar;