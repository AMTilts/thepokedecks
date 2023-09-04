import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App.js';
import Navbar from '../../components/Navbar.js'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../components/Footer.js'
import Head from 'next/head';




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
            <Row>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </Container>
        // </div>
    )
}

export default indexPage;



