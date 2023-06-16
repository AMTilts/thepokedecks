import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './shinybutton.module.css'

// export async function getStaticProps( { params }) {
//     const res = await fetch(`${defaultEndpoint}/${params.characterName}`)
//     const character = await res.json()

//     return { props: { character } }
// }


export default function ShinyButton({changeShinySprite}) {

        return (
            <div className="shinylogo" id="shinylogoimage">
                <button id="shinyButton" onClick={changeShinySprite}>Shiny</button>
            </div>
        )
    };