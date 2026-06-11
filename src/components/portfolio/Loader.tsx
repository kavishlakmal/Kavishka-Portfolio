import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import mainLogo from "@/assets/Main Logo.png";

export function Loader() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 2600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Random neural nodes
  const nodes = Array.from({ length: 22 }).map((_, i) => ({
    x: 40 + Math.random() * 320,
    y: 30 + Math.random() * 180,
    r: 2 + Math.random() * 2,
    d: Math.random() * 1.2,
    k: i,
  }));
  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.hypot(dx, dy) < 70) edges.push([i, j]);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
    >
      <div className="relative">
        <svg width="400" height="240" viewBox="0 0 400 240" className="overflow-visible">
          <defs>
            <linearGradient id="ke-grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </linearGradient>
          </defs>

          {/* Network edges fade away */}
          {edges.map(([a, b], i) => (
            <motion.line
              key={`e-${i}`}
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke="#00F0FF" strokeWidth="0.6" strokeOpacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.7, 0] }}
              transition={{ duration: 2.4, delay: i * 0.015, times: [0, 0.4, 1] }}
            />
          ))}
          {nodes.map((n) => (
            <motion.circle
              key={`n-${n.k}`}
              cx={n.x} cy={n.y} r={n.r}
              fill="#00F0FF"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
              transition={{ duration: 2.4, delay: n.d, times: [0, 0.45, 1] }}
              style={{ filter: "drop-shadow(0 0 6px #00F0FF)" }}
            />
          ))}

          {/* Logo reveal */}
          <motion.image
            href={mainLogo}
            x="130"
            y="50"
            width="140"
            height="140"
            preserveAspectRatio="xMidYMid meet"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.75, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 22px rgba(0,240,255,0.6))" }}
          />
        </svg>
      </div>

      <div className="mt-4 flex flex-col items-center gap-3">
        <div className="h-px w-48 overflow-hidden bg-white/10">
          <motion.div
            className="h-full bg-primary"
            style={{ width: `${pct}%`, boxShadow: "0 0 12px #00F0FF" }}
          />
        </div>
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
          {String(pct).padStart(3, "0")}%
        </div>
      </div>
    </motion.div>
  );
}
