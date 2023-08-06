// import React, { useState, useEffect } from 'react';
// import Paginate from 'react-paginate';
// import useSWR from 'swr';
// import PokeCard from './PokeCard'
// export default function Pagination({ gotoNextPage, gotoPrevPage, pokemon, data, count }) {
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   const itemsPerPage = 20;
//   const [itemOffset, setItemOffset] = useState(0);
//   const [currentUrl, setCurrentUrl] = useState(
//     'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/id'
//   );
//   const pogoAPIUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';
//   const [pokeData, setPokeData] = useState([]);
//   const [countOffset, setCountOffset] = useState(0);
//   const pokeUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/id/';
//   const fetcher = (...args) => {
//     fetch(...args).then((res) => res.json());
//   };
//   const fetchPogo = async () => {
//     const res = await fetch(pogoAPIUrl);
//     const data = await res.json();
//     setPokeData(data);
//     const count = data.length;
//     const pageCount = Math.ceil(count / itemsPerPage);
//     setPageCount(pageCount);
//     const startOffset = itemOffset;
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrentItems(data.slice(startOffset, endOffset));
//   };
//   useEffect(() => {
//     fetchPogo();
//   }, [itemOffset]);
//   const handlePageClick = (event) => {
//     const newOffset = event.selected * itemsPerPage;
//     console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
//     setItemOffset(newOffset);
//   };
//   return (
//         </div>
//         ));
// }
"use strict";