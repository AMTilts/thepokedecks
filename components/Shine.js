// import React from 'react';
// import PropTypes from 'prop-types';
// import {useRef, useEffect, useState} from'react';

//  const Shine = ({ drawImage, height, width }) => {
     
    
//             // SHINY ANIMATION //
//         const sparkle = useRef(null);
//         const sparkles = useRef(null);
//         const [particles, setParticles] = useRef([]);
//         const [sparkling, setSparkling] = useState('sparkling-style');
//         const [flash, setFlash] = useState('flash') ;// Meant to replace flash.style.transition and flash.style.opacity
//         const [shinyAnim, setShinyAnim] = useState('shiny'); //Meant to replace shiny.style.display methods being passed into function. These are going to be style class names that get changed using useState.
//         const [sparkleStyle, setSparkleStyle] = useState('sparkle-style'); // Style class names. Meant to replace SPar
//         const canvasRef = useRef(null);
//         const ctx = useRef(null);
        
        

        
//         useEffect(() => {
//                 const canvas = canvasRef.current;
//                 const ctx = canvas.getContext('2d');
//                 CanvasRenderingContext2D
//                 startDrawing(ctx);
//         }, []);
        
        
        
        
//         function addSparkles(){
//             for (var i = 0; i < 8; i++) particles.push({ "scale": 1, "radius": 60, "angle": 45 * i });
//         }
        

//         const initializeFrame = () => {
//             startDrawing(ctx);
//         };
        
//         const startDrawing = (canvasRef, ctx, canvas, e, sparkles, initializeFrame) => {
//             ctx.clearRect(0, 0, 256, 256);
//             for (p of particles){
//             var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
//             var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
//             var scaled = Math.max(32 * p.scale, 0);
//             ctxRef.current.drawImage(sparkle.current, x - scaled / 2, y - scaled / 2, scaled, scaled);
//             if (p.scale > 0.6) p.scale -= 0.2;
//             else p.scale -= 0.05;
//             p.angle -= 5;
//             p.radius += 5;
//             }
//         }

//         function reveal({Sparkle}){
//             setSparkling(true);
//             Sparkle.style.display = "none"; 
//             shiny.style.display = "block";
//             setTimeout(shineOn, 400);
//             flash.style.transition = "opacity 0.6";
//             flash.style.opacity = 0;
//         }
        
//         function stopDrawing(){
//             clearInterval(drawer);
//             setParticles([]);
//             setSparkling(false);
//         }
        
//         const drawer = () => {
//             setInterval(startDrawing, 50);
//         }
        

        
//         var drawImage = (ctx) => {
//             console.log('this is the canvas DOM element you want', ctx);
//             //Draw Balls
//         }

//         drawImage();
        
//             useEffect(() => {
//                 function changeShiny() {
//                     console.log(isShiny)
//                     console.log(isFront)
//                     if (isShiny != true && isFront != true && currentPosition.toString() === `${sprites.back_default}`) {
//                         defaultBack
//                         setIsShiny(true)
//                         setIsFront(false)
//                     };
//                     if (isShiny != false && isFront !=true && currentPosition.toString() === `${sprites.back_shiny}`) {
//                         shinyBack
//                         setIsShiny(false)
//                         setIsFront(false)
//                     };
//                     if (isShiny != false && isFront !=false && currentPosition.toString() === `${sprites.front_shiny}`) {
//                         shinyFront
//                         setIsShiny(false)
//                         setIsFront(true)
//                     }
//                     // if (currentPosition.toString() != `${sprites.front_default}` || `${sprites.back_default}`) changeDefault;
//                     // if (currentPosition.toString() === `${sprites.front_default}`) {
//                     else {
//                             defaultFront
//                             setIsShiny(true)
//                             setIsFront(true)
//                         };
//                 };
//             }, []);

//             return (
//                 <div>
//                     <canvas
//                         ref={ctx}
//                         onClick={(e) => {
//                             const canvas = canvasRef.current;
//                             const ctx = sparkles.getContext('2d');
//                             drawImage(ctx, { x: e.clientX, y: e.clientY });
//                         }}
//                     >
//                         <button className="shinyAnim" onClick={() => {shineOn}}>BIG BLACK BALLS</button>
//                     </canvas>
//                 </div>
//           )
//         };

//         export default Shine;