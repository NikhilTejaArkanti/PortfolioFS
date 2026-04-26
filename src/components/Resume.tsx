import React from "react";
import { Box, Typography, Paper, IconButton, Stack, Chip } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import resumePdf from "../assets/NikhilTeja_Avoca_DE.pdf";

const EXPERIENCE = [
  {
    title: "Associate Software Engineer · Blue Yonder",
    date: "07/2024 to Present",
    location: "Hyderabad, India",
    bullets: [
      "Deployed and maintained production backend services (NestJS, Node.js, Python) on Azure; owned the full deployment lifecycle.",
      "Diagnosed and resolved production incidents using Azure Application Insights and structured logging; performed deep root-cause analysis across distributed API layers and async pipelines.",
      "Operated an AI Document Intelligence platform (GPT-4o, Azure Document Intelligence, RAG, pgvector); resolved LLM parsing and embedding issues in production.",
      "Co-led API design and PostgreSQL schema discussions; implemented GitHub Actions CI/CD and production monitoring.",
    ],
  },
  {
    title: "Associate Software Engineer Intern · Blue Yonder",
    date: "01/2024 to 07/2024",
    location: "Hyderabad, India",
    bullets: [
      "Built and integrated full-stack web services (Node.js, Express.js, React.js) across the SDLC.",
      "Provisioned cloud-native environments on AWS ECS and ran performance/load tests in CI/CD.",
      "Participated in Agile sprints, code reviews, and architectural discussions.",
    ],
  },
];

const PROJECTS = [
  {
    title: "AI Document Intelligence Agent",
    tech: "Python · Node.js · NestJS · PostgreSQL · pgvector · Azure · GPT-4o · RAG",
    bullets: [
      "Designed and deployed a production GenAI microservices platform with REST APIs and pgvector-based retrieval; adopted across 12 internal teams.",
      "Debugged malformed structured responses and tuned prompts for strict JSON schema compliance.",
      "Optimized RAG throughput by batching embeddings and parallelizing ingestion, reducing latency by ~60%.",
    ],
  },
  {
    title: "DocSight: Document Intelligence Chat Platform",
    tech: "Node.js · Express.js · React.js · PostgreSQL · pgvector",
    bullets: [
      "Built end-to-end RAG chat with backend text extraction, chunking, and per-chunk embeddings.",
      "Implemented semantic search and integrated LLM answer generation into a conversational UI.",
    ],
  },
  {
    title: "Nomad.AI — Remote Job Discovery (Self-founded)",
    tech: "Next.js · React · Node.js · Google Analytics · Adsterra",
    bullets: [
      "Designed and launched an SEO-optimized job discovery platform; grew initial traction via automated growth workflows.",
    ],
  },
];

const SKILLS = {
  Deployment: [
    "Azure (App Insights, Document Intelligence)",
    "AWS (S3, ECS)",
    "GitHub Actions CI/CD",
    "Docker",
  ],
  Systems: [
    "Microservices",
    "REST APIs",
    "Async Processing",
    "Scalability Patterns",
  ],
  LLM: ["GPT-4o", "RAG pipelines", "Prompt Engineering", "pgvector"],
  Languages: ["Node.js", "NestJS", "Python", "TypeScript"],
};

