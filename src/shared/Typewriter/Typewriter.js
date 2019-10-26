import React, { useState, useEffect } from "react";

import "./Typewriter.scss";

const intervalTime = 5000;

const Typewriter = props => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentWord(props.words[currentIndex]);

    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % props.words.length);
    }, intervalTime);
    return () => {
      clearInterval(interval);
    };
  }, [props.words, currentIndex]);

  return (
    <p className="typewriter">
      {currentWord}
      <span className="typewriter__blink-text-cursor">|</span>
    </p>
  );
};

export default Typewriter;
