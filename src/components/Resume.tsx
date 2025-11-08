import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import Timeline from "./Timeline.tsx";
import CertificateCarousel, { type Cert } from "./CertificateCarousel.tsx";
import AZURE from "../assets/AZURE.png";

const calculateMonths = (start: string): string => {
  try {
    const startDate = new Date(start + " 1"); // e.g. "Jan 2024 1"
    const now = new Date();

    const years = now.getFullYear() - startDate.getFullYear();
    const months = now.getMonth() - startDate.getMonth();
    const totalMonths = years * 12 + months;

    if (totalMonths <= 0) return "";
    const display =
      totalMonths >= 12
        ? `${Math.floor(totalMonths / 12)} yr${
            Math.floor(totalMonths / 12) > 1 ? "s" : ""
          } ${totalMonths % 12 ? `${totalMonths % 12} mo` : ""}`
        : `${totalMonths} mo${totalMonths > 1 ? "s" : ""}`;

    return `• ${display}`;
  } catch {
    return "";
  }
};

const certs: Cert[] = [
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    image: AZURE,
  },
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    image: AZURE,
  },
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    image: AZURE,
  },
];

export default function Resume() {
  const theme = useTheme();
  const experience = [
    {
      icon: FiBriefcase,
      title: "Associate Software Engineer — BlueYonder",
      details: [
        "Built REST APIs with Node/Express",
        "Worked on React-based frontends & Nest.js based backends",
      ],
      date: (() => {
        const base = "Jan 2024 — Present";
        return `${base} ${calculateMonths("Jan 2024")}`;
      })(),
    },
  ];

  const education = [
    {
      icon: FiBookOpen,
      title: "National Institute of Technology, Warangal",
      details: [
        "Bachelor of Technology in Electrical and Electronics Engineering (B.Tech. EEE)",
      ],
      date: "2020 — 2024",
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

      {/* Certificate Carousel */}
      <CertificateCarousel
        items={certs}
        intervalMs={5000}
        height={300}
        darkMode={theme.palette.mode == "dark"}
      />
    </Box>
  );
}
