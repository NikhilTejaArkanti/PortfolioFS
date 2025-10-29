// ContactPortfolioNikhil.tsx
import React, { useMemo, useState, type JSX } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Container,
  CssBaseline,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  Tooltip,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

/**
 * ABOUT YOU (replace placeholders as needed)
 */
const ME = {
  name: "Nikhil Teja",
  title: "Frontend Engineer",
  bio: "Frontend engineer focused on building polished React + TypeScript apps, design systems, and developer-friendly tools. I work on productivity tracking, leaderboards, and short-form video tooling. I enjoy performance tuning, simple architectures and mechanical keyboards.",
  email: "nikhil.teja@example.com",
  phone: "+91 98765 43210", // replace or remove
  location: "Hyderabad, India",
  website: "https://your-website.com",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-name",
    twitter: "https://twitter.com/your-handle",
  },
  avatarUrl: "", // replace with a URL if you want a photo
};

export default function LandingPage(): JSX.Element {
  const [dark, setDark] = useState(true);
  const [tab, setTab] = useState(0);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
          primary: { main: "#f2c94c" }, // warm accent
          background: {
            default: dark ? "#0f0f10" : "#f6f7fb",
            paper: dark ? "#0f0f10" : "#fff",
          },
        },
        typography: {
          fontFamily: "Inter, Roboto, Arial, sans-serif",
        },
        components: {
          MuiPaper: {
            defaultProps: { elevation: 0 },
          },
        },
      }),
    [dark]
  );

  const handleChange = (_: React.SyntheticEvent, v: number) => setTab(v);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pb: 8 }}>
        <Container maxWidth="xl" sx={{ pt: 6 }}>
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}></Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Tooltip title={`Toggle ${dark ? "light" : "dark"} mode`}>
                <IconButton
                  onClick={() => setDark((d) => !d)}
                  color="inherit"
                  size="large"
                >
                  {dark ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>

              <Button
                variant="outlined"
                startIcon={<MailOutlineIcon />}
                href="#contact"
                size="small"
              >
                Get in touch
              </Button>
            </Stack>
          </Box>

          {/* Main layout: sidebar + main content */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
              gap: 4,
            }}
          >
            {/* SIDEBAR */}
            <Paper
              sx={{
                borderRadius: 3,
                p: 3,
                minHeight: 420,
                bgcolor: "background.paper",
                boxShadow: (t) => t.shadows[2],
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Avatar
                  src={ME.avatarUrl || undefined}
                  alt={ME.name}
                  sx={{
                    width: 120,
                    height: 120,
                    bgcolor: "primary.main",
                    fontSize: 32,
                    boxShadow: 3,
                  }}
                >
                  {!ME.avatarUrl &&
                    ME.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                </Avatar>
              </Box>

              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {ME.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {ME.title}
                </Typography>
              </Box>

              <Box sx={{ my: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {ME.bio}
                </Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 1.5,
                        display: "grid",
                        placeItems: "center",
                        bgcolor: "background.default",
                      }}
                    >
                      <EmailIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        EMAIL
                      </Typography>
                      <Typography variant="body2">{ME.email}</Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 1.5,
                        display: "grid",
                        placeItems: "center",
                        bgcolor: "background.default",
                      }}
                    >
                      <PhoneAndroidIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        PHONE
                      </Typography>
                      <Typography variant="body2">{ME.phone}</Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 1.5,
                        display: "grid",
                        placeItems: "center",
                        bgcolor: "background.default",
                      }}
                    >
                      <LocationOnIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        LOCATION
                      </Typography>
                      <Typography variant="body2">{ME.location}</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <IconButton
                  aria-label="github"
                  component="a"
                  href={ME.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  aria-label="linkedin"
                  component="a"
                  href={ME.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  color="inherit"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  aria-label="twitter"
                  component="a"
                  href={ME.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  color="inherit"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  aria-label="website"
                  component="a"
                  href={ME.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  color="inherit"
                >
                  <LanguageIcon />
                </IconButton>
              </Box>
            </Paper>

            {/* MAIN CONTENT */}
            <Paper
              sx={{
                borderRadius: 3,
                p: 0,
                bgcolor: "background.paper",
                boxShadow: (t) => t.shadows[2],
              }}
            >
              {/* Header row with title and tabs */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  px: 3,
                  py: 2,
                  borderBottom: "1px solid #1b1b1c",
                }}
              >
                <Box sx={{ flex: 1 }} />

                <Box
                  sx={{
                    alignSelf: "flex-start",
                    borderRadius: "16px",
                    overflow: "hidden",
                    bgcolor: "transparent",
                  }}
                >
                  <Tabs
                    value={tab}
                    onChange={handleChange}
                    aria-label="top-right tabs"
                    sx={{
                      minHeight: 48,
                      "& .MuiTabs-flexContainer": { gap: 2, padding: "6px" },
                      "& .MuiTabs-indicator": { display: "none" },
                    }}
                  >
                    {["About", "Resume", "Portfolio", "Blog", "Contact"].map(
                      (label, i) => (
                        <Tab
                          key={label}
                          label={label}
                          value={i}
                          sx={{
                            textTransform: "none",
                            minWidth: 0,
                            px: 2.2,
                            py: 1,
                            borderRadius: "12px",
                            fontWeight: 600,
                            fontSize: 14,
                            color: tab === i ? "#FACC15" : "#ccc",
                            bgcolor: tab === i ? "#171717" : "transparent",
                            "&:hover": { bgcolor: "#151515" },
                          }}
                        />
                      )
                    )}
                  </Tabs>
                </Box>
              </Box>

              <Box sx={{ p: 4 }}>
                {tab === 0 && <AboutMe />}
                {tab === 1 && (
                  <Panel title="Resume" body="Resume content goes here." />
                )}
                {tab === 2 && <Projects />}
                {tab === 3 && (
                  <Panel title="Blog" body="Blog list / posts here." />
                )}
                {tab === 4 && (
                  <Panel title="Contact" body="Contact details here." />
                )}
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

function Panel({ title, body }: { title: string; body: string }) {
  return (
    <Box>
      <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700, mb: 2 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#cbd5e1" }}>{body}</Typography>
      {/* replace above with your real content */}
    </Box>
  );
}
