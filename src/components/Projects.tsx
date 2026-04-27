import React, { useState } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { createPortal } from "react-dom";
import AzureCert from "../assets/AZ900.png";

// ─── Data ────────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  "AZ-104 Azure Administrator cert",
  "RAG pipeline optimisation · pgvector + GPT-5",
  "Full Stack / AI Engineer",
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
  problem?: string;
  solution?: string;
  impact?: string;
  desc?: string;
  tech?: string[];
  stat?: { value: string; label: string };
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
    problem:
      "Pre-sales team spent 2 weeks analyzing year-long transcripts, meetings, company info, " +
      "and SOW documents to generate blueprint documents. Multiple individuals' time consumed per project.",
    solution:
      "Built production GenAI microservices on Azure with Python/Node.js, REST APIs, PostgreSQL + pgvector. " +
      "Agent processes documents in under 10 minutes, generates blueprint in UI for consultant review and export. " +
      "Fixed LLM JSON parsing, tuned prompts, parallelized ingestion.",
    impact:
      "~99% time reduction (2 weeks → 10 mins) · 12 teams and counting at Blue Yonder",
    tech: [
      "Python",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "pgvector",
      "Azure",
      "Claude Sonnet",
      "RAG",
    ],
  },
  // {
  //   id: "doc-intel-stat",
  //   kind: "stat",
  //   size: "tall",
  //   tags: ["ai"],
  //   title: "REACH",
  //   stat: { value: "12+", label: "internal teams adopted the platform" },
  //   tech: ["Blue Yonder · 2026"],
  // },
  {
    id: "docsight",
    kind: "project",
    size: "hero",
    tags: ["ai", "fullstack"],
    num: "02",
    title: "DocSight — Document Intelligence Chat",
    problem:
      "Users struggle to extract insights from large PDF documents manually.",
    solution:
      "End-to-end RAG system with React + Express.js. Text extraction, chunking, embeddings in pgvector. " +
      "Semantic search via cosine similarity. LLM answer generation in conversational UI.",
    impact: "Document-grounded QA system · Zero hallucination responses",
    tech: [
      "Node.js",
      "Express.js",
      "React",
      "PostgreSQL",
      "pgvector",
      "OpenAI API",
      "RAG",
    ],
    link: "#",
    linkLabel: "VIEW →",
  },
  // {
  //   id: "linkedin-stat",
  //   kind: "stat",
  //   size: "tall",
  //   tags: ["automation"],
  //   title: "AUTOMATION",
  //   stat: {
  //     value: "Stealth",
  //     label: "human-like bot with anti-detect & ChatGPT form-fill",
  //   },
  //   tech: ["Puppeteer · Node.js"],
  // },
  {
    id: "nomad",
    kind: "project",
    size: "md",
    tags: ["fullstack", "automation"],
    num: "03 · SELF-FOUNDED",
    title: "Nomad.AI — Remote Job Discovery",
    problem:
      "Remote job seekers struggle to find curated, high-quality listings in one place.",
    solution:
      "SEO-optimized Next.js platform with Adsterra monetization. Node.js Reddit automation scraped threads, " +
      "extracted engaged users, sent personalized DMs with job links.",
    impact: "560+ unique users in 2 weeks · Full product lifecycle ownership",
    tech: ["Next.js", "React", "Node.js", "Google Analytics", "Adsterra"],
    link: "#",
    linkLabel: "LIVE →",
  },
  // {
  //   id: "azure-ops",
  //   kind: "cloud",
  //   size: "sm",
  //   tags: ["infra"],
  //   title: "Azure Production Ops",
  //   desc: "App Insights · Blob · Doc Intelligence · CI/CD",
  // },
  {
    id: "az900",
    kind: "cert",
    size: "sm",
    tags: ["infra"],
    title: "AZ-900 Certified",
    desc: "",
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
        fontSize: "11px",
        px: "6px",
        py: "2px",
        border: "0.5px solid",
        borderColor: accent ? TEAL : "divider",
        borderRadius: "2px",
        bgcolor: accent ? TEAL_BG2 : "background.default",
        color: accent ? TEAL_DIM : "text.secondary",
        display: "inline-block",
        transition: "all .2s ease",
        "&:hover": {
          borderColor: TEAL,
          color: accent ? "#fff" : TEAL,
          transform: "scale(1.05)",
        },
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
  sm: {
    width: "100%",
  },
  md: {
    width: "100%",
  },
  lg: {
    width: "100%",
  },
  hero: {
    width: "100%",
  },
  tall: {
    width: "100%",
  },
};

