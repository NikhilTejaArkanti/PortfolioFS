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
        <LandingPage />
      </React.Fragment>
    </>
  );
}

export default App;
