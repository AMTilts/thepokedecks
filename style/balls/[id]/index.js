// import NavbarTemplate from '../../../components/NavbarTemplate';
// import { useEffect, useState } from "react";
// import Switch from '../../../components/Switch';
// import Link from 'next/link';



// import Head from 'next/head';

// const defaultEndpoint = 'https://pokeapi.co/api/v2/pokemon';

// export async function   getStaticProps({ query }) {
//     const { id } = query;
//     const res = await fetch(`${defaultEndpoint}/${id}`)
//     const data = await res.json()
//     return {
//         props: { 
//             data
//          }
//     }

// }

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com',
// 		'X-RapidAPI-Key': '3c73397ccdmshd005240d8bef6dcp1e3d46jsn7001a22f4346'
// 	}
// };

// // |




// export default function pokeTemp({ data, character, pokeName }) {
//     // console.log({data});
//     const { name, base_experience, types, sprites, abilities } = data;
//     const [spriteCurrent, setSpriteCurrent] = useState(`${sprites.front_default}`);
//     const [spriteShiny, setSpriteShiny] = useState(`${sprites.front_shiny}`);
//     const [currentPosition, setCurrentPosition] = useState(`${sprites.front_default}`);
//     const [currentPosition2, setCurrentPosition2] = useState(`${sprites.front_shiny}`);
//     const [currentPosition3, setCurrentPosition3] = useState(`${sprites.back_default}`);
//     const [currentPosition4, setCurrentPosition4] = useState(`${sprites.back_shiny}`);
//     const [spriteButton, setSpriteButton] = useState(null);
//     const [spriteToggle, setSpriteToggle] = useState(true);
//     const [currentCaption, setCurrentCaption] = useState('SHINY')
//     const [logoType, setLogoType] = useState([])
//     const [isDefault, setIsDefault] = useState(true)
//     const [typeTwo, setTypeTwo] = useState('')
//     const [isTwoTypes,setIsTwoTypes] = useState(false);
//     const [abilityTwo, setAbilityTwo] = useState('');
//     const [isTwoAbilities, setIsTwoAbilities] = useState(false);
//     const [frontBackText, setFrontBackText]  = useState('Flip to Back');

//     console.log({name});

//     const typeLogo = ({ src, width }) => {
//         return `../../style/images/type_logo_${src}?w=${width}`
//     }

//     const typeLogoImg = (props) => {
//         return (
//             <Image
//                 loader={typeLogo}
//                 src={`../../style/images/${types[0].type.name}.png`}
//                 width={20}
//                 height={20}
//             />
//         )
//     }



//     // const spriteSwitch = setSpriteCurrent() => {
//     //     return (
//     //         <div className="mySlides">
//     //             <div className="numbertext"><img src={spriteCurrent} className="spriteCurr /></div>
//     //                 <img src={sprites.front_shiny} className="picdefault" />
//     //         </div>
//     //     )
//     // }
//     // }
//     // const imgUrls = {
//     //     default: `${sprites.front_default}`,
//     //     shiny: `${sprites.front_shiny}`
//     //         }
    

//     // function SpriteSwitch() {
//     //     const [slides] = useState([
//     //         {
//     //             image: `${sprites.front_default}`,
//     //             title: "front_default"
//     //         },
//     //         {
//     //             image: `${sprites.front_shiny}`,
//     //             title: "front_shiny"
//     //         }
//     //     ])


//     //     if ( {currentSlide} = `${sprites.front_default}` ); then ( {currentSlide2} = `${sprites.front_shiny}` ) 
//     //     }

//     // };

//     // function swapSprites() {
//     //     if ( {currentSlide} = `${sprites.front_default}` ); then ( {currentSlide2} = `${sprites.front_shiny}` ) 
//     // }

//     // useEffect(() => {
//     //     function handleStatusChange(status) {
//     //         setIsDefault(status.IsDefault);
        
        
//     // if ( {isDefault} = true) {
//     //     setCurrentSlide1(`${sprites.front_shiny}`);
//     //     setCurrentSlide2(`${sprites.front_default}`);
//     // }};

//     // useEffect(() => {
//     //     spriteToggle();
//     // });
//     // useEffect(() => {
//     //     setSpriteToggle(false);
//     //     setCurrentPosition(`${sprites.front_shiny}`);
//     //     setCurrentPosition2(`${sprites.front_default}`)
//     //     // spriteToggle = () => {
//     //     //     ({currentPosition} = `${sprites.front_default}`) ?
//     //     //         ( setCurrentPosition(`${sprites.front_shiny}`),
//     //     //             setCurrentPosition2(`${sprites.front_default}`) ) : null;
//     //     //         }ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
//     // });

//     function gotoDefault() {
//         if (isDefault == false) {
//             setCurrentPosition(`${sprites.front_default}`);
//             setCurrentPosition2(`${sprites.front_shiny}`);
//             setCurrentPosition3(`${sprites.back_default}`);
//             setCurrentPosition4(`${sprites.back_shiny}`);
//             setCurrentCaption('Default Variant');
//             setIsDefault(true);
//         }

//         if (isDefault == true) {
//             setCurrentPosition(`${sprites.front_shiny}`);
//             setCurrentPosition2(`${sprites.front_default}`);
//             setCurrentPosition3(`${sprites.back_shiny}`);
//             setCurrentPosition4(`${sprites.back_default}`);
//             setCurrentCaption('Shiny')
//             setIsDefault(false);
//         }
//     }

