// components/ScrollAnimation.js

import { useState, useEffect, useRef } from "react";

const ScrollAnimation = ({ triggered, setTriggered }) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current) return;
      const triggerPosition = triggerRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (!triggered && triggerPosition < viewportHeight) {
        setTriggered(true);
      }
    };

    // Check immediately on mount in case element is already in viewport
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggered]);

  return <div ref={triggerRef}></div>;
};

export default ScrollAnimation;
