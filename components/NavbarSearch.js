import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './NavbarSearch.module.css'
import Search from './Search.js'
import Pagination from './Pagination.js'


function pokeNavbarSearch() {
    return (
        <>
            <navbar className={styles.navbarContainerSearch}>
                <div className={styles.searchContainer}>
                    <Pagination />
                </div>
            </navbar>
        </>
    )
}

export default pokeNavbarSearch
