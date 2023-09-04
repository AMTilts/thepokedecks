import React, { useState, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import PokeCard from './PokeCard';
import Probe from 'probe-image-size';
import NextImage from 'next/image'



export default function Pagination({ data, dexNr, image, assetForms, dataState, img }) {
  const [currentItems, setCurrentItems] = useState([]);
  const currentUrl = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';
  const itemsPerPage = 20;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const [itemOffset, setItemOffset] = useState(0); // Add this line to define itemOffset state
  const imageRef = useRef(null);

  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [imageDimensions, setImageDimensions] = useState(null);
  const [type, setType] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [data2, setData2] = useState([]);
  const [imgg, setImgg] = useState('');
  const [imageProps, setImageProps] = useState([]);
  const [imgProp, setImgProp]	= useState('');
  const [shinyImgProp, setShinyImgProp] = useState('');
  const [singleImage, setSingleImage]	= useState(null);
  const [width, setWidth]	= useState(0);
  const [height, setHeight] = useState(0);
  const [imgArray, setImgArray] = useState([]);
  const [allImgs, setAllImgs] = useState([]);

//   async function getServerSideProps() {
// 	const response = await fetch('https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json');
// 	const fData = await response.json();
// 	setData2(fData);
// 	const assetImg = (`${fData.assetForms[0].image}`);
// 	console.log(fData);
// 	const imgs = await fData.assetForms.map((assetForm, index) => [{
// 		url: `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/Addressable%20Assets/pm${dexNr}.icon.png`,
// 		url: assetForm[0].image
// 		}]);
// 	const shinyImgs = await fData.map((dexNr) => [{
// 	url: `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/Addressable%20Assets/pm${dexNr}.s.icon.png`
// 	}]);
// 	setImageProps(fData.map((fDat, dexNr) => [{
// 		dexNr:'https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/Addressable%20Assets/pm1.cJAN_2020_NOEVOLVE.icon.png'
// 	}]))
// 	setImgArray(fData.assetForms.map((index, image, shinyImage) => [
// 		{index: `${image}`},
// 		{index: `${shinyImage}`}
// 	]));
// 		const imgArrayWithSizes = await Promise.all(
// 			imgArray.map((img) => {
// 				const singleImg = img;
// 				setSingleImage(singleImg);
// 				singleImg.size = probe(img.url);
// 				setWidth(img.width);
// 				setHeight(img.height);

// 				return {
// 					props: {
// 						singleImg
// 					}
// 				}
// 			})
// 		)
// 	const imgsWithSizes = await Promise.all(
// 		imgs,
// 		imgs.map((img) => {
// 			const imgWithSize = img;
// 			setImgProp(imgWithSize);
// 			imgWithSize.size = probe(img.url);
// 			setImgWidth(img.width);
// 			setImgHeight(img.height);
// 			console.log(img)

// 			return {
// 				props: {
// 					img: imgWithSize,
// 					imgWithSize
// 				},
// 			};
// 		})
// 		);
// 	const shinyImgsWithSizes = await Promise.all(
// 		shinyImgs,
// 		shinyImgs.map((shinyImg) => {
// 			const shinyImgWithSize = shinyImg;
// 			setShinyImgProp(shinyImgWithSize);
// 			shinyImgWithSize.size = probe(shinyImg.url);
// 			console.log(shinyImg)

// 			return {
// 				props: {
// 					shinyImg: shinyImgWithSize,
// 					shinyImgWithSize
// 				}
// 			}
					
// 	})
// 	);
// 	return {
// 		props: {
// 			fData,
// 			images: imgsWithSizes,
// 			shinyImages: shinyImgsWithSizes,
// 			assetImg,
// 			imgs: imgsWithSizes,
// 			imgs2: imgArrayWithSizes,
// 		},
// 	}
// 	};

	// useEffect(() => {
	// 	async function fetchData() {
	// 		let response = await fetch(currentUrl);
	// 		await loadingPokemon(response.results);
	// 	}    
	// 	fetchData();
	// }, [currentUrl])

	 
console.log(image, assetForms);



	// const loadingPokemon = async(fData) => {
	// 	let _pokemonData = await Promise.all(data.map(async (pokemon, assetForms, dexNr, id) => {
	// 		let img2 = await  (`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/Addressable%20Assets/pm${dexNr}.icon.png`);
	// 		setImgg(`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/Addressable%20Assets/pm${dexNr}.icon.png`);
	// 		let iUrl = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/Addressable%20Assets/pm${dexNr}.icon.png`;
	// 		let name = await pokemon.id;
	// 		setAllImgs(await fData && fData.assetForms.map((assetForm) => { return [{
	// 			url: `${assetForm && assetForm[0].image}`
	// 		}]}));
	// 	}))
	// 	setPokemonData(_pokemonData);
	// 	console.log(imgg)
		

		
	// 	return {
	// 		name,
	// 		type,
	// 		allImgs,
	// 		props: {
	// 		// imageWithSize: {}, // You need to provide imageWithSize or remove it from the destructuring
	// 			data,
	// 		}
	// }
	// 	};
  

  const fetchPogo = async (data) => {
    try {
      const startOffset = itemOffset;
      const endOffset = itemOffset + itemsPerPage;
      await setCurrentItems(data.slice(startOffset, endOffset));
      await console.log(currentItems.slice(startOffset,endOffset));
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
              id="pagination"
            />
          </div>
        </div>
        {/* <div className="div-container">
			{data.assetForms?.map((index, image) => {
				<div>
					<PokeCard
						key={dexNr}
						imgArray={imgArray}
						width2={width}
						height2={height}
						singleImage={singleImage}
						image={image}
						url={index}
						img={img}
						images={images}
						imageUrl={imageWithSize}
						dexNr={dexNr}
						assetImg={assetImg}
						type={type}
						p={p}
						width={imgWidth}
						height={imgHeight}
						imgProp={imgProp}
						shinyImgProp={shinyImgProp}
					/>
				</div>
			})}
        </div> */}
      </div>
    </>
  );
}
