import { normalizeConfig } from 'next/dist/server/config-shared';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from "react";
import NavbarTemplate from '../../components/NavbarTemplate';
import ShinyButton from '../../components/ShinyButton'
import Alert from '../../components/Alert';
import Image from 'next/image';
import reactDom from 'react-dom';
import { NavItem } from 'react-bootstrap';
import FlipButton from '../../components/FlipButton'




const defaultEndpoint = 'https://pokeapi.co/api/v2/pokemon';

// export async function   getStaticProps({ query }) {
//     const { id } = query;
//     const res = await fetch(`${defaultEndpoint}/${id}`)
//     const cname = await fetch(`${defaultEndpoint}/o`)
//     const data = await res.json()
//     return {
//         props: { 
//             data
//          }
//     }

// }

// export async function getStaticProps({ params }) {
//     const results = await fetch(`${defaultEndpoint}/charmander`).then(res => res.json()) 
//     return {
//         props: {
//             character: results[0]
//         }
//     }
// }

// export async function getStaticPaths() {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1130')
//     const characters = await res.json()
    
//     const paths = characters.map((character) => ({
//         params: { characterName: character.name },
//     }))

//     return { paths, fallback: false }
// }

// export async function getStaticProps() {
//     const res = await fetch(`${defaultEndpoint}/${params.name}`)
//     const character = await res.json()

//     return { props: { character } }
// }

export async function getStaticPaths() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1130')
    const characters = await res.json()
    const paths = characters.results.map((character) => ({
        params: { characterName: character.name },
    }))

    return { paths, fallback: false }
}



const pogoAPI = 'https://pogoapi.net';
const candyToEvolveAPI = '/api/v1/pokemon_candy_to_evolve.json';
const maxCPAPI = '/api/v1/pokemon_max_cp.json';
const fastMovesAPI = '/api/v1/fast_moves.json';
const chargedMovesAPI = '/api/v1/charged_moves.json';
const pokeStatsAPI = '/api/v1/pokemon_stats.json';
const shinyPokeAPI = 'api/v1/shiny_pokemon.json';
const typesAPI = '/api/v1/pokemon_types.json';

export async function getStaticProps( { params }) {
    const res = await fetch(`${defaultEndpoint}/${params.characterName}`)
    const character = await res.json()
    const shiny = (`${character.sprites.front_shiny}`)
    const shinyArray = ([`${character.sprites[1]}`])
    const pogoShinyData = await fetch(`${pogoAPI}/${shinyPokeAPI}`)
    const pogoStatsData = await fetch(`${pogoAPI}/${pokeStatsAPI}`)
    const typesData = await fetch(`${pogoAPI}${typesAPI}`)

    const shinyRes = await pogoShinyData.json()
    const statsRes = await pogoStatsData.json()

    return { props: { character, shiny, shinyArray, shinyRes, statsRes } 
    }
}


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com',
// 		'X-RapidAPI-Key': '3c73397ccdmshd005240d8bef6dcp1e3d46jsn7001a22f4346'
// 	}
// };

// |

function useFetchData() {
    const [loading, setLoading] = React.useState([]);
    const [data, setData] = React.useState([]);
}

