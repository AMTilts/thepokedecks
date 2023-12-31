import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';



function fourOhFour() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found Bro. Time for the brown haze...</title>
        <html lang="eng" />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
            <h1 className="hero-title text-center">
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
        </Container>
      </section>
    </>
        );
    };

export default fourOhFour;