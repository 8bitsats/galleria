// hooks/useBackgroundChanger.ts
import { useEffect } from 'react';

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const setRandomGradient = (): void => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  document.documentElement.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
};

const useBackgroundChanger = (): void => {
  useEffect(() => {
    setRandomGradient();
    const intervalId = setInterval(setRandomGradient, 60000); // Change every minute
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);
};

export default useBackgroundChanger;
