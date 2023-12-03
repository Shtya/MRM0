import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  './blog1.webp',
  './blog2.webp',
  './blog3.jpeg',
];

export function Slider() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const { clientWidth, scrollWidth } = sliderRef.current;
      setMaxDrag(scrollWidth - clientWidth);
    }
  }, []);

  const handleDragEnd = (event, info) => {
    const { point } = info;
    const { x } = point;
    const newIndex = x < 0 ? index + 1 : index - 1;
    setIndex(Math.max(0, Math.min(newIndex, images.length - 1)));
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        ref={sliderRef}
        drag="x"
        dragConstraints={{ left: 0, right: maxDrag }}
        onDragEnd={handleDragEnd}
        style={{ display: 'flex', width: `${images.length * 100}%` }}
      >
        {images.map((image ) => (
          <div key={image} style={{ flex: '1 0 auto' }}>
            <img src={image} alt="slide" style={{ width: '100%' }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
