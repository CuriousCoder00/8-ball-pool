import { useState, useCallback } from "react";

interface VectorState {
  x: number;
  y: number;
}

const useVector = (initialX: number = 0, initialY: number = 0) => {
  const [vector, setVector] = useState<VectorState>({
    x: initialX,
    y: initialY,
  });

  const setX = (x: number) => setVector((prev) => ({ ...prev, x }));
  const setY = (y: number) => setVector((prev) => ({ ...prev, y }));

  const zero = useCallback(() => ({ x: 0, y: 0 }), []);

  const isZero = useCallback(() => vector.x === 0 && vector.y === 0, [vector]);

  const length = useCallback(
    () => Math.sqrt(vector.x * vector.x + vector.y * vector.y),
    [vector]
  );

  const copy = useCallback(() => ({ x: vector.x, y: vector.y }), [vector]);

  const addTo = useCallback((v: VectorState | number) => {
    if (typeof v === "number") {
      setVector((prev) => ({ x: prev.x + v, y: prev.y + v }));
    } else {
      setVector((prev) => ({ x: prev.x + v.x, y: prev.y + v.y }));
    }
  }, []);

  const add = useCallback(
    (v: VectorState | number) => {
      const newVector = copy();
      addTo(v);
      return newVector;
    },
    [copy, addTo]
  );

  const subtractFrom = useCallback((v: VectorState | number) => {
    if (typeof v === "number") {
      setVector((prev) => ({ x: prev.x - v, y: prev.y - v }));
    } else {
      setVector((prev) => ({ x: prev.x - v.x, y: prev.y - v.y }));
    }
  }, []);

  const subtract = useCallback(
    (v: VectorState | number) => {
      const newVector = copy();
      subtractFrom(v);
      return newVector;
    },
    [copy, subtractFrom]
  );

  const divideBy = useCallback((v: VectorState | number) => {
    if (typeof v === "number") {
      setVector((prev) => ({ x: prev.x / v, y: prev.y / v }));
    } else {
      setVector((prev) => ({ x: prev.x / v.x, y: prev.y / v.y }));
    }
  }, []);

  const divide = useCallback(
    (v: VectorState | number) => {
      const newVector = copy();
      divideBy(v);
      return newVector;
    },
    [copy, divideBy]
  );

  const multiplyWith = useCallback((v: VectorState | number) => {
    if (typeof v === "number") {
      setVector((prev) => ({ x: prev.x * v, y: prev.y * v }));
    } else {
      setVector((prev) => ({ x: prev.x * v.x, y: prev.y * v.y }));
    }
  }, []);

  const multiply = useCallback(
    (v: VectorState | number) => {
      const newVector = copy();
      multiplyWith(v);
      return newVector;
    },
    [copy, multiplyWith]
  );

  const normalize = useCallback(() => {
    const vectorLength = length();
    if (vectorLength === 0) return;
    divideBy(vectorLength);
  }, [length, divideBy]);

  const equals = useCallback(
    (obj: VectorState) => vector.x === obj.x && vector.y === obj.y,
    [vector]
  );

  const distanceFrom = useCallback(
    (obj: VectorState) => {
      return Math.sqrt(
        (vector.x - obj.x) * (vector.x - obj.x) +
          (vector.y - obj.y) * (vector.y - obj.y)
      );
    },
    [vector]
  );

  const toString = useCallback(() => `(${vector.x}, ${vector.y})`, [vector]);

  return {
    vector,
    setX,
    setY,
    zero,
    isZero,
    length,
    addTo,
    add,
    subtractFrom,
    subtract,
    divideBy,
    divide,
    multiplyWith,
    multiply,
    normalize,
    copy,
    equals,
    distanceFrom,
    toString,
  };
};

export default useVector;
