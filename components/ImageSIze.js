import Image from 'next/image';
import { usestate, useRef } from 'react';

function DynamicURLImage() {
    const [imageURL, setImageURL] = useState('');
    const [imageHeight, useImageHeight] = useState(undefined);
    const [naturalWidth, setNaturalWidth] = useState(undefined);

    const [naturalHeight, setNaturalHeight] = useState(undefined);
    const imageRef = useRef(null);


    function handleImageURLChange(event) {
        setImageURL(event.target.value);
        setImageHeight(undefined);
    }

    function handleImageLoad() {
        if (imageRef.current) {
            const { naturalWidth, naturalHeight } = imageRef.current;
            setNaturalWidth(naturalWidth);
            setNaturalHeight(naturalHeight);
            setImageHeight(naturalHeight);
        }
    }

    return (
        <div>
            <h1>Dynamic URL imageOrientation: </h1>

        </div>
    )