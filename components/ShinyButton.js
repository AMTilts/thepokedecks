import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './shinybutton.module.css'

// export async function getStaticProps( { params }) {
//     const res = await fetch(`${defaultEndpoint}/${params.characterName}`)
//     const character = await res.json()

//     return { props: { character } }
// }


class ClickButton extends Component {

    render() {
        return (
            <div className={styles.shinylogo} onClick={this.props.changeShinySprite}>{this.props.children}</div>
        )
    }   
}

export default ClickButton;