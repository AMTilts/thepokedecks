import React from 'react'
import {useState, useEffect} from 'react'
import styles from './shinybutton.module.css'

// export async function getStaticProps( { params }) {
//     const res = await fetch(`${defaultEndpoint}/${params.characterName}`)
//     const character = await res.json()

//     return { props: { character } }
// }

async function getServerSideProps({ query }) {
    const { name } = query;
    const res = await fetch(`${baseUrl}/${name}`);
    const data = await res.json();
    console.log(res.json);
    return {
        props: {
            data
        }
    }
};

export default function ShinyButton(p, btnShiny) {
        return (
            <div className={styles.shinylogo}>
                <button className={styles.shinybutton} onClick={() => btnShiny}> <img src="/images/shiny-reg21.svg" className={styles.shinysvg} />
                    <p className={styles.caption-`${p.type}`}>SHINY</p>
                </button>
            </div>
        )
    }   

