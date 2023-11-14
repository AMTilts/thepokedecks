                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                import React, {useState, useEffect, useRef} from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import cardImg from '../images/card_img.png';
import Image from 'next/future/image';
import FixImage from './FixImage';
import imageSize from 'image-size';
import probe from 'probe-image-size'
import { doExpression } from '@babel/types';
import { raw } from 'fs-loader';
// import { EntryOptionPlugin } from 'webpack';
import {shinyBlack} from './shinyblack.png';

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

function PokeCard({ id, name, key, image, type, lowerCaseData, currentItems, data, p, filteredData, imageWidth, fImg, imgWidth, imgHeight, images, imagesWithSizes, imgUrl, props, dimensions, shinyImage}) {

    const [ imageArray, setImageArray ] = useState([]);
    const [ pokeImage, setPokeImage ] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [imageHeight, setImageHeight] = useState(undefined);
    const [naturalWidth, setNaturalWidth] = useState(undefined);

    const [naturalHeight, setNaturalHeight] = useState(undefined);
    const imageRef = useRef(null);

    
    function handleImageURLChange(event) {
        setImageURL(event.target.value);
        setImageHeight(undefined);
    }

    function handleImageLoad() {
        if (imageRef.current) {
            const { naturalWidth, naturalHeight } = imageRef.current;
            setImageHeight(naturalHeight)
            setNaturalWidth(naturalWidth);
            setNaturalHeight(naturalHeight);
            setImageHeight(naturalHeight);
        }
    }


  const [imgArray, setImgArray] = useState([]);

  
  const pokemonTypes = ['grass', 'fire', 'water', 'fairy', 'rock', 'dark', 'ghost', 'ice', 'dragon', 'flying', 'steel', 'electric', 'poison', 'fighting', 'psychic', 'ground', 'bug', 'normal'];
   
  const cardFrame = pokemonTypes.map((type) => {
    return `frame-card-bg-white-${type}`;
  })

  useEffect(() => {
    const icon = document.querySelector('.sparkling-icon');
    function randomizeAnimation() {
        let randomDuration = Math.random() * (5 - 3) + 3; // Duration between 3 and 5 seconds
        icon.style.animationDuration = `${randomDuration}s`;
    }
    const intervalId = setInterval(randomizeAnimation, 5000); // Adjust interval as needed

    return () => clearInterval(intervalId);
}, []);


  useEffect(() => {
    function triggerShine() {
        const button = document.querySelector('.shiny-button');
        button.classList.add('shine');
        setTimeout(() => {
            button.classList.remove('shine');
        }, 500); // Duration of the CSS animation
    }

    const interval = setInterval(() => {
        triggerShine();
    }, Math.random() * 10000 + 5000); // Randomly between 5 to 15 seconds

    return () => clearInterval(interval);
  }, []);

  function loadedData() {
    if (lowerCaseData.primaryType && lowerCaseData.primaryType.names) {
      console.log(lowerCaseData.primaryType.names.English)
    } console.log('nope mannn')
  };

  const lowerCaseType = type.toLowerCase(); 
  
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
                        id={`frame-card-bg-white-${lowerCaseType}-light`}
                        className="frame-card-bg-white">
                    </div>
                        <div className="icon-container" style={{zIndex: 5000}}>
                            {filteredData ? (filteredData.map((pokemon) => {
                                pokemon.assets?.shinyImage ? (
                                    <h3 style={{color: 'teal', fontStyle: 'bold', zIndex: 500}}>BONERS</h3>
                                )
                                 :
                                (
                                    <Image src={shinyIcon} alt="icon" className="icon" style={{zIndex: 500}}>
                                        <div className="light"></div>
                                    </Image>    
                                )
                                }))
                                :
                                (
                                <div className="nocurrent">
                                </div>
                                )
                            }
                        </div>
                        <div className="sparkle-icon"></div> 
                    </div>
                    <div className="frame-card-img-outer">
                        <div id="frame-card-img" data-name="frame-card-img" className="frame-card-img">
                            <div className="card-img-outer">
                                <div>
                                    {image && (
                                            <Image
                                                key={key}
                                                id="card-img"
                                                src={image}
                                                dataName="card-img"
                                                alt={name}
                                                className="card-img"
                                                onLoadingComplete={handleImageLoad}
                                                ref={imageRef.current}
                                                style={{objectFit: 'contain', width: '100%'}}
                                                fill={true}
                                                sizes="100%"
                                                layout="intrinsic"
                                            />
                                        // )) : (
                                        //     <Image
                                        //         src="/images/default.png"
                                        //         alt="Default Image"
                                        //         width={149}
                                        //         height={150}
                                        //     />
                                        // )
                                    )}
                                     {/* Display the shiny image icon if available */}
                                    {shinyImage && (
                                      <div className="shiny-icon-container">
                                        <Image
                                          src="/shinyblack.svg"
                                          className="sparkling-icon"
                                          alt={`Shiny ${name}`}
                                          width={30}
                                          height={30}
                                        />
                                      </div>
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
                                id={`poke-name-${lowerCaseType}`}
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
  </div> 
  
  
  );
}

export default PokeCard;
