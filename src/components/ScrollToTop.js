import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      setVisible(false);
      timeout = setTimeout(() => {
        setVisible(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
