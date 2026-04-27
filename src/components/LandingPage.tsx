import React, { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Container, CssBaseline } from "@mui/material";
import Projects from "./Projects";

export default function LandingPage() {
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
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          py: 4,
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Projects />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
