import { useRef, useEffect } from "react";
import frameRenderer from './frameRenderer';

function Canimation() {
    const canvasRef = useRef(null);
    const requestIdRef = useRef(null);
    const ballRef = useRef({ x: 50, y: 50, vx: 3.9, vy: 3.3, radius: 20 });
    const size = { width: 400, height: 250 };

    const updateBall = () => {
        const ball = ballRef.current;
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x + ball.radius >= size.width) {
            ball.vx = -ball.vx;
            ball.x = size.width - ball.radius;
        }
        if (ball.x - ball.radius <= 0) {
            ball.vx = -ball.vx;
            ball.x = ball.radius;
        }
        if (ball.y + ball.radius >= size.height) {
            ball.vy = -ball.vy;
            ball.y = size.width - ball.radius;
        }
        if (ball.y - ball.radius <= 0) {
            ball.vy = -ball.vy;
            ball.y = ball.radius;
        }
    };

    const renderFrame = () => {
        const ctx = canvasRef.current.getContext("2d");
        updateBall();
        frameRenderer.call(ctx, size, ballRef.current);
    };

    const tick = () => {
        if (!canvasRef.current) return;
        renderFrame();
        requestIdRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        requestIdRef.current = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(requestIdRef.current);
        };
    }, []);

    return <canvas {...size} ref={canvasRef} imager={imager} />;

}

export default Canimation;