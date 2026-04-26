import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

// ─── Data ────────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  "Blueprint Intake Pack Agent · Multi-section doc generation · FastAPI + NestJS",
  "AZ-104 Azure Administrator cert",
  "RAG pipeline optimisation · pgvector + GPT-4o",
  "Open to remote USD roles · Full Stack / AI Engineer",
];

type FilterKey = "all" | "ai" | "fullstack" | "automation" | "infra";

const FILTERS: { label: string; value: FilterKey }[] = [
  { label: "All", value: "all" },
  { label: "AI / RAG", value: "ai" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Automation", value: "automation" },
  { label: "Cloud / Infra", value: "infra" },
];

interface Project {
  id: string;
  kind: "project" | "stat" | "cert" | "cloud";
  size: "sm" | "md" | "lg" | "hero" | "tall";
  tags: FilterKey[];
  num?: string;
  badge?: string;
  badgeVariant?: "live" | "default";
  title: string;
  desc?: string;
  tech?: string[];
  stat?: { value: string; label: string };
  impact?: string;
  link?: string;
  linkLabel?: string;
}

const PROJECTS: Project[] = [
  {
    id: "doc-intel",
    kind: "project",
    size: "lg",
    tags: ["ai", "infra"],
    num: "01 · PRODUCTION",
    badge: undefined,
    title: "AI Document Intelligence Agent",
    desc: "Production GenAI microservices platform. REST APIs + pgvector retrieval. Adopted across 12 internal teams at Blue Yonder. Resolved LLM parsing bugs, tuned prompts for strict JSON schema compliance.",
    tech: ["GPT-4o", "RAG", "pgvector", "NestJS", "Azure", "Python"],
    impact: "~60% latency reduction",
    link: "#",
    linkLabel: "VIEW →",
  },
  {
    id: "doc-intel-stat",
    kind: "stat",
    size: "tall",
    tags: ["ai"],
    title: "REACH",
    stat: { value: "12", label: "internal teams adopted the platform" },
    tech: ["Blue Yonder · 2024"],
  },
  {
    id: "blueprint",
    kind: "project",
    size: "hero",
    tags: ["ai", "fullstack"],
    badge: "live",
    title: "Blueprint Intake Pack Agent",
    desc: "Multi-section document generation pipeline. SQL data + RAG-retrieved artefacts. Solved a critical token overflow bug from inline JSON schemas in SQL agent prompts. Section-by-section generation with FastAPI/NestJS backend.",
    tech: ["FastAPI", "NestJS", "RAG", "Azure SQL", "GPT-4o"],
    impact: "WIP · 2025",
  },
  {
    id: "docsight",
    kind: "project",
    size: "hero",
    tags: ["ai", "fullstack"],
    num: "02",
    title: "DocSight — Document Intelligence Chat",
    desc: "End-to-end RAG chat platform. Backend text extraction, chunking, per-chunk embeddings, semantic search, LLM answer generation. Conversational UI over your own documents.",
    tech: ["Node.js", "React", "pgvector", "PostgreSQL"],
    link: "#",
    linkLabel: "VIEW →",
  },
  {
    id: "linkedin-stat",
    kind: "stat",
    size: "tall",
    tags: ["automation"],
    title: "AUTOMATION",
    stat: {
      value: "Stealth",
      label: "human-like bot with anti-detect & ChatGPT form-fill",
    },
    tech: ["Puppeteer · Node.js"],
  },
  {
    id: "linkedin-bot",
    kind: "project",
    size: "lg",
    tags: ["automation", "fullstack"],
    num: "03 · AUTOMATION",
    title: "LinkedIn Auto-Apply Bot",
    desc: "Node.js + Puppeteer stealth bot. Human-like typing and mouse simulation. ChatGPT browser tab integration for intelligent form-field answering. JSON-based job status tracker.",
    tech: ["Puppeteer", "Node.js", "ChatGPT API", "Stealth plugin"],
  },
  {
    id: "reddit-bot",
    kind: "project",
    size: "md",
    tags: ["automation"],
    num: "04 · AUTOMATION",
    title: "Reddit DM Monetisation Bot",
    desc: "Playwright · Google Sheets · Telegram alerts · node-cron scheduler. Ad smartlink DM automation.",
    tech: ["Playwright", "Google Sheets", "Telegram"],
  },
  {
    id: "nomad",
    kind: "project",
    size: "md",
    tags: ["fullstack"],
    num: "05 · SELF-FOUNDED",
    title: "Nomad.AI — Remote Job Discovery",
    desc: "SEO-optimised job discovery platform. Automated growth workflows. Google Analytics + Adsterra integration.",
    tech: ["Next.js", "React", "Node.js"],
    link: "#",
    linkLabel: "LIVE →",
  },
  {
    id: "azure-ops",
    kind: "cloud",
    size: "sm",
    tags: ["infra"],
    title: "Azure Production Ops",
    desc: "App Insights · Blob · Doc Intelligence · CI/CD",
  },
  {
    id: "az900",
    kind: "cert",
    size: "sm",
    tags: ["infra"],
    title: "AZ-900 Certified",
    desc: "AZ-104 in progress →",
    tech: ["Microsoft Azure"],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const TEAL = "#1D9E75";
const TEAL_DIM = "#5DCAA5";
const TEAL_BG = "#0a2a1e";
const TEAL_BG2 = "#0d3320";

const monoFont = "'DM Mono', 'Roboto Mono', monospace";

function Tag({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <Box
      component="span"
      sx={{
        fontFamily: monoFont,
        fontSize: "9.5px",
        px: "6px",
        py: "2px",
        border: "0.5px solid",
        borderColor: accent ? TEAL : "divider",
        borderRadius: "2px",
        bgcolor: accent ? TEAL_BG2 : "background.default",
        color: accent ? TEAL_DIM : "text.secondary",
        display: "inline-block",
      }}
    >
      {label}
    </Box>
  );
}

function LiveDot() {
  return (
    <Box
      sx={{
        width: 7,
        height: 7,
        borderRadius: "50%",
        bgcolor: TEAL,
        flexShrink: 0,
        "@keyframes livePulse": {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.25 },
        },
        animation: "livePulse 1.5s ease-in-out infinite",
      }}
    />
  );
}

// ─── Size → grid span map ─────────────────────────────────────────────────────

const SIZE_STYLES: Record<Project["size"], object> = {
  sm: { gridColumn: "span 2", gridRow: "span 1" },
  md: { gridColumn: "span 3", gridRow: "span 1" },
  lg: { gridColumn: "span 4", gridRow: "span 2" },
  hero: { gridColumn: "span 3", gridRow: "span 2" },
  tall: { gridColumn: "span 2", gridRow: "span 2" },
};

// ─── Single Tile ──────────────────────────────────────────────────────────────

function Tile({ p, accent }: { p: Project; accent?: boolean }) {
  const isAccent = accent || (p.kind === "project" && p.id === "doc-intel");

  return (
    <Box
      sx={{
        ...SIZE_STYLES[p.size],
        border: "0.5px solid",
        borderColor: isAccent ? TEAL : "divider",
        borderRadius: "10px",
        p: "18px",
        bgcolor: isAccent ? TEAL_BG : "background.default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "default",
        transition: "border-color .2s, transform .2s",
        overflow: "hidden",
        "&:hover": {
          borderColor: TEAL,
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* ── Stat tile ── */}
      {p.kind === "stat" && p.stat && (
        <>
          <Typography
            sx={{
              fontFamily: monoFont,
              fontSize: "10px",
              color: "text.secondary",
              opacity: 0.5,
            }}
          >
            {p.title}
          </Typography>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: monoFont,
                fontSize: p.stat.value.length > 4 ? "22px" : "28px",
                fontWeight: 500,
                color: TEAL,
                lineHeight: 1,
              }}
            >
              {p.stat.value}
            </Typography>
            <Typography
              sx={{ fontSize: "11px", color: "text.secondary", mt: "4px" }}
            >
              {p.stat.label}
            </Typography>
          </Box>
          {p.tech && <Tag label={p.tech[0]} />}
        </>
      )}

      {/* ── Cert tile ── */}
      {p.kind === "cert" && (
        <>
          <Typography
            sx={{
              fontFamily: monoFont,
              fontSize: "10px",
              color: "text.secondary",
              opacity: 0.5,
            }}
          >
            CERT
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
            {p.title}
          </Typography>
          <Typography sx={{ fontSize: "11px", color: "text.secondary" }}>
            {p.desc}
          </Typography>
          <Box sx={{ mt: "6px" }}>
            <Tag label="Microsoft Azure" accent />
          </Box>
        </>
      )}

      {/* ── Cloud tile ── */}
      {p.kind === "cloud" && (
        <>
          <Typography
            sx={{
              fontFamily: monoFont,
              fontSize: "10px",
              color: "text.secondary",
              opacity: 0.5,
            }}
          >
            CLOUD
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
            {p.title}
          </Typography>
          <Typography sx={{ fontSize: "11px", color: "text.secondary" }}>
            {p.desc}
          </Typography>
        </>
      )}

      {/* ── Project tile ── */}
      {p.kind === "project" && (
        <>
          <Box>
            {/* Badge row */}
            {p.badge === "live" ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  mb: "6px",
                }}
              >
                <LiveDot />
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "9px",
                    color: TEAL,
                    letterSpacing: ".08em",
                  }}
                >
                  CURRENTLY BUILDING
                </Typography>
              </Box>
            ) : p.num ? (
              <Typography
                sx={{
                  fontFamily: monoFont,
                  fontSize: "10px",
                  color: "text.secondary",
                  opacity: 0.5,
                  mb: "4px",
                }}
              >
                {p.num}
              </Typography>
            ) : null}

            <Typography
              sx={{
                fontSize: p.size === "lg" ? "17px" : "14px",
                fontWeight: 500,
                lineHeight: 1.35,
              }}
            >
              {p.title}
            </Typography>

            {p.desc && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "text.secondary",
                  lineHeight: 1.55,
                  mt: "6px",
                }}
              >
                {p.desc}
              </Typography>
            )}

            {p.tech && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px",
                  mt: "8px",
                }}
              >
                {p.tech.map((t) => (
                  <Tag key={t} label={t} accent={isAccent} />
                ))}
              </Box>
            )}
          </Box>

          {(p.impact || p.link) && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: "auto",
                pt: "8px",
              }}
            >
              {p.impact && (
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "11px",
                    color: TEAL_DIM,
                    fontWeight: 500,
                  }}
                >
                  {p.impact}
                </Typography>
              )}
              {p.link && (
                <Typography
                  component="a"
                  href={p.link}
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "10px",
                    color: TEAL,
                    textDecoration: "none",
                    letterSpacing: ".05em",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {p.linkLabel || "VIEW →"}
                </Typography>
              )}
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        mb: "20px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          fontFamily: monoFont,
          fontSize: "10px",
          letterSpacing: ".1em",
          color: TEAL,
          whiteSpace: "nowrap",
          px: "8px",
          py: "3px",
          border: `0.5px solid ${TEAL}`,
          borderRadius: "2px",
          flexShrink: 0,
        }}
      >
        NOW BUILDING
      </Box>
      <Box sx={{ overflow: "hidden", flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            whiteSpace: "nowrap",
            "@keyframes ticker": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
            animation: "ticker 18s linear infinite",
          }}
        >
          {doubled.map((item, i) => (
            <Typography
              key={i}
              component="span"
              sx={{
                fontFamily: monoFont,
                fontSize: "11px",
                color: "text.secondary",
                flexShrink: 0,
              }}
            >
              <Box component="span" sx={{ color: TEAL, mr: "4px" }}>
                →
              </Box>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Projects() {
  const [active, setActive] = useState<FilterKey>("all");

  const visible = PROJECTS.filter(
    (p) => active === "all" || p.tags.includes(active),
  );

  return (
    <Box>
      <Ticker />

      {/* Filter bar */}
      <Box sx={{ display: "flex", gap: "6px", flexWrap: "wrap", mb: "20px" }}>
        {FILTERS.map((f) => (
          <Box
            key={f.value}
            onClick={() => setActive(f.value)}
            sx={{
              fontFamily: monoFont,
              fontSize: "10.5px",
              px: "10px",
              py: "4px",
              border: "0.5px solid",
              borderColor: active === f.value ? TEAL : "divider",
              borderRadius: "20px",
              cursor: "pointer",
              bgcolor: active === f.value ? TEAL : "background.default",
              color: active === f.value ? "#fff" : "text.secondary",
              transition: "all .15s",
              userSelect: "none",
              "&:hover": {
                borderColor: TEAL,
                color: active === f.value ? "#fff" : TEAL,
              },
            }}
          >
            {f.label}
          </Box>
        ))}
      </Box>

      {/* Bento grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridAutoRows: "140px",
          gap: "10px",
        }}
      >
        {visible.map((p) => (
          <Tile key={p.id} p={p} />
        ))}
      </Box>

      {visible.length === 0 && (
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: "13px",
            py: "2rem",
          }}
        >
          No projects match this filter.
        </Typography>
      )}
    </Box>
  );
}
