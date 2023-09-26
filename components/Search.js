import { useState, useEffect } from 'react';

function Search(currentItems) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            const response = await fetch(currentItems);
            const data = await response.json();
            setResults(data.results);
            setLoading(false);
        }

    const timeoutId = setTimeout(fetchData, 500);
    return () => clearTimeout(timeoutId);

    }, [query]);

    return (
        <div id="search-div">
            <input
                id="search-box"
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search..."
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {results.map(result => {
                    <li key={result.div}>{result.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Search;