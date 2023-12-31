
import Head from 'next/head'

// function Pokeinfo({ data }) {
//     return (
//         <div>
//             {data.map(data => {
//                 <h1 key={data._id}>{ data.name }</h1>
//             })}
            
//             <p>Pokemon Info/Type</p>
//             <ul>
//                 <li>Type</li>
//             </ul>
//         </div>
//     )
// }

const defaultEndpoint = 'https://pokeapi.co/api/v2/pokemon'
const sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'


export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint)
    const data = await res.json()
    const img = ''
    //Pass datat to the page via props
    return {
        props: {
            data
        }
    }
}

export default function Pokeinfo({ data }) {
    const { results = [] } = data;
    return (
        <div className="container">
            <Head>
                <title>Pokedexicles</title>
                <link href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Pokedexicle Info
                </h1>

                <p className="description">
                    Fire Type
                </p>

                <ul className="grid">
                    {results && results.map((result => {
                        const { id, name, sprites} = result;

                        return (
                            <li key={id} name={name} className="card">
                                { id ? <a href={sprites.front_default}>
                                        <img src={sprites.front_default} alt={`${name}`}></img>
                                        <h3>{ name }</h3>
                                        </a> : <a href="#">Nada</a>
                                }
                            </li>
                        )
                    })
                    )};
                </ul>
            </main>
        </div>
    )
}