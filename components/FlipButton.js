import React from 'react'

export default function FlipButton( {frontBackText, backDefault} ) {
  return (
    <div className="frontbackbuttons">
        <button className="fbbutton" onClick={() => backDefault}>                                                                                                    

            <img id="flip" src="/images/fliparrows.svg" />
            <h2 className="fliptext">{frontBackText}</h2>
            {/* <button className="backswitch" onClick={backDefault}>{frontBackText}</button> */}
            {/* <button className={`frontswitch-${types[0].type.name}`} onClick={frontBackFront}>{frontBackText}}</button> */}
        </button>
    </div>
  )
}
