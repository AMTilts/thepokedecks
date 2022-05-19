import React from 'react'
import {useState, useEffect} from 'react'
import styles from './shinybutton.module.css'

// export async function getStaticProps( { params }) {
//     const res = await fetch(`${defaultEndpoint}/${params.characterName}`)
//     const character = await res.json()

//     return { props: { character } }
// }


export default function ShinyButton(shiny, character, sprites, switchShiny, data) {
        return (
            <div className={styles.shinylogo}> 
                    <button className={styles.shinybutton}> <img src="/images/shiny-reg21.svg" className={styles.shinysvg} />
                        <p className={styles.caption}>SHINY</p>
                    </button>
            </div>
        )
    }   

