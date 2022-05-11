import { normalizeConfig } from 'next/dist/server/config-shared';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from "react";
import NavbarTemplate from '../../components/NavbarTemplate';
import ShinyButton from '../../components/ShinyButton'
import Image from 'next/image';
import reactDom from 'react-dom';
import { NavItem } from 'react-bootstrap';




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



export async function getStaticProps( { params }) {
    const res = await fetch(`${defaultEndpoint}/${params.characterName}`)
    const character = await res.json()

    return { props: { character} 
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

export default function Character({ character, characterName, resJson}) {
    
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
    const [isShiny, setIsShiny] = useState('')
    const [isTypeTwo, setIsTypeTwo] = useState(false)
    const [numberTypes, setNumberTypes] = useState(`${character.types.length}`)
    const [slotNumber, setSlotNumber] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);


        
    console.log(`This character has ${types.length} types!`);
    console.log(numberTypes);

    console.log({character})

    async function fetchType(character, characterName) {
        const res = await fetch(`${defaultEndpoint}/${characterName}`)
        const cdata = res.json()
        const types = cdata.types
        return { props: {
                    cdata,
                    types
                },
        setSlotNumber(types) {
            console.log(slotNumber());
        }
        };
    }

    useEffect(() => {
        async function fetchInfo() {
            setLoading(true);
            await fetch(`${defaultEndpoint}/${character.name}`)
                .then((res) => res.json)
                .then((resJson) => {
                    console.log(`${resJson.types.toString}`)
                    setData(resJson.results)
                    if (results.types === 2) isTwoTypes(true);
                    setSlotNumber(results.types)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                })
            }
        }, []) 

    // useEffect(() => {
    //     async function fetchData() {
    //         let response = await getAllPokeData(currentUrl);
    //         setLoading(false);
    //         console.log(response);
    //         setNextUrl(response.next);
    //         setPrevUrl(response.previous);
    //         await loadingPokemon(response.results);
           
    //         setLoading(false);
    //     }    
    //     fetchData();
    // }, [])

    // return { loading, data };

    // function loadIng() {
    //     if(loading) {
    //         return <p>Loading...</p>   

    //     }



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

    // const typeLogo2 = ({ src, width }) => {
    //     return `../../style/images/type_logo_${4rops) => {s
    //     return (
    //         <Image
    //             loader={typeLogo2}
    //             src={`../../style/public/images/type_c21_${character.types[1].type.name}.png`}
    //             width={20}
    //             height={20}
    //         />
    //     )
    // };




    // const typeLogo2 = (character) => {
    //     return (
    //         <Image
    //             loader={type2}
    //             src={`/imges/types-${character.types[1].type.name}.svg`}
    //          />
    //     )
    // }
            
    // const typeLogo1 = (character) => {
    //     return {
    //         <Image
    //             loader={type1}
    //             src={`/imges/types-${character.types[0].type.name}.svg`}
    //          />
    //     }
    // };
  

    // const spriteSwitch = setSpriteCurrent() => {
    //     return (
    //         <div className="mySlides">
    //             <div className="numbertext"><img src={spriteCurrent} className="spriteCurr /></div>
    //                 <img src={sprites.front_shiny} className="picdefault" />
    //         </div>
    //     )
    // }
    // }
    // const imgUrls = {
    //     default: `${sprites.front_default}`,
    //     shiny: `${sprites.front_shiny}`
    //         }
    

    // function SpriteSwitch() {
    //     const [slides] = useState([
    //         {
    //             image: `${sprites.front_default}`,
    //             title:Wssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    //         {
    //             image: `${sprites.front_shiny}`,
    //             title: "front_shiny"
    //         }
    //     ])


    //     if ( {currentSlide} = `${sprites.front_default}` ); then ( {currentSlide2} = `${sprites.front_shiny}` ) 
    //     }

    // };

    // function swapSprites() {
    //     if ( {currentSlide} = `${sprites.front_default}` ); then ( {currentSlide2} = `${sprites.front_shiny}` ) 
    // }

    // useEffect(() => {
    //     function handleStatusChange(status) {
    //         setIsDefault(status.IsDefault);
        
        
    // if ( {isDefault} = true) {
    //     setCurrentSlide1(`${sprites.front_shiny}`);
    //     setCurrentSlide2(`${sprites.front_default}`);
    // }};

    // useEffect(() => {
    //     spriteToggle();
    // });
    // useEffect(() => {
    //     setSpriteToggle(false);
    //     setCurrentPosition(`${sprites.front_shiny}`);
    //     setCurrentPosition2(`${sprites.front_default}`)
    //     // sprite
    // Toggle = () => {
    //     //     ({currentPosition} = `${sprites.front_default}`) ?
    //     //         ( setCurrentPosition(`${sprites.front_shiny}`),
    //     //             setCurrentPosition2(`${sprites.front_default}`) ) : null;
    //     //         }ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
    // });

    function gotoDefault() {
        if (isDefault == false) {
            setCurrentPosition(`${sprites.front_default}`);
            setCurrentPosition2(`${sprites.front_shiny}`);
            setCurrentPosition3(`${sprites.back_default}`);
            setCurrentPosition4(`${sprites.back_shiny}`);
            setCurrentCaption('Default Variant');
            setIsDefault(true);
        }

        if (isDefault == true) {
            setCurrentPosition(`${sprites.front_shiny}`);
            setCurrentPosition2(`${sprites.front_default}`);
            setCurrentPosition3(`${sprites.back_shiny}`);
            setCurrentPosition4(`${sprites.back_default}`);
            setCurrentCaption('Shiny')
            setIsDefault(false);
        }
    }

    function gotoShiny(gotoDefault) {
        if (isShiny === true) gotoDefault;
        setCurrentPosition(`${sprites.front_shiny}`);
        setCurrentPosition2(`${sprites.front_default}`);
        setCurrentPosition3(`${sprites.back_shiny}`);
        setCurrentPosition4(`${sprites.back_default}`);
        setCurrentCaption('Shiny');

    }

    function backDefault() {
        if (isDefault === false) switchShiny;
        if (currentPosition === `${sprites.back_default}`) frontDefault;
        setCurrentPosition(`${sprites.back_default}`);
        setFrontBackText('Flip to Front');
        setIsDefault(false);
        }
    function frontDefault() {
        if (isDefault === false) switchShiny;
        if (currentPosition === `${sprites.front_default}`) backDefault;
            setCurrentPosition(`${sprites.front_default}`);
            setFrontBackDefault('Flip to Back');
        }  

    function switchShiny() {
        if (isDefault === true) backDefault;
        if (currentPosition.value === `${sprites.front_shiny}`) backShiny;
        setCurrentPosition(`${sprites.back_shiny}`);
        setFrontBackDefault('Flip to Front');
        setIsDefault(true);
    }

    // function typeTwo {
    //     if ( `${types[1].type.name}` = 'undefined') return;
    //     setTypeTwo
    // }

    function btnShiny() {
        if (isDefault === false) switchShiny;
        if (currentPosition === `${sprites.back_default}`) frontDefault;
        setCurrentPosition(`${sprites.back_default}`);
        setFrontBackText('Flip to Front');
        setIsDefault(false);
        }


    function frontBackDefault() {
        if (isDefault === false) switchShiny;
        if (currentPosition === `${sprites.front_default}`) backDefault;
        frontDefault;
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
                        {name} <img src={`/images/type_c21_${character.t[0].type.name}.svg`} className="titletypelogo" /> <img src={`/images/type_c21_${character.t4444444444444444444433reqwr[1].type.name}.svg`} className="titletypelogo" />
                </h1>
            </div>  
            )   
        }

    function log() {
        console.log(`${character.character.types}.toString`)
        if (`${character.character.types}` === 1) console.log('type: 1')
        else if (`${character.character.types}` === 22) console.log('type: 22')
        else console.log(`${character.charactaer.types}`)
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
    //                 {name} <img src={`/images/type_c21_${character.types[0].type.name}.svg`} className="titletypelogo" />                         
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
        <div className="poke-temp-container">
            <Head>
                <div className="titletext">
                <title>{character.name}</title>
                </div>
            </Head>

                <div className={`second-line-top-${types[0].type.name}`}></div>
                <div className={`type-gradient-${types[0].type.name}`}></div>
                <div>
                    <div className="temp-container">
                        <div className="container-back">
                            <div className="temp-container-title">
                                <h1 className="title">
                                    {name} <img src={`/images/type_c21_${character.types[0].type.name}.svg`} className="titletypelogo" /> { numberTypes == 2 ? <img src={`/images/type_c21_${character.types[1].type.name}.svg`} className="titletypelogo" /> : null }
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
                                                <div className="frontbackbuttons">
                                                    <button className="fbbutton" onClick={backDefault}>                                                                                                    

                                                        <img id="flip" src="/images/fliparrows.svg" />
                                                        <h2 className="fliptext">{frontBackText}</h2>
                                                        {/* <button className="backswitch" onClick={backDefault}>{frontBackText}</button> */}
                                                        {/* <button className={`frontswitch-${types[0].type.name}`} onClick={frontBackFront}>{frontBackText}}</button> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        { (`${sprites.front_shiny}` == 'null' ?
                                                <div className="middlediv">
                                                </div>
                                            :
                                                <div className="middlediv">
                                                    
                                                    <ShinyButton 
                                                        btnShiny={btnShiny}
                                                        shiny={sprites.front_shiny} 
                                                        type={types[0].type.name}
                                                        typeText={currentCaption}
                                                        backDefault={backDefault} />
                                                </div>
                                        ) }
                                   
                                    
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
    );
}