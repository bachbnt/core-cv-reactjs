import { useEffect, useState } from 'react';

function useSlide<T>(items: T[] = []) {
  const [slide, setSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!items?.length) {
        return;
      }
      if (!(slide === items?.length - 1)) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [slide, items]);

  return {
    slide,
    items,
  };
}

export default useSlide;
