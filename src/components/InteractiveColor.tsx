// InteractiveHero.tsx
import React, { useEffect, useRef, useState, type JSX } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

/**
 * How it works (short):
 * - Two absolutely-positioned <div class="blob"> elements are placed behind content.
 * - We update CSS custom properties (--mx, --my) with pointer coords on pointermove.
 * - Each blob uses a radial-gradient whose center is tied to those variables.
 * - CSS transitions + mix-blend-mode + blur produce the soft motion effect.
 */

/* --- color palettes: tuned for white & black backgrounds --- */
const palettes = {
  light: {
    blobA: ["#7dd3fc", "#a78bfa"], // cyan -> violet
    blobB: ["#fbcfe8", "#fef08a"], // pink -> soft yellow
    backdrop: "#ffffff",
    text: "#0f172a",
  },
  dark: {
    blobA: ["#2dd4bf", "#60a5fa"], // teal -> sky
    blobB: ["#f472b6", "#fbbf24"], // magenta -> gold
    backdrop: "#050507",
    text: "#e6eef8",
  },
};

export default function InteractiveHeroDemo(): JSX.Element {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // pointer move handler updates CSS variables for position
    const el = rootRef.current;
    if (!el) return;

    const onPointer = (ev: PointerEvent) => {
      // get bounding rect to compute relative coords
      const rect = el.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;

      // set CSS custom props (we use percentages for nicer CSS radial-gradient centering)
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      el.style.setProperty("--mx", `${px}%`);
      el.style.setProperty("--my", `${py}%`);
    };

    // add listener to this container so coords are relative
    el.addEventListener("pointermove", onPointer, { passive: true });

    // initialise center
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");

    return () => {
      el.removeEventListener("pointermove", onPointer as EventListener);
    };
  }, []);

  const palette = mode === "dark" ? palettes.dark : palettes.light;

  return (
    <ThemeProvider
      theme={createTheme({
        palette: { mode },
        typography: { fontFamily: "Inter, Roboto, system-ui" },
      })}
    >
      <CssBaseline />
      <Box
        ref={rootRef}
        sx={
          {
            // container-level CSS variables we update via JS
            position: "relative",
            overflow: "hidden",
            minHeight: "60vh",
            bgcolor: palette.backdrop,
            color: palette.text,
            // default CSS variables (if pointer hasn't moved yet)
            "--mx": "50%",
            "--my": "50%",
            // ensure child blobs sit behind the content
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any
        }
      >
        {/* Blob A (larger, left) */}
        <Box
          className="blobA"
          sx={{
            position: "absolute",
            left: "-10%",
            top: "-20%",
            width: "70vw",
            height: "70vh",
            pointerEvents: "none",
            filter: "blur(70px) saturate(120%)",
            transform: "translate3d(0,0,0)",
            transition:
              "transform 350ms cubic-bezier(.2,.9,.2,1), opacity 420ms ease",
            opacity: 0.95,
            zIndex: 0,
            // use radial-gradient centered at dynamic CSS vars
            background: `radial-gradient(40% 30% at var(--mx) var(--my), ${palette.blobA[0]} 0%, ${palette.blobA[1]} 60%, transparent 70%)`,
            mixBlendMode: mode === "dark" ? "screen" : "multiply",
          }}
        />

        {/* Blob B (smaller, right) */}
        {/* <Box
          className="blobB"
          sx={{
            position: "absolute",
            right: "-8%",
            bottom: "-10%",
            width: "60vw",
            height: "60vh",
            pointerEvents: "none",
            filter: "blur(80px) saturate(130%)",
            transform: "translate3d(0,0,0)",
            transition:
              "transform 420ms cubic-bezier(.2,.9,.2,1), opacity 420ms ease",
            opacity: 0.9,
            zIndex: 0,
            background: `radial-gradient(45% 35% at calc(var(--mx) - 10%) calc(var(--my) + 5%), ${palette.blobB[0]} 0%, ${palette.blobB[1]} 55%, transparent 68%)`,
            mixBlendMode: mode === "dark" ? "screen" : "multiply",
          }}
        /> */}

        {/* Content */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            py: { xs: 6, md: 12 },
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* header + theme toggle */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              Hi, I'm Nikhil Teja — AI & Frontend
            </Typography>

            <IconButton
              aria-label="toggle theme"
              onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
              size="large"
            >
              {mode === "dark" ? (
                <Brightness7Icon sx={{ color: palette.text }} />
              ) : (
                <Brightness4Icon sx={{ color: palette.text }} />
              )}
            </IconButton>
          </Stack>

          {/* big hero memoji / head placeholder */}
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
              display: "grid",
              placeItems: "center",
              boxShadow:
                mode === "dark"
                  ? "0 20px 60px rgba(0,0,0,0.6)"
                  : "0 20px 60px rgba(16,24,40,0.08)",
              fontSize: 64,
              fontWeight: 800,
              color: palette.text,
            }}
          >
            NT
          </Box>

          <Typography
            textAlign="center"
            variant="h3"
            sx={{ fontWeight: 800, lineHeight: 1.02 }}
          >
            AI Portfolio
          </Typography>

          <Typography
            textAlign="center"
            variant="body1"
            sx={{ maxWidth: 760, color: "text.secondary" }}
          >
            Frontend engineer — React, TypeScript, design systems, productivity
            tooling. Move your mouse around to see the background react.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
