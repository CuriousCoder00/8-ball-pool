/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef, useEffect } from "react";
import { GreenPool } from "../constants";
// Create a 2D canvas 
const Canvas2D: React.FC = () => {
  // Reference of HTMLCanvasElement
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Function to draw image or render image on Canvas
  const drawImage = (
    // props with types defined
    context: CanvasRenderingContext2D,
    image: HTMLImageElement,
    pos: { x: number; y: number },
    width: number,
    height: number
  ) => {
    // canvas drawImage() function with passed arguments/parameters to drawImage on canvas with given (x,y) position and width,height
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
    gameCanvas.height = 640;

    const gameCanvasContext = gameCanvas.getContext("2d");
    if (!gameCanvasContext) return;

    const image = new Image();
    image.src = GreenPool;
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
