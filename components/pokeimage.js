import { useState } from 'react';

const Switch = () => {

    const [sprites] = useState([
        {
            default: `${sprites.front_default}`,
            pokeimg: "Front"
        },
        {
            default: `${sprites.front_shiny}`,
            pokeimg: "Front Shiny"
        }
    ])
};