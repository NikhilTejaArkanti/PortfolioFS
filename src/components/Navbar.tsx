import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";

const TEAL = "#1D9E75";
const monoFont = "'DM Mono', 'Roboto Mono', monospace";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Life", href: "/life" },
];

const PROFILE_ITEMS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhiltejaa/",
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/user8863Hi/",
    icon: <CodeIcon fontSize="small" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/NikhilTejaArkanti",
    icon: <GitHubIcon fontSize="small" />,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
          transition: "all 0.3s ease",
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
          {/* LOGO */}
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

          {/* DESKTOP NAV */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "32px",
              alignItems: "center",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
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
                    "&:hover": { color: TEAL },
                  }}
                >
                  {item.label}
                </Box>
              );
            })}

            {/* PROFILES */}
            <Box ref={profileRef} sx={{ position: "relative" }}>
              <Box
                onClick={() => setProfileOpen(!profileOpen)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  fontFamily: monoFont,
                  fontSize: "11.5px",
                  color: "#fff",
                  "&:hover": { color: TEAL },
                }}
              >
                <span>Profiles</span>
                <Box
                  sx={{
                    fontSize: "10px",
                    transition: "transform 0.2s ease",
                    transform: profileOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  ▼
                </Box>
              </Box>

              {profileOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "150%",
                    right: 0,
                    bgcolor: "#111",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    minWidth: "160px",
                    overflow: "hidden",
                  }}
                >
                  {PROFILE_ITEMS.map((item) => (
                    <Box
                      key={item.label}
                      component="a"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        px: "16px",
                        py: "10px",
                        fontFamily: monoFont,
                        fontSize: "12px",
                        color: "#fff",
                        textDecoration: "none",
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.05)",
                          color: TEAL,
                        },
                      }}
                    >
                      <Box sx={{ color: "inherit", display: "flex" }}>
                        {item.icon}
                      </Box>
                      {item.label}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            {/* CTA */}
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
                "&:hover": { bgcolor: TEAL, color: "#fff" },
              }}
            >
              LET'S TALK →
            </Box>
          </Box>

          {/* MOBILE BUTTON */}
          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ display: { xs: "block", md: "none" }, color: TEAL }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Box>

      {/* MOBILE MENU */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.98)",
          zIndex: 999,
          display: { xs: mobileOpen ? "flex" : "none", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <Box
            key={item.label}
            component={Link}
            to={item.href}
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
        ))}

        {PROFILE_ITEMS.map((item) => (
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
        ))}

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