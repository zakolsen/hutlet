import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Disco from "./components/Disco/Disco";

export default function Home() {
  return (
    <>
      <div className="anchor" id="top"></div>
      <Intro />
      <div className="anchor" id="discography"></div>
      <Disco />
      <div className="anchor" id="about"></div>
      <About />
    </>
  );
}
