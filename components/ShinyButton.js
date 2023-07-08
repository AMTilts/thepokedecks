import React, { Component, forwardRef } from "react";
import ReactDOM from "react-dom";
import styles from './shinybutton.module.css'
import Image from 'next/image';
   
// export async function getStaticProps( { params }) {
//     const res = await fetch(`${defaultEndpoint}/${params.characterName}`)
//     const character = await res.json()

//     return { props: { character } }
// }(,((.||\,~,,,,,,, cr.  f FF crcffdd guy bc ViloriaCD))
export default function ShinyButton(...props) {

    const handleClick = (handleShineButtonClick) => {
        handleShineButtonClick;
    }

        return (
            <div className="shinylogo" id="shin-logo-image-div">
                <Image src="/shinyblack.svg" id="shinylogoimage" handlShineButtonClick={handleClick} width={30} height={30} />
            </div>
        )
    };