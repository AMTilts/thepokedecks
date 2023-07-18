import React, { useState, useEffect } from 'react';
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
// import styles from "./Button.module.css";

// import '../style/pokecard.css'
// import { configs } from 'eslint-plugin-prettier';


function App() {


    const baseUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/id';
    const [ nextUrl, setNextUrl ] = useState('');
    const [ prevUrl, setPrevUrl ] = useState('null');
    const [ currentUrl, setCurrentUrl ] = useState('https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json');
    const [ imageUrls, setImageUrls ] = useState([]);
    const [ sprites, setSprites ] = useState([]);
    const [ names, setNames ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ pokePropsState, setPokePropsState ] = useState([]);    
    const [ pokeState, setPokeState ] = useState('');
    const [ pokeData, setPokeData ] = useState([])
    const [ pokeAbility, setPokeAbility ] = useState(0);
    const [ pokeLink, setPokeLink] = useState('');
    const [ pokeId, getPokeId] = useState('');
    const [ pID, setPId ] = useState('');
    const [ pType, setPType ] = useState('');
    
    async function getServerSideProps({ query }) {
        const { id } = {query};
        const res = await fetch(`${baseUrl}/${id}.json`);
        const data = await res.json();
        console.log(res.json);
        return {
            props: {
                data
            }
        }
    };


    

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokeData(currentUrl);
            setLoading(false);.log(response);
            console.log(response.length)
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response);
            const pId = response.dexNr;
            setLoading(false);
        }    
        fetchData();
    }, [currentUrl])


    const next = async (currentCount) => {
        setLoading(true);
        let data = await getAllPokeData(nextUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(`${baseUrl}/${{currentCount}-1}`);
        setLoading(false);
    }

    const prev = async (currentCount) => {
        if (!prevUrl) return;
        setLoading(true);
        let data = await getAllPokeData(prevUrl);
        await loadingPokemon(data.results);
        console.log(data.id);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokeRecord = await getPokeData(pokemon);
            let pokeId = await getPokeId(pokemon.dexNr);
            let pType = await getPokeData(pokemon.primaryType);
            console.log(pokeRecord);
            console.log(data.i);
            return (
                pokeRecord,
                pokeId,
                pType
            )
        }))
        setPokeData(_pokemonData);
    }


    

    

        function gotoPrevPage() {
            setCurrentUrl(prevUrl)
        };

        function gotoNextPage() {
            setCurrentUrl(nextUrl)
        };


        return (
            <>
                <div>
                    {loading ? 
                        <>
                        <div id="loadingDiv">
                            <div id="loadingDivPokemon">
                                <Image width="200px" height="209px" alt="loading" src="/loading/loading.gif" id="loadingPokemon" style={{ width: 200, height: 200 }} />
                                <span><h2 id="loadingh2">LOADING...</h2></span>
                            </div>
                        </div>
                        </> : (
                        <>
                            <div className="btn-div-border">
                                <Pagination 
                                    gotoPrevPage={prevUrl ? gotoPrevPage : null} 
                                    gotoNextPage={nextUrl ? gotoNextPage : null} 
                                />
                            </div>
                            <div className="div-container">
                                {pokeData && pokeData.map((p, i) => {
                                    return <Link key={i} href={`/pokemon/${p.name}`}><a><PokeCard key={i} p={p} className="totalcard" /></a></Link>
                                })}
                            </div>
                            <div className="btn-div-border">
                                <Pagination 
                                    gotoPrevPage={prevUrl ? gotoPrevPage : null} 
                                    gotoNextPage={nextUrl ? gotoNextPage : null} 
                                />
                            </div>
                        </>
                    )}
                </div>
            </>
        )
    };



export default App; 