import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import PropTypes from 'prop-types'
import RenderResult from 'next/dist/server/render-result';

const Sparkles = (props) => {
    const sparkleRef = useRef(null);
    const sparklesRef = useRef(null);
    const particles = useRef([]);
    const [context, setContext] = useState(null);
    let drawer;
    let buttonRef = useRef(null);

    const {drawSparkles, ...rest} = props


    useEffect(() => {
        //value other than null or undefined
        if (sparklesRef.current) {
            const canvas = sparklesRef.current;
            const ctx = canvas.getContext('2d');
            setContext(ctx);
        }
        const render = () => {
          const particles = particlesRef.current;
          drawSparkles(context)
          animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }

        
    }, [drawSparkles]);



  useEffect((shine) => {
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
          context={context}
          {...rest}
        ></canvas>
        <Image
          id="sparkle"
          ref={sparkleRef}
          width="32"
          height="32"
          src="/images/sparkle.png"
          alt="Sparkle"
          style={{ display: 'none' }}
        />
        <button id="shinyButton" ref={buttonRef} style={{ borderWidth: '2px', borderRadius: '4px', borderColor: 'purple', fontSize: '25px'}}>
          Shine
        </button>
      </div>
    );
    Sparkles.propTypes = {
      context: PropTypes.func.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    }
  };
  
  export default Sparkles;
  