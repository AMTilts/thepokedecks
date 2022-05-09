import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import Navbar from '../components/Navbar.js'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap'





function indexPage() {
    return (
        // <div className="container-main">
        <Container className="container-fullwidth" fluid>
           <Helmet>
                <meta charSet="utf-8" />
                <title>PokeDex Desticles</title>
            </Helmet>
            <Row>
                <Col>
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <App />
                </Col>
            </Row>
        </Container>
        // </div>
    )
}

export default indexPage;
