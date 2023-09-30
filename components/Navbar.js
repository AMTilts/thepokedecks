import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap'
import styles from './Navbar.module.css'

function pokeNavbar() {
    return (
        <>
          <Navbar className={styles.navbarcontainer}>
          {/* <div className={styles.navbarlogo}> */}
            <div className="logo-frame">
                <Image
                    src="/images/logo-4x.png"
                    width={424}
                    height={105}
                    alt="PokeDECKS Logo"
                />
              {/* <div className="logo-outline">
                <Image 
                  src="/images/logo-outline.png"
                  width="421"
                  height="102"
                  alt="PokeDecks logo card outline"
                />
              </div>

              <div className="logo-frame-text">
                <div className="frame-poke">
                    <Image 
                        src="/images/poke-text.png"
                        width="136"
                        height="44"
                        alt="The PokeDECKS Logo"
                        className="poke"
                    />
                </div>
                <div className="frame-decks">
                    <Image 
                        src="/images/decks-text.png"
                        width="126"
                        height="45"
                        alt="Decks text"
                        className="decks"
                    />
                </div>
                <div className="frame-com">
                    <Image                            
                        src="/images/com-text.png"
                        className="com"
                        width="58"
                        height="26"
                        alt="com text"
                    />
                    </div>
                </div> */}
              </div>
          
          {/* </div> */}
          {/* <img
              src="/pokeballs-rotated.png"
              width="44px"
              height="46px"
              className={styles.d-inline-block align-middle"
              alt="Pokeballs Logo"
            /> */}
            {/* <Navbar.Brand href="#home" className={styles.navbartitle}>Poke</Navbar.Brand><Navbar className={styles.navbarDecks}>DECKS</Navbar> */}
            <Navbar className={styles.navlinks}>
              <Nav.Link className="navlink" href="#home">HOME</Nav.Link>
              <Nav.Link className="navlink" href="#features">POKEDEX</Nav.Link>
              <Nav.Link className="navlink" href="#pricing">TYPES</Nav.Link>
            </Navbar>
            {/* <Form inline className={styles.justify-content-end">
              <FormControl type="text" placeholder="Search" className={styles.mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form> */}
          </Navbar>
        </>
    )
}

export default pokeNavbar
