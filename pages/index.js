import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import Navbar from '../components/Navbar.js'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/document'





function indexPage() {
    return (
        // <div className="container-main">
        <Container className="container-fullwidth" fluid>
           <Helmet>
            <Head>
                <meta charSet="utf-8" />
                <title>PokeDex Desticles</title>
            
            </Head>
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