export default function Resume() {
  return (
    <Box>
      <Typography sx={{ color: "#d1d5db", mb: 2 }}>
        Deployment Engineer · LLM Integration · Distributed Systems · API
        Debugging · Root-Cause Analysis
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        sx={{ mb: 3, gap: 2 }}
      >
        <Box>
          <Typography sx={{ color: "#cbd5e1" }}>NIT Warangal</Typography>
          <Typography sx={{ color: "#cbd5e1" }}>
            nikhilteja.ark@gmail.com · +91 7674934065 · Hyderabad, India
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            component="a"
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            aria-label="Download resume"
            sx={{
              bgcolor: "primary.main",
              color: "#000",
              width: 48,
              height: 48,
              borderRadius: 2,
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            <DownloadIcon />
          </IconButton>
        </Box>
      </Stack>

      <Paper
        sx={{ p: 3, bgcolor: "#0f0f10", border: "1px solid #1b1b1c", mb: 3 }}
      >
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, mb: 1 }}>
          Professional summary
        </Typography>
        <Typography sx={{ color: "#d1d5db", lineHeight: 1.6 }}>
          Backend & Full Stack Engineer with 2+ years deploying and operating
          microservices on Azure and AWS. Experienced in end-to-end LLM-powered
          application delivery across RAG pipelines, GPT-4o integrations, and
          vector-store-backed AI systems, with a strong track record of
          root-cause analysis across distributed APIs and cloud infrastructure.
          US client-facing, startup mindset, delivery-focused.
        </Typography>
      </Paper>

      <Box sx={{ display: "grid", gap: 3 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontWeight: 700, mb: 1 }}
          >
            Work experience
          </Typography>
          <Stack spacing={2}>
            {EXPERIENCE.map((e) => (
              <Paper
                key={e.title}
                sx={{ p: 2, bgcolor: "#0f0f10", border: "1px solid #1b1b1c" }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box>
                    <Typography sx={{ color: "#fff", fontWeight: 700 }}>
                      {e.title}
                    </Typography>
                    <Typography sx={{ color: "#9ca3af", fontSize: 13 }}>
                      {e.date} · {e.location}
                    </Typography>
                  </Box>
                </Stack>
                <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                  {e.bullets.map((b, i) => (
                    <li key={i}>
                      <Typography sx={{ color: "#d1d5db" }}>{b}</Typography>
                    </li>
                  ))}
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontWeight: 700, mb: 1 }}
          >
            Key projects
          </Typography>
          <Stack spacing={2}>
            {PROJECTS.map((p) => (
              <Paper
                key={p.title}
                sx={{ p: 2, bgcolor: "#0f0f10", border: "1px solid #1b1b1c" }}
              >
                <Typography sx={{ color: "#fff", fontWeight: 700 }}>
                  {p.title}
                </Typography>
                <Typography sx={{ color: "#9ca3af", fontSize: 13 }}>
                  {p.tech}
                </Typography>
                <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                  {p.bullets.map((b, i) => (
                    <li key={i}>
                      <Typography sx={{ color: "#d1d5db" }}>{b}</Typography>
                    </li>
                  ))}
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontWeight: 700, mb: 1 }}
          >
            Technical skills
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {Object.entries(SKILLS).map(([k, vals]) => (
              <Box key={k} sx={{ mr: 2 }}>
                <Typography sx={{ color: "#cbd5e1", fontWeight: 700 }}>
                  {k}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
                  {(vals as string[]).map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      size="small"
                      sx={{
                        bgcolor: "#121212",
                        color: "#e6e6e6",
                        border: "1px solid #1b1b1c",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontWeight: 700, mb: 1 }}
          >
            Education
          </Typography>
          <Paper sx={{ p: 2, bgcolor: "#0f0f10", border: "1px solid #1b1b1c" }}>
            <Typography sx={{ color: "#fff", fontWeight: 700 }}>
              B.Tech: Electrical & Electronics Engineering
            </Typography>
            <Typography sx={{ color: "#9ca3af" }}>
              Graduated: May 2024 — National Institute of Technology Warangal
              (NIT Warangal)
            </Typography>
          </Paper>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontWeight: 700, mb: 1 }}
          >
            Certifications
          </Typography>
          <Paper sx={{ p: 2, bgcolor: "#0f0f10", border: "1px solid #1b1b1c" }}>
            <ul>
              <li>
                <Typography sx={{ color: "#d1d5db" }}>
                  Microsoft Certified: Azure Fundamentals (AZ-900)
                </Typography>
              </li>
              <li>
                <Typography sx={{ color: "#d1d5db" }}>
                  Microsoft Certified: Azure Administrator Associate (AZ-104) —
                  in progress
                </Typography>
              </li>
            </ul>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
