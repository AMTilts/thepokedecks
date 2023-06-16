import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Context } from './Context';
// import Image from 'next/image'
import imageFile from '/images/sparkle.png'
import CanvasDraw from 'react-canvas-draw'
import SparkleImg from './SparkleImg';
import dynamic from 'next/dynamic';
import Gsap from 'gsap'
import ShinyRenderer from './ShinyRenderer';



const Canvas = ({height, width, imageS, changeShinySprite, sheight, swidth, scaled, image, sparkleImg}) => {
    

    // const sparkle = useRef(null);
    const sparkles = useRef(null);
    const [sparkling, setSparkling] = useState('sparkling-style');
    const [flash, setFlash] = useState('flash') ;// Meant to replace flash.style.transition and flash.style.opacity
    const [shinyAnim, setShinyAnim] = useState('shiny'); //Meant to replace shiny.style.display methods being passed into function. These are going to be style class names that get changed using useState.
    const [sparkleStyle, setSparkleStyle] = useState('sparkle-style'); // Style class names. Meant to replace SPar
    const ctx = useRef(null);
    const canvas = useRef(null)
    const sparkle = useRef(null)
    const context = useRef(null)
    const [sparkleImage, setSparkleImage ] = useState([])
    const [state, setState] = useState({
        imgSrc: "/images/sparkle.png",
      });
    const sparkleImge = useRef("/images/sparkle.png")
    const imageRef = useRef(null)
    const [imageState, setImageState] = useState(null)
    const [imager, setImager] = useState(null)
    const { particles, setParticles } = useState([]);
    var drawer;
  const particlesRef = useRef({"scale": 0, "radius": 0, "angle": 0});
    const newImage = useRef(null);
    const canvasRef = useRef(null);

    // const [sparkleImg, setSparkleImg] = useState({image})      
      
    const requestIdRef = useRef(null);      
      // function URLImage(props) {
      //   const [imageS, setImageS] = useState(null);
      // }
  
      // function noRef(ref) => {
      //   if (!ref) return
      //   canvas.current =  refgxct,lAd
      // }

      function addSparkles() {
        for (var i = 0; i < 8; i++) {
          particles = particlesRef.current;
          particles.concat({"scale": 1, "radius": 60, "angle": 45 * i});
      }
    }

      const drawSparkles = () => {
        const particles = particlesRef.current;
        for (let p of particles){
          var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
          var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
          var scaled = Math.max(32 * p.scale, 0);
          }
      }

      const stopDrawing = () => {
        clearInterval(drawer);
        setParticles([]);
      }
      
       useEffect(() => {
        

        }, []);

      const renderFrame = () => {
        newImage.onload()
        if (particles == null){
          for (var i = 0; i < 5; i++) {
            setTimeout(addSparkles, i * 100);
            }
          };
      };

      const tick = () => {
        // if (!canvasRef.current) {
        // console.log('CanvasRef Not loaded')
        // return;
        // };  
       
        renderFrame();
        setSparkleImgCSS('sparkleImg-after')
        newImage.onload();
        ShinyRenderer.call(ctx, x, y, radius, scale, imager, particlesRef.current)
        setInterval(drawSparkles, 50)
        setTimeout(stopDrawing, 1000);
        requestIdRef.current = requestAnimationFrame(tick);
      
      };

      useEffect(() => {
        if(!canvasRef.current) return;
        canvas = canvasRef.current;
        const ctx = canvasRef.current.getContext('2d')
        var newImage = new Image();
        newImage.src = '/images/sparkle.png';
        newImage.onload = () => {
          ctx.drawImage(newImage.current, 0, 0, 35, 35);
        }
        console.log(newImage.current)
        requestIdRef.current = requestAnimationFrame(tick);
        return () => {
          cancelAnimationFrame(requestIdRef.current);
          clearInterval()
        };
}, [newImage, canvas]);



// function startDraw(ctx, context, scaled, sparkleImage, shinyces) {
//       for (p of particles){
//       var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
//       var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
//         for (var i = 0; i < 5; i++) setTimeout(addSparkles, i * 100);
  //         drawer = setInterval(drawSparkles, 50);
  //         setTimeout(stopDrawing, 1000);
  //             }
  //     };








  // function stopDrawing(){
  //   clearInterval();
  //   particles.current([]);
  //   setSparkling(false);
  //   setSparkleImgCSS('sparkleImg-before')
  // }



      // useEffect(() => {
      //   const context = canvas.current.getContext('2d');
      //   const image = new Image();
      //   image.src = () => {
      //     dynamic(() => import('/images/sparkle.png'));
      //   }
      //   image.onload = () => {
      //     context.drawImage(image, 0, 0, 500, 500);
      //   }
        // const render () => {
        //   context.beginPath();
        //   context.arc(
        //     canvas.width / 2,
        //     canvas.height / 2,
        //     canvas.width / 2,
        //     0,
            // 2 * Math.PI
          // )
          // render (
          //   image.onLoad();
          //   )
        // }, []);

      // async function loadImage(URLImage) {
      //     imageRef.current = await new window.Image();
      //     let state = ()=> {
      //         dynamic(() => import('/images/sparkle.png'));
      //     }
      //     imageRef.current = (sparkle.current);
      //     handleLoad();

      //     imageRef.current.addEventListener("load", handleLoad)
      // }

      // const loadImage = async => {
      //   const image = new window.Image();
      //   image.src = dynamic(() => import('/images/sparkle.png'));
      //   image.crossOrigin = "Anonymous";
      //   imageRef.current = image;``
      // };
      
    //   const handleLoad = () => {
    //     setImage(imageRef.current);
    //   };
      
    //   useEffect(() => {
    //     loadImage();
    //     return () => {
    //       if (imageRef.current) {
    //         imageRef.removeEventListener("load", handleLoad);
    //       }
    //   };
    //   }, [imageS]);
      
 
    // console.log({imageS});
        
    // useEffect(() => {
    //     const ctx = canvas.current.getContext('2d')
    //     loadImage();
    // }, [startDraw(ctx, imageS)])
  
    // useEffect(() => {
    //     if( imageS && canvas) {
    //     const ctx = canvas.current.getContext('2d')
    //     startDraw(ctx, sparkleImage, canvas)
    //     } else {
    //         console.log('SParkle IMage and Canvas not coming through bro')
    //     }
    //   }, [startDraw])

   
    
    
    return (
            <canvas 
                ref={canvasRef.current}
                height={500} 
                width={500}
                imager={imager}


            />    
            /* <stage width="{window.innerWidth}" height="{window.innerHeight}">
                <layer>
                    <imageS 
                        imageS={imageS}
                        ref={imageRef.current}
                        src={'/images/sparkle.png'} 
                        width={35}
                        height={35}
                        // loadImage={loadImage()}
                    >
                    </imageS>
                </laye
            </stage> */
    );

    Canvas.propTypes = {
        drawSparkles: PropTypes.func.isRequired,
        addSparkles: PropTypes.func.isRequired,
        tick: PropTypes.func.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }
  };
export default Canvas;

