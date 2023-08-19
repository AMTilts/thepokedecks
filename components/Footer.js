import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap'
import styles from './Navbar.module.css'



function Footer() {
    return (
        <>
          <Navbar className={styles.footercontainer}>

            <Navbar className={styles.navlinks}>
            </Navbar>
          </Navbar>
        </>
    )
}

export default Footer
