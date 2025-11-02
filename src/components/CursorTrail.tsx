import React, { useEffect, useRef } from "react";

// MinimalCursor.tsx
// Minimal, lightweight canvas-based cursor with a subtle yellow trail.
// Drop into src/components and import as <MinimalCursor />. No dependencies.

type Props = {
  size?: number; // center dot size
  trailLength?: number; // how many points are remembered
  opacity?: number; // trail opacity (0-1)
};

export default function MinimalCursor({
  size = 8,
  trailLength = 12,
  opacity = 0.9,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const points = useRef<{ x: number; y: number }[]>([]);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    function onMove(e: MouseEvent) {
      points.current.unshift({ x: e.clientX, y: e.clientY });
      if (points.current.length > trailLength) points.current.pop();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw trail: oldest -> newest
      for (let i = points.current.length - 1; i >= 0; i--) {
        const p = points.current[i];
        const t = 1 - i / Math.max(1, points.current.length - 1); // 0..1
        const radius = size * (0.3 + t * 0.9);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 210, 60, ${opacity * (t * 0.9)})`;
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // center dot (most recent)
      if (points.current[0]) {
        const p = points.current[0];
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,245,140,1)`;
        ctx.arc(p.x, p.y, Math.max(1, size * 0.45), 0, Math.PI * 2);
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    }

    window.addEventListener("mousemove", onMove);
    // hide native cursor
    const prev = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";

    raf.current = requestAnimationFrame(draw);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      document.documentElement.style.cursor = prev || "";
    };
  }, [size, trailLength, opacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
      aria-hidden
    />
  );
}
