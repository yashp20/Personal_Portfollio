import { useEffect, useRef } from 'react';

export default function StarField() {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;

    // Create 100 stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star absolute w-0.5 h-0.5 bg-white rounded-full';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(star);
    }

    return () => {
      // Cleanup
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={starsRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
