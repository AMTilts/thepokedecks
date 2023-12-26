import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import Navbar from '../components/Navbar.js'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer.js'
import Head from 'next/head';
import NavbarSearch from '../components/NavbarSearch.js'




function indexPage() {
    return (
        // <div className="container-main">
        <Container style={{background: 'linear-gradient(to bottom,  #d6ebff, #9fc0e1)'}} className="container-fullwidth" fluid>
           <Helmet>
            <Head>
                <meta charSet="utf-8" />
                <title>PokeDex Desticles</title>
            </Head>
            </Helmet>
            <Row style={{display: 'inline-flex', flexDirection: 'column'}}>
                <Col style={{display: 'inline-flex', flexDirection: 'column'}}>
                    <Navbar />
                </Col>
                <Col className="navbarSearchClass" style={{display: 'inline-flex', flexDirection: 'column'}}>
                    <NavbarSearch />
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



