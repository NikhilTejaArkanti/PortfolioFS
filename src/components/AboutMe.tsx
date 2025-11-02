// AboutMe.tsx
import React from "react";
import {
  Box,
  Typography,
  Paper,
  CardContent,
  useTheme,
  alpha,
} from "@mui/material";

export default function AboutMe() {
  const theme = useTheme();

  // subtle card bg for items (works both light/dark)
  const itemBg =
    theme.palette.mode === "dark"
      ? alpha("#ffffff", 0.02)
      : alpha("#000000", 0.02);

  const tech = [
    "System Design",
    "React.js",
    "TypeScript",
    "Node.js / NestJS",
    "Java / Spring Boot",
    "REST API Design",
    "MongoDB / MySQL",
    "Microsoft Azure (AZ-900)",
    "n8n Automation",
    "Docker / AWS ECS",
    "Performance Testing (JMeter, Selenium)",
    "Terraform"
  ];

  return (
    // NOTE: use a Box here — don't return a Paper (outer Paper already wraps this)
    <Box>
      {/* Intro - optional centered card effect */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          I build performant web apps with clean UI and reliable backend
          systems. Currently focusing on React + TypeScript for frontends and
          Node/Express with MongoDB/MySQL for backend.
        </Typography>
      </Box>

      {/* Skills */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Box sx={{ width: "100%", maxWidth: 880 }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Skills
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
              },
              gap: 2,
            }}
          >
            {tech.map((t) => (
              <Box
                key={t}
                sx={{
                  borderRadius: 2,
                  px: 2,
                  py: 1.25,
                  textAlign: "center",
                  background: itemBg,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {t}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Info cards - use Paper with theme divider, not hard-coded border */}
      {/* <Box sx={{ display: "grid", gap: 2, maxWidth: 1100 }}>
        <InfoCard
          title="Web Development"
          desc="Building responsive React apps and Next.js sites. Focus on performance, accessibility and clear component design."
        />
        <InfoCard
          title="Backend & APIs"
          desc="Designing RESTful services in Node.js/Express, integrating third-party APIs and ensuring reliability."
        />
        <InfoCard
          title="UI/UX & Frontend"
          desc="Polished UI using TypeScript, MUI or Tailwind, with attention to interaction and micro-animations."
        />
        <InfoCard
          title="Automation & Cloud"
          desc="Automating workflows, CI/CD basics and Azure fundamentals (AZ-900)."
        />
      </Box> */}
    </Box>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  const theme = useTheme();
  const divider = theme.palette.divider;

  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        bgcolor:
          theme.palette.mode === "dark" ? alpha("#ffffff", 0.02) : "#fff",
        border: `1px solid ${alpha(divider, 1)}`, // uses theme divider (adapts to mode)
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {desc}
        </Typography>
      </CardContent>
    </Paper>
  );
}
