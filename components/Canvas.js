// import React, {useRef, useState, useEffect} from 'react';
// import imageSpark from '../images/sparkle.png';

// const Canvas = (props) => {
//     const canvasRef = useRef(null);
//     const [context, setContext] = useState(null);
//     const imageSparkRef = useRef(null);
//     const imageSparkCanvasRef = useRef(null);
//     const [imageSparkParticles, setImageSparkParticles] = useState([]);
//     const [drawer, setDrawer] = useState(null);

//     function addSparkles() {
//         for (var i = 0; i < 8; i++) setImageSparkParticles(imageSparkParticles => [...imageSparkParticles({"scale": 1, "radius": 60, "angle": 45 * i})])
//     }



//     const drawSparkles = (frameCount) => {
//         context.clearRect(0, 0, 256, 256);
//         for (p of imageSparkParticles) {
//             var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
//             var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
//             var scaled = Math.max(32 * p.scale, 0);
//             context.drawImage(imageSpark, x - scaled / 2, y - scaled / 2, scaled, scaled);
//             if (p.scale > 0.6) p.scale -= 0.2;
//             else p.scale -= 0.05;
//             p.angle -= 5;
//             p.radius -= 5;
//         }
//     }

//     function stopDrawing(){
//         clearInterval(drawer);
//         particles = [];
//       sparkling = false;
//     }
    

//     useEffect(() => {
//         //value other than null or undefined
//         if (canvasRef.current) {
//             const canvas = canvasRef.current;
//             const ctx = canvas.getContext('2d');
//             setContext(ctx);
//         }
//     }, []);

//     useEffect(() => {
//         let frameCount = 0;
//         let animationFrameId;

//         //Check if mounted.

//         if (context) {
//             //Drawing
//             const render = () => {
//                 if (frameCount < 50) 
//                 frameCount++;
//                 drawSparkles(frameCount);
//                 animationFrameId = window.requestAnimationFrame(render);
//                 }
//             };
//             render();
//         },
//         return() => {
//             window.cancelAnimationFrame(animationFrameId);
//         };
//     }, [drawSparkles, context]);

//     useEffect(() => {
//         let intervalCount = 0;
//         let animationFrameId;
//         let drawer;

//         if (context) {
//             const shine = () => {
//                 if (!imageSparkParticles.length) {
//                     for (var i = 0; i < 5; i++) setTimeout(addSparkles, i * 100);
//                     if (intervalCount < 50) {
//                         intervalCount++;
//                     } else {
//                         drawSparkles;
//                         setTimeout(stopDrawing, 1000);
//                     }
                    
//                     }
//         }
//         }
//     })

//     return <canvas {...props} />;
// };

// export default Canvas;