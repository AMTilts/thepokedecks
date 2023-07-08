import React from 'react'
import styles from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons'

const arrowPrev = <FontAwesomeIcon icon={faLeftLong} beat style={{color: "#8b0303",}} />
const arrowNext = <FontAwesomeIcon icon={faRightLong} beat style={{color: "#8b0303",}} />

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div className="btn-div">
            <div className="btn-div2">
                {gotoPrevPage && <button className="btn-prev-wrap"><button className="btn-prev" onClick={gotoPrevPage}>PREV {arrowPrev}</button></button>}
                {gotoNextPage && <button className="btn-next-wrap"><button className="btn-next" onClick={gotoNextPage}>NEXT {arrowNext}</button></button>}
            </div>
        </div>
    )
};