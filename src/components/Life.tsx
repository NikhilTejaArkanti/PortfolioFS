import React from "react";
import { Box, Typography, Container } from "@mui/material";
import BeachImg from "../assets/Beach.jpg";
import MountainImg from "../assets/Mountain.jpg";
import SandImg from "../assets/sand.jpg";
import DCImg from "../assets/DC.jpeg";
import BasketballVideo from "../assets/basketball.mov";

const TEAL = "#1D9E75";
const TEAL_DIM = "#5DCAA5";
const TEAL_BG = "#0a2a1e";
const monoFont = "'DM Mono', 'Roboto Mono', monospace";

const ALL_IMAGES = [
  {
    src: MountainImg,
    alt: "Mountain",
    title: "Leh, Ladakh",
    description: "Majestic peaks and endless horizons",
    orientation: "landscape",
    maxHeight: "350px",
    type: "image",
  },
  {
    src: BasketballVideo,
    alt: "Basketball",
    title: "Basketball",
    description: "Just started shooting",
    orientation: "portrait",
    type: "video",
  },
  {
    src: SandImg,
    alt: "Sand",
    title: "Hunder, Ladakh",
    description: "Desert landscapes in the Himalayas",
    orientation: "portrait",
    type: "image",
  },
  {
    src: BeachImg,
    alt: "Beach",
    title: "Maharashtra",
    description: "Coastal serenity and golden sunsets",
    orientation: "portrait",
    type: "image",
  },
  {
    src: DCImg,
    alt: "Devil's Circuit",
    title: "Devil's Circuit",
    description: "One of the most popular obstacle races in India",
    orientation: "portrait",
    type: "image",
  },
];

export default function Life() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#0f0f10",
        py: { xs: 8, md: 12 },
        pt: { xs: 12, md: 14 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          height: "400px",
          background: `radial-gradient(ellipse at center, ${TEAL}06 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              fontFamily: monoFont,
              fontSize: { xs: "10px", md: "11px" },
              color: TEAL,
              letterSpacing: ".15em",
              mb: 2,
            }}
          >
            BEYOND CODE
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 600,
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Life & Interests
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              color: "#9CA3AF",
              lineHeight: 1.6,
              maxWidth: "800px",
              mb: 3,
            }}
          >
            When I'm not coding, here's what keeps me inspired and balanced.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "15px" },
              color: "#6B7280",
              lineHeight: 1.8,
              maxWidth: "800px",
            }}
          >
            From scaling mountain peaks in Ladakh to staying active on the
            basketball court, I believe in maintaining a balance between
            technical excellence and physical wellness. These moments of
            adventure and sport help me bring fresh perspectives and renewed
            energy to every project I undertake.
          </Typography>
        </Box>

        {/* Images Grid */}
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
            p: 4,
            bgcolor: "#0f0f10",
            transition: "all .3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              borderColor: TEAL,
              boxShadow: `0 8px 24px -4px ${TEAL}20`,
            },
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: monoFont,
              fontSize: "11px",
              color: TEAL,
              letterSpacing: ".1em",
              mb: 3,
              textAlign: "center",
            }}
          >
            CAPTURED MOMENTS
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            {ALL_IMAGES.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  bgcolor: "#000",
                  transition: "transform .3s ease",
                  gridColumn:
                    item.orientation === "landscape"
                      ? { sm: "1 / -1" }
                      : "auto",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                {item.type === "video" ? (
                  <Box
                    component="video"
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxHeight:
                        item.maxHeight ||
                        (item.orientation === "portrait" ? "500px" : "350px"),
                      objectFit: "contain",
                      display: "block",
                      mx: "auto",
                    }}
                  />
                ) : (
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.alt}
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxHeight:
                        item.maxHeight ||
                        (item.orientation === "portrait" ? "500px" : "350px"),
                      objectFit: "contain",
                      display: "block",
                      mx: "auto",
                    }}
                  />
                )}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    bgcolor: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(8px)",
                    px: 2,
                    py: 1.5,
                    borderRadius: "4px",
                    border: `0.5px solid ${TEAL}40`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: monoFont,
                      fontSize: "13px",
                      color: TEAL_DIM,
                      letterSpacing: ".05em",
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#9CA3AF",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
