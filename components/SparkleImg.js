import React, { useEffect, useState, useRef } from 'react';
import useImage from 'use-image';
import Image from 'next/image'

// const SparkleeImagee = () => {
//   const {image} = useImage('/images/sparkle.png');
//   return <Image image={image} />;
// }


const URL = ({ imageFile }) => {
  const imageRef = useRef(null)
  const [imageState, setImageState] = useState(null)


function URLImage(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
      loadImage();
  }, [props.src]);
};

const loadImage = () => {
  const image = new window.Image();
  image.src = props.src;
  image.crossOrigin = "Anonymous";
  imageRef.current = image;
  imageRef.current.addEventListener("load", handleLoad)
};

const handleLoad = () => {
  setImage(imageRef.current);
};

useEffect(() => {
  loadImage();
  return () => {
    if (imageRef.current) {
      imageRef.current.removeEventListener("load", handleLoad);
    }
};
}, []);

//   image.onload = () => {
//       setImage(image);
//   };
// }

  return (
    <stage width="{window.innerWidth}" height="{window.innerHeight}">
        <layer>
            <Image 
              image={imageRef.current}
              ref={imageRef.current}
              src={'/images/sparkle.png'} 
              x={props.x}
              y={props.y}
              loadImage={loadImage()}
            >
            </Image>
        </layer>
    </stage>
  );
}