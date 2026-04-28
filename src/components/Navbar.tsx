import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const TEAL = "#1D9E75";
const monoFont = "'DM Mono', 'Roboto Mono', monospace";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code"; // for LeetCode (no official icon in MUI)

const NAV_ITEMS = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Life", href: "/life" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhiltejaa/",
    external: true,
    icon: <LinkedInIcon />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/user8863Hi/",
    external: true,
    icon: <CodeIcon />,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          bgcolor: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          borderBottom: scrolled ? "0.5px solid" : "none",
          borderColor: "divider",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: "20px", md: "40px" },
            py: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="a"
            href="#home"
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                bgcolor: TEAL,
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <Typography
              sx={{
                fontFamily: monoFont,
                fontSize: "14px",
                color: "#fff",
                letterSpacing: ".05em",
                fontWeight: 500,
              }}
            >
              PORTFOLIO
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "32px",
              alignItems: "center",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                !item.external && location.pathname === item.href;
              if (item.external) {
                return (
                  <Box
                    key={item.label}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                      transition: "color .2s ease",
                      "&:hover": { color: TEAL },
                    }}
                  >
                    {item.icon ? item.icon : item.label}
                  </Box>
                );
              }
              return (
                <Box
                  key={item.label}
                  component={Link}
                  to={item.href}
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "11.5px",
                    color: isActive ? TEAL : "#fff",
                    textDecoration: "none",
                    position: "relative",
                    transition: "color .2s ease",
                    fontWeight: isActive ? 600 : 400,
                    "&:hover": { color: TEAL },
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
            <Box
              component="a"
              href="mailto:nikhilteja.ark@gmail.com"
              sx={{
                fontFamily: monoFont,
                fontSize: "11px",
                color: TEAL,
                px: "16px",
                py: "8px",
                border: `0.5px solid ${TEAL}`,
                borderRadius: "4px",
                textDecoration: "none",
                transition: "all .2s ease",
                "&:hover": { bgcolor: TEAL, color: "#fff" },
              }}
            >
              LET'S TALK →
            </Box>
          </Box>

          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ display: { xs: "block", md: "none" }, color: TEAL }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "rgba(0, 0, 0, 0.98)",
          zIndex: 999,
          display: { xs: mobileOpen ? "flex" : "none", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = !item.external && location.pathname === item.href;
          if (item.external) {
            return (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                sx={{
                  fontFamily: monoFont,
                  fontSize: "18px",
                  color: "#fff",
                  textDecoration: "none",
                  "&:hover": { color: TEAL },
                }}
              >
                {item.label}
              </Box>
            );
          }
          return (
            <Box
              key={item.label}
              component={Link}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              sx={{
                fontFamily: monoFont,
                fontSize: "18px",
                color: isActive ? TEAL : "#fff",
                textDecoration: "none",
                fontWeight: isActive ? 600 : 400,
                "&:hover": { color: TEAL },
              }}
            >
              {item.label}
            </Box>
          );
        })}
        <Box
          component="a"
          href="mailto:nikhilteja.ark@gmail.com"
          onClick={() => setMobileOpen(false)}
          sx={{
            fontFamily: monoFont,
            fontSize: "14px",
            color: TEAL,
            px: "24px",
            py: "12px",
            border: `0.5px solid ${TEAL}`,
            borderRadius: "4px",
            textDecoration: "none",
            "&:hover": { bgcolor: TEAL, color: "#fff" },
          }}
        >
          LET'S TALK →
        </Box>
      </Box>

      <Box sx={{ height: "70px" }} />
    </>
  );
}
