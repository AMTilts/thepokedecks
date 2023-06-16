// import React, { useRef, useEffect, useState } from 'react'
// import PropTypes from 'prop-types';
// import { Context } from './Context';
// import Sparkle from '../images/sparkle.png'


// const Canvas = ({startDraw, height, width, sheight, swidth, sparkleImg, scaled}) => {
    

//     // const sparkle = useRef(null);
//     const sparkles = useRef(null);
//     const [sparkling, setSparkling] = useState('sparkling-style');
//     const [flash, setFlash] = useState('flash') ;// Meant to replace flash.style.transition and flash.style.opacity
//     const [shinyAnim, setShinyAnim] = useState('shiny'); //Meant to replace shiny.style.display methods being passed into function. These are going to be style class names that get changed using useState.
//     const [sparkleStyle, setSparkleStyle] = useState('sparkle-style'); // Style class names. Meant to replace SPar
//     const ctx = useRef(null);
//     const canvas = useRef(null)
//     const sparkle = useRef(null)
//     const context = useRef(null)
//     var sparkleImg = useRef(null);



//     useEffect(() => {
//         var sparkleImg = sparkle.current = new Image()
        
        
//         sparkleImg.src="../images/sparkle.png"
//         sparkleImg.onLoad = () => {
//             ctx.drawImage(sparkleImg, x - scaled / 2, y - scaled / 2, scaled, scaled);
//         }

//         ctx.clearRect(0, 0, 100, 100)
  
  
//         //Our draw come here
        
//         startDraw(ctx)
//       }, [startDraw])

   
    
    
//     return (

//         <sparkleImg
//             ref={sparkleImg}
//             context={context}
//             height={sheight}
//             width={swidth}
//             id={sparkleImg}
//          />
//     );
// }

//     Canvas.propTypes = {
//         startDraw: PropTypes.func.isRequired,
//         height: PropTypes.number.isRequired,
//         width: PropTypes.number.isRequired,
//     }
// export default Canvas;