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
import Link from 'next/link';
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

    async function getServerSideProps({ query }) {
        const { id } = query;
        const res = await fetch(`${baseUrl}/${id}`);
        const data = await res.json();
        console.log(res.json);
        return {
            props: {
                data
            }
        }
    };
    

/*  useEffect(async () => {
        // setLoading(true)
        const res = await axios.get(baseUrl + currentUrl, {
                // cancelToken: new axios.CancelToken(c => cancel = c),
            }).then( res => {
                setPrevUrl(res.data.prev);
                setNextUrl(res.data.next);
                // setLoading(false),
                return axios.all(res.map(p => p.url));
            }).then(res => {
                setPokemonssssss(res.map(sp => sp.data));
                console.log(sp.data);
                return axios.all(res.map(sp => axios.get(sp.data.results[0])));
            }).then(res => {
                setNames(res.map(n => n.data.index.names));
                paddedIndex = {index + 1};
                setSprites(res.map(s => s.data.sprites.front_default));
                return axios.all(res.map(s => {
                })
            )
            })
    }, [currentUrl]); */
/* 
    async function getPokeData() {
        setLoading(true)
        let cancel
        await axios.get(currentUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)})
            .then(res => {
            setLoading(false);
            setPrevUrl(res.data.prev);
            setNextUrl(res.data.next);
            await loadingPokemon(response.results);
            setLoading(false);
/*             setPokemons(res.data.results.map((p, index) => {
                const trueIndex = (index + 1)
                const image = baseUrl + `${trueIndex}`;
                

                const imageCall = () => {
                        axios.get((baseUrl + `${trueIndex}`)
                            .then(res => {
                                setImageUrl(res.data.sprites.front_default)
                                
                                }
                        ))
                    }
                (imageCall);
                return {
                    ...p,
                    trueIndex,
                    imageCall
                }
            })) */
            // setPokeState(imageCall);
            // })
/*         s
        else return () => cancel();
    }  */


            // setPokemons(res.data.results.map((result, index) => {
            //     const trueIndex = (index + 1)
            //     const image = baseUrl + `${trueIndex}.png`;
            //     return {
            //         ...result,
            //         image,
            //         trueIndex
            //     };   
            //     }))
            

/*     async function getPokeSprites(pokemons) {
        let cancel
        await axios.get(currentUrl + `${trueIndex}`, {
            cancelToken: new axios.CancelToken(c => cancel = c)})
            .then(res => {
                setImageUrl(res.data.sprites.front_default)
                pokeImage = currentUrl + `${trueIndex}.png`;

                return {
                    pokeImage
                }
            })
        }
         */
 
/*     useEffect(() => {
        try {
            getPokeData();
        }catch(error) {
            console.log(error, error.message);
        }
        getPokeData();
    }, [currentUrl]); */

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokeData(currentUrl);
            setLoading(false);
            console.log(response);
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


    

    // let dataToRender;
    // if (pokeData) {
    //     dataToRender = pokeData.map(pokemon, i => {
    //         return <PokeCard key={i} pokemon={pokemon} />;
//     });  
    // }



    





                        /* setPokemonsssssss(res.data.results.map((result, index, url) => {
                        const paddedIndex = (index + 1);
                        return {
                            ...result,
                            index, ...url
                        };
                    })) */
                    // setImage(res.data.results.url);
                
 /*            () => {
                    // cancel(), 
                axios
                    .get('https://pokeapi.co/api/v2/pokemon/50')
                    .then((res => {
                        setImageUrl(res.data.sprites.front_default)
                        setImageUrls(res.data.map(( sprites, url) => {
                            const frontImage = (url)
                            return {
                                ...sprites,
                                url
                            }
                        }))
                    }
                ))
                
            } */
            
   

        // if(loading) return 'BRB, Taking a BIG, FAT DUMP....'

        function gotoPrevPage() {
            setCurrentUrl(prevUrl)
        };

        function gotoNextPage() {
            setCurrentUrl(nextUrl)
        };


        // function pokeDataProps( {pokemons, pokeState} ) {
        //     return (
        //         <div className="div-container">
        //              {/* <PokemonData pokemons={pokemons ? pokemons : console.log('tissue issue')} /> */}
        //             <ul>
        //                 {pokemons && pokemons.map((p, index) => {
        //                     <li key={indx.index}>
        //                         <h3>{p.name}</h3>
        //                         <a href={baseUrl + '/pokemon?id=' + (`${index.index} + 1`)}>
        //                         <img src={pokeState} alt={p.name} />
        //                         <button className="button-map">More Info</button>
        //                         </a>
        //                     </li>
        //                   })}
        //             </ul>
        //         </div>
        //     )
        // }

        


        // console.log(imageUrl);

        // console.log(pokemons);

        return (
            <>
                <div>
                    {loading ? <img src={loading} /> : (
                        <>
                            <div className="btn-div-border">
                                <Pagination 
                                    gotoPrevPage={prevUrl ? gotoPrevPage : null} 
                                    gotoNextPage={nextUrl ? gotoNextPage : null} 
                                />
                            </div>
                            <div className="div-container">
                                {pokeData && pokeData.map((p, i) => {
                                    return <Link key={i} href={`/pokemon/${p.name}`}><a><PokeCard key={i} p={p} /></a></Link>
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