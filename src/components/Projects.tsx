import {
  Stack,
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  Chip,
  CardActions,
  Button,
} from "@mui/material";

export default function Projects() {
  /**
   * Projects / work samples (tailored to what you've told me)
   */
  const PROJECTS = [
    {
      id: "taskflow",
      title: "TaskFlow — Productivity Tracker",
      desc: "Invite-only productivity tracker with group leaderboards, point system and custom filters. Built with React, TypeScript and Express. Integrates Google auth for sign-in.",
      tech: ["React", "TypeScript", "Express", "MongoDB"],
      link: "#",
    },
    {
      id: "reelgrab",
      title: "ReelGrab — Short-form Video Pipeline",
      desc: "Automated pipeline that scrapes public short-form videos, processes metadata and uploads to cloud storage. Uses yt-dlp and cloud storage APIs.",
      tech: ["Node.js", "yt-dlp", "Google Drive API"],
      link: "#",
    },
    {
      id: "design-playground",
      title: "Design System Playground",
      desc: "Living component library and design tokens system with Storybook and visual regression checks.",
      tech: ["Storybook", "Tailwind", "React"],
      link: "#",
    },
  ];

  return (
    <Paper
      sx={{
        borderRadius: 3,
        p: 3,
        minHeight: 420,
        bgcolor: "background.paper",
        boxShadow: (t) => t.shadows[2],
      }}
    >
      {/* Projects */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Selected work
      </Typography>

      <Box sx={{ display: "grid", gap: 2 }}>
        {PROJECTS.map((pr) => (
          <Card key={pr.id} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {pr.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {pr.desc}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {pr.tech.map((t) => (
                  <Chip key={t} size="small" label={t} variant="outlined" />
                ))}
              </Stack>
            </CardContent>

            <CardActions>
              <Button size="small" href={pr.link}>
                View
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Paper>
  );
}
