import { useState, useEffect } from 'react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scroll-up-button">
        <svg
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z" />
            <path d="m8 13.86 2.87-3.06a1.52 1.52 0 0 1 2.26 0L16 13.86" />
          </g>
        </svg>
      </button>
    )
  );
};

export default ScrollUpButton;
