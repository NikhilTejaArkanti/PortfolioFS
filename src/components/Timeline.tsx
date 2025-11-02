// Timeline.tsx
// Single-file reusable timeline component (Timeline + items combined).
// Usage: import Timeline and pass data. Uses MUI + react-icons.

import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import type { IconType } from "react-icons";
import { FiBookOpen } from "react-icons/fi";

type Entry = {
  icon?: IconType; // only used for header demonstration, not per-item
  title: string;
  details?: string[]; // multiple detail lines
  date?: string;
};

type Props = {
  data?: Entry[];
  accent?: string;
  leftColumnWidth?: number; // px
};

export default function Timeline({
  data = [
    {
      icon: FiBookOpen,
      title: "National Institute of Technology, Warangal",
      details: [
        "Bachelor of Technology in Electrical and Electroncis Engineering(B.Tech. EEE)",
      ],
      date: "2017 — 2021",
    },
    {
      icon: FiBookOpen,
      title: "Greenland International College",
      details: ["+2 Science"],
      date: "2015 — 2017",
    },
  ],
  accent = "#FACC15",
  leftColumnWidth = 12,
}: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ position: "relative", pl: `${leftColumnWidth}px` }}>
      {/* continuous vertical line */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: 17,
          top: -26,
          bottom: 8,
          width: 2,
          background: isDark
            ? "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))"
            : "linear-gradient(180deg, rgba(0,0,0,0.07), rgba(0,0,0,0.02))",
          borderRadius: 1,
          zIndex: 0,
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {data.map((item, idx) => {
          const isLast = idx === data.length - 1;

          return (
            <Box
              key={idx}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              {/* left column: keep space and render only the small dot for each item */}
              <Box
                sx={{
                  width: leftColumnWidth,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  pt: 0.5,
                  flexShrink: 0,
                }}
              >
                {/* small dot aligned with the vertical line */}
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: accent,
                    mt: 1,
                    zIndex: 2,
                    boxShadow: isDark
                      ? `0 0 6px ${accent}33`
                      : `0 0 4px ${accent}22`,
                  }}
                />

                {/* spacer so the left column height matches content */}
                <Box sx={{ flex: 1 }} />
              </Box>

              {/* right column: text */}
              <Box sx={{ flex: 1, pb: isLast ? 0 : 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    mb: 0.4,
                    fontSize: { xs: 15, sm: 16 },
                  }}
                >
                  {item.title}
                </Typography>

                {item.details?.map((d, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: i === (item.details?.length ?? 1) - 1 ? 0.5 : 0.3,
                      fontSize: { xs: 13, sm: 14 },
                    }}
                  >
                    {d}
                  </Typography>
                ))}

                {item.date && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: accent,
                      fontWeight: 700,
                      display: "block",
                      mt: 0.6,
                      fontSize: 13,
                      letterSpacing: 0.2,
                    }}
                  >
                    {item.date}
                  </Typography>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
