import { normalizeConfig } from 'next/dist/server/config-shared';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import NavbarTemplate from '../../components/NavbarTemplate';
import ShinyButton from '../../components/ShinyButton'
import Image from 'next/image';
import ReactDOM from 'react-dom';
import { NavItem } from 'react-bootstrap';
import FlipButton from '../../components/FlipButton'
import Sparkle from "../../public/images/sparkle.png"
import { Context } from "../../components/Context"
import imageSpark from '/images/sparkle.png'
import Canimation from '../../components/Canimation';
import Sparkles from '../../components/Sparkles'
import PropTypes from 'prop-types';
import { getImageSize } from 'next/dist/server/image-optimizer';




const defaultEndpoint = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';


// export async function getStaticPaths() {
//     const res = await fetch(defaultEndpoint)
//     const characters = await res.json()
//     const paths = characters.names.toLowerCase().map((character) => ({
//         params: { characterName: character.name },
//     }))

//     return { paths, fallback: false }
// }

export async function getStaticPaths() {
    const res = await fetch('https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json');
    const characters = await res.json();

    // Debugging: Log the fetched data
    console.log("Fetched characters:", characters);

    // Ensure the data structure is as expected
    if (!Array.isArray(characters)) {
        console.error("Unexpected data structure:", characters);
        return { paths: [], fallback: false };
    }

    const paths = characters.map((character) => ({
        params: { characterName: character.names.English.toLowerCase() },
    }));

    return { paths, fallback: false };
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
    const shiny = (`${character.assets.shinyImage}`)
    const shinyArray = ([`${character.assets[1]}`])
    const pogoShinyData = (`${character.assets.shinyImage}`)
    const pogoStatsData = await fetch(`${pogoAPI}/${pokeStatsAPI}`)
    const typesData = await fetch(`${character.primaryType.names.English}`)

    const shinyRes = await pogoShinyData.json()
    const statsRes = await pogoStatsData.json()

    return { props: { 
                character, shiny, shinyArray, shinyRes, statsRes, typesData
            },
            invalidate: 3600,
        };
            
    }


function useFetchData() {
    const [loading, setLoading] = React.useState([]);
    const [data, setData] = React.useState([]);
}

