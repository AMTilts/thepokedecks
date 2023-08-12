import React, { useState, useEffect, useCallback } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/pokeapp.css';
import Pagination from './Pagination';
import Layout from './Layout';
import { getAllPokeData, getPokeData } from '../services/pokemon';
import PokeCard from './PokeCard';
import '../services/pokemon'
import loading from '../loading/loading.gif'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import ReactPaginate from 'react-paginate'
import { faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons';
import useSwr from 'swr'


// import styles from "./Button.module.css";

// import '../style/pokecard.css'
// import { configs } from 'eslint-plugin-prettier';




function App() {

   
    const baseUrl = 'https://pogoapi.net/api/v1/released_pokemon.json';

    const [ nextUrl, setNextUrl ] = useState('');
    const [ prevUrl, setPrevUrl ] = useState('null');
    const [ currentUrl, setCurrentUrl ] = useState('https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json');
    const [ imageUrls, setImageUrls ] = useState([]);
    const [ sprites, setSprites ] = useState([]);
    const [ names, setNames ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ pokePropsState, setPokePropsState ] = useState([]);    
    const [ pokeState, setPokeState ] = useState('');
    const [ pokeData, setPokeData ] = useState([])
    const [ pokeAbility, setPokeAbility ] = useState(0);
    const [ pokeLink, setPokeLink] = useState('');
    const [ pokeId, getPokeId] = useState('');
    const [ pID, setPId ] = useState('');
    const [ pType, setPType ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ data, setData ] = useState([]);
    const [ iUrl, setIUrl ] = useState(null)
    const [ pData, setPData ] = useState([]);
    const [ dat, setDat] = useState([]);
    const [ dataType, setDataType ] = useState([]);
    const pokeUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/id'

        
    const fetcher = (...args) => {
        fetch(...args).then((res) => res.json());
    };
      

    

    async function getServerSideProps() {
        const res = await fetch(pokeUrl);
        const data = await res.json();
        let img = await data.assets.image;
        let imageWidth = img.width;
        let imageHeight = img.height;
        return {
            props: {
                data,
                img,
                imageWidth,
                imageHeight 
            }
        };
    }
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const pRes = await fetch(currentUrl);
            const data = await pRes.json();
            console.log(data);
            setData(data);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, [currentUrl]);

        const perPage = 20;
        const offset = currentPage * perPage;
        const currentPageData = async (pData) => {
        if (typeof offset !== 'number' || typeof perPage !== 'number')  {
            console.error('Invalid Offset or perPage Values})')
            return;
        }

        if (data.length < offset + perPage) {
            console.error('Cannot slice')
            return;
        }
        try {
            let datas = Promise.all(data
                .slice(offset, offset + perPage)
                .map(({ pokemon }) => <Image key={pokemon.dexNr} width={300} height={300} alt="pokemon image" src={pokemon.assets.image} />)
                );
                // pDatas();
        } catch (error) {
            console.error('Error occurred with data')
        }
            fetchData();
            
    }

    
    
    async function getServerSideProps({ query }) {
        const { id } = {query};
        const res = await fetch(`${pokeUrl}/${id}.json`);
        const data = await res.json();
        console.log(res.json);
        return {
            props: {
                data
            }
        }
    };

    // async function getServerSideProps({ query }) {
    //     const {id} = {query};
    //     const res = await fetch()
    // }


    

    useEffect(() => {
        const fetchData = async (loadingPokemon) => {
            let response = await fetch(currentUrl)
            // getAllPokeData(currentUrl);  
            if (response == response.json) {
                console.log(true)
            } const data = await response.json()
            setData(data);
            setIsLoading(false);
            console.log(response);
            console.log(data);
            setData(data)
            // await loadingPokemon(data);
            setDataType(data)
            const pId = response.dexNr;
            setIsLoading(false);
        }
        fetchData();    

    }, [currentUrl]);

    useEffect(() => {
        const fetchNumber = async ({ query }) => {
            const { id } = {query};
            const res = await fetch(`${pokeUrl}/${id}.json`);
            const data = await res.json();
            console.log(res.json);
            return {
                props: {
                    data
                }
            }}
    }, []);


    const next = async (currentCount) => {
        setIsLoading(true);
        let data = await getAllPokeData(nextUrl);
        await loadingPokemon(data);
        setNextUrl(data.next);
        setPrevUrl(`${baseUrl}/${{currentCount}-1}`);
        setIsLoading(false);
    }

    const prev = async (currentCount) => {
        if (!prevUrl) return;
        setIsLoading(true);
        let data = await getAllPokeData(prevUrl);
        await loadingPokemon(data.results);
        console.log(data.id);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setIsLoading(false);
    }

    const loadingPokemon = useCallback(async (data)  => {
        console.log(data)
        if (!Array.isArray(data)) {
            console.error('not an array');
        } const _pokemonData = await Promise.all(data.map(async (pokemon) => {
            const image = pokemon.assets && pokemon.assets.image;
            let pokeRecord = await getPokeData(pokemon.url)
            let pokeName = await getPokeData(pokemon.dexNr)
            let pType = await getPokeData(pokemon.primaryType);
            let pImg = await getPokeData(pokemon.assets.image[0])
            let img = await pokemon.assets.image;
            let imageWidth = await img.width;
            let imageHeight = await img.height;
            console.log(imageWidth);
            console.log(imageHeight);
           
            return {
                pokeRecord,
                pokeId,
                img,
                imageWidth,
                imageHeight,
                image: image || '', // Use a default value if 'image' is not available in the 'assets' property
            }
        }))
        setPokeData(_pokemonData);
    }, [pokeId]);





    
        // const {name} = pokemon;
    

        function gotoPrevPage() {
            setCurrentUrl(prevUrl)
        };

        function gotoNextPage() {
            setCurrentUrl(nextUrl)
        };

         const results = [] = data;
         return (
            <>
              <div>
                {isLoading ? (
                  <>
                    <div id="loadingDiv">
                      <div id="loadingDivPokemon">
                        <Image width={200} height={200} alt="loading" src="/loading/loading.gif" id="loadingPokemon" />
                        <span>
                          <h2 id="loadingh2">LOADING...</h2>
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                    <Pagination 
                        data={data}
                    />
                )}
              </div>
            </>
          );
        }
        
        export default App;