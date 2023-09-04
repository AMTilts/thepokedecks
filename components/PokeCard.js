import React, { useState, useEffect, useCallback } from 'react';
import Pagination from './Pagination';
import Layout from './Layout';
import { getAllPokeData, getPokeData } from '../services/pokemon';
import loading from '../loading/loading.gif';
import Navbar from './Navbar';
import Link from 'next/link';
import Image from 'next/future/image';
import ReactPaginate from 'react-paginate';
import useSwr from 'swr';
import probe from 'probe-image-size';
import PokemonComponent from './PokeComponent';


export default function PokeCard({ assets, type, iUrl, iSUrl, name, images, assetImg, dexNr, width, height, img, imageProps, imgProp, imgArray, assetFormData, width2, height2, singleImage, url, image, d, index,...props }) {
    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [imgg, setImgg] = useState(0);
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
	const [assetForms, setAssetForms] = useState([]);
	

	useEffect(() => {
		async function fetchData() {
		const response = await fetch('https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json');
		const result = await response.json(); // Replace this with the actual API call
		setData(result);
		const img = (`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/Addressable%20Assets/pm${dexNr}.icon.png`);
		

		  
		const assetFormData = await data?.map((data, index, assetForms, image) => {
			return {
				props: {
					data,
					index,
					assetForms,
					image,
				}
			}
			});
		  setAssetForms(assetFormData)
		}
		fetchData();
	  }, [data, dexNr, assetForms]);
	

    const pokemonTypes = ['grass', 'fire', 'water', 'fairy', 'rock', 'dark', 'ghost', 'ice', 'dragon', 'flying', 'steel', 'electric', 'poison', 'fighting', 'psychic', 'ground', 'bug', 'normal'];
   
    const cardFrame = pokemonTypes.map((type) => {
      return `frame-card-bg-white-${type}`;
    })
  

	function seeProps(props) {
		console.log(JSON.stringify(props));
	}

	console.log(JSON.stringify({assetFormData}));

	seeProps;
  
    function loadedData() {
      if (lowerCaseData.primaryType && lowerCaseData.primaryType.names) {
        console.log(lowerCaseData.primaryType.names.English)
      } console.log('nope mannn')
    };
  
    const lowerCaseType = `${type}`.toLowerCase(); 
    
    loadedData;
  
    console.log(imgArray); 
  
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
                          id={`frame-card-bg-white-${lowerCaseType}`}
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
						<Image
							key={index ? index : ''}
							id="card-img" // Provide a unique ID or class for each image
							src={img} // Use the correct URL from the image object
							data-name="card-img"
							alt={index}
							className="card-img"
							width={width2}
							height={height2}
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
											width={28}
											layout="raw"
										/>
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
  };
