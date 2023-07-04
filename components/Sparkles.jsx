import React, { useEffect, useRef, useState } from 'react';

const Sparkles = ({ isShinyData, changeShinySprite }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const sparkleRef = useRef(null);
  const [particlesState, setParticlesState] = useState([]);
  const [frameCount, setFrameCount] = useState(0);
  const [trackShiny, setTrackShiny] = useState(false);

  const drawSparkles = (ctx) => {
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles.current) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radiusMultiplier = 2;

      const x = centerX + p.radius * radiusMultiplier * Math.cos((p.angle * Math.PI) / 180);
      const y = centerY + p.radius * radiusMultiplier * Math.sin((p.angle * Math.PI) / 180);
      const scaled = Math.max(32 * p.scale, 0);
      ctx.drawImage(sparkleRef.current, x - scaled / 2, y - scaled / 2, scaled, scaled);
      if (p.scale > 0.6) p.scale -= 0.2;
      else p.scale -= 0.05;
      p.angle -= 5;
      p.radius += 5;
    }
  };

  function shine() {
    if (!particles.current.length) {
      for (let i = 0; i < 8; i++) setTimeout(addSparkles, i * 200);
      const drawerRef = setInterval(() => drawSparkles(canvasRef.current.getContext('2d')), 1500); // Adjust this interval duration
      setTimeout(() => stopDrawing(drawerRef), 5000);
      console.log('shine processed');
    } else {
      console.log('not processed');
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const render = () => {
      requestAnimationFrame(render);
      drawSparkles(ctx);
    };

    const startRendering = () => {
      render();
    };

    startRendering();

    return () => {
      stopDrawing();
    };
  }, []);

  const addSparkles = () => {
    for (let i = 0; i < 8; i++) {
      particles.current.push({ scale: 2, radius: 60, angle: 45 * i });
      setParticlesState((prevState) => [...prevState, { scale: 1, radius: 60, angle: 45 * i }]);
    }
  };

  function stopDrawing(drawerRef) {
    clearInterval(drawerRef);
    particles.current = [];
    setParticlesState([]);
  }

  const handleShineButtonClick = () => {
    if (trackShiny === true) {
      console.log('not shiny');
      setTrackShiny(false)
    } else if (trackShiny === false) {
      changeShinySprite();
      setTimeout(shine(), 25000);
      setTrackShiny(true)
    } console.log('err err what dat who dere?')
  };

  return (
    <div>
      <canvas
        id="shinyCanvasCSS"
        ref={canvasRef}
        width={500}
        height={500}
      ></canvas>
        <img ref={sparkleRef} alt="sparkle" src="/sparkle.png" width={40} height={40} style={{ display: 'none' }} />
      <button id="shinyButtonCanvas" onClick={handleShineButtonClick}>Shiny</button>
    </div>
  );
};

export default Sparkles;