export default function Character({ character, shinyArray, imageS, sWidth, sHeight, resJson, shiny, shinyRes, statsRes, particles, imageRef, sparkle, ctx, sparkleImage, SparkleImg, image, startDrawing, sparkleRef, shinyBlackRef, renderFrame, ...props}) {
    
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
    const [frontBackText, setFrontBackText]  = useState('Flip');
    const [isTypeTwo, setIsTypeTwo] = useState(false)
    const [numberTypes, setNumberTypes] = useState(`${character.types.length}`)
    const [slotNumber, setSlotNumber] = useState([]);    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isPokeShiny, setIsPokeShiny] = useState(false);
    const [array, setArray] = useState({shinyArray});
    const [frontBackDefault, setFrontBackDefault] = useState('Flip to Back');
    const [isShiny, setIsShiny] = useState(false);
    const [isFront, setIsFront] = useState(true);
    const [pokeName, setPokeName] = useState(`${character.species.name}`)
    const [containerBack, setContainerBack] = useState('container-back');
    const [pageContainer, setPageContainer] = useState('pagecontainer');
    const [shinyAnimation, setShinyAnimation] = useState('shiny-animation')
    // const [sparkleImg, setSparkleImg] = useState('sparkleImg')
    const [shinePrecursor, setShinePrecursor] = useState(false);
    const [sparkling, setSparkling] = useState(false);
    const sparkles = useRef('sparkle-Img-before');
    const [flash, setFlash] = useState('flash') ;// Meant to replace flash.style.transition and flash.style.opacity
    const [shinyAnim, setShinyAnim] = useState('shiny'); //Meant to replace shiny.style.display methods being passed 
    const [sparkleImgCSS, setSparkleImgCSS] = useState('sparkleImg-before')
    const [canvasVisible, setCanvasVisible] = useState(true);
    const particleRef = useRef(null)    
    const imageSparkRef = useRef(null);
    const imageSparkCanvasRef = useRef(null);
    const [imageSparkParticles, setImageSparkParticles] = useState([]);
    const [isSpriteFront, setIsSpriteFront] = useState(true);
    console.log(`This character has ${types.length} types!`);



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
                alt="Pokemon Type One (Main Type)"
                width={20}
                height={20}
            />
        )
    };

    const ballDefault = event => {
        if (currentPosition == `${sprites.front_default}` && isFront === true) {
            setIsFront(false)
            setCurrentPosition(`${sprites.back_default}`)
            // setPokeName('Rippin Fat Farts.Balls')
            setFrontBackText('Front')
        } else if (currentPosition == `${sprites.front_shiny}` && isFront === true) {
            setIsFront(false)
            setCurrentPosition(`${sprites.back_shiny}`)
            // setPokeName('So many balls, so little time')
            setFrontBackText('Front')
        } else if (currentPosition == `${sprites.back_shiny}` && isFront === false) {
            setIsFront(true)
            setCurrentPosition(`${sprites.front_shiny}`)
            setFrontBackText('Back')
            // setPokeName('BIG BLACK BALLS')
            setIsFront(true)
        } else if (currentPosition == `${sprites.back_default}` && isFront === false) {
            setIsFront(true)
            setCurrentPosition(`${sprites.front_default}`)
            setFrontBackText('Back')
            setIsFront(true)
            // setPokeName('Why are you so gay?')
        } else {
            console.log('Uh Oh....')
            // setPokeName('Eating Glizzies and Chewing Bubble GUm')
        }
    };

    // function ShineCallback (shine){
    //     {shine}
    // }

    const changeShinySprite = () => {
        if (isFront === true && isShiny === false) {
            console.log(isFront);
            setPageContainer('pagecontainer-shiny')
            setContainerBack('container-back-shiny')
            setShinePrecursor(true)
            console.log({shine});
            setCurrentPosition(`${sprites.front_shiny}`)
            setIsShiny(true)       
            
        }
        else if (isFront === true && isShiny === true) {
            setContainerBack('container-back')
            setPageContainer('pagecontainer')
            setCurrentPosition(`${sprites.front_default}`)
            setIsShiny(false)
        }
        else if (isFront === false && isShiny === false) {
            setContainerBack('container-back-shiny')
            setPageContainer('pagecontainer-shiny')
            setShinePrecursor(true)
            setCurrentPosition(`${sprites.back_shiny}`)
            setIsShiny(true)
        }
        // if (currentPosition.toString() != `${sprites.front_default}` || `${sprites.back_default}`) changeDefault;
        // if (currentPosition.toString() === `${sprites.front_default}`) {
        else {
            setContainerBack('container-back')
            setPageContainer('pagecontainer')
            setCurrentPosition(`${sprites.back_default}`)
            setIsShiny(false)
            };
    };

    const changeShinySpriteTF = () => {
        console.log(isFront);
        setContainerBack('container-back')
        setPageContainer('pagecontainer')
        setShinePrecursor(false)
        console.log({shine});
        setCurrentPosition(`${sprites.back_default}`)
        setIsShiny(false)  
    }

    const changeShinySpriteTT = () => {
        setContainerBack('container-back')
        setPageContainer('pagecontainer')
        setCurrentPosition(`${sprites.front_default}`)
        setIsShiny(false)
    }

    const changeShinySpriteFT = () => {
        setContainerBack('container-back-shiny')
        setPageContainer('pagecontainer-shiny')
        setShinePrecursor(true)
        setCurrentPosition(`${sprites.front_shiny}`)
        setIsShiny(true)
    }

    const changeShinySpriteFF = () => {
        setContainerBack('container-back-shiny')
        setPageContainer('pagecontainer-shiny')
        setCurrentPosition(`${sprites.back_shiny}`)
        setIsShiny(true)
        };


    const changeshinysprite2 = ( event, handleshinebuttonclick ) => {
        if (isFront === true && isShiny === false) {
            console.log(isFront);
            setPageContainer('pagecontainer-shiny')
            setContainerBack('container-back-shiny')
            setShinePrecursor(true)
            console.log({shine});
            setCurrentPosition(`${sprites.front_shiny}`)
            setIsShiny(true)
            {handleshineButtonclick};          
            
        }
        else if (isFront === true && isShiny === true) {
            setContainerBack('container-back')
            setPageContainer('pagecontainer')
            setCurrentPosition(`${sprites.front_default}`)
            setIsShiny(false)
        }
        else if (isFront === false && isShiny === false) {
            setContainerBack('container-back-shiny')
            setPageContainer('pagecontainer-shiny')
            setShinePrecursor(true)
            setCurrentPosition(`${sprites.back_shiny}`)
            setIsShiny(true)
            return (
                <Sparkles shine={shine} sparkleRef={sparkleRef} />
                )
        }
        // if (currentPosition.toString() != `${sprites.front_default}` || `${sprites.back_default}`) changeDefault;
        // if (currentPosition.toString() === `${sprites.front_default}`) {
        else {
            setContainerBack('container-back')
            setPageContainer('pagecontainer')
            setCurrentPosition(`${sprites.back_default}`)
            setIsShiny(false)
            };
    };

    function shineAnimation(shineOn) {
        if (shinePrecusor != true) return;
        shineOn;
        setShinyPrecursor(false);
    }

    function backDefault() {
        if (isDefault !== true) switchShiny;
        else if (currentPosition == `${sprites.back_default}`) flipFront;
        else if (currentPosition == `${sprites.front_default}`) {
            setCurrentPosition(`${sprites.back_default}`)
            setFrontBackText('Front');
        };
        setCurrentPosition(`${sprites.front_default}`)
        setFrontBackText('Back');
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

    // function addSparkles() {
    //     for (let i = 0; i < 8; i++) {
    //       particles.current.push({ scale: 1, radius: 60, angle: 45 * i });
    //       setParticlesState((prevState) => [...prevState, { scale: 1, radius: 60, angle: 45 * i }]);
    //     }
    //   }
    

    function shine() {
        if (!particles.current.length) {
          for (let i = 0; i < 5; i++) setTimeout(addSparkles, i * 100);
          const drawerRef = setInterval(() => drawSparkles(canvasRef.current.getContext('2d')), 50);
          setTimeout(() => stopDrawing(drawerRef), 1000);
          console.log('shine processed');
        } else {
          console.log('not processed');
        }
      };

    const clickShiny = (changeShinySprite, shine) => {
        {changeShinySprite}
    }



    function oneType() {
        console.log(`${character.types}`)
        if (`${character.types}` == 1) return
        else 
            return (
                <div className="temp-container-title">
                    <h1 className="title">
                        {pokeName} <Image alt="Pokemon Type One (Main Type)" src={`/images/type_c21_${character.t[0].type.name}.svg`} className="titletypelogo" /> <Image alt="Pokemon Type Two (Secondary Type)" src={`/images/type_c21_${character.types[1].type.name}.svg`} className="titletypelogo" />
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

    async function clickShinyButton(addSparkles, drawerRef, ctx) {
        console.log('shine processed1');
        if (!particles.current.length) {
            for (let i = 0; i < 5; i++) setTimeout(addSparkles, i * 100);
            const drawerRef = setInterval(() => drawSparkles(canvasRef.current.getContext('2d')), 50);
            setTimeout(() => stopDrawing(drawerRef), 1000);
            console.log('shine processed');
          } else {
            console.log('not processed');
          }
    }

    const childButton = (shine) => {
        console.log('passed prop')
        {shine}
    }

    const isShinyData = () => {
        isShiny;
    }

    const isFrontData = () => {
        isFront;
    }


    // const drawSparkles = (context) => {
    // //   const ctx = sparklesRef.current.getContext("2d");
    //     // context.clearRect(0, 0, 256, 256);
    
    //     for (const p of particlesRef.current) {
    //     const x = 128 + p.radius * Math.cos((p.angle * Math.PI) / 180);
    //     const y = 128 + p.radius * Math.sin((p.angle * Math.PI) / 180);
    //     const scaled = Math.max(32 * p.scale, 0);
    //     context.drawImage(
    //         sparkleRef.current,
    //         x - scaled / 2,
    //         y - scaled / 2,
    //         scaled,
    //         scaled
    //     );
    
    //     if (p.scale > 0.6) p.scale -= 0.2;
    //     else p.scale -= 0.05;
    //     p.angle -= 5;
    //     p.radius += 5;
    //     }
    // };
    


    return (
        <div className="poke-temp-container">
            <Head>
                <div className="titletext">
                <title>{pokeName}</title>
                </div>
            </Head>

                <div className={`second-line-top-${types[0].type.name}`}></div>
                <div className={`type--${types[0].type.name}`}></div>
                    <div>
                    <div className="temp-container">
                        
                        <div className={containerBack}>
                            <div className="temp-container-title">
                                <h1 className="title">
                                    {pokeName} <Image alt="Pokemon Type One (Main Type)" src={`/images/type_c21_${character.types[0].type.name}.svg`} className="titletypelogo" width={45} height={45} /> { numberTypes == 2 ? <Image alt="Pokemon Type Two (Secondary Type)" src={`/images/type_c21_${character.types[1].type.name}.svg`} className="titletypelogo" width={45} height={45} /> : null }
                                </h1>
                            </div>    {/* <>
                                    {`${character.types[0].type}` && `${character.types[1].type}` ? type1 : type2 }fd
                                    </> */}
                            <div className="topcontainer">
                                <div className={pageContainer}>

                                    
                                    {/* <Canvas id="imageSparkCanvas" ref={imageSparkCanvasRef} /> */}
                                    <div className="slidecontainer">
                                        <div className="spritecontainer">
                                            <div className="spritebuttoncontainer">
                                                <div id="shinyDiv">
                                                    <Sparkles {...props} isFront={isFront} isShiny={isShiny} isFrontData={isFrontData} changeShinySpriteTF={changeShinySpriteTF} changeShinySpriteTT={changeShinySpriteTT} changeShinySpriteFT={changeShinySpriteFT} changeShinySpriteFF={changeShinySpriteFF} isShinyData={isShinyData} clickShinyButton={clickShinyButton} childButton={childButton} changeShinySprite={changeShinySprite} />
                                                </div>
                                                <Image id="pogoimg" src={currentPosition} alt="Pokemon Image" className="picdefault" width={300} height={300} /> 
                                                <FlipButton
                                                    ballDefault={ballDefault}
                                                    // flipFrontBackButton={flipFrontBackButton}
                                                >
                                                    <button className="fbbutton">                                                                                                    
                                                        <Image id="flip" style={{paddingTop: 4, paddingBottom: 4, alignItems: 'center' }} src="/images/fliparrows.svg" alt="Flip Icon (Two arrows curved in the shape of a circle)" width={20} height={20} />
                                                            <h2 className="fliptext">{frontBackText}</h2>
                                                            {/* <button className="backswitch" onClick={backDefault}>{frontBackText}</button> */}
                                                            {/* <button className={`frontswitch-${types[0].type.name}`} onClick={frontBackFront}>{frontBackText}}</button> */}
                                                    </button>
                                                </FlipButton>
                                                {/* <ShinyButton changeShinySprite2={changeShinySprite} clickShiny={clickShiny} {...props} /> */}
                                            </div>
                                        </div>
                                        {/* <Image src={imageSpark} id="imageSpark" ref={imageSparkRef} /> */}
                                        { (`${sprites.front_shiny}` !==  null ?
                                                <div className="middlediv">

                                                   
                                                </div>
                                            :   <div className="middlediv">
                                                </div>)
                                        }
                                        <div>
                                            {/* <Image
                                                src={sparkleImage}
                                                width={30}
                                                height={30}
                                                id={sparkleImgCSS}
                                                style={{ position: 'absolute', 'z-index': 5 }}
                                            /> */}
                                        </div>
                                        {/* <Canvas
                                            id="canvasId"
                                            className="canvasBG"
                                            height={600}
                                            width={600}
                                            Sparkle={Sparkle}
                                            currentPosition={currentPosition}
                                            sheight={30}
                                            swidth={30}
                                            image={image}
                                            shineOn={shineOn}
                                            // style={{ position: 'absolute', 'z-index': -10 }}
                                        > */}
                                        
                                        {/* <SparkleImg
                                            id={sparkleImgCSS}
                                            src={image}
                                            width={35}
                                            height={35}
                                         /> */}
                                            {/* <Image
                                                src={sparkleImage}
                                                width={30}
                                                height={30}
                                                id={sparkleImgCSS}
                                            /> */}

                                        {/* </Canvas> */}
                                        {/* <Image
                                            src={sparkleImage}
                                            width={30}
                                            height={30}
                                            id={sparkleImgCSS}
                                            style={{ position: 'absolute', 'z-index': 5 }}
                                         /> */}
                                        {/* <Image src="/images/sparkle.png" id="sparkleImg-before"  width={35} height={35} /> */}
                                        <div className={`templateinfodiv-${types[0].type.name}`}>
                                            <ul>
                                                <li className="typeli"><b>Type(s):</b> {types[0].type.name} 
                                                    {/* <Image src={`/images/type_logo_${types[0].type.name}.svg`} /> */}
                                                    {/* {typeTwo}  */}
                                                </li>
                                                <li className="typeli"><b>Ability:</b> {abilities[0].ability.name}</li>
                                                <li className="typeli"><b>{abilityTwo}</b></li>
                                                {/* { `${abilities[1].ability.name}` != ability ? <li className="typeli">{abilities[1].ability.name}</li>  : null } */}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <div className="numbertext">
                                        <Image src={currentPosition2} className="spritefrontshiny" />
                                        <Image src={currentPosition4} className="spritebackshiny" />
                                    </div>
                                    
                                    <div className="mySlides">
                                    <div className="numbertext"><Image src={spriteCurrent} /></div>
                                        <Image src={sprites.front_shiny} className="picdefault" />
                                    </div>
                                    <div className="mySlides">
                                        <div className="numbertext"></div>
                                        <Image src={sprites.back_shiny} className="picdefault" />
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
    );
}