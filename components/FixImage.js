// import React, {useState} from 'react'
// import Image from 'next/image';


// export default function FixImage({image, name}) {

//     const [orgSize, setOrgSize] = useState({ width: 0, height: 0});

//     const handleImageLoad = (event) => {
//         const imageWidth = event.target.width;
//         const imageHeight = event.target.height;

//         setOrgSize({ width: imageWidth, height: imageHeight});
//     };


//     return (
//         <div className="card-img-outer">
//             {image ? ( // Check if 'image' is not null
//                 <Image
//                     id="card-img"
//                     src={image}
//                     data-name="card-img"
//                     alt={name}
//                     className="card-img"
//                     onLoad={handleImageLoad}
//                     width = {orgSize.width}
//                     height = {orgSize.height}
//                 />
//                 ) : (
//                 // If 'image' is null, render a placeholder image or handle it accordingly
//                     <img src="/default-image.jpg" alt="Default Image" />
//             )}
//         </div>
//     )
// }