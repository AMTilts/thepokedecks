import { normalizeConfig } from 'next/dist/server/config-shared';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import NavbarTemplate from '../../components/NavbarTemplate';
import ShinyButton from '../../components/ShinyButton'
import Alert from '../../components/Alert';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import { NavItem } from 'react-bootstrap';
import FlipButton from '../../components/FlipButton'
import Sparkle from "../../public/images/sparkle.png"
import { Context } from "../../components/Context"
import Shine from '../../components/Shine';
// import Canvas from '../../components/Canvas'
import SparkeImg from '../../components/SparkleImg'
// import Shine from '../../components/Shine';
import imageSpark from '/images/sparkle.png'
import Canimation from '../../components/Canimation';
import Sparkles from '../../components/Sparkles'
import PropTypes from 'prop-types';




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

export default function Character({ character, shinyArray, imageS, sWidth, sHeight, resJson, shiny, shinyRes, statsRes, particles, imageRef, sparkle, ctx, sparkleImage, SparkleImg, image, startDrawing, renderFrame}) {
    
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
    const [containerBack, setContainerBack] = useState('container-back');
    const [pageContainer, setPageContainer] = useState('pagecontainer');
    const [shinyAnimation, setShinyAnimation] = useState('shiny-animation')
    const [sparkleImg, setSparkleImg] = useState('sparkleImg')
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


//         // SHINY ANIMATION //
// const sparkle = useRef(null);
// const sparkles = useRef(null);
// const [particles, setParticles] = useState([]);
// const [sparkling, setSparkling] = useState('sparkling-style');
// const [flash, setFlash] = useState('flash') ;// Meant to replace flash.style.transition and flash.style.opacity
// const [shinyAnim, setShinyAnim] = useState('shiny'); //Meant to replace shiny.style.display methods being passed into function. These are going to be style class names that get changed using useState.
// const [sparkleStyle, setSparkleStyle] = useState('sparkle-style'); // Style class names. Meant to replace SPar
// const canvasRef = useRef(null);
// const contextRef = useRef(null)


// var drawImage = (ref) => {
//     console.log('this is the canvas DOM element you want', ref);
//     contextRef = sparkles.getContext('2d')
//     //Draw Balls
// }

// useEffect(() => {
//         const canvas = canvasRef.current;
//         canvas.width = window.innerWidth * 2;
//         canvas.height = window.innerHeight * 2;
//         canvas.style.width = `${window.innerWidth}px`;
//         canvas.style.height = `${window.innerHeight}px`;
        
//         const context = canvas.getContext('2d')
//         context.scale(2,2)
//         contextRef.current = context;
// }, []);




// function addSparkles(){
//     for (var i = 0; i < 8; i++) particles.push({ "scale": 1, "radius": 60, "angle": 45 * i });
// }

// // requestContext = () => {
// //     this.drawSparkles(contextRef);
// // };

// function startDrawing(){
//     contextRef.current.canvasRef(0, 0, 256, 256);
//     for (p of particles){
//     var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
//     var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
//     var scaled = Math.max(32 * p.scale, 0);
//     contextRef.current.drawImage(sparkle.current, x - scaled / 2, y - scaled / 2, scaled, scaled);
//     if (p.scale > 0.6) p.scale -= 0.2;
//     else p.scale -= 0.05;
//     p.angle -= 5;
//     p.radius += 5;
//     }
// }

// // function handleChange(event) {

// // }

// // shiny.ontouchstart = function(e){
// //     e.preventDefault();
// //   pokemon.onmouseup = pokemon.ontouchend = shiny.onmouseup = shiny.ontouchend = function(){
// //       flash.style.opacity = 0.4;
// //       reveal;
// //     }
// // }

// function reveal({Sparkle}){
//     setSparkling(true);
//     Sparkle.style.display = "none"; 
//     shiny.style.display = "block";
//     setTimeout(shineOn, 400);
//     flash.style.transition = "opacity 0.6";
//     flash.style.opacity = 0;
// }

// function stopDrawing(){
//     clearInterval(drawer);
//     setParticles([]);
//     setSparkling(false);
// }

// const drawer = () => {
//     setInterval(drawSparkles, 50);
// }

// useEffect((e) => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         ctx.clearRect(0, 0, 256, 256);
//         ctx.fillStyle = '#FF0000'
//         ctx.fillRect(0, 0, context.canvas.width, context.canvas.height)
//     }, [])




//     useEffect(() => {
//         function changeShiny() {
//             console.log(isShiny)
//             console.log(isFront)
//             if (isShiny != true && isFront != true && currentPosition.toString() === `${sprites.back_default}`) {
//                 defaultBack
//                 setIsShiny(true)
//                 setIsFront(false)
//             };
//             if (isShiny != false && isFront !=true && currentPosition.toString() === `${sprites.back_shiny}`) {
//                 shinyBack
//                 setIsShiny(false)
//                 setIsFront(false)
//             };
//             if (isShiny != false && isFront !=false && currentPosition.toString() === `${sprites.front_shiny}`) {
//                 shinyFront
//                 setIsShiny(false)
//                 setIsFront(true)
//             }
//             // if (currentPosition.toString() != `${sprites.front_default}` || `${sprites.back_default}`) changeDefault;
//             // if (currentPosition.toString() === `${sprites.front_default}`) {
//             else {
//                     defaultFront
//                     setIsShiny(true)
//                     setIsFront(true)
//                 };
//         };
//     }, []);



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

   
   

    // function reveal({sparkle}){
    //     setSparkling(true);
    //     sparkle.style.display = "none"; 
    //     shiny.style.display = "block";
    //     setTimeout(shineOn, 400);
    //     flash.style.transition = "opacity 0.6";
    //     flash.style.opacity = 0;
    // }
    



    
    // var drawImage = (ctx) => {
    //     console.log('this is the canvas DOM element you want', ctx);
    //     //Draw Balls
    // }
  
//   function startDraw(ctx) {
//       for (p of particles){
//       var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
//       var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
//       var scaled = Math.max(32 * p.scale, 0);
//       ctx.current.drawImage(sparkle.current, x - scaled / 2, y - scaled / 2, scaled, scaled);
//       if (p.scale > 0.6) p.scale -= 0.2;
//       else p.scale -= 0.05;S
//       p.angle -= 5;
//       p.radius += 5;
//     }
// }
    






    const ballDefault = event => {
        if (currentPosition == `${sprites.front_default}` && isFront === true) {
            setIsFront(false)
            setCurrentPosition(`${sprites.back_default}`)
            // setPokeName('Rippin Fat Farts.Balls')
            setFrontBackText('Flip to Front')
        } else if (currentPosition == `${sprites.front_shiny}` && isFront === true) {
            setIsFront(false)
            setCurrentPosition(`${sprites.back_shiny}`)
            // setPokeName('So many balls, so little time')
            setFrontBackText('Flip to Front')
        } else if (currentPosition == `${sprites.back_shiny}` && isFront === false) {
            setIsFront(true)
            setCurrentPosition(`${sprites.front_shiny}`)
            setFrontBackText('Flip to Back')
            // setPokeName('BIG BLACK BALLS')
            setIsFront(true)
        } else if (currentPosition == `${sprites.back_default}` && isFront === false) {
            setIsFront(true)
            setCurrentPosition(`${sprites.front_default}`)
            setFrontBackText('Flip to Front')
            setIsFront(true)
            // setPokeName('Why are you so gay?')
        } else {
            console.log('BIG BALLS IN MY FACE BROOOOO')
            // setPokeName('Eating Glizzies and Chewing Bubble GUm')
        }
    };

    const changeShinySprite = ( {shine}, event ) => {
        if (isFront === true && isShiny === false) {
            console.log(isFront);
            setPageContainer('pagecontainer-shiny')
            setContainerBack('container-back-shiny')
            setShinePrecursor(true)
            setCurrentPosition(`${sprites.front_shiny}`)
            setIsShiny(true)
            shine()
            // return (
            // <Sparkles buttonRef={buttonRef} />
            // )
            
            
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
                <Sparkles shine={shine} />
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



    const shine = context => {
          if (!particles.current.length) {
          for (let i = 0; i < 5; i++) setTimeout(addSparkles, i * 100);
          drawer = setInterval(drawSparkles, 50);
          setTimeout(stopDrawing, 1000);
        }
      };

    const drawSparkles = (context) => {
    //   const ctx = sparklesRef.current.getContext("2d");
        // context.clearRect(0, 0, 256, 256);
    
        for (const p of particles.current) {
        const x = 128 + p.radius * Math.cos((p.angle * Math.PI) / 180);
        const y = 128 + p.radius * Math.sin((p.angle * Math.PI) / 180);
        const scaled = Math.max(32 * p.scale, 0);
        context.drawImage(
            sparkleRef.current,
            x - scaled / 2,
            y - scaled / 2,
            scaled,
            scaled
        );
    
        if (p.scale > 0.6) p.scale -= 0.2;
        else p.scale -= 0.05;
        p.angle -= 5;
        p.radius += 5;
        }
    };
    
    const stopDrawing = () => {
        clearInterval(drawer);
        particles.current = [];
    };


    const addSparkles = () => {
        for (let i = 0; i < 8; i++) {
            particles.current.push({ scale: 1, radius: 60, angle: 45 * i });
        }
        };
    
    
    

    // const sparkle = useRef(null);
    // const sparkles = useRef(null);
    
    
    // var drawImage = (ref) => {
    //     console.log('this is the canvas DOM element you want', ref);
    //     contextRef = sparkles.getContext('2d')
    //     //Draw Balls
    // }


    // var clearRect = (<canvas ref={(e) => activateDraw(e)}></canvas>)};


    // var [particles, setParticles] = useState([]);
    // const [drawer, setDrawer] = useState([]);
    // const [sparkling, setSparkling] = useState('sparkling-style')
    // const [flash, setFlash] = useState('flash') // Meant to replace flash.style.transition and flash.style.opacity
    // const [shinyAnim, setShinyAnim] = useState('shiny') //Meant to replace shiny.style.display methods being passed into function. These are going to be style class names that get changed using useState.
    // const [sparkleStyle, setSparkleStyle] = useState('sparkle-style') // Style class names. Meant to replace SPar


    // function addSparkles(){
    //     for (var i = 0; i < 8; i++) particles.push({ "scale": 1, "radius": 60, "angle": 45 * i });
    // }

    // // requestContext = () => {
    // //     this.drawSparkles(contextRef);
    // // };

    // function drawSparkles(contextRef){
    //     contextRef.clearRect(0, 0, 256, 256);
    //     for (p of particles){
    //     var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
    //     var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
    //     var scaled = Math.max(32 * p.scale, 0);
    //     contextRef.drawImage(sparkle, x - scaled / 2, y - scaled / 2, scaled, scaled);
    //     if (p.scale > 0.6) p.scale -= 0.2;
    //     else p.scale -= 0.05;
    //     p.angle -= 5;
    //     p.radius += 5;
    //     }
    // }

    // function handleChange(event, Shine) {
    //     console.log(<Shine />)
    // }

    // function addSparkles() {
    //     for (var i = 0; i < 8; i++) setImageSparkParticles(imageSparkParticles => [...imageSparkParticles({"scale": 1, "radius": 60, "angle": 45 * i})])
    // }

    // function shine() {
    //     if (!imageSparkParticles.length) {
    //         for (var i = 0; i < 5; i++) setTimeout(addSparkles, i * 100);
    //         drawer = setInterval(drawSparkles, 50);
    //         setTimeout(stopDrawing, 1000);
    //         }
    // }

    // function drawSparkles() {
    //     ctx.clearRect(0, 0, 256, 256);
    //     for (p of imageSparkParticles) {
    //         var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
    //         var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
    //         var scaled = Math.max(32 * p.scale, 0);
    //         ctx.drawImage(imageSpark, x - scaled / 2, y - scaled / 2, scaled, scaled);
    //         if (p.scale > 0.6) p.scale -= 0.2;
    //         else p.scale -= 0.05;
    //         p.angle -= 5;
    //         p.radius -= 5;
    //     }
    // }


    // useEffect((shine) => {

    //     const canvas = imageSparkCanvasRef.current
    //     const context = canvas.getContext('2d')


    
    //     function drawSparkles() {
    //         ctx.clearRect(0, 0, 256, 256);
    //         for (p of imageSparkParticles) {
    //             var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
    //             var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
    //             var scaled = Math.max(32 * p.scale, 0);
    //             ctx.drawImage(imageSpark, x - scaled / 2, y - scaled / 2, scaled, scaled);
    //             if (p.scale > 0.6) p.scale -= 0.2;
    //             else p.scale -= 0.05;
    //             p.angle -= 5;
    //             p.radius -= 5;
    //         }
    //     }

    //     function stopDrawing() {
    //         clearInterval(drawer);
    //         setImageSparkParticles([]);
    //     }
    


    //     return () => {
    //         stopDrawing()
    //     }
    //  }, [shine()]);


    // shiny.ontouchstart = function(e){
    //     e.preventDefault();
    //   pokemon.onmouseup = pokemon.ontouchend = shiny.onmouseup = shiny.ontouchend = function(){
    //       flash.style.opacity = 0.4;
    //       reveal;
    //     }

    // function reveal({Sparkle}){
    //     setSparkling(true);
    //     Sparkle.style.display = "none"; 
    //     shiny.style.display = "block";
    //     setTimeout(shine, 400);
    //     flash.style.transition = "opacity 0.6";
    //     flash.style.opacity = 0;
    // }

    // function stopDrawing(){
    //     clearInterval(drawer);
    //     setParticles([]);
    //     setSparkling(false);
    // }

    // const drawer = () => {
    //     setInterval(drawSparkles, 50);
    // }

    // function shine() {
    //     if (!particles.length){
    //         for (var i = 0; i < 5; i++) {
    //         setTimeout(addSparkles, i * 100);
    //         drawer
    //         setTimeout(stopDrawing, 1000);
    //             }
    //         }
    // }

    // pokemon.onmouseup = pokemon.ontouchend = shiny.onmouseup = shiny.ontouchend = function(){
    //     if (!sparkling) {
    //         setSparkling('sparkling-style-none')
    //     }
    //     if (!noflash) {
    //         setSparkling('sparkling-style-flash')
    //         setTimeout(reveal, 5);
    //     }
    //     clearTimeout(autostarter);
    //     clearInterval(autochecker);
    //     autostarter = null;
    //   }
      
    //   document.getElementById("noflash").onchange = function(){
    //     noflash = this.checked;
    //   }
      
    //   document.body.onkeydown = function(e){
    //       e.preventDefault();
    //       if (e.keyCode == 32 && !sparkling) reveal();
    //   }
      
    //   pokemon.oncontextmenu = shiny.oncontextmenu = function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //     e.stopImmediatePropagation();
    //     return false;
    //   }
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
    //                 {name} <Image src={`/images/type_c21_  aracter.types[0].type.name}.svg`} className="titletypelogo" />                         
    //             </h1>
    //         </div>
    //     )
    // }


    // function twoTypes() {
    //     return (
    //         <div className="temp-container-title">
    //             <h1 className="title">
    //                 {name} <Image src={`/images/type_c21_${character.types[0].type.name}.svg`} className="titletypelogo" /> <Image src={`/images/type_c21_${character.types[1].type.name}.svg`} className="titletypelogo2" />                            
    //             </h1>
    //         </div>
    //     )
    // }



    return (
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
                        <div className={containerBack}>
                            <div className="temp-container-title">
                                <h1 className="title">
                                    {pokeName} <Image alt="Pokemon Type One (Main Type)" src={`/images/type_c21_${character.types[0].type.name}.svg`} className="titletypelogo" width={45} height={45} /> { numberTypes == 2 ? <Image alt="Pokemon Type Two (Secondary Type)" src={`/images/type_c21_${character.types[1].type.name}.svg`} className="titletypelogo" width={45} height={45} /> : null }
                                </h1>
                            </div>    {/* <>
                                    {`${character.types[0].type}` && `${character.types[1].type}` ? type1 : type2 }
                                    </> */}
                            <div className="topcontainer">
                                <div className={pageContainer}>
                                    <Sparkles shine={shine} drawSparkles={drawSparkles} addSparkles={addSparkles} stopDrawing={stopDrawing} />
                                    {/* <Canvas id="imageSparkCanvas" ref={imageSparkCanvasRef} /> */}
                                    <div className="slidecontainer">
                                        <div className="spritecontainer">
                                            <div className="spritebuttoncontainer">
                                            {/* <div className="leftcontainer"></div>    */}
                                                {/* {canvasVisible && <Canvas id="canvasStyle" />} */}
                                                <Image id="pogoimg" src={currentPosition} alt="Pokemon Image" className="picdefault" width={300} height={300} /> 
                                                <FlipButton
                                                    ballDefault={ballDefault}
                                                    // flipFrontBackButton={flipFrontBackButton}
                                                >
                                                    <button className="fbbutton">                                                                                                    
                                                        <Image id="flip" src="/images/fliparrows.svg" alt="Flip Icon (Two arrows curved in the shape of a circle)" width={20} height={20} />
                                                            <h2 className="fliptext">{frontBackText}</h2>
                                                            {/* <button className="backswitch" onClick={backDefault}>{frontBackText}</button> */}
                                                            {/* <button className={`frontswitch-${types[0].type.name}`} onClick={frontBackFront}>{frontBackText}}</button> */}
                                                    </button>
                                                </FlipButton>
                                                {/* <Shine
                                                    shienOn={shineOn}
                                                >
                                                </Shine> */}
                                            </div>
                                        </div>
                                        {/* <Image src={imageSpark} id="imageSpark" ref={imageSparkRef} /> */}
                                        { (`${sprites.front_shiny}` !==  null ?
                                                <div className="middlediv">

                                                    <ShinyButton
                                                        className="shinybutton"
                                                        changeShinySprite={changeShinySprite}
                                                    >
                                                        <button className="shinybutton"><Image src="/images/shiny-reg21.svg" width={20} height={20} id="shinysvg" alt="Pokemon Shiny Icon (Looks like a star)" />
                                                            {/* <p className="caption">SHINY</p> */}
                                                        </button>
                                                    </ShinyButton>
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
                                        <button onClick={() => setCanvasVisible(!canvasVisible)}>
                                            TICKLE Canvas
                                        </button>
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