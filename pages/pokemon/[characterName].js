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



// const pogoAPI = 'https://pogoapi.net';
// const candyToEvolveAPI = '/api/v1/pokemon_candy_to_evolve.json';
// const maxCPAPI = '/api/v1/pokemon_max_cp.json';
// const fastMovesAPI = '/api/v1/fast_moves.json';
// const chargedMovesAPI = '/api/v1/charged_moves.json';
// const pokeStatsAPI = '/api/v1/pokemon_stats.json';
// const shinyPokeAPI = 'api/v1/shiny_pokemon.json';
// const typesAPI = '/api/v1/pokemon_types.json';

export async function getStaticProps({ params }) {
    // Fetch the entire JSON file
    const res = await fetch('https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json');
    const allPokemon = await res.json();

    // Find the specific Pokémon based on characterName
    const character = allPokemon.find(pokemon => pokemon.names.English.toLowerCase() === params.characterName);

    // Handle the case where the Pokémon is not found
    if (!character) {
        return {
            notFound: true,
        };
    }

    // Extract specific properties if needed
    const primaryType = character.primaryType?.names.English;
    const name = character.names.English;

    // Return the specific data as props
    return { 
        props: { 
            character, 
            primaryType,
            // Include other properties as needed
        },
        revalidate: 3600, // ISR (Incremental Static Regeneration) interval
    };
}


function useFetchData() {
    const [loading, setLoading] = React.useState([]);
    const [data, setData] = React.useState([]);
}

