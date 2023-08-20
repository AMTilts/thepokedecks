import React, {useState, useEffect} from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import cardImg from '../images/card_img.png';
import classNames from 'classnames';
import Image from 'next/image';
import FixImage from './FixImage';
import imageSize from 'image-size';
import probe from 'probe-image-size'
// import { EntryOptionPlugin } from 'webpack';

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






export const getStaticProps = async () => {
  const url = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json'
  const response = await fetch(url);
  const data = await response.json();

  const imageUrls = data.map((entry) => entry.assets.image);
  console.log(imageUrls);
  const imagesWithSizes = await Promise.all(
    imageUrls.map(async (url) => {
      const imageWithSize = {url};
      imageWithSize.size = await probe(url);
      console.log(imageWithSize.width)
      return imageWithSize;
    })
  );

  return {
    props: {
      images: imagesWithSizes
    }
  };
};


// //     const images = [
//         await imgArray
//     ];

//     const imgsWithSizes = await Promise.all(
//       images.map(async(image) => {
//         const imgWithSize = image;
//         imageWithSize.size = await probe(image.assets.image)

//         return imgWithSize;
//       })
//     )

//     return {
//       props: {
//         images: imgsWithSizes
//     }
//   }
// }

// if( {p.types[1].type.name} == "Water") {
//     waterType();
// }
// if ({p.types[]})
/* 
function typeCheck(p) {
  const isGrass = type === "grass";
  const isWater = type === "water";
  const isFire = type === "fire";

  const typeGrass = useState(grass, setGrass); */

