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
  Link,
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
import Resume from "./Resume";

const ME = {
  name: "Nikhil Teja",
  title: "Associate Software Engineer @BlueYonder | NITW '24",
  // bio: "Full-stack engineer with a strong foundation in system design and cloud fundamentals (Microsoft Azure AZ-900 certified). Experienced in building high-performance web applications using React.js and Node.js.",
  email: "nikhilteja.ark@gmail.com",
  // phone: "+91 98765 43210",
  location: "Hyderabad, India",
  website: "https://your-website.com",
  socials: {
    github: "https://github.com/NikhilTejaArkanti",
    linkedin: "https://www.linkedin.com/in/nikhiltejaa/",
  },
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQGgDh1z_BfG8g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732861642881?e=1763596800&v=beta&t=HgM2XMqxHrkWKabMY_yiUeqpt7Pvv1svlNHXU2VR-pY",
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

  const renderTitle = () => {
    return (
      <>
        SDE1 @
        <Link
          href="https://en.wikipedia.org/wiki/Blue_Yonder"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: "#FACC15", fontWeight: 500, mx: 0.4 }}
        >
          BlueYonder
        </Link>
        |{" "}
        <Link
          href="https://en.wikipedia.org/wiki/National_Institute_of_Technology,_Warangal"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: "#FACC15", fontWeight: 500, ml: 0.4 }}
        >
          NITW
        </Link>{" "}
        ’24
      </>
    );
  };

  const handleChange = (_: React.SyntheticEvent, v: number) => setTab(v);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pb: 8 }}>
        <Box sx={{ width: "100%", pt: 6, px: { xs: 2, sm: 3 } }}>
          {/* Main layout: sidebar + main content */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
              gap: 4,
            }}
          >
            {/* Left Constant content */}
            <Paper
              sx={{
                position: "sticky",
                top: 16,
                alignSelf: "flex-start",
                width: { xs: "100%", md: 320 },
                maxWidth: "100%",
                maxHeight: "calc(100vh - 32px)",
                overflowY: "auto",
                borderRadius: 3,
                p: 3,
                bgcolor: theme.palette.mode === "dark" ? "#232324" : "#fff",
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
                  {renderTitle()}
                </Typography>
              </Box>

              {/* <Box sx={{ my: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {ME.bio}
                </Typography>
              </Box> */}

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
              </Box>
            </Paper>

            {/* MAIN CONTENT */}
            <Paper
              sx={{
                width: "100%",
                borderRadius: 3,
                p: 0,
                bgcolor: theme.palette.mode === "dark" ? "#232324" : "#fbfbfb",
                boxShadow: (t) => t.shadows[2],
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Header (sticky) */}
              <Box
                sx={{
                  position: "sticky",
                  top: 0,
                  zIndex: 5,
                  px: { xs: 2, sm: 3 },
                  py: 2,
                  bgcolor:
                    theme.palette.mode === "dark" ? "#232324" : "#fbfbfb",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                        minHeight: 0,
                        "& .MuiTabs-flexContainer": { gap: 2, padding: "6px" },
                        "& .MuiTabs-indicator": { display: "none" },
                      }}
                    >
                      {["Resume", "Portfolio", "Contact", "About"].map(
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
                              color:
                                tab === i
                                  ? dark
                                    ? "#FACC15"
                                    : "#111"
                                  : dark
                                  ? "#666"
                                  : "#555",
                              bgcolor:
                                tab === i
                                  ? dark
                                    ? "#171717"
                                    : "#FACC1522"
                                  : "transparent",
                              "&:hover": {
                                bgcolor: dark ? "#151515" : "#f2f2f2",
                                color: dark ? "#FFF" : "#111",
                              },
                              "&.Mui-focusVisible": { outline: "none" },
                              transition: "all 0.18s ease",
                            }}
                          />
                        )
                      )}

                      <Tooltip title={`Toggle ${dark ? "light" : "dark"} mode`}>
                        <IconButton
                          onClick={() => setDark((d) => !d)}
                          color="inherit"
                          size="large"
                        >
                          {dark ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                      </Tooltip>
                    </Tabs>
                  </Box>
                </Box>
              </Box>

              {/* Content area */}
              <Box
                sx={{
                  p: { xs: 2, sm: 4 },
                  width: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                {tab === 0 && (
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 1100,
                      mx: "auto",
                      px: { xs: 1, sm: 2 },
                    }}
                  >
                    <Resume />
                  </Box>
                )}

                {tab === 1 && (
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 1100,
                      mx: "auto",
                      px: { xs: 1, sm: 2 },
                    }}
                  >
                    <Projects />
                  </Box>
                )}

                {tab === 2 && (
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 1100,
                      mx: "auto",
                      px: { xs: 1, sm: 2 },
                    }}
                  >
                    <Panel title="Contact" body="Contact details here." />
                  </Box>
                )}

                {tab === 3 && (
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 1100,
                      mx: "auto",
                      px: { xs: 1, sm: 2 },
                    }}
                  >
                    <AboutMe />
                  </Box>
                )}
              </Box>
            </Paper>
          </Box>
        </Box>
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
