import React from 'react'
import styles from './title.module.css'

export default function Title({ oneType, twoType }) {
    return (
        <div className="btn-div">
            <div className="btn-div2">
                {oneType && <button className="one-type"> onClick={oneType}>Previous PokePage</button>}
                {gotoNextPage && <button className="two-type" onClick={twoType}>Next PokePage</button>}
            </div>
        </div>
    )
};