function PokeCard({ id, name, image, type, lowerCaseData, data, currentItems, p, imageWidth, imageHeight, fImg, imgWidth, imgHeight, images, imagesWithSizes, imgUrl, props, dimensions}) {

    
  const getStaticProps = async () => {
    const url = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json'
    const response = await fetch(url);
    const data = await response.json();
  
    const imageUrls = data.map((entry) => entry.assets.image);
    console.log(imageUrls);
    const imagesWithSizes = await Promise.all(
      imageUrls.map(async (url) => {
        const imageWithSize = {url};
        imageWithSize.size = await probe(url);
        console.log(imageWithSize.width)
        return imageWithSize;
      })
    );
  
    return {
      props: {
        images: imagesWithSizes
      }
    };
  };


// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(image);
//       const arrayBuffer = await response.arrayBuffer();

//       const buffer = Buffer.from(arrayBuffer);

//       const dimensions = sizeOf(buffer);
//       console.log(dimensions.width, dimensions.height);
//     } catch (error) {
//       console.error('Error fetching image:', error);
//     } return {
//       props: {
//         dimensions
//       }
//     }
//   };

//   fetchData();
// }, [image]);

// console.log(dimensions);

  

// const size = async () => {

//   await probe(image)
// }

// console.log(size.width, size.height)

  

    // DataBaseSchemaExample = {
    //   src: {image}
    // }
  
  //   const file = {image};
    
    
  //  const lqipPalette = () => { 
  //   lqip.palette(file) = `../images/${name}.png`
  
  //     lqip.palette(file).then(res => {
  //       console.log(res);
  //     })
   
  // }
  // //   c

  const [imgArray, setImgArray] = useState([]);


  // function waterType() {
  //         return (
  //             <Card style={
  //                 background-image: linear-gradient(-60deg, #f12711 0%, #f5af19 100%)
  //                 border-width: 2px 5px 7.5px 2px
  //                 border-color: rgb(0, 194, 212);
  //             }>
  //         )
  //     }

//  function fixImage(image) {
//     var img = new Image();
//     img.src = {image}
//     var imageWidth = img.width;
//     var imageHieight = img.height;

//     console.log(imageWidth && imageHieight);
//  }


console.log(imagesWithSizes)
  
  const pokemonTypes = ['grass', 'fire', 'water', 'fairy', 'rock', 'dark', 'ghost', 'ice', 'dragon', 'flying', 'steel', 'electric', 'poison', 'fighting', 'psychic', 'ground', 'bug', 'normal'];
   
  const cardFrame = pokemonTypes.map((type) => {
    return `frame-card-bg-white-${type}`;
  })

  const cardWhite = classNames({
    'frame-card-bg-white-grass': `${type}` === 'grass',
    'frame-card-bg-white-fire': `${type}` === 'fire',
    'frame-card-bg-white-fairy': `${type}` === 'fairy',
    'frame-card-bg-white-water': `${type}` === 'water',
    'frame-card-bg-white-rock': `${type}` === 'rock',
    'frame-card-bg-white-dark': `${type}` === 'dark',
    'frame-card-bg-white-ghost': `${type}` === 'ghost',
    'frame-card-bg-white-ice': `${type}` === 'ice',
    'frame-card-bg-white-dragon': `${type}` === 'dragon',
    'frame-card-bg-white-flying': `${type}` === 'flying',
    'frame-card-bg-white-steel': `${type}` === 'steel',
    'frame-card-bg-white-electric': `${type}` === 'electric',
    'frame-card-bg-white-poison': `${type}` === 'poison',
    'frame-card-bg-white-fighting': `${type}` === 'fighting',
    'frame-card-bg-white-psychic': `${type}` === 'psychic',
    'frame-card-bg-white-ground': `${type}` === 'ground',
    'frame-card-bg-white-bug': `${type}` === 'bug',
    'frame-card-bg-white-normal': `${type}` === 'normal',

  });

  const logoType = classNames({
    'type-logo-TYPENAME-grass': `${type}` === 'grass',
    'type-logo-TYPENAME-fire': `${type}` === 'fire',
    'type-logo-TYPENAME-fairy': `${type}` === 'fairy',
    'type-logo-TYPENAME-water': `${type}` === 'water',
    'type-logo-TYPENAME-rock': `${type}` === 'rock',
    'type-logo-TYPENAME-dark': `${type}` === 'dark',
    'type-logo-TYPENAME-ghost': `${type}` === 'ghost',
    'type-logo-TYPENAME-ice': `${type}` === 'ice',
    'type-logo-TYPENAME-dragon': `${type}` === 'dragon',
    'type-logo-TYPENAME-flying': `${type}` === 'flying',
    'type-logo-TYPENAME-steel': `${type}` === 'steel',
    'type-logo-TYPENAME-electric': `${type}` === 'electric',
    'type-logo-TYPENAME-poison': `${type}` === 'poison',
    'type-logo-TYPENAME-fighting': `${type}` === 'fighting',
    'type-logo-TYPENAME-psychic': `${type}` === 'psychic',
    'type-logo-TYPENAME-ground': `${type}` === 'ground',
    'type-logo-TYPENAME-bug': `${type}` === 'bug',
    'type-logo-TYPENAME-normal': `${type}` === 'normal'
  });

 const pokeName = classNames({
    'poke-name-grass': `${type}` === 'grass',
    'poke-name-fire': `${type}` === 'fire',
    'poke-name-fairy': `${type}` === 'fairy',
    'poke-name-water': `${type}` === 'water',
    'poke-name-rock': `${type}` === 'rock',
    'poke-name-dark': `${type}` === 'dark',
    'poke-name-ghost': `${type}` === 'ghost',
    'poke-name-ice': `${type}` === 'ice',
    'poke-name-dragon': `${type}` === 'dragon',
    'poke-name-flying': `${type}` === 'flying',
    'poke-name-steel': `${type}` === 'steel',
    'poke-name-electric': `${type}` === 'electric',
    'poke-name-poison': `${type}` === 'poison',
    'poke-name-fighting': `${type}` === 'fighting',
    'poke-name-psychic': `${type}` === 'psychic',
    'poke-name-ground': `${type}` === 'ground',
    'poke-name-bug': `${type}` === 'bug',
    'poke-name-normal': `${type}` === 'normal',
    'poke-name-grass': `${type}` === 'grass',
    'poke-name-fire': `${type}` === 'fire',
    'poke-name-fairy': `${type}` === 'fairy'
  });

  const typeName = classNames({
    'TYPENAME-grass': `${type}` === 'grass',
    'TYPENAME-fire': `${type}` === 'fire',
    'TYPENAME-fairy': `${type}` === 'fairy',
    'TYPENAME-water': `${type}` === 'water',
    'TYPENAME-rock': `${type}` === 'rock',
    'TYPENAME-dark': `${type}` === 'dark',
    'TYPENAME-ghost': `${type}` === 'ghost',
    'TYPENAME-ice': `${type}` === 'ice',
    'TYPENAME-dragon': `${type}` === 'dragon',
    'TYPENAME-flying': `${type}` === 'flying',
    'TYPENAME-steel': `${type}` === 'steel',
    'TYPENAME-electric': `${type}` === 'electric',
    'TYPENAME-poison': `${type}` === 'poison',
    'TYPENAME-fighting': `${type}` === 'fighting',
    'TYPENAME-psychic': `${type}` === 'psychic',
    'TYPENAME-ground': `${type}` === 'ground',
    'TYPENAME-bug': `${type}` === 'bug',
    'TYPENAME-normal': `${type}` === 'normal',
    'TYPENAME-grass': `${type}` === 'grass',
    'TYPENAME-fire': `${type}` === 'fire',
    'TYPENAME-fairy': `${type}` === 'fairy'
  });

  const cardGradient = classNames({
    'card-bg-gradient-grass': `${type}` === 'grass',
    'card-bg-gradient-fire': `${type}` === 'fire',
    'card-bg-gradient-fairy': `${type}` === 'fairy',
    'card-bg-gradient-water': `${type}` === 'water',
    'card-bg-gradient-rock': `${type}` === 'rock',
    'card-bg-gradient-dark': `${type}` === 'dark',
    'card-bg-gradient-ghost': `${type}` === 'ghost',
    'card-bg-gradient-ice': `${type}` === 'ice',
    'card-bg-gradient-dragon': `${type}` === 'dragon',
    'card-bg-gradient-flying': `${type}` === 'flying',
    'card-bg-gradient-steel': `${type}` === 'steel',
    'card-bg-gradient-electric': `${type}` === 'electric',
    'card-bg-gradient-poison': `${type}` === 'poison',
    'card-bg-gradient-fighting': `${type}` === 'fighting',
    'card-bg-gradient-psychic': `${type}` === 'psychic',
    'card-bg-gradient-ground': `${type}` === 'ground',
    'card-bg-gradient-bug': `${type}` === 'bug',
    'card-bg-gradient-normal': `${type}` === 'normal',
    'card-bg-gradient-grass': `${type}` === 'grass',
    'card-bg-gradient-fire': `${type}` === 'fire',
    'card-bg-gradient-fairy': `${type}` === 'fairy'
  })

  function loadedData() {
    if (lowerCaseData.primaryType && lowerCaseData.primaryType.names) {
      console.log(lowerCaseData.primaryType.names.English)
    } console.log('nope mannn')
  };

  const lowerCaseType = p.toLowerCase(); 
  
  loadedData;

  return (
    <div className="Page-outer">
      <div id="Page" data-name="Artboards" className="Page">
        <div id="Frame-outer" className="Frame-outer">
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
                        className="frame-card-bg-white">
                    </div>
                    </div>
                    <div className="frame-card-img-outer">
                      <div
                        id="frame-card-img"
                        data-name="frame-card-img"
                        className="frame-card-img"
                      >
                    <div className="card-img-outer">
                      {images ? images.map((image) => {
                          <Image
                            key={image.url}
                            id="card-img"
                            // style={{width: 150, height: 'auto'}}
                            src={image.url}
                            data-name="card-img"
                            alt={name}
                            className="card-img"
                            width={imageWithSize.size.width}
                            height={imageWithSize.size.height}

                            blurDataURL={imageWithSize.blurDataURL}
                          />
                      }) : (
                          // If 'image' is null, render a placeholder image or handle it accordingly
                            <Image 
                              src="/images/default.png" 
                              alt="Default Image"
                              width={149}
                              height={150}
                              />
                          )}
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
                                <div key="0">{name}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="logo-name-parent-frame">
                      <div className="frame-type-logo-name-outer">
                      <div className="TYPENAME-logo-outer">
                            <div
                              id="TYPENAME-logo"
                              data-name="TYPENAME-logo">
                              <div className="Frame-4-outer">
                                <div id="Frame-4" data-name="Frame 4" className="Frame-4">
                                  <div className="type-logo-TYPENAME-outer">
                                  {!lowerCaseType ? (
                                      console.log('no type icon')
                                  ) : (
                                      <Image
                                          id={`type-logo-TYPENAME-${lowerCaseType}`}
                                          src={
                                              !lowerCaseType
                                                  ? `/images/type_c21_${lowerCaseType}.svg`
                                                  : '/images/default.svg' // Replace 'default.svg' with your default image path
                                          }
                                          data-name="type-logo-TYPENAME"
                                          alt={`${type} Type`}
                                          className="type-logo-TYPENAME"
                                          height={25}
                                          width={25}
                                      />
                                  )}
                                  </div>
                                </div>
                              </div>
                            </div>
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
                                  id={`TYPENAME-${lowerCaseType}`}
                                  data-name="TYPENAME"
                                  className="TYPENAME"
                                >
                                  <div key="0">
                                    {type}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                         </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className={`type-gradient-${type}`}>

                  </div> */}
                </div>
                <div className="card-bg-gradient-outer">
                  <div
                    id={`card-bg-gradient-${lowerCaseType}`} 
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
