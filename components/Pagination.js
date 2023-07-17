import React, {useState, useEffect} from 'react';
import Paginate from 'react-paginate';

export default function Pagination({ gotoNextPage, gotoPrevPage, pokeData }) {
    const [ currentItems, setCurrentItems ] = useState(null);
    const [ pageCount, setPageCount ] = useState(0);
    const itemsPerPage = 20;
    const [ itemOffset, setItemOffset] = useState(0);
    const currentCount = count.slice(countOffset, endOffset);

    async function PokeCount({ currentItems }) {
        return (
            <>
                {currentCount && 
                    currentCount.map((count, id) => (
                        <div key={id}>
                            <h3>Count #{count}</h3> 
                        </div>
                    ))}
            </>
        );
    }
    
    function PaginatedCount({ countPerPage })   {
        const [countOffset, setCountOffset] = useState(0);
        const [ pokeData, setPokeData ] = useState([])
        const endOffset = countOffset + countPerPage;
        console.log(`Loading count from ${countOffset} to ${endOffset}`);
        const currentCount = count.slice(countOffset, endOffset);
        const pageCount = Math.cell(count.length / countPerPage);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * countPerPage) % count.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setCountOffset(newOffset);
        };
    };

    useEffect(() => {
        
        const endOffset = itemOffset + itemsPerPage;
        console.log(`loading items from ${itemOffset} to ${endOffset}`)
            if (pokeData) {
                setCurrentItems(pokeData.slice(itemOffset, itemOffset + 20));
                setPageCount(Math.ceil(pokeData.length / 20));
            }
    }, [itemOffset, pokeData])

    
    return (

        <>
            <div>
                <PokeCount currentCount={currentCount} />
                <PaginatedCount
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>  
            <div className="btn-div">
                <div className="btn-div2">
                    {gotoPrevPage && <button className="btn-prev-wrap"><button className="btn-prev" onClick={gotoPrevPage}>PREV </button></button>}
                    {gotoNextPage && <button className="btn-next-wrap"><button className="btn-next" onClick={gotoNextPage}>NEXT</button></button>}
                </div>
            </div>
        </>
    )
};