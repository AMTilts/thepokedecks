import React, { useState, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import PokeCard from './PokeCard';
import Probe from 'probe-image-size';
import NextImage from 'next/image'
import paginationStyles from '../style/paginationStyles.module.css'



export default function Pagination({ data }) {
  const [currentItems, setCurrentItems] = useState([]);
  const pogoAPIUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';
  const itemsPerPage = 40;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const [itemOffset, setItemOffset] = useState(0); // Add this line to define itemOffset state
  const imageRef = useRef(null);
  const [imgArray, setImgArray] = useState([]);
  const [imgWidth, setImgWidth] = useState([]);
  const [imgHeight, setImgHeight] = useState([]);

  


  const fetchPogo = async () => {
    try {
      const startOffset = itemOffset;
      const endOffset = itemOffset + itemsPerPage;
      await setCurrentItems(data.slice(startOffset, endOffset));
      await console.log(currentItems.slice(startOffset,endOffset))
      await setImgArray(data.assets.image)
      const fImg = imageRef.current;
      return {
        props: {
          fImg
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    
 


   

   useEffect(() => {
    fetchPogo();
  }, [itemOffset, data]); // Add data as a dependency for useEffect

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  // console.log(currentItems.slice(itemOffset, endOffset));


  return (
    <>
      <div>
        <div className="btn-div-border">
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