export default function Character({ character, shinyArray, resJson,shiny, shinyRes, statsRes}) {
    
    const { name, base_experience, types, sprites, abilities } = character;
    const [spriteCurrent, setSpriteCurrent] = useState(`${sprites.front_default}`);
    const [spriteShiny, setSpriteShiny] = useState(`${sprites.front_shiny}`);
    const [currentPosition, setCurrentPosition] = useState(`${sprites.front_default}`);
    const [currentPosition2, setCurrentPosition2] = useState(`${sprites.front_shiny}`);
    const [currentPosition3, setCurrentPosition3] = useState(`${sprites.back_default}`);
    const [currentPosition4, setCurrentPosition4] = useState(`${sprites.back_shiny}`);
    const [spriteButton, setSpriteButton] = useState(null);
    const [spriteToggle, setSpriteToggle] = useState(true);
    const [currentCaption, setCurrentCaption] = useState('SHINY')
    const [logoType, setLogoType] = useState([])
    const [isDefault, setIsDefault] = useState(true)
    const [typeTwo, setTypeTwo] = useState('')
    const [isTwoTypes,setIsTwoTypes] = useState(false);
    const [abilityTwo, setAbilityTwo] = useState('');
    const [isTwoAbilities, setIsTwoAbilities] = useState(false);
    const [frontBackText, setFrontBackText]  = useState('Flip to Back');
    const [isTypeTwo, setIsTypeTwo] = useState(false)
    const [numberTypes, setNumberTypes] = useState(`${character.types.length}`)
    const [slotNumber, setSlotNumber] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isPokeShiny, setIsPokeShiny] = useState(false);
    const [array, setArray] = useState({shinyArray});
    const [frontBackDefault, setFrontBackDefault] = useState('Flip to Back');
    const [isShiny, setIsShiny] = useState(false);
    const [isFront, setIsFront] = useState(true);
    const [pokeName, setPokeName] = useState(`${character.species.name}`)

        
    console.log(`This character has ${types.length} types!`);

    function spriteBalls(sprites) {
        console.log(character.sprites.front_shiny.valueOf)
        return (`${character.sprites.front_shiny.valueOf}` == null ? 'This Poke has a SHINY Yeeeeet' : 'Dang son, UR GAY');
    }

    console.log(spriteBalls());


            console.log(numberTypes);

    console.log({character})

    async function fetchType(character, characterName) {
        const res = await fetch(`${defaultEndpoint}/${characterName}`)
        const cdata = res.json()
        const types = cdata.types
        const sprites = cdata.sprites
        return { props: {
                    cdata,
                    types,
                    sprites
                },
        setSlotNumber(types) {
            console.log(slotNumber());
            console.log(sprites);
        }
        };
    }


    const typeLogo = ({ src, width }) => {
        return `../../style/images/type_logo_${src}?w=${width}`
    }

    const typeLogoImg = (props) => {
        return (
            <Image
                loader={typeLogo}
                src={`../../style/images/${types[0].type.name}.png`}
                width={20}
                height={20}
            />
        )
    };


    useEffect(() => {
        function changeShiny() {
            console.log(isShiny)
            console.log(isFront)
            if (isShiny != true && isFront != true && currentPosition.toString() === `${sprites.back_default}`) {
                defaultBack
                setIsShiny(true)
                setIsFront(false)
            };
            if (isShiny != false && isFront !=true && currentPosition.toString() === `${sprites.back_shiny}`) {
                shinyBack
                setIsShiny(false)
                setIsFront(false)
            };
            if (isShiny != false && isFront !=false && currentPosition.toString() === `${sprites.front_shiny}`) {
                shinyFront
                setIsShiny(false)
                setIsFront(true)
            }
            // if (currentPosition.toString() != `${sprites.front_default}` || `${sprites.back_default}`) changeDefault;
            // if (currentPosition.toString() === `${sprites.front_default}`) {
            else {
                    defaultFront
                    setIsShiny(true)
                    setIsFront(true)
                };
        };
    }, []);



    // function balls() {
    //     function clickBalls(e) {
    //         e.preventDefault();
    //         console.log('GIMME DEM GLIZZIES');
    //     }
    //     return (
    //         <a href="#" onClick={clickBalls}>
    //             Click ME
    //         </a>
    //     );
    // }


    const ballDefault = event => {
        if (currentPosition == `${sprites.front_default}` && isFront === true) {
            setIsFront(false)
            setCurrentPosition(`${sprites.back_default}`)
            setFrontBackText('Flip to Front')
        } else if (currentPosition == `${sprites.front_shiny}` && isFront === true) {
            setIsFront(false)
            setCurrentPosition(`${sprites.back_shiny}`)
            setFrontBackText('Flip to Front')
        } else if (currentPosition == `${sprites.back_shiny}` && isFront === false) {
            setIsFront(true)
            setCurrentPosition(`${sprites.front_shiny}`)
            setFrontBackText('Flip to Back')
            setPokeName('BIG BLACK BALLS')
            setIsFront(true)
        } else if (currentPosition == `${sprites.back_default}` && isFront === false) {
            setIsFront(true)
            setCurrentPosition(`${sprites.front_default}`)
            setFrontBackText('Flip to Front')
            setIsFront(true)
            setPokeName('Me gusta las')
        } else {
            console.log('BIG BALLS IN MY FACE BROOOOO')
            setPokeName('Eat Big Balls')
        }
    };

    const changeShinySprite = event => {
        if (isFront === true && isShiny === false) {
            setCurrentPosition(`${sprites.front_shiny}`)
            setIsShiny(true)
            
        }
        else if (isFront === true && isShiny === true) {
            setCurrentPosition(`${sprites.front_default}`)
            setIsShiny(false)
        }
        else if (isFront === false && isShiny === false) {
            setCurrentPosition(`${sprites.back_shiny}`)
            setIsShiny(true)
        }
        // if (currentPosition.toString() != `${sprites.front_default}` || `${sprites.back_default}`) changeDefault;
        // if (currentPosition.toString() === `${sprites.front_default}`) {
        else {
            setCurrentPosition(`${sprites.back_default}`)
            setIsShiny(false)
            };
    };

    function backDefault() {
        if (isDefault !== true) switchShiny;
        else if (currentPosition == `${sprites.back_default}`) flipFront;
        else if (currentPosition == `${sprites.front_default}`) {
            setCurrentPosition(`${sprites.back_default}`)
            setFrontBackText('Flip to Front');
        };
        setCurrentPosition(`${sprites.front_default}`)
        setFrontBackText('Flip to Back');
    }

    function spriteBack() {
        setCurrentPosition(`${sprites.back_default}`)
    }

    // function twoTypes() {
    //     if (isTwoTypes === null) return;
    //     setTypeTwo(`${types[1].type.name}`);
            
    // }
    
    function twoAbilities() {
        if (isTwoAbilities === null) return;
        setAbilityTwo(`${abilities[1].ability.name}`);
    }

    function typeText() {
        setCurrentCaption(`${types[0].type.name}`)
    }


    function oneType() {
        console.log(`${character.types}`)
        if (`${character.types}` == 1) return
        else 
            return (
                <div className="temp-container-title">
                    <h1 className="title">
                        {pokeName} <img src={`/images/type_c21_${character.t[0].type.name}.svg`} className="titletypelogo" /> <img src={`/images/type_c21_${character.types[1].type.name}.svg`} className="titletypelogo" />
                    </h1>
                </div>  
            )   
        }

    function log() {
        console.log(`${character.character.types}.toString`)
        if (`${character.character.types}` === 1) console.log('type: 1')
        else if (`${character.character.types}` === 22) console.log('type: 22')
        else console.log(`${character.character.types}`)
    }

    function testShiny() {
        console.log('Shiny')
    }
    // function typeTwo() {
    //     if (`${types[1].type.name}` === null) setTypeTwo('');
    //     setTypeTwo(`${types[1]}.type.name`);
    // }
    //     setCurrentPosition2(`${sprites.front_default}`);
    //     setCurrentPosition1(`${sprites.front_shiny}`)
    // })

    // let imageURL="";
    // if (`${types[1].type.name}` != undefined)
    //     imageURL = typeLogoImgTwo;
    // else
    //
    // function tigoBitties() {
    //     if (`${types}` > 0) 
    //         console.log('Yes, BOII')
    //     else 
    //         console.log('No Daddy');
    // }

    // function oneType() {
    //     return (
    //         <div className="temp-container-title">
    //             <h1 className="title">
    //                 {name} <img src={`/images/type_c21_  aracter.types[0].type.name}.svg`} className="titletypelogo" />                         
    //             </h1>
    //         </div>
    //     )
    // }


    // function twoTypes() {
    //     return (
    //         <div className="temp-container-title">
    //             <h1 className="title">
    //                 {name} <img src={`/images/type_c21_${character.types[0].type.name}.svg`} className="titletypelogo" /> <img src={`/images/type_c21_${character.types[1].type.name}.svg`} className="titletypelogo2" />                            
    //             </h1>
    //         </div>
    //     )
    // }



    return (
        <>
        <div className="poke-temp-container">
            <Head>
                <div className="titletext">
                <title>{pokeName}</title>
                </div>
            </Head>

                <div className={`second-line-top-${types[0].type.name}`}></div>
                <div className={`type-gradient-${types[0].type.name}`}></div>
                <div>
                    <div className="temp-container">
                        <div className="container-back">
                            <div className="temp-container-title">
                                <h1 className="title">
                                    {pokeName} <img src={`/images/type_c21_${character.types[0].type.name}.svg`} className="titletypelogo" /> { numberTypes == 2 ? <img src={`/images/type_c21_${character.types[1].type.name}.svg`} className="titletypelogo" /> : null }
                                </h1>
                            </div>    {/* <>
                                    {`${character.types[0].type}` && `${character.types[1].type}` ? type1 : type2 }
                                    </> */}
                            <div className="topcontainer">
                                <div className="pagecontainer">
                                    <div className="slidecontainer">
                                        <div className="spritecontainer">
                                            <div className="spritebuttoncontainer">
                                            {/* <div className="leftcontainer"></div>    */}
                                                <img src={currentPosition} className="picdefault"  />
                                            {/* <img src={currentPosition3} className="backdefault" />   */}
                                                <FlipButton
                                                    ballDefault={ballDefault}
                                                    // flipFrontBackButton={flipFrontBackButton}
                                                >
                                                    <button className="fbbutton">                                                                                                    
                                                        <img id="flip" src="/images/fliparrows.svg" />
                                                            <h2 className="fliptext">{frontBackText}</h2>
                                                            {/* <button className="backswitch" onClick={backDefault}>{frontBackText}</button> */}
                                                            {/* <button className={`frontswitch-${types[0].type.name}`} onClick={frontBackFront}>{frontBackText}}</button> */}
                                                    </button>
                                                </FlipButton>
                                            </div>
                                        </div>
                                        
                                        { (`${sprites.front_shiny}` !==  null ?
                                                <div className="middlediv">
                                                    
                                                    <ShinyButton
                                                        className="shinybutton"
                                                        changeShinySprite={changeShinySprite}
                                                    >
                                                        <button className="shinybutton"><img src="/images/shiny-reg21.svg" className="shinysvg" />
                                                            <p className="caption">SHINY</p>
                                                        </button>
                                                    </ShinyButton>
                                                </div>
                                            :   <div className="middlediv">
                                                </div>)
                                        }
                                        <div className={`templateinfodiv-${types[0].type.name}`}>
                                            <ul>
                                                <li className="typeli"><b>Type(s):</b> {types[0].type.name} 
                                                    {/* <img src={`/images/type_logo_${types[0].type.name}.svg`} /> */}
                                                    {/* {typeTwo}  */}
                                                </li>
                                                <li className="typeli"><b>Ability:</b> {abilities[0].ability.name}</li>
                                                <li className="typeli"><b>{abilityTwo}</b></li>
                                                {/* { `${abilities[1].ability.name}` != ability ? <li className="typeli">{abilities[1].ability.name}</li>  : null } */}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <div className="numbertext">
                                        <img src={currentPosition2} className="spritefrontshiny" />
                                        <img src={currentPosition4} className="spritebackshiny" />
                                    </div>
                                    
                                    <div className="mySlides">
                                    <div className="numbertext"><img src={spriteCurrent} /></div>
                                        <img src={sprites.front_shiny} className="picdefault" />
                                    </div>
                                    <div className="mySlides">
                                        <div className="numbertext"></div>
                                        <img src={sprites.back_shiny} className="picdefault" />
                                    </div> */}
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`second-line-bottom-${types[0].type.name}`} style={{height: '1px'}}></div>
                <div className={`type-gradient-${types[0].type.name}`} style={{height: '3px', marginBottom: '0px'}}></div>
        </div>
    </>
    );
}