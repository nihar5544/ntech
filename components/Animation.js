// components/ScrollAnimation.js

import { useState, useEffect, useRef } from "react";

const ScrollAnimation = ({ triggered, setTriggered }) => {
  // const [triggered, setTriggered] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPosition = triggerRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      const triggerThreshold = 1;

      if (!triggered && triggerPosition < viewportHeight * triggerThreshold) {
        setTriggered(true);
        // console.log('Animation triggered when div comes into view');
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggered]);

  return <div ref={triggerRef}></div>;
};

export default ScrollAnimation;
