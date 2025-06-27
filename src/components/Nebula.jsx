import React, { useEffect, useRef } from 'react';

export default function Nebula() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Your nebula drawing logic here
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Add animation loop if needed
  }, []);

  return <canvas id="nebula" ref={canvasRef}></canvas>;
}
