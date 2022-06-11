import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import cardImg from '../images/card_img.png';
import classNames from 'classnames';
import Image from 'next/image';

`query MyQuery {
    allFile(filter: { sourceInstanceName:{eq: "loading"} }) {
      edges {
        node {
          extension
          dir
          modifiedTime
        }
      }
    }
  }`;

// if( {p.types[1].type.name} == "Water") {
//     waterType();
// }
// if ({p.types[]})
/* 
function typeCheck(p) {
  const isGrass = p.types[0].type.name === "grass";
  const isWater = p.types[0].type.name === "water";
  const isFire = p.types[0].type.name === "fire";

  const typeGrass = useState(grass, setGrass); */

function PokeCard({ p }) {
  // if ("grass" === p.types[0].type.name) {

  //   return ;
  // }else if(p.types[0].type.name === "water") {
  //   return <TypeWater />;
  // }else if(p.types[0].type.name === "fighting") {
  //   return <TypeFire />;
  // }else if(p.types[0].type.name === "normal")

  // console.log(p.types[0].type.name)

  // function waterType() {
  //         return (
  //             <Card style={
  //                 background-image: linear-gradient(-60deg, #f12711 0%, #f5af19 100%)
  //                 border-width: 2px 5px 7.5px 2px
  //                 border-color: rgb(0, 194, 212);
  //             }>
  //         )
  //     }
  const cardWhite = classNames({
    'frame-card-bg-white-grass': `${p.types[0].type.name}` === 'grass',
    'frame-card-bg-white-fire': `${p.types[0].type.name}` === 'fire',
    'frame-card-bg-white-fairy': `${p.types[0].type.name}` === 'fairy',
    'frame-card-bg-white-water': `${p.types[0].type.name}` === 'water',
    'frame-card-bg-white-rock': `${p.types[0].type.name}` === 'rock',
    'frame-card-bg-white-dark': `${p.types[0].type.name}` === 'dark',
    'frame-card-bg-white-ghost': `${p.types[0].type.name}` === 'ghost',
    'frame-card-bg-white-ice': `${p.types[0].type.name}` === 'ice',
    'frame-card-bg-white-dragon': `${p.types[0].type.name}` === 'dragon',
    'frame-card-bg-white-flying': `${p.types[0].type.name}` === 'flying',
    'frame-card-bg-white-steel': `${p.types[0].type.name}` === 'steel',
    'frame-card-bg-white-electric': `${p.types[0].type.name}` === 'electric',
    'frame-card-bg-white-poison': `${p.types[0].type.name}` === 'poison',
    'frame-card-bg-white-fighting': `${p.types[0].type.name}` === 'fighting',
    'frame-card-bg-white-psychic': `${p.types[0].type.name}` === 'psychic',
    'frame-card-bg-white-ground': `${p.types[0].type.name}` === 'ground',
    'frame-card-bg-white-bug': `${p.types[0].type.name}` === 'bug',
    'frame-card-bg-white-normal': `${p.types[0].type.name}` === 'normal',

  });

  const logoType = classNames({
    'type-logo-TYPENAME-grass': `${p.types[0].type.name}` === 'grass',
    'type-logo-TYPENAME-fire': `${p.types[0].type.name}` === 'fire',
    'type-logo-TYPENAME-fairy': `${p.types[0].type.name}` === 'fairy',
    'type-logo-TYPENAME-water': `${p.types[0].type.name}` === 'water',
    'type-logo-TYPENAME-rock': `${p.types[0].type.name}` === 'rock',
    'type-logo-TYPENAME-dark': `${p.types[0].type.name}` === 'dark',
    'type-logo-TYPENAME-ghost': `${p.types[0].type.name}` === 'ghost',
    'type-logo-TYPENAME-ice': `${p.types[0].type.name}` === 'ice',
    'type-logo-TYPENAME-dragon': `${p.types[0].type.name}` === 'dragon',
    'type-logo-TYPENAME-flying': `${p.types[0].type.name}` === 'flying',
    'type-logo-TYPENAME-steel': `${p.types[0].type.name}` === 'steel',
    'type-logo-TYPENAME-electric': `${p.types[0].type.name}` === 'electric',
    'type-logo-TYPENAME-poison': `${p.types[0].type.name}` === 'poison',
    'type-logo-TYPENAME-fighting': `${p.types[0].type.name}` === 'fighting',
    'type-logo-TYPENAME-psychic': `${p.types[0].type.name}` === 'psychic',
    'type-logo-TYPENAME-ground': `${p.types[0].type.name}` === 'ground',
    'type-logo-TYPENAME-bug': `${p.types[0].type.name}` === 'bug',
    'type-logo-TYPENAME-normal': `${p.types[0].type.name}` === 'normal'
  });

  const pokeName = classNames({
    'poke-name-grass': `${p.types[0].type.name}` === 'grass',
    'poke-name-fire': `${p.types[0].type.name}` === 'fire',
    'poke-name-fairy': `${p.types[0].type.name}` === 'fairy',
    'poke-name-water': `${p.types[0].type.name}` === 'water',
    'poke-name-rock': `${p.types[0].type.name}` === 'rock',
    'poke-name-dark': `${p.types[0].type.name}` === 'dark',
    'poke-name-ghost': `${p.types[0].type.name}` === 'ghost',
    'poke-name-ice': `${p.types[0].type.name}` === 'ice',
    'poke-name-dragon': `${p.types[0].type.name}` === 'dragon',
    'poke-name-flying': `${p.types[0].type.name}` === 'flying',
    'poke-name-steel': `${p.types[0].type.name}` === 'steel',
    'poke-name-electric': `${p.types[0].type.name}` === 'electric',
    'poke-name-poison': `${p.types[0].type.name}` === 'poison',
    'poke-name-fighting': `${p.types[0].type.name}` === 'fighting',
    'poke-name-psychic': `${p.types[0].type.name}` === 'psychic',
    'poke-name-ground': `${p.types[0].type.name}` === 'ground',
    'poke-name-bug': `${p.types[0].type.name}` === 'bug',
    'poke-name-normal': `${p.types[0].type.name}` === 'normal',
    'poke-name-grass': `${p.types[0].type.name}` === 'grass',
    'poke-name-fire': `${p.types[0].type.name}` === 'fire',
    'poke-name-fairy': `${p.types[0].type.name}` === 'fairy'
  });

  const typeName = classNames({
    'TYPENAME-grass': `${p.types[0].type.name}` === 'grass',
    'TYPENAME-fire': `${p.types[0].type.name}` === 'fire',
    'TYPENAME-fairy': `${p.types[0].type.name}` === 'fairy',
    'TYPENAME-water': `${p.types[0].type.name}` === 'water',
    'TYPENAME-rock': `${p.types[0].type.name}` === 'rock',
    'TYPENAME-dark': `${p.types[0].type.name}` === 'dark',
    'TYPENAME-ghost': `${p.types[0].type.name}` === 'ghost',
    'TYPENAME-ice': `${p.types[0].type.name}` === 'ice',
    'TYPENAME-dragon': `${p.types[0].type.name}` === 'dragon',
    'TYPENAME-flying': `${p.types[0].type.name}` === 'flying',
    'TYPENAME-steel': `${p.types[0].type.name}` === 'steel',
    'TYPENAME-electric': `${p.types[0].type.name}` === 'electric',
    'TYPENAME-poison': `${p.types[0].type.name}` === 'poison',
    'TYPENAME-fighting': `${p.types[0].type.name}` === 'fighting',
    'TYPENAME-psychic': `${p.types[0].type.name}` === 'psychic',
    'TYPENAME-ground': `${p.types[0].type.name}` === 'ground',
    'TYPENAME-bug': `${p.types[0].type.name}` === 'bug',
    'TYPENAME-normal': `${p.types[0].type.name}` === 'normal',
    'TYPENAME-grass': `${p.types[0].type.name}` === 'grass',
    'TYPENAME-fire': `${p.types[0].type.name}` === 'fire',
    'TYPENAME-fairy': `${p.types[0].type.name}` === 'fairy'
  });

  const cardGradient = classNames({
    'card-bg-gradient-grass': `${p.types[0].type.name}` === 'grass',
    'card-bg-gradient-fire': `${p.types[0].type.name}` === 'fire',
    'card-bg-gradient-fairy': `${p.types[0].type.name}` === 'fairy',
    'card-bg-gradient-water': `${p.types[0].type.name}` === 'water',
    'card-bg-gradient-rock': `${p.types[0].type.name}` === 'rock',
    'card-bg-gradient-dark': `${p.types[0].type.name}` === 'dark',
    'card-bg-gradient-ghost': `${p.types[0].type.name}` === 'ghost',
    'card-bg-gradient-ice': `${p.types[0].type.name}` === 'ice',
    'card-bg-gradient-dragon': `${p.types[0].type.name}` === 'dragon',
    'card-bg-gradient-flying': `${p.types[0].type.name}` === 'flying',
    'card-bg-gradient-steel': `${p.types[0].type.name}` === 'steel',
    'card-bg-gradient-electric': `${p.types[0].type.name}` === 'electric',
    'card-bg-gradient-poison': `${p.types[0].type.name}` === 'poison',
    'card-bg-gradient-fighting': `${p.types[0].type.name}` === 'fighting',
    'card-bg-gradient-psychic': `${p.types[0].type.name}` === 'psychic',
    'card-bg-gradient-ground': `${p.types[0].type.name}` === 'ground',
    'card-bg-gradient-bug': `${p.types[0].type.name}` === 'bug',
    'card-bg-gradient-normal': `${p.types[0].type.name}` === 'normal',
    'card-bg-gradient-grass': `${p.types[0].type.name}` === 'grass',
    'card-bg-gradient-fire': `${p.types[0].type.name}` === 'fire',
    'card-bg-gradient-fairy': `${p.types[0].type.name}` === 'fairy'
  })



  return (
    <div className="Page-outer">
      <div id="Page" data-name="Artboards" className="Page">
        <div className="Frame-outer">
          <div id="Frame" data-name="card-parent" className="Frame">
            <div className="frame-card-outline-outer">
              <div
                id="frame-card-outline"
                data-name="frame-card-outline"
                className="frame-card-outline"
              >
                <div className="Frame-card-elements-outer">
                  <div
                    id="Frame-card-elements"
                    data-name="Frame-card-elements"
                    className="Frame-card-elements"
                  >
                    <div className="frame-card-bg-white-outer">
                      <div
                        data-name="frame-card-bg-white"
                        id={cardWhite}
                        className="frame-card-bg-white"
                      ></div>
                    </div>
                    <div className="frame-card-img-outer">
                      <div
                        id="frame-card-img"
                        data-name="frame-card-img"
                        className="frame-card-img"
                      >
                        <div className="card-img-outer">
                          <Image
                            id="card-img"
                            src={p.sprites.front_default}
                            data-name="card-img"
                            alt="Pokemon Image"
                            className="card-img"
                            width="205px"
                            height="203px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="frame-pokemon-name-outer">
                      <div
                        id="frame-pokemon-name"
                        data-name="frame-pokemon-name"
                        className="frame-pokemon-name"
                      >
                        <div className="card-frame-name-outer">
                          <div
                            id="card-frame-name"
                            data-name="card-frame-name"
                            className="card-frame-name"
                          >
                            <div className="poke-name-outer">
                              <div
                                id={pokeName}
                                data-name="poke-name"
                                className="poke-name"
                              >
                                <div key="0">{p.name}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-type-logo-name-outer">
                      <div
                        id="frame-type-logo-name"
                        data-name="frame-type-logo-name"
                        className="frame-type-logo-name"
                      >
                        <div className="frame-type-name-outer">
                          <div
                            id="frame-type-name"
                            data-name="frame-type-name"
                            className="frame-type-name"
                          >
                            <div className="TYPENAME-outer">
                              <div
                                id={typeName}
                                data-name="TYPENAME"
                                className="TYPENAME"
                              >
                                <div key="0">
                                  {p.types[0].type.name}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="TYPENAME-logo-outer">
                          <div
                            id="TYPENAME-logo"
                            data-name="TYPENAME-logo">
                            <div className="Frame-4-outer">
                              <div id="Frame-4" data-name="Frame 4" className="Frame-4">
                                <div className="type-logo-TYPENAME-outer">
                                  <img
                                    id={logoType}
                                    data-name="type-logo-TYPENAME"
                                    alt="Pokemon Type"
                                    className="type-logo-TYPENAME"
                                    height={25}
                                    width={25}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className={`type-gradient-${p.types[0].type.name}`}>

                  </div> */}
                </div>
                <div className="card-bg-gradient-outer">
                  <div
                    id={cardGradient}
                    data-name="card-bg-gradient"
                    alt="card-bg-gradient"
                    className="card-bg-gradient"
                    >              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default PokeCard;
