import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const Sparkles = () => {
    const sparkleRef = useRef(null);
    const sparklesRef = useRef(null);
    const particles = useRef([]);
    let drawer;
    let buttonRef = useRef(null);
  
    const addSparkles = () => {
      for (let i = 0; i < 8; i++) {
        particles.current.push({ scale: 1, radius: 60, angle: 45 * i });
      }
    };
  
    const drawSparkles = () => {
      const ctx = sparklesRef.current.getContext("2d");
      ctx.clearRect(0, 0, 256, 256);
  
      for (const p of particles.current) {
        const x = 128 + p.radius * Math.cos((p.angle * Math.PI) / 180);
        const y = 128 + p.radius * Math.sin((p.angle * Math.PI) / 180);
        const scaled = Math.max(32 * p.scale, 0);
        ctx.drawImage(
          sparkleRef.current,
          x - scaled / 2,
          y - scaled / 2,
          scaled,
          scaled
        );
  
        if (p.scale > 0.6) p.scale -= 0.2;
        else p.scale -= 0.05;
        p.angle -= 5;
        p.radius += 5;
      }
    };
  
    const stopDrawing = () => {
      clearInterval(drawer);
      particles.current = [];
    };
  
    const shine = () => {
      if (!particles.current.length) {
        for (let i = 0; i < 5; i++) setTimeout(addSparkles, i * 100);
        drawer = setInterval(drawSparkles, 50);
        setTimeout(stopDrawing, 1000);
      }
    };
  
    useEffect(() => {
      buttonRef.current.addEventListener('click', shine);
  
      return () => {
        buttonRef.current.removeEventListener('click', shine);
      };
    }, []);
  
    return (
      <div>
        <canvas
          id="sparkles"
          ref={sparklesRef}
          width="256"
          height="256"
        ></canvas>
        <Image
          id="sparkle"
          ref={sparkleRef}
          src="../styles/"
          alt="Sparkle"
          style={{ display: 'none' }}
        />
        <button id="shinyButton" ref={buttonRef}>
          Shine
        </button>
      </div>
    );
  };
  
  export default Sparkles;
  