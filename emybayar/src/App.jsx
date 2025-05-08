import React from "react";
import { Routes, Route } from "react-router-dom";
import ThreeBackground from "./components/ThreeBackground";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Info from "./pages/Info";
// import "./App.css";

import Enfut from "./pages/projects/Enfut";
import LLMs from "./pages/projects/LLMsAndNums";
import EndlessPoem from "./pages/projects/EndlessPoem";
import LiveCoding from "./pages/projects/LiveCoding";
import Breakfast from "./pages/projects/Breakfast";
import AlgorithmicPlaywright from "./pages/projects/AlgorithmicPlaywright";

function App() {
  return (
    <>
      <ThreeBackground />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Info />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/enfut" element={<Enfut />} />
        <Route path="/projects/llms-numbers" element={<LLMs />} />
        <Route
          path="/projects/endless-authorless-poem"
          element={<EndlessPoem />}
        />
        <Route path="/projects/live-coding" element={<LiveCoding />} />
        <Route path="/projects/breakfast-12000-ag" element={<Breakfast />} />
        <Route
          path="/projects/algorithmic-playwright"
          element={<AlgorithmicPlaywright />}
        />
      </Routes>
    </>
  );
}

export default App;
