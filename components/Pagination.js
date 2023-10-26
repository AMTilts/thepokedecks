import React, { useState, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import PokeCard from './PokeCard';
import Probe from 'probe-image-size';
import NextImage from 'next/image'
import paginationStyles from '../style/paginationStyles.module.css'
import Search from './Search'



export default function Pagination() {
  const [currentItems, setCurrentItems] = useState([]);
  const pogoAPIUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';
  const itemsPerPage = 40;  

  const [itemOffset, setItmOffset] = useState(0); // Add this line to define itemOffset state
  const [query, setQuery] = useState('');
  const [data, setData] = useState([])
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const [searchResults, setSearchResults] = useState([]);
  const [unfilteredItems, setUnfilteredItems] = useState([]);
   

  const fetchPogo = async () => {
    const pogoAPIUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';
      try {
        const response = await fetch(pogoAPIUrl);
        const fetchedData = await response.json();
        setData(fetchedData);
        setUnfilteredItems(fetchedData);
      } catch (error) {
          console.error('Error fetching data:', error);
          }
        };

    useEffect(() => {
      fetchPogo();    
    }, []); // Fetch data when component mounts

    useEffect((fetchedData) => {
      const filteredData = fetchedData.filter(pokemon => pokemon.names.English.toLowerCase().includes(query.toLowerCase()));
      setCurrentItems(filteredData);
    }, [data, query]); // Update currentItems when data⁴



  const handleSearch = async (e) => {
    e.preventDefault();

    const filteredData = Array.isArray(fetchedData.filter(pokemon => pokemon.names.English.toLowerCase().includes(query.toLowerCase())));
    setSearchResults(filteredData);
    setCurrentItems(filteredData);
  }
   

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setCurrentItems(dunfilteredItems.slice(newOffset, newOffset + itemsPerPage));
  };


  return (
    <>
      <div>
        <div className="btn-div-border">
          <div id="search">
            <Search 
              onChange={handleSearch}
              onSearch={setQuery}
              currentItems={currentItems}
            />
          </div>
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
        </div>
        <div className="div-container">
          {currentItems.map((p) => (
            <div key={p.dexNr}>
              <PokeCard
                key={p.dexNr}
                id={p.dexNr}
                name={p.names.English}
                image={p.assets?.image}
                type={p.primaryType.names.English}
                p={p.primaryType.names.English}
              />
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
}
