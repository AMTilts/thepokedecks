import React, { useEffect, useRef, useState } from 'react';

const Sparkles = (props, handleShinyButtonClick) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const sparkleRef = useRef(null);
  const [particlesState, setParticlesState] = useState([]);
  const {drawTime, fps = 30, establishContext, esablishedCanvasWidth, width='100%', shine, ...rest} = props
  const shineFunctionRef = useRef();


  const drawSparkles = (ctx) => {
    ctx.clearRect(0, 0, 300, 300);
    for (let p of particles.current) {
      const x = 150 + p.radius * Math.cos((p.angle * Math.PI) / 180);
      const y = 150 + p.radius * Math.sin((p.angle * Math.PI) / 180);
      const scaled = Math.max(32 * p.scale, 0);
      ctx.drawImage(sparkleRef.current, x - scaled / 2, y - scaled / 2, scaled, scaled);
      if (p.scale > 0.6) p.scale -= 0.2;
      else p.scale -= 0.05;
      p.angle -= 5;
      p.radius += 5;
    }
  };

  // function shine() {
  //   if (!particles.current.length) {
  //     for (let i = 0; i < 5; i++) setTimeout(addSparkles, i * 100);
  //     const drawerRef = setInterval(() => drawSparkles(canvasRef.current.getContext('2d')), 50);
  //     setTimeout(() => stopDrawing(drawerRef), 1000);
  //     console.log('shine processed');
  //   } else {
  //     console.log('not processed');
  //   }
  // };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameCount = 0;
    let AnimationFrameId, fpsInterval, now, then, elapsed;

    const render = () => {
      now = Date.now();
      elapsed = now - then;
      if (elapsed < fpsInterval) {
        then = now - (elapsed % fpsInterval)
        drawSparkles(ctx);
        requestAnimationFrame(render);
      }
    };

    const startRendering = (fps) => {
      fpsInterval = 1000 / fps;
      then = Date.now();
      render();
    };
    
    startRendering(fps);


    return () => {
      stopDrawing();
    };
  }, []);

  function addSparkles() {
    for (let i = 0; i < 8; i++) {
      particles.current.push({ scale: 1, radius: 60, angle: 45 * i });
      setParticlesState((prevState) => [...prevState, { scale: 1, radius: 60, angle: 45 * i }]);
    }
  }

  function stopDrawing(drawerRef) {
    clearInterval(drawerRef);
    particles.current = [];
    setParticlesState([]);
  }

  

  return (
    <div>
      <canvas
        ref={canvasRef}
        {...props}
        width={300}
        height={300}
      ></canvas>
      <img ref={sparkleRef} alt="sparkle" src="/sparkle.png" style={{ display: 'none' }} />
      <button id="shinyButton" onClick={() => {handleShinyButtonClick}} onMouseDown={e => e.stopPropagation({handleShinyButtonClick})}>
        Shiny Button
      </button>
      {/* <ShinyButton
          className="shinybutton"
          changeShinySprite={changeShinySprite}
      >
          <button className="shinybutton"><Image src="/images/shiny-reg21.svg" width={20} height={20} id="shinysvg" alt="Pokemon Shiny Icon (Looks like a star)" />
              {/* <p className="caption">SHINY</p> */}
      {/* </ShinyButton> */} 
    </div>
  );
};

export default Sparkles;
 