// ─── Single Tile ──────────────────────────────────────────────────────────────

function Tile({ p, accent }: { p: Project; accent?: boolean }) {
  const isAccent = accent;
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <Box
      sx={{
        ...SIZE_STYLES[p.size],
        border: "0.5px solid",
        borderColor: isAccent ? TEAL : "divider",
        borderRadius: "10px",
        p: "20px",
        minHeight: "200px",
        bgcolor: isAccent ? TEAL_BG : "background.default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "default",
        transition: "all .3s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
        position: "relative",
        "&:hover": {
          borderColor: TEAL,
          transform: "translateY(-4px)",
          boxShadow: `0 8px 24px -4px ${isAccent ? TEAL + "40" : "rgba(0,0,0,0.2)"}`,
        },
        "&::before": isAccent
          ? {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${TEAL}, transparent)`,
              opacity: 0.5,
            }
          : {},
      }}
    >
      {/* ── Stat tile ── */}
      {p.kind === "stat" && p.stat && (
        <>
          <Typography
            sx={{
              fontFamily: monoFont,
              fontSize: "11px",
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
                fontSize: p.stat.value.length > 4 ? "26px" : "32px",
                fontWeight: 500,
                color: TEAL,
                lineHeight: 1,
              }}
            >
              {p.stat.value}
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "text.secondary", mt: "4px" }}
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
              fontSize: "11px",
              color: "text.secondary",
              opacity: 0.5,
              mb: 2,
            }}
          >
            CERTIFICATION
          </Typography>
          <Box
            component="img"
            src={AzureCert}
            alt="Azure Certification"
            onClick={() => setFullscreen(true)}
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "8px",
              mb: 2,
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
                    sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                  >
                    ×
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={AzureCert}
                  alt="Azure Certification"
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
          <Typography sx={{ fontSize: "14px", fontWeight: 500, mb: 1 }}>
            {p.title}
          </Typography>
          {p.desc && (
            <Typography
              sx={{ fontSize: "12px", color: "text.secondary", mb: 1 }}
            >
              {p.desc}
            </Typography>
          )}
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
              fontSize: "11px",
              color: "text.secondary",
              opacity: 0.5,
            }}
          >
            CLOUD
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
            {p.title}
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
            {p.desc}
          </Typography>
        </>
      )}

      {/* ── Project tile ── */}
      {p.kind === "project" && (
        <>
          <Box
            sx={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
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
                    fontSize: "10px",
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
                  fontSize: "11px",
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
                fontSize:
                  p.size === "lg" || p.size === "hero" ? "18px" : "15px",
                fontWeight: 500,
                lineHeight: 1.4,
                mb: "8px",
              }}
            >
              {p.title}
            </Typography>

            {p.problem && (
              <Box sx={{ mb: "8px" }}>
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "10px",
                    color: TEAL,
                    letterSpacing: ".1em",
                    mb: "4px",
                  }}
                >
                  PROBLEM
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  {p.problem}
                </Typography>
              </Box>
            )}

            {p.solution && (
              <Box sx={{ mb: "8px" }}>
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "10px",
                    color: TEAL,
                    letterSpacing: ".1em",
                    mb: "4px",
                  }}
                >
                  SOLUTION
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  {p.solution}
                </Typography>
              </Box>
            )}

            {p.desc && !p.problem && (
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "text.secondary",
                  lineHeight: 1.6,
                  mt: "8px",
                  mb: "8px",
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
                  gap: "5px",
                  mt: "10px",
                  justifyContent: "center",
                }}
              >
                {p.tech.map((t) => (
                  <Tag key={t} label={t} accent={true} />
                ))}
              </Box>
            )}

            {(p.impact || p.link) && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  mt: "auto",
                  pt: "12px",
                  gap: "12px",
                }}
              >
                {p.impact && (
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: monoFont,
                        fontSize: "10px",
                        color: TEAL_DIM,
                        letterSpacing: ".1em",
                        mb: "2px",
                        opacity: 0.7,
                      }}
                    >
                      IMPACT
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: monoFont,
                        fontSize: "11px",
                        color: TEAL_DIM,
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {p.impact}
                    </Typography>
                  </Box>
                )}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flexShrink: 0,
                  }}
                >
                  {p.link && (
                    <Typography
                      component="a"
                      href={p.link}
                      sx={{
                        fontFamily: monoFont,
                        fontSize: "11px",
                        color: TEAL,
                        textDecoration: "none",
                        letterSpacing: ".05em",
                        position: "relative",
                        transition: "all .2s ease",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -2,
                          left: 0,
                          width: 0,
                          height: "1px",
                          bgcolor: TEAL,
                          transition: "width .2s ease",
                        },
                        "&:hover": {
                          color: TEAL_DIM,
                          transform: "translateX(2px)",
                          "&::after": {
                            width: "100%",
                          },
                        },
                      }}
                    >
                      {p.linkLabel || "VIEW →"}
                    </Typography>
                  )}
                  {!p.link && p.kind === "project" && (
                    <Tooltip
                      title="Enterprise project - Cannot provide public URL"
                      arrow
                      placement="top"
                    >
                      <Typography
                        sx={{
                          fontFamily: monoFont,
                          fontSize: "11px",
                          color: "text.secondary",
                          letterSpacing: ".05em",
                          opacity: 0.5,
                          cursor: "not-allowed",
                          userSelect: "none",
                        }}
                      >
                        PRIVATE →
                      </Typography>
                    </Tooltip>
                  )}
                </Box>
              </Box>
            )}
          </Box>
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
        mb: "24px",
      }}
    >
      <Box
        sx={{
          fontFamily: monoFont,
          fontSize: "11px",
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
      <Box
        sx={{
          overflow: "hidden",
          flex: 1,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "40px",
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, transparent 100%)",
            zIndex: 1,
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "40px",
            background:
              "linear-gradient(270deg, rgba(0,0,0,1) 0%, transparent 100%)",
            zIndex: 1,
            pointerEvents: "none",
          },
        }}
      >
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
                fontSize: "12px",
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
    <Box
      sx={{
        position: "relative",
        width: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          height: "300px",
          background: `radial-gradient(ellipse at top, ${TEAL}08 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Ticker />

        {/* Filter bar */}
        <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap", mb: "24px" }}>
          {FILTERS.map((f) => (
            <Box
              key={f.value}
              onClick={() => setActive(f.value)}
              sx={{
                fontFamily: monoFont,
                fontSize: "11.5px",
                px: "12px",
                py: "5px",
                border: "0.5px solid",
                borderColor: active === f.value ? TEAL : "divider",
                borderRadius: "20px",
                cursor: "pointer",
                bgcolor: active === f.value ? TEAL : "background.default",
                color: active === f.value ? "#fff" : "text.secondary",
                transition: "all .2s cubic-bezier(0.4, 0, 0.2, 1)",
                userSelect: "none",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  borderColor: TEAL,
                  color: active === f.value ? "#fff" : TEAL,
                  transform: "translateY(-2px)",
                  boxShadow:
                    active === f.value
                      ? `0 4px 12px ${TEAL}40`
                      : "0 2px 8px rgba(0,0,0,0.1)",
                },
                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              {f.label}
            </Box>
          ))}
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {visible.map((p, index) => (
            <Tile key={p.id} p={p} accent={index % 2 === 0} />
          ))}
        </Box>

        {visible.length === 0 && (
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              fontSize: "14px",
              py: "2rem",
            }}
          >
            No projects match this filter.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
