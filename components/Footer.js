import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap'
import styles from './Navbar.module.css'



function Footer() {
    return (
        <>
          <Navbar className={styles.footercontainer}>

          {/* <img
              src="/pokeballs-rotated.png"
              width="44px"
              height="46px"
              className={styles.d-inline-block align-middle"
              alt="Pokeballs Logo"
            /> */}
            // <Navbar className={styles.navlinks}>
            // </Navbar>
            // {/* <Form inline className={styles.justify-content-end">
            //   <FormControl type="text" placeholder="Search" className={styles.mr-sm-2" />
            //   <Button variant="outline-primary">Search</Button>
            // </Form> */}
          </Navbar>
        </>
    )
}

export default Footer