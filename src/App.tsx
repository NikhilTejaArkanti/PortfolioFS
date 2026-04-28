import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
// LandingPage intentionally not used as root anymore; root shows About
import Projects from "./components/Projects";
import About from "./components/About";
import Life from "./components/Life";

function App() {
  const [dark] = useState(true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
          primary: { main: "#1D9E75" },
          background: {
            default: dark ? "#0f0f10" : "#f6f7fb",
            paper: dark ? "#0f0f10" : "#fff",
          },
        },
        typography: {
          fontFamily: "Inter, Roboto, Arial, sans-serif",
        },
      }),
    [dark],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/PortfolioFS/">
        <Navbar />
        <Box
          sx={{
            minHeight: "100vh",
            bgcolor: "background.default",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/life" element={<Life />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
