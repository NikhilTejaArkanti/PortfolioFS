import { Box, Typography, Paper, Card, CardContent } from "@mui/material";

export default function AboutMe() {
  const tech = [
    "React",
    "TypeScript",
    "Node.js / Express",
    "Next.js",
    "Redux / Zustand",
    "MUI / Tailwind",
    "MongoDB / MySQL",
    "Azure (AZ-900)",
    "Framer Motion",
    "REST & GraphQL",
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "16px 16px 0 0",
        overflow: "hidden",
      }}
    >
      <Box sx={{ p: 4 }}>
        <Box
          sx={{
            width: 50,
            borderRadius: 2,
          }}
        />
        {/* //demo */}
        <Typography variant="body1">
          I build full-stack web applications with a focus on clean frontend
          experience and reliable backend systems. My main stack is React +
          TypeScript for UI and Node/Express for services. I enjoy improving
          user experience through clear component structure, predictable state
          management, and small, testable APIs. On the backend I work with both
          MongoDB and MySQL and have experience integrating third-party services
          including Salesforce and other REST APIs. I also maintain a growing
          knowledge of cloud fundamentals on Azure.
        </Typography>
        <Typography variant="body2" sx={{ maxWidth: 800, lineHeight: 1.7 }}>
          I like solving practical problems — automating repetitive tasks,
          improving reliability, and making interfaces that are pleasant to use.
          I prefer straightforward, maintainable code over cleverness, and I try
          to keep performance and accessibility in mind while shipping features.
        </Typography>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight="600" mb={2}>
          Skills
        </Typography>
        <Box sx={{ maxWidth: 800 }}>
          {tech.map((t) => (
            <Box key={t}>
              <Paper
                elevation={1}
                sx={{
                  borderRadius: 2,
                  textAlign: "center",
                  py: 1,
                  fontSize: 14,
                }}
              >
                {t}
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          mt: 3,
        }}
      >
        <InfoCard
          title="Web Development"
          desc="Building responsive React apps and Next.js sites. Focus on performance, accessibility and clear component design."
        />
        <InfoCard
          title="Backend & APIs"
          desc="Designing RESTful services in Node.js/Express, integrating third-party APIs and ensuring reliability."
        />
        <InfoCard
          title="UI/UX & Frontend"
          desc="Polished UI using TypeScript, MUI or Tailwind, with attention to interaction and micro-animations."
        />
        <InfoCard
          title="Automation & Cloud"
          desc="Automating workflows, CI/CD basics and Azure fundamentals (AZ-900)."
        />
      </Box>
    </Paper>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Box>
      <Card
        sx={{
          border: "1px solid #1b1b1c",
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
