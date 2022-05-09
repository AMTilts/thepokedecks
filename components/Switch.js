import React from 'react'

export default function Switch({ gotoDefault, gotoShiny }) {
    return (
        <>
            {gotoDefault && <a className="prev" onClick={gotoDefault}>&#10094;</a>} : {gotoShiny && <a className="prev" onClick={gotoShiny}>&#10094;</a>}
            {gotoShiny && <a className="next" onClick={gotoShiny}>&#10095;</a>}
        </>
    )
};