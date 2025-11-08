/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import CursorTrail from "./components/CursorTrail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <React.Fragment>
        {/* <CursorTrail size={8} trailLength={12} opacity={0.9}></CursorTrail> */}
        <LandingPage />
      </React.Fragment>
    </>
  );
}

export default App;
