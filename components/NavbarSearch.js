import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap'
import styles from './NavbarSearch.module.css'
import Search from './Search.js'

function pokeNavbarSearch() {
    return (
        <>
            <Navbar className={styles.navbarcontainer} style={{borderTopWidth: '10px', borderBottomWidth: '10px', borderColor: 'BLACK', paddingTop: '5px', paddingBottom: '5px'}}>
                <div className="search-container">
                    <Search />
                </div>
            </Navbar>
        </>
    )
}

export default pokeNavbarSearch
