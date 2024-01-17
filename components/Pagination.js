import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import paginationStyles from '../style/paginationStyles.module.css';
import PokeCard from './PokeCard';
import Search from './Search';



export default function Pagination({ filteredData }) {
  const [currentItems, setCurrentItems] = useState([]);
  const pogoAPIUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';
  const itemsPerPage = 30;  

  const [itemOffset, setItemOffset] = useState(0); // Add this line to define itemOffset state
  const [query, setQuery] = useState('');
  const [data, setData] = useState([])
  // const pageCount = Math.ceil(data.length / itemsPerPage);
  const [pageCount, setPageCount] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [unfilteredItems, setUnfilteredItems] = useState([]);
  const [pokesImage, setPokesImage] = useState('');
  const [shinyImage, setShinyImage] = useState('');
  const [pImage, setPImage] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const primaryTypeName = data?.primaryType?.names?.English;
  const secondaryTypeName = data?.secondaryType?.names?.English;

  const fetchPogo = async () => {
    const pogoAPIUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';
      try {
        const response = await fetch(pogoAPIUrl);
        const fetchedData = await response.json();
        setPokemons(fetchedData);
        setData(fetchedData);
        setUnfilteredItems(fetchedData);
        setCurrentItems(fetchedData.slice(0, itemsPerPage));
        setPageCount(Math.ceil(fetchedData.length / itemsPerPage));
        console.log()
      } catch (error) {
          console.error('Error fetching data:', error);
          }

          return {
            fetchedData: {
              assets: {
              }
            }
          }
        };

    useEffect(() => {
      fetchPogo();    
    }, []); // Fetch data when component mount

    
    useEffect(() => {
      const filteredData = data.filter(pokemon =>
        pokemon.names && 
        pokemon.names.English && 
        pokemon.names.English.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredData);
      setPageCount(Math.ceil(filteredData.length / itemsPerPage));
      setItemOffset(0);
   
    }, [data, query]);




  const handleSearch = async (e) => {
    e.preventDefault();

    const filteredData = Array.isArray(fetchedData.filter(pokemon => pokemon.names.English.toLowerCase().includes(query.toLowerCase())));
    setSearchResults(filteredData);
    // setCurrentItems(filteredData);
  }
   

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setCurrentItems(searchResults.slice(newOffset, newOffset + itemsPerPage));
  };

  useEffect(() => {
    //Update current items when search results changes
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(searchResults.slice(itemOffset, endOffset));
  }, [searchResults, itemOffset]);

  console.log(filteredData);

  function getTypeColor(type) {
    const typeColors = {
      'Bug': '#9AC11A',
      'Dark': '#705848',
      'Dragon': '#6A2EF9',
      'Electric': '#FFD700',
      'Fairy': '#FF7B9C',
      'Fighting': '#D11412',
      'Fire': '#FF6F00',
      'Flying': '#8F7AFA',
      'Ghost': '#7D4AB0',
      'Grass': '#67D821',
      'Ground': '#E5B755',
      'Ice': '#7BDADA',
      'Normal': '#9C9C68',
      'Poison': '#B300B3',
      'Psychic': '#FF4664',
      'Rock': '#B89F24',
      'Steel': '#A9A9C5',
      'Water': '#4A7AFA'
    };
    
    return typeColors[type] || '#FFFFFF';
  }

  function getDarkColor(type) {
    const darkColors = {
      'Bug': '#637D0A',
      'Dark': '#49392F',
      'Dragon': '#460EA1',
      'Electric': '#AF850F',
      'Fairy': '#A44D64',
      'Fighting': '#861815',
      'Fire': '#A13F00',
      'Flying': '#604A9F',
      'Ghost': '#412465',
      'Grass': '#3C7E25',
      'Ground': '#8F7533',
      'Ice': '#4D8D8D',
      'Normal': '#5F5F37',
      'Poison': '#662266',
      'Psychic': '#C8003C',
      'Rock': '#766117',
      'Steel': '#616178',
      'Water': '#2D4494'
    };

    return darkColors[type];
  }
  return (
    <>
      <div style={{display: 'inlineFlex', flexDirection: 'row', justifyContent: 'center'}}>
        <div className="paginate-container">
          
          <div id="pagination">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName={paginationStyles.container}
              pageClassName={paginationStyles.page}
              activeClassName={paginationStyles.active}
              disabledClassName={paginationStyles.disabled}
              inactiveClassName="paginate-inactive"
              forcePage={currentItems}
              id="pagination"
            />
          </div>
          <div id="search">
              <Search 
                onChange={handleSearch}
                onSearch={setQuery}
                // currentItems={currentItems}
              />
        </div>
        </div>
        <div className="div-container" style={{paddingTop: '10px'}}>
          {currentItems.length > 0 ? (
            currentItems.map((p) => (
              <PokeCard
                key={p.dexNr}
                id={p.dexNr}
                name={p.names.English}
                image={p.assets?.image}
                shinyImage={p.assets?.shinyImage}
                type={p.primaryType.names.English}
                secondaryType={p.secondaryType?.names.English}
                p={p}
                primaryColor={getTypeColor(p.primaryType.names.English)}
                secondaryColor={getTypeColor(p.secondaryType?.names.English)}
                primaryDarkColor={getDarkColor(p.primaryType.names.English)}
              />
            ))
          ) : (
            <h1 style={{fontStyle: 'bold', fontSize: '30px'}}>No Pokemon found</h1>
          )}
        </div>
        <div className="paginate-container">
          <div id="pagination">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName={paginationStyles.container}
              pageClassName={paginationStyles.page}
              activeClassName={paginationStyles.active}
              disabledClassName={paginationStyles.disabled}
              inactiveClassName="paginate-inactive"
              forcePage={currentItems}
              id="pagination"
            />
          </div>
          <div id="search">
              <Search 
                onChange={handleSearch}
                onSearch={setQuery}
                // currentItems={currentItems}
              />
          </div>
      </div>
      </div>
    </>
  );
}
