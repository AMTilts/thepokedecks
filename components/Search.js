import { useState, useEffect } from 'react';

function Search({ currentItems, onSearch }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;

        const filterData = currentItems.filter(pokemon => pokemon.names.English.toLowerCase().includes(query.toLowerCase()));
        setResults(filterData);
        }, [query, currentItems]);

                               
    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }
    

    return (
        <div id="search-div">
            <input
                id="search-box"
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            {/* <ul>
                {results.map(result => (
                    <li key={result.dexNr}>{result.names.English}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default Search;