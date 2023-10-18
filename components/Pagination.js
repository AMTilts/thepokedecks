import React, { useState, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import PokeCard from './PokeCard';
import Probe from 'probe-image-size';
import NextImage from 'next/image'
import paginationStyles from '../style/paginationStyles.module.css'
import Search from './Search'



export default function Pagination(search) {
  const [currentItems, setCurrentItems] = useState([]);
  const pogoAPIUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';
  const itemsPerPage = 40;  

  const [itemOffset, setItmOffset] = useState(0); // Add this line to define itemOffset state
  const imageRef = useRef(null);
  const [imgArray, setImgArray] = useState([]);
  const [imgWidth, setImgWidth] = useState([]);
  const [imgHeight, setImgHeight] = useState([]);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([])
  const pageCount = Math.ceil(data.length / itemsPerPage);


  
 

  const fetchPogo = async () => {
    try {
      const response = await fetch(pogoAPIUrl);
      const fetchedData = await response.json();
      setData(fetchedData);
      const startOffset = itemOffset;
      const endOffset = itemOffset + itemsPerPage;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      await setCurrentItems(data.slice(startOffset, endOffset));
      await console.log(currentItems.slice(startOffset,endOffset))
      await setImgArray(data.assets.image)
      const fImg = imageRef.current;
      const search = async (e) => {
            e.preventDefault();

            const filteredData = Array.isArray(data.filter(pokemon => pokemon.names.English.toLowerCase().includes(query.toLowerCase())));
      }
      
      setCurrentItems(filteredData);
      
      return {
        props: {
         fImg,
         search,
         filteredData
        //  filteredData;
      }}
     } catch (error) {
      console.error('Error fetching data:', error);
    }



  
 
  
  
    // const res = await fetch(`${pogoAPIUrl}/search?query=${encodeURIComponent(query)}`);
    // const data = await res.json();
  
    // Ensure that this function/component returns JSX
    return (
      <>
        {data ? data.map((p) => (
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
        )) : null}
      </>
    );
  };
  
  

   

   useEffect(() => {
    fetchPogo();
  }, [itemOffset, data]); // Add data as a dependency for useEffect

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setCurrentItems(data.slice(newOffset, newOffset + itemsPerPage));
  };
  // console.log(currentItems.slice(itemOffset, endOffset));


  return (
    <>
      <div>
        <div className="btn-div-border">
          <div id="search">
            <Search 
              onChange={search}
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
          {currentItems && currentItems.map((p, fImg ) => (
              <div key={p.dexNr}>
                <PokeCard
                  key={p.dexNr}
                  id={p.dexNr}
                  name={p.names.English}
                  image={p.assets?.image}
                //   image={p.assets ? p.assets.image : ''} // Use a default value if 'p.assets' is null or undefined
                  type={p.primaryType.names.English}
                  p={p.primaryType.names.English}
                  currentItems={currentItems}
                  // imgWidth={pWidth ? pWidth : ''}
                  // imgHeight={pHeight ? pHeight : ''} // Pass the individual data object instead of lowerCaseData function
                />
              </div>
          ))}
        </div>
      </div>
    </>
  );
}