export default function Character({ character, shinyArray, imageS, sWidth, sHeight, resJson, shiny, shinyRes, statsRes, particles, imageRef, sparkle, ctx, sparkleImage, SparkleImg, image, startDrawing, sparkleRef, shinyBlackRef, renderFrame, ...props}) {
    
    const { name, base_experience, types, abilities } = character;
    const [spriteCurrent, setSpriteCurrent] = useState(character.assets?.image);
    const [spriteShiny, setSpriteShiny] = useState(character.assets?.shinyImage);
    const [currentPosition, setCurrentPosition] = useState(character.assets?.image);
    const [currentPosition2, setCurrentPosition2] = useState(character.assets?.shinyImage);
    const [currentPosition3, setCurrentPosition3] = useState(`${character.assets?.image}`); // Check if back image is different
    const [currentPosition4, setCurrentPosition4] = useState(`${character.assets?.shinyImage}`); // Check if back shiny image is different
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
    const [slotNumber, setSlotNumber] = useState([]);    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isPokeShiny, setIsPokeShiny] = useState(false);
    const [array, setArray] = useState({shinyArray});
    const [frontBackDefault, setFrontBackDefault] = useState('Flip to Back');
    const [isShiny, setIsShiny] = useState(false);
    const [isFront, setIsFront] = useState(true);
    const [pokeName, setPokeName] = useState(`${character.names.English}`);
    const [containerBack, setContainerBack] = useState('container-back');
    const [pageContainer, setPageContainer] = useState('pagecontainer');
    const [shinyAnimation, setShinyAnimation] = useState('shiny-animation')
    const [shinePrecursor, setShinePrecursor] = useState(false);
    const [sparkling, setSparkling] = useState(false);
    const sparkles = useRef('sparkle-Img-before');
    const [flash, setFlash] = useState('flash');
    const [shinyAnim, setShinyAnim] = useState('shiny');
    const [sparkleImgCSS, setSparkleImgCSS] = useState('sparkleImg-before')
    const [canvasVisible, setCanvasVisible] = useState(true);
    const particleRef = useRef(null)    
    const imageSparkRef = useRef(null);
    const imageSparkCanvasRef = useRef(null);
    const [imageSparkParticles, setImageSparkParticles] = useState([]);
    const [isSpriteFront, setIsSpriteFront] = useState(true);
    const primaryTypeName = character?.primaryType?.names?.English;
    const secondaryTypeName = character?.secondaryType?.names?.English;

    function getTypeColor(type) {
        const typeColors = {
          'Bug': '#9AC11A',
          'Dark': '#705848',
          'Dragon': '#6A2EF9',
          'Electric': '#FFD700',
          'Fairy': '#FF7B9C',
          'Fighting': '#D11412',
          'Fire': '#FF6F00',
          'Flying': '#8F7AFA',
          'Ghost': '#7D4AB0',
          'Grass': '#67D821',
          'Ground': '#E5B755',
          'Ice': '#7BDADA',
          'Normal': '#9C9C68',
          'Poison': '#B300B3',
          'Psychic': '#FF4664',
          'Rock': '#B89F24',
          'Steel': '#A9A9C5',
          'Water': '#4A7AFA'
        };
        
        return typeColors[type] || '#FFFFFF';
      }
    
      function getDarkColor(type) {
        const darkColors = {
          'Bug': '#637D0A',
          'Dark': '#49392F',
          'Dragon': '#460EA1',
          'Electric': '#AF850F',
          'Fairy': '#A44D64',
          'Fighting': '#861815',
          'Fire': '#A13F00',
          'Flying': '#604A9F',
          'Ghost': '#412465',
          'Grass': '#3C7E25',
          'Ground': '#8F7533',
          'Ice': '#4D8D8D',
          'Normal': '#5F5F37',
          'Poison': '#662266',
          'Psychic': '#C8003C',
          'Rock': '#766117',
          'Steel': '#616178',
          'Water': '#2D4494'
        };
      }

    
    function darkenColor(color, amount) {
      var colorInt = parseInt(color.substring(1), 16);
      var r = (colorInt >> 16) - amount;
      var g = ((colorInt >> 8) & 0x00FF) - amount;
      var b = (colorInt & 0x0000FF) - amount;
    
      r = r < 0 ? 0 : r;
      g = g < 0 ? 0 : g;
      b = b < 0 ? 0 : b;
    
      return "#" + (r * 0x10000 + g * 0x100 + b).toString(16).padStart(6, '0');
    }
    
    const primaryColor = getTypeColor(`${character.primaryType.names.English}`);
    const secondaryColor = getTypeColor(`${character?.secondaryType?.names.English}`)

    const darkerColor = darkenColor(primaryColor, 15); // primaryColor is your original color, 20 is the amount to darken by
    

    function mixColors(color1, color2) {
  2  // Parse the color strings to rgb
      var c1 = parseInt(color1.substring(1), 16);
      var c2 = parseInt(color2.substring(1), 16);
  2
      var r = ((c1 >> 16) + (c2 >> 16)) >> 1;
      var g = ((c1 >> 8 & 0x00FF) + (c2 >> 8 & 0x00FF)) >> 1;
      var b = ((c1 & 0x0000FF) + (c2 & 0x0000FF)) >> 1;
    
      return "#" + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
    }
  
    const midColor = primaryTypeName && secondaryTypeName 
      ? mixColors(primaryColor, secondaryColor)
      : mixColors(primaryColor, darkerColor) 
        ? darkerColor 
        : 'orange'; // Fallback color if no types are defin
  
    const midColorPrimary = mixColors(primaryColor, darkerColor);
    

  // Mixes red and blue to get purple

    // Style object for the gradientbackground: `linear-gradient(to bottom right, ${primaryColor}
    const cardStyle = secondaryColor
    ? { background: `linear-gradient(to bottom right, ${primaryColor} 20%, ${midColor} 40%, ${secondaryColor} 60%)` }
    : { background: `linear-gradient(to bottom right, ${primaryColor}, ${primaryDarkColor})`}






    async function fetchType(character, characterName) {
        const res = await fetch(`${defaultEndpoint}`)
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
                src={`../../style/images/${character.primaryType.names.English}.png`}
                alt="Pokemon Type One (Main Type)"
                width={20}
                height={20}
            />
        )
    };

    const ballDefault = event => {
        if (currentPosition == `${character.assets?.image}` && isFront === true) {
            setIsFront(false)
            setCurrentPosition(`${sprites.back_default}`)
            // setPokeName('Rippin Fat Farts.Balls')
            setFrontBackText('Front')
        } else if (currentPosition == `${shiny}` && isFront === true) {
            setIsFront(false)
            setCurrentPosition(`${sprites.back_shiny}`)
            // setPokeName('So many balls, so little time')
            setFrontBackText('Front')
        } else if (currentPosition == `${sprites.back_shiny}` && isFront === false) {
            setIsFront(true)
            setCurrentPosition(`${shiny}`)
            setFrontBackText('Back')
            // setPokeName('BIG BLACK BALLS')
            setIsFront(true)
        } else if (currentPosition == `${sprites.back_default}` && isFront === false) {
            setIsFront(true)
            setCurrentPosition(`${character.assets?.image}`)
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
            setCurrentPosition(`${shiny}`)
            setIsShiny(true)       
            
        }
        else if (isFront === true && isShiny === true) {
            setContainerBack('container-back')
            setPageContainer('pagecontainer')
            setCurrentPosition(`${character.assets?.image}`)
            setIsShiny(false)
        }
        else if (isFront === false && isShiny === false) {
            setContainerBack('container-back-shiny')
            setPageContainer('pagecontainer-shiny')
            setShinePrecursor(true)
            setCurrentPosition(`${sprites.back_shiny}`)
            setIsShiny(true)
        }
        // if (currentPosition.toString() != `${character.assets?.image}` || `${sprites.back_default}`) changeDefault;
        // if (currentPosition.toString() === `${character.assets?.image}`) {
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
        setCurrentPosition(`${character.assets?.image}`)
        setIsShiny(false)
    }

    const changeShinySpriteFT = () => {
        setContainerBack('container-back-shiny')
        setPageContainer('pagecontainer-shiny')
        setShinePrecursor(true)
        setCurrentPosition(`${shiny}`)
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
            setCurrentPosition(`${shiny}`)
            setIsShiny(true)
            {handleshineButtonclick};          
            
        }
        else if (isFront === true && isShiny === true) {
            setContainerBack('container-back')
            setPageContainer('pagecontainer')
            setCurrentPosition(`${character.assets?.image}`)
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
        // if (currentPosition.toString() != `${character.assets?.image}` || `${sprites.back_default}`) changeDefault;
        // if (currentPosition.toString() === `${character.assets?.image}`) {
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
        else if (currentPosition == `${character.assets?.image}`) {
            setCurrentPosition(`${sprites.back_default}`)
            setFrontBackText('Front');
        };
        setCurrentPosition(`${character.assets?.image}`)
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
        setCurrentCaption(`${character.primaryType.names.English}`)
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
            const drawerRef = setInterval(() => drawSpakles(canvasRef.current.getContext('2d')), 50);
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
   // 
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
    
    const lowerCaseType = character.primaryType.names.English.toLowerCase(); 
    const lowerCaseSecondaryType = character.secondaryType?.names.English.toLowerCase(); 
    const lowerCaseName = character.names.English.toLowerCase();

    const colorStyle = secondaryColor
    ? { background: `linear-gradient(to bottom right, ${primaryColor} 20%, ${midColor} 40%, ${secondaryColor} 60%)` }
    : { background: `linear-gradient(to bottom right, ${primaryColor}, ${primaryDarkColor})`}
      

    return (
        <div className="poke-temp-container">
            <Head>
                <div className="titletext">
                <title>{pokeName}</title>
                </div>
            </Head>
                {!lowerCaseSecondaryType ?
                    <>
                    <div className={`second-line-top-${lowerCaseType}`} style={cardStyle}></div>
                    <div className={`type-${lowerCaseType}`} style={cardStyle}></div>
                    </>
                    :
                    <>
                    <div className={`second-line-top-${lowerCaseType}`}></div>
                    <div className={`type-${lowerCaseType}`}></div>
                    </>
}
                        <div>
                        <div className="temp-container">
                            
                            <div className={containerBack}>
                                <div className="temp-container-title">
                                    <h1 className="title">
                                        {name} <Image alt="Pokemon Type One (Main Type)" src={`/images/type_c21_${lowerCaseType}.svg`} className="titletypelogo" width={45} height={45} /> { character.secondaryType ? <Image alt="Pokemon Type Two (Secondary Type)" src={`/images/type_c21_${lowerCaseSecondaryType}.svg`} className="titletypelogo" width={45} height={45} /> : null }
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
                                                    <Image id="pogoimg" src={currentPosition} alt="Pokemon Image" className="picdefault" width={300} /> 
                                                    <FlipButton
                                                        ballDefault={ballDefault}
                                                        // flipFrontBackButton={flipFrontBackButton}
                                                    >
                                                        <button className="fbbutton">                                                                                                    
                                                            <Image id="flip" style={{paddingTop: 4, paddingBottom: 4, alignItems: 'center' }} src="/images/fliparrows.svg" alt="Flip Icon (Two arrows curved in the shape of a circle)" width={20} height={20} />
                                                                <h2 className="fliptext">{frontBackText}</h2>
                                                                {/* <button className="backswitch" onClick={backDefault}>{frontBackText}</button> */}
                                                                {/* <button className={`frontswitch-${character.primaryType.names.English}`} onClick={frontBackFront}>{frontBackText}}</button> */}
                                                        </button>
                                                    </FlipButton>
                                                    {/* <ShinyButton changeShinySprite2={changeShinySprite} clickShiny={clickShiny} {...props} /> */}
                                                </div>
                                            </div>
                                            {/* <Image src={imageSpark} id="imageSpark" ref={imageSparkRef} /> */}
                                            { (`${shiny}` !==  null ?
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
                                            <div className={`templateinfodiv-${lowerCaseType}`}>
                                                <ul>
                                                    {secondaryTypeName ?
                                                        <>
                                                            <li className="typeli" style={{ display: 'inline-flex', flexDirection: 'column' }}>
                                                                <b>Type(s):</b>
                                                                <ul> {/* Start of the nested unordered list */}
                                                                    <li className="typeli">{primaryTypeName}</li>
                                                                    <li className="typeli">{secondaryTypeName}</li>
                                                                </ul> {/* End of the nested unordered list */}
                                                            </li>
                                                        </>
                                                        :
                                                        <li className="typeli">
                                                            <b>Type(s):</b> {primaryTypeName}
                                                            {/* Other content */}
                                                        </li>
                                                    }
                                                    {/* Other <li> elements */}
                                                </ul>
                                            </div>

                                        </div>
                                        {/* <div className="numbertext">
                                            <Image src={currentPosition2} className="spritefrontshiny" />
                                            <Image src={currentPosition4} className="spritebackshiny" />
                                        </div>
                                        
                                        <div className="mySlides">
                                        <div className="numbertext"><Image src={spriteCurrent} /></div>
                                            <Image src={shiny} className="picdefault" />
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
                    <div className={`second-line-bottom-${lowerCaseType}`} style={{height: '1px'}}></div>
                    <div className={`type-gradient-${lowerCaseType}`} style={{height: '3px', marginBottom: '0px'}}></div>
            </div>
        );
}