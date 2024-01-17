import React from 'react'
import styles from './NavbarSearch.module.css'
import Pagination from './Pagination.js'


function NavbarSearch() {
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

export default NavbarSearch
