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
              <div className="logo-outline">
                <Image 
                  src="/images/logo-cardoutline.svg"
                  width="421"
                  height="102"
                  alt="The PokeDECKS Logo"
              />
              </div>

              <div className="logo-frame-text">
                <div className="poke">
                  Poke
                </div>
                <div className="decks">
                  Decks
                </div>
                <div className="com">
                  .com
                </div>
              </div>
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
