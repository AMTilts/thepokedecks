import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap'
import styles from './NavbarTemplate.module.css'

function pokeNavbar() {
    return (
        <>
          <Navbar className={styles.templatecontainer2}>
          <div className={styles.templatelogo2}>
          <Image 
            src="/balllogorev2.svg"
            width="55"
            height="55"
            alt="PokeDex-Ticles Logo"
            className={styles.logo}
           />
          </div>
          {/* <img
              src="/pokeballs-rotated.png"
              width="44px"
              height="46px"
              className={styles.d-inline-block align-middle"
              alt="Pokeballs Logo"
            /> */}
            <Navbar.Brand href="#home" className={styles.templatetitle}>POKEDEX-ICLES</Navbar.Brand>
            <Navbar className={styles.navlinks2}>
              <Nav.Link className="navlink" href="#home">HOME</Nav.Link>
              <Nav.Link classname="navlink" href="#features">POKEDEX</Nav.Link>
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
