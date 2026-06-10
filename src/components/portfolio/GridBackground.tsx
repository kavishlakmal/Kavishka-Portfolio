import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
      <div
        className="absolute left-1/2 top-[10%] size-[600px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(0,240,255,0.25), transparent 70%)" }}
      />
      <div
        className="absolute right-[-10%] bottom-[10%] size-[500px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(0,240,255,0.15), transparent 70%)" }}
      />
      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const dur = 8 + (i % 6);
        return (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-primary"
            style={{ left: `${left}%`, top: `${top}%`, boxShadow: "0 0 8px #00F0FF" }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: dur, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}
