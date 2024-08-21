/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef, useEffect } from "react";

const Canvas2D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawImage = (
    context: CanvasRenderingContext2D,
    image: HTMLImageElement,
    pos: { x: number; y: number },
    width: number,
    height: number
  ) => {
    context.drawImage(image, pos.x, pos.y, width, height);
  };

  const clear = (
    context: CanvasRenderingContext2D,
    pos: { x: number; y: number },
    width: number,
    height: number
  ) => {
    context.clearRect(pos.x, pos.y, width, height);
  };

  useEffect(() => {
    const gameCanvas = canvasRef.current;
    if (!gameCanvas) return;
    gameCanvas.width = 1530;
    gameCanvas.height = 650;

    const gameCanvasContext = gameCanvas.getContext("2d");
    if (!gameCanvasContext) return;

    const image = new Image();
    image.src = "/assets/sprites/spr_background4.png";
    image.onload = () => {
      drawImage(
        gameCanvasContext,
        image,
        { x: 0, y: 0 },
        gameCanvas.width,
        gameCanvas.height
      );
    };

    // Error handling
    image.onerror = () => {
      console.error("Image failed to load.");
    };
  }, []);

  return <canvas ref={canvasRef} id="gameScreen" />;
};

export default Canvas2D;
