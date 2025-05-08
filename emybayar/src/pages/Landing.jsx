import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const [typedWords, setTypedWords] = useState([]);
  const wordIndexRef = useRef(0);
  const [instructionsText, setInstructionsText] = useState("");
  const fullInstructions = "try typing, dragging, or scrolling";

  const aboutMe =
    "I am a student, researcher, and an aspiring creative technologist from Mongolia, currently wrapping up my senior year of college in Shanghai. Through practice, I explore the creative dynamics between humans and algorithms.";
  const words = aboutMe.split(" ");

  const redWords = new Set([
    "student,",
    "researcher,",
    "creative",
    "technologist",
    "emergent",
    "dynamics",
    "humans",
    "algorithms.",
  ]);

  const typeWord = () => {
    if (wordIndexRef.current < words.length) {
      const word = words[wordIndexRef.current];
      setTypedWords((prev) => [...prev, word]);
      wordIndexRef.current++;
    }
  };

  useEffect(() => {
    const handleKeydown = () => {
      typeWord();
    };

    document.addEventListener("keydown", handleKeydown);

    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    let autoTypeInterval = null;

    if (isMobileDevice) {
      setTimeout(() => {
        autoTypeInterval = setInterval(typeWord, 500);
      }, 1000);
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      if (autoTypeInterval) clearInterval(autoTypeInterval);
    };
  }, []);

  useEffect(() => {
    const fullText = "try typing, dragging, or scrolling";
    const typingInterval = 50;
    const deletingInterval = 50;
    const pauseAfterTyping = 5000;
    const pauseAfterDeleting = 3000;

    let isDeleting = false;
    let currentText = "";
    let index = 0;

    const loop = () => {
      if (!isDeleting && index < fullText.length) {
        currentText += fullText[index];
        setInstructionsText(currentText);
        index++;
        setTimeout(loop, typingInterval);
      } else if (!isDeleting && index === fullText.length) {
        isDeleting = true;
        setTimeout(loop, pauseAfterTyping);
      } else if (isDeleting && currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setInstructionsText(currentText);
        setTimeout(loop, deletingInterval);
      } else if (isDeleting && currentText.length === 0) {
        isDeleting = false;
        index = 0;
        setTimeout(loop, pauseAfterDeleting);
      }
    };

    loop();

    return () => {};
  }, []);

  return (
    <>
      <div id="header">
        <ul id="nav">
          <li>
            <Link to="/" id="name">
              EMY <br /> SAINBAYAR
            </Link>
          </li>
          <div className="right-nav">
            <li>
              <Link to="/projects" id="projects">
                Index -&gt;
              </Link>
            </li>
            <li>
              <Link to="/info" id="info">
                About -&gt;
              </Link>
            </li>
          </div>
        </ul>
      </div>

      <div id="main">
        <div className="typed-line">
          {typedWords.map((word, index) => (
            <span
              key={index}
              style={{
                color: redWords.has(word.trim()) ? "red" : "inherit",
                marginRight: "4px",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div id="instructions">{instructionsText}</div>
    </>
  );
};

export default Landing;
