import React from "react";
import { Box, Typography } from "@mui/material";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import Timeline from "./Timeline.tsx";

export default function Resume() {
  const experience = [
    {
      icon: FiBriefcase,
      title: "Associate Software Engineer — BlueYonder",
      details: [
        "Built REST APIs with Node/Express",
        "Worked on React-based frontends & Nest.js based backends",
      ],
      date: "Jan 2024 — Present ",
    },
  ];

  const education = [
    {
      icon: FiBookOpen,
      title: "National Institute of Technology, Warangal",
      details: [
        "Bachelor of Technology in Electrical and Electronics Engineering (B.Tech. EEE)",
      ],
      date: "2017 — 2021",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 880, // your preferred width
        mx: "auto", // centers horizontally
        px: { xs: 2, sm: 3, md: 0 }, // responsive side padding
        py: { xs: 2, sm: 3 },
      }}
    >
      {/* Experience Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 1.5,
            border: `1.5px solid #FACC15`,
            background: "rgba(255,255,255,0.03)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <FiBriefcase size={16} color="#FACC15" />
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, color: "text.primary" }}
        >
          Experience
        </Typography>
      </Box>

      <Timeline data={experience} />

      {/* Education Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: { xs: 5, sm: 6 },
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 1.5,
            border: `1.5px solid #FACC15`,
            background: "rgba(255,255,255,0.03)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <FiBookOpen size={16} color="#FACC15" />
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, color: "text.primary" }}
        >
          Education
        </Typography>
      </Box>

      <Timeline data={education} />
    </Box>
  );
}
