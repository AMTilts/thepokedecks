import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
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
import { LibManifestPlugin } from 'webpack';
// import styles from "./Button.module.css";

// import '../style/pokecard.css'
// import { configs } from 'eslint-plugin-prettier';


function App() {


    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    const [ nextUrl, setNextUrl ] = useState('');
    const [ prevUrl, setPrevUrl ] = useState('null');
    const [ currentUrl, setCurrentUrl ] = useState('https://pokeapi.co/api/v2/pokemon');
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
    const [ totalCount, setTotalCount ] = useState('');
    const [ currentPage, setCurrentPage ] = useState('');
    const router = useRouter();
    const { page } = router.query;


    const handleClick = (page) => {
        router.push({
            pathname: router.pathname,
            page: { ...query, page },
        });
    };
    
    async function getServerSideProps({ query, queryOS }) {
        const { id } = {query};
        const { os } = {queryOS};
        const res = await fetch(`${baseUrl}`);
        const idRes = await fetch(`${baseUrl}/${id}`);
        const limit = 20;
        const offset = (page - 1) * limit;
        const url = `${baseUrl}?offset=${offset}&limit=${limit}`;
        const data = await idRes.json();
        const dataBase = await res.json();
        const dataOffset = await url.json();
        let tCount = dataBase.count;
        const totalPages = Math.ceil(tCount / limit);
        console.log(tCount);
        console.log(res.json);
        return {
            props: {
                data,
                dataBase: dataOffset.results,
                currentPage: page,
                totalPages: totalPages,
            },
        }
    };
    

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokeData(currentUrl);
            setLoading(false);
            console.log(response);
            setTotalCount(response.count)
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
        }    
        fetchData();
    }, [currentUrl])

    const next = async () => {
        setLoading(true);
        let data = await getAllPokeData(nextUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const prev = async () => {
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
            let pokeRecord = await getPokeData(pokemon.url);
            let pokeId = await getPokeId(pokemon.id);
            console.log(pokeRecord);
            console.log(data.i);
            return pokeRecord
        }))
        setPokeData(_pokemonData);
    }


    

    

        function gotoPrevPage() {
            setCurrentUrl(prevUrl)
        };

        function gotoNextPage() {
            setCurrentUrl(nextUrl)
        };

        const gotoPrev = () => {
            const previousPage = currentPage - 1;
            if (previousPage >= 1) {
                handleClick(previousPage);
            }
        ;}

        const gotoNext = () => {
            const nextPage = currentPage + 1;
            if (nextPage <= totalPages) {
                handleClick(nextPage);
            }
        };

        function cPage() {
            if (!gotoPrevPage) {
                setCurrentPage(1)
            } elseif ()
        }


        return (
            <>
                <div>
                    {loading ? <Image width="200px" height="209px" alt="loading" src="/loading/loading.gif" /> : (
                        <>
                            <div className="btn-div-border">
                                <Pagination 
                                    gotoPrevPage={prevUrl ? gotoPrevPage : null} 
                                    gotoNextPage={nextUrl ? gotoNextPage : null}
                                    totalCount={dataBase.count}
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    gotoNext={nextUrl ? gotoNext : null}
                                    gotoPrev={prevUrl ? gotoPrev: null}
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