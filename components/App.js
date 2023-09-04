import React, { useState, useEffect, useCallback } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/pokeapp.css';
// import { getStaticProps } from 'next';
import Pagination from './Pagination';
import Layout from './Layout';
import { getAllPokeData, getPokeData } from '../services/pokemon';
import '../services/pokemon'
import loading from '../loading/loading.gif'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import ReactPaginate from 'react-paginate'
import useSwr from 'swr'
import probe from 'probe-image-size';
import PokemonComponent from './PokeComponent';
import PokeCard from './PokeCard';





function App({ images, imageWithSize, p, fData, assetImg, img, fetchedData, imgUrl, pImg, imaggg, data }) {
  const [ isLoading, setIsLoading ] = useState(true);
   
    const baseUrl = 'https://pogoapi.net/api/v1/released_pokemon.json';
    const [ nextUrl, setNextUrl ] = useState('');
    const [ prevUrl, setPrevUrl ] = useState('null');
    const [ currentUrl, setCurrentUrl ] = useState('https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json');
    const [ imageUrls, setImageUrls ] = useState([]);
    const [ sprites, setSprites ] = useState([]);
    const [ names, setNames ] = useState([]);
    const [ pokePropsState, setPokePropsState ] = useState([]);    
    const [ pokeState, setPokeState ] = useState('');
    const [ pokeData, setPokeData ] = useState([])
    const [ pokeAbility, setPokeAbility ] = useState(0);
    const [ pokeLink, setPokeLink] = useState('');
    const [ pokeId, getPokeId] = useState('');
    const [ pID, setPId ] = useState('');
    const [ pType, setPType ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ iUrl, setIUrl ] = useState(null)
    const [ pData, setPData ] = useState([]);
    const [ dat, setDat] = useState([]);
    const [ dataType, setDataType ] = useState([]);
    const pokeUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/id'
    const [imgWidth, setImgWidth] = useState(null);
    const [imgHeight, setImgHeight] = useState(null);
    const [imageDimensions, setImageDimensions] = useState(null);
    const [type, setType] = useState('');
	const [pokemonData, setPokemonData] = useState([]);
	const [imgg, setImgg] = useState([]);
	const [imageProps, setImageProps] = useState([]);
	const [imgProp, setImgProp]	= useState('');
	const [shinyImgProp, setShinyImgProp] = useState('');
	const [singleImage, setSingleImage]	= useState(null);
	const [width, setWidth]	= useState(0);
	const [height, setHeight] = useState(0);
	const [imgArray, setImgArray] = useState([]);
	const [dataState, setDataState] = useState([])


	// useEffect(() => {
    //     async function fetchData() {

    //         let response = await fetch('https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json');
	// 		let fetchedData = response.json();

	// 		// let data = await response.json();
	// 		setDataState(fetchedData);
    //         // await loadingPokemon(fetchedData);
    //         setIsLoading(false);
	// 		// let imaggg = `${fetchedData.assets[0].image}`
			
	// 		return {
	// 			props: {
	// 				fetchedData,
	// 				fData,
	// 				// imaggg
	// 			}
	// 		}
    //     }    
    //     fetchData();
    // }, [])


    
    useEffect(() => {
      const fetchData = async () => {
		const currentUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json'
        try {
          const pRes = await fetch(currentUrl);
          const data = await pRes.json();
		  setDataState(await data);

		  return {
			data
		  }
        //   console.log(data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
	
      fetchData();
    }, [currentUrl]);


      const perPage = 20;
      const offset = currentPage * perPage;
      const currentPageData = async (dataState) => {
      if (typeof offset !== 'number' || typeof perPage !== 'number')  {
          console.error('Invalid Offset or perPage Values})')
          return;
      }

      if (dataState.length < offset + perPage) {
          console.error('Cannot slice')
          return;
      }
      try {
          let datas = Promise.all(dataState
              .slice(offset, offset + perPage)
              .assets.map(({ asset }) => <Image key={pokemon.dexNr} width={300} height={300} alt="pokemon image" src={pokemon.assets.image} />),
			  console.log(pokemon.assets.image)
              );
			  setIsLoading(false)
              // pDatas();
      } catch (error) {
          console.error('Error occurred with data')
      }
	  
          
  }

  console.log(data);

		// Assuming data is your fetched data
		const mappedData = dataState?.map((item) => {

			return {
			  id: item.id,
			  englishName: item.names?.English || '',
			  baseHappiness: item.base_happiness || '',
			  baseExperience: item.base_experience || '',
			  abilities: item.abilities?.map(a => a.ability?.name) || [],
			  types: item.types?.map(t => t.type?.name) || [],
			  stats: {
				hp: item.stats?.stamina || '',
				attack: item.stats?.attack || '',
				defense: item.stats?.defense || '',
				// add other stats as needed
			  },
			  image: item.sprites?.front_default || '',
			  assetForms: item.assetForms?.map(asset => asset?.image) || [], // This line will map all assetForm images into an array
			  // add other desired fields here
			};
		  }) ?? [];
		  
		  

	console.log(mappedData)
  

    console.log(imgUrl);
      
	function loadYes(dataState) {
		return (
		  <>
			{dataState && dataState.map((assetForms, dexNr) => (
			  <div id="loadingDiv" key={dexNr}>
				<div id="loadingDivPokemon">
				  <Image width={200} height={200} alt="loading" src="/loading/loading.gif" id="loadingPokemon" />
				  <Image src={assetForms[0].image} alt={dexNr.toString()} />
				  <span>
					<h2 id="loadingh2">LOADING...</h2>
				  </span>
				</div>
			  </div>
			))}
		  </>
		);
	  }
	  
	console.log(dataState)
        
	function loadNo(dataState) {
		return (
		  <>
			<div>
				<h1>Hap</h1>
			  {dataState ? dataState.map((d, index) => (
				<div key={index}>
				  <Pagination 
					data={d}
					imgHeight={d.image?.height}
					imgWidth={d.image?.width}
					img={d.image}
					d={d}
					image={d.image}
					assetForms={d.assetForms}
				  />
				</div>
			  )) : null}
	  
			  {dataState ? (
				dataState.map((d, index) => (
				  <div key={index}>
					<PokeCard 
					  img={d.image}
					  index={d.id}
					/>
				  </div>
				))
			  ) : (
				<Image src="/default-image.jpg" alt="Default Image" width={200} height={250} />
			  )}
			</div>
		  </>
		);
	  }
	  


console.log(images)

    
        // const {name} = pokemon;
  

      function gotoPrevPage() {
          setCurrentUrl(prevUrl)
      };

      function gotoNextPage() {
          setCurrentUrl(nextUrl)
      };

        // const results = [] = data;
         
        
      return (
		<>
        	{isLoading ? dataState && loadYes() : dataState && loadNo()}
		</>
        )
     };
        
export default App;