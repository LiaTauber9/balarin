// import { useState, useEffect } from 'react';

// const useDimention = () => {
//     const [dimension, setDimension] = useState({ width: 0, height: 0 });
//     const updateDimension = () => {
//         const { innerWidth, innerHeight } = window;
//         setDimension({ width: innerWidth, height: innerHeight });
//     };
//     useEffect(() => {
//         updateDimension();
//         window.addEventListener('resize', updateDimension);
//         return () => window.removeEventListener('resize', updateDimension);
//     }, []);
//     return dimension;
// };

// export default useDimention;


import { useState, useEffect } from 'react';

const useDimension = () => {
  // בגובה נשתמש רק פעם אחת בתחילת הטעינה
  const initialHeight = typeof window !== 'undefined'
    ? window.visualViewport?.height || window.innerHeight
    : 0;

  const [dimension, setDimension] = useState({
    width: 0,
    height: initialHeight,
  });

  useEffect(() => {
    const updateWidth = () => {
      const width = window.visualViewport?.width || window.innerWidth;
      setDimension(prev => ({ ...prev, width }));
    };

    // update only the width, not the height
    updateWidth();

    window.addEventListener('resize', updateWidth);
    window.visualViewport?.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
      window.visualViewport?.removeEventListener('resize', updateWidth);
    };
  }, []);

  return dimension;
};

export default useDimension;
