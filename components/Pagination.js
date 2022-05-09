import React from 'react'
import styles from './Button.module.css'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div className="btn-div">
            <div className="btn-div2">
                {gotoPrevPage && <button className="btn-prev" onClick={gotoPrevPage}>Previous PokePage</button>}
                {gotoNextPage && <button className="btn-next" onClick={gotoNextPage}>Next PokePage</button>}
            </div>
        </div>
    )
};