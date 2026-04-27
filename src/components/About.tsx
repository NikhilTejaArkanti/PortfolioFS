import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { createPortal } from "react-dom";
import LeetCodeBadge from "../assets/leetcode.png";

const TEAL = "#1D9E75";
const TEAL_DIM = "#5DCAA5";
const TEAL_BG = "#0a2a1e";
const monoFont = "'DM Mono', 'Roboto Mono', monospace";

export default function About() {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
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
          width: "100%",
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
            00 · INTRODUCTION
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 600,
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Hi, I'm{" "}
            <Box component="span" sx={{ color: TEAL }}>
              Nikhil Teja
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              color: "#9CA3AF",
              lineHeight: 1.6,
              maxWidth: "800px",
            }}
          >
            Full Stack Developer & AI Engineer specializing in building
            production-ready GenAI solutions, microservices, and automation
            tools.
          </Typography>
        </Box>

        {/* About & Current Focus Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 4,
            mb: 6,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: monoFont,
                fontSize: "11px",
                color: TEAL,
                letterSpacing: ".1em",
                mb: 2,
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#9CA3AF",
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              I'm a software engineer passionate about leveraging AI and cloud
              technologies to solve complex problems. Currently working at Blue
              Yonder, where I built an AI Document Intelligence Agent that
              reduced processing time by 99% (2 weeks → 10 minutes).
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#9CA3AF",
                lineHeight: 1.8,
              }}
            >
              With expertise in Python, Node.js, React, and Azure, I've
              developed full-stack applications, RAG systems, and automation
              tools that have been adopted across multiple teams.
            </Typography>
          </Box>

          <Box
            sx={{
              border: "0.5px solid",
              borderColor: TEAL,
              borderRadius: "10px",
              p: 3,
              bgcolor: TEAL_BG,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${TEAL}, transparent)`,
                opacity: 0.5,
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: monoFont,
                fontSize: "11px",
                color: TEAL,
                letterSpacing: ".1em",
                mb: 2,
              }}
            >
              CURRENT FOCUS
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    bgcolor: TEAL,
                    borderRadius: "50%",
                  }}
                />
                <Typography sx={{ fontSize: "13px", color: "#9CA3AF" }}>
                  Integrating a chatbot in this website.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    bgcolor: TEAL,
                    borderRadius: "50%",
                  }}
                />
                <Typography sx={{ fontSize: "13px", color: "#9CA3AF" }}>
                  Optimizing DocSight project (Refer projects page).
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    bgcolor: TEAL,
                    borderRadius: "50%",
                  }}
                />
                <Typography sx={{ fontSize: "13px", color: "#9CA3AF" }}>
                  RAG Pipeline Optimization
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    bgcolor: TEAL,
                    borderRadius: "50%",
                  }}
                />
                <Typography sx={{ fontSize: "13px", color: "#9CA3AF" }}>
                  AZ-104 Azure Administrator Certification
                </Typography>
              </Box>

              {/* <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    bgcolor: TEAL,
                    borderRadius: "50%",
                  }}
                />
                <Typography sx={{ fontSize: "13px", color: "#9CA3AF" }}>
                  Open to Remote USD Roles
                </Typography>
              </Box> */}
            </Box>
          </Box>
        </Box>

        {/* LeetCode Achievement Section */}
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
              transform: "translateY(-4px)",
              boxShadow: `0 8px 24px -4px ${TEAL}20`,
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                bgcolor: TEAL_BG,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${TEAL}`,
              }}
            >
              <Typography sx={{ fontSize: "20px" }}>🏆</Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                LeetCode Achievement
              </Typography>
              <Typography
                sx={{ fontFamily: monoFont, fontSize: "11px", color: TEAL_DIM }}
              >
                100 Days Badge 2026
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: monoFont,
                fontSize: "10px",
                color: "#6B7280",
                letterSpacing: ".05em",
              }}
            >
              As of Apr 26, 2026
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#9CA3AF",
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                Earned the prestigious 100 Days Badge 2026 on LeetCode,
                demonstrating consistent problem-solving and dedication to
                continuous learning.
              </Typography>

              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: monoFont,
                      fontSize: "10px",
                      color: TEAL_DIM,
                      letterSpacing: ".1em",
                      mb: 1,
                    }}
                  >
                    SOLVED
                  </Typography>
                  <Typography
                    sx={{ fontSize: "28px", fontWeight: 600, color: TEAL }}
                  >
                    245
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
                    Problems
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: monoFont,
                      fontSize: "10px",
                      color: TEAL_DIM,
                      letterSpacing: ".1em",
                      mb: 1,
                    }}
                  >
                    SUBMISSIONS
                  </Typography>
                  <Typography
                    sx={{ fontSize: "28px", fontWeight: 600, color: TEAL }}
                  >
                    409
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
                    YTD
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: monoFont,
                      fontSize: "10px",
                      color: TEAL_DIM,
                      letterSpacing: ".1em",
                      mb: 1,
                    }}
                  >
                    STREAK
                  </Typography>
                  <Typography
                    sx={{ fontSize: "28px", fontWeight: 600, color: TEAL }}
                  >
                    66
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
                    Max Days
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid",
                borderColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                bgcolor: "#000",
              }}
            >
              <Box
                component="img"
                src={LeetCodeBadge}
                alt="LeetCode 100 Days Badge 2026"
                onClick={() => setFullscreen(true)}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  cursor: "pointer",
                  transition: "transform .2s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
              {fullscreen &&
                createPortal(
                  <Box
                    onClick={() => setFullscreen(false)}
                    sx={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: "rgba(0, 0, 0, 0.95)",
                      zIndex: 9999,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      p: 4,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        bgcolor: TEAL_BG,
                        border: `1px solid ${TEAL}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all .2s ease",
                        "&:hover": {
                          bgcolor: TEAL,
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        ×
                      </Typography>
                    </Box>
                    <Box
                      component="img"
                      src={LeetCodeBadge}
                      alt="LeetCode 100 Days Badge 2026"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        maxWidth: "90%",
                        maxHeight: "90%",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>,
                  document.body,
                )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
