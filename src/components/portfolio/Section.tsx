import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-wider text-secondary">
              {eyebrow}
            </div>
          )}
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {title.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? <span key={i} className="text-gradient">{w}</span> : <span key={i}>{w} </span>
            )}
          </h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
