import React, { useEffect, useRef, useState } from "react";
import { Box, Paper, Typography, IconButton, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export type Cert = {
  title: string;
  issuer?: string;
  date?: string;
  image?: string;
  link?: string;
};

type Props = {
  items: Cert[];
  intervalMs?: number;
  height?: number | string;
  darkMode?: boolean;
};

export default function CertificateCarousel({
  items,
  intervalMs = 5000,
  height = 220,
  darkMode = false,
}: Props) {
  const theme = useTheme();
  const accent = "#FACC15";
  const [index, setIndex] = useState(0);
  const runningRef = useRef(true);
  const timerRef = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const go = (i: number) => setIndex(i % items.length);

  useEffect(() => {
    if (items.length <= 1) return;

    if (timerRef.current) window.clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      if (runningRef.current) {
        setIndex((i) => (i + 1) % items.length);
      }
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [items.length, intervalMs]);

  if (!items || items.length === 0) {
    return null;
  }

  // Theme colors matching your website
  const cardBg = darkMode ? "#232324" : "#ffffff";
  const textPrimary = darkMode ? "#ffffff" : "#1a1a1b";
  const textSecondary = darkMode ? "#a0a0a0" : "#666666";
  const borderColor = darkMode
    ? "rgba(250, 204, 21, 0.15)"
    : "rgba(250, 204, 21, 0.2)";
  const iconBg = darkMode
    ? "rgba(250, 204, 21, 0.08)"
    : "rgba(250, 204, 21, 0.1)";
  const navButtonBg = darkMode
    ? "rgba(35, 35, 36, 0.9)"
    : "rgba(255, 255, 255, 0.95)";
  const navButtonHoverBg = darkMode
    ? "rgba(250, 204, 21, 0.15)"
    : "rgba(250, 204, 21, 0.2)";

  return (
    <Box sx={{ mt: 6, width: "100%", position: "relative" }}>
      {/* Header with icon matching your design */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 2.5,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 1.5,
            border: `1.5px solid ${accent}`,
            display: "grid",
            placeItems: "center",
            background:
              theme.palette.mode === "dark" ? "rgba(255,255,255,0.02)" : "#fff",
          }}
        >
          📜
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: textPrimary,
            m: 0,
          }}
        >
          Certificates
        </Typography>
      </Box>

      {/* Carousel Container */}
      <Paper
        onMouseEnter={() => (runningRef.current = false)}
        onMouseLeave={() => (runningRef.current = true)}
        sx={{
          width: "100%",
          height,
          borderRadius: 2,
          overflow: "hidden",
          bgcolor: cardBg,
          position: "relative",
          boxShadow: darkMode
            ? "0 4px 20px rgba(0, 0, 0, 0.3)"
            : "0 2px 12px rgba(0, 0, 0, 0.08)",
          border: `1px solid ${borderColor}`,
        }}
      >
        {/* Sliding Track.. */}
        <Box
          sx={{
            display: "flex",
            height: "100%",
            transition: "transform 520ms cubic-bezier(.2,.9,.2,1)",
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {items.map((cert, i) => (
            <Box
              key={i}
              sx={{
                minWidth: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 4,
                px: 5,
                boxSizing: "border-box",
              }}
            >
              {/* Left: Text Content */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: textPrimary,
                    fontWeight: 700,
                    mb: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </Typography>
                {cert.issuer && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: textSecondary,
                      mb: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    {cert.issuer}
                  </Typography>
                )}
                {cert.date && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: accent,
                      fontWeight: 700,
                      display: "block",
                      mb: 1.5,
                    }}
                  >
                    {cert.date}
                  </Typography>
                )}
                {cert.link && (
                  <Box
                    component="a"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: accent,
                      fontWeight: 600,
                      textDecoration: "none",
                      fontSize: "14px",
                      display: "inline-block",
                      py: 0.75,
                      borderBottom: `2px solid ${accent}`,
                      transition: "opacity 0.2s",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    View certificate →
                  </Box>
                )}
              </Box>

              {/* Right: Certificate Image */}
              <Box
                sx={{
                  width: 180,
                  height: 140,
                  borderRadius: 1.5,
                  background: darkMode
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.02)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: `1px solid ${borderColor}`,
                }}
              >
                {cert.image ? (
                  <Box
                    component="img"
                    src={cert.image}
                    alt={cert.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    sx={{
                      maxWidth: "90%",
                      maxHeight: "90%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                ) : (
                  <Typography
                    variant="caption"
                    sx={{
                      color: textSecondary,
                      textAlign: "center",
                      px: 1.5,
                    }}
                  >
                    No preview
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Navigation Controls */}
        {items.length > 1 && (
          <>
            {/* Previous Button */}
            <IconButton
              onClick={prev}
              sx={{
                position: "absolute",
                left: 1.5,
                top: "50%",
                transform: "translateY(-50%)",
                background: navButtonBg,
                color: accent,
                border: `1.5px solid ${borderColor}`,
                width: 44,
                height: 44,
                zIndex: 2,
                boxShadow: darkMode
                  ? "0 2px 10px rgba(0, 0, 0, 0.3)"
                  : "0 2px 8px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  background: navButtonHoverBg,
                  transform: "translateY(-50%) scale(1.05)",
                },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* Next Button */}
            <IconButton
              onClick={next}
              sx={{
                position: "absolute",
                right: 1.5,
                top: "50%",
                transform: "translateY(-50%)",
                background: navButtonBg,
                color: accent,
                border: `1.5px solid ${borderColor}`,
                width: 44,
                height: 44,
                zIndex: 2,
                boxShadow: darkMode
                  ? "0 2px 10px rgba(0, 0, 0, 0.3)"
                  : "0 2px 8px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  background: navButtonHoverBg,
                  transform: "translateY(-50%) scale(1.05)",
                },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* Pagination Dots */}
            <Box
              sx={{
                position: "absolute",
                bottom: 1.75,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1.25,
                zIndex: 2,
              }}
            >
              {items.map((_, i) => (
                <Box
                  key={i}
                  component="button"
                  onClick={() => go(i)}
                  sx={{
                    width: i === index ? 28 : 10,
                    height: 10,
                    borderRadius: "5px",
                    background: i === index ? accent : textSecondary,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "none",
                    padding: 0,
                    opacity: i === index ? 1 : 0.4,
                    "&:hover": {
                      opacity: i === index ? 1 : 0.6,
                      transform: i === index ? "scale(1)" : "scale(1.2)",
                    },
                  }}
                />
              ))}
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
}
