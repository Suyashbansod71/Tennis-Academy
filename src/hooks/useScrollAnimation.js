// src/hooks/useScrollAnimation.js
import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');

    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
          item.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScrollAnimation;