//     function gotoShiny(gotoDefault) {
//         if (isShiny === true) gotoDefault;
//         setCurrentPosition(`${sprites.front_shiny}`);
//         setCurrentPosition2(`${sprites.front_default}`);
//         setCurrentPosition3(`${sprites.back_shiny}`);
//         setCurrentPosition4(`${sprites.back_default}`);
//         setCurrentCaption('Shiny');

//     }

//     function backDefault() {
//         if (isDefault === false) switchShiny;
//         if (currentPosition === `${sprites.back_default}`) frontDefault;
//         setCurrentPosition(`${sprites.back_default}`);
//         setFrontBackText('Flip to Front');
//         setIsDefault(false);
//         }
//     function frontDefault() {
//         if (isDefault === false) switchShiny;
//         if (currentPosition === `${sprites.front_default}`) backDefault;
//             setCurrentPosition(`${sprites.front_default}`);
//             setFrontBackDefault('Flip to Back');
//         }  

//     function switchShiny() {
//         if (isDefault === true) backDefault;
//         if (currentPosition.value === `${sprites.front_shiny}`) backShiny;
//         setCurrentPosition(`${sprites.back_shiny}`);
//         setFrontBackDefault('Flip to Front');
//         setIsDefault(true);
//     }


//     function frontBackDefault() {
//         if (isDefault === false) switchShiny;
//         if (currentPosition === `${sprites.front_default}`) backDefault;
//         frontDefault;
//     }

//     function spriteBack() {
//         setCurrentPosition(`${sprites.back_default}`)
//     }

//     function twoTypes() {
//         if (isTwoTypes === null) return;
//         setTypeTwo(`${types[1].type.name}`);
            
//     }
    
//     function twoAbilities() {
//         if (isTwoAbilities === null) return;
//         setAbilityTwo(`${abilities[1].ability.name}`);
//     }
//     //     setCurrentPosition2(`${sprites.front_default}`);
//     //     setCurrentPosition1(`${sprites.front_shiny}`)
//     // })

//     return (
//         <div className="poke-temp-container">
//             <Head>
//                 <div className="titletext">
//                 <title>{name}</title>
//                 </div>
//             </Head>

//                 <div className={`second-line-top-${types[0].type.name}`}></div>
//                 <div className={`type-gradient-${types[0].type.name}`}></div>
//                 <div>
//                     <div className="temp-container">
//                         <div className="container-back">
//                             <div className="temp-container-title">
//                                 <h1 className="title">
//                                     {name} <img src={`/images/type_logo_${types[0].type.name}.svg`} className="titletypelogo" / >  
//                                 </h1>
//                             </div>
//                      {/* </div> */}
//                             <div className="topcontainer">
//                                 <div className="pagecontainer">
//                                     <div className="slidecontainer">
//                                         <div className="spritecontainer">
//                                         {/* <div className="leftcontainer"></div>    */}
//                                             <img src={currentPosition} className="picdefault"  />
//                                             <div className="info-text">
//                                                 <li>{character.id}</li>
//                                                 <li>{pokeName.name}</li>
//                                             </div>
//                                         {/* <img src={currentPosition3} className="backdefault" />   */}

//                                         </div>
//                                         <div className="middlediv">
//                                             {`${sprites.front_shiny}` ? <img src="/images/shiny-reg.svg" className="shinysvg" /> : null }
//                                         </div>
//                                         <div className="textdiv">
//                                             <p className={`caption-${types[0].type.name}`}>{currentCaption}</p>
//                                         </div>
//                                         <div className={`templateinfodiv-${types[0].type.name}`}>
//                                             <ul>
//                                                 <li className="typeli"><b>Type(s):</b> {types[0].type.name} 
//                                                     {/* <img src={`/images/type_logo_${types[0].type.name}.svg`} /> */}
//                                                     {/* {typeTwo}  */}
//                                                 </li>
//                                                 <li className="typeli"><b>Ability:</b> {abilities[0].ability.name}</li>
//                                                 <li className="typeli"><b>{abilityTwo}</b></li>
//                                                 {/* { `${abilities[1].ability.name}` != ability ? <li className="typeli">{abilities[1].ability.name}</li>  : null } */}
//                                             </ul>
//                                         </div>
//                                     </div>                                                                                                                     
//                                     <div className="frontbackbuttons" onClick={() => setCurrentPosition(backDefault(this.state.currentPosition))  }>
//                                         <img id="flip" src="/images/fliparrows.svg" />
//                                         <h2 className="fliptext">{frontBackText}</h2>
//                                         {/* <button className="backswitch" onClick={backDefault}>{frontBackText}</button> */}
//                                         {/* <button className={`frontswitch-${types[0].type.name}`} onClick={frontBackFront}>{frontBackText}}</button> */}
//                                     </div>
//                                     <div className="numbertext">
//                                         <img src={currentPosition2} className="spritefrontshiny" />
//                                         <img src={currentPosition4} className="spritebackshiny" />
//                                     </div>
                                    
//                                     <div className="mySlides">
//                                     <div className="numbertext"><img src={spriteCurrent} /></div>
//                                         <img src={sprites.front_shiny} className="picdefault" />
//                                     </div>

//                                     <div className="mySlides">
//                                         <div className="numbertext"></div>
//                                         <img src={sprites.back_shiny} className="picdefault" />
//                                     </div>
//                                     <div>
//                                         {/* <Switch 
//                                             gotoDefault={`${sprites.front_default}` ? gotoShiny : gotoDefault} 
//                                             gotoShiny={`${sprites.front_shiny}` ? gotoDefault : gotoShiny}
//                                          /> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             <div className={`second-line-bottom-${types[0].type.name}`}>
//             </div>
//             <div className={`type-gradient-${types[0].type.name}`}></div>
//         </div>    
//     )
// };