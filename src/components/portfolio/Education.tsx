import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const TIMELINE = [
  {
    icon: GraduationCap,
    period: "2023 — Present",
    title: "BSc (Hons) Information Technology",
    sub: "Specialization in Data Science",
    org: "Sri Lanka Institute of Information Technology (SLIIT)",
    detail: "CGPA: 3.76",
  },
  {
    icon: BookOpen,
    period: "2021",
    title: "G.C.E Advanced Level",
    sub: "Physical Science Stream",
    org: "",
    detail: "Physics: C · Combined Mathematics: C · Chemistry: S",
  },
  {
    icon: Award,
    period: "2018",
    title: "G.C.E Ordinary Level",
    sub: "",
    org: "",
    detail: "9A Passes",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="A timeline of growth" subtitle="From foundations to specialization.">
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent sm:left-6" />

        <div className="space-y-8">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-14 sm:pl-20"
            >
              <div className="absolute left-0 top-0 grid size-9 place-items-center rounded-xl border border-primary/40 bg-background text-primary shadow-[0_0_20px_rgba(0,240,255,0.35)] sm:size-12">
                <t.icon className="size-4 sm:size-5" />
              </div>

              <div className="glass rounded-2xl p-5 transition-all hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,240,255,0.2)]">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{t.period}</div>
                <h3 className="mt-1.5 font-display text-xl font-semibold">{t.title}</h3>
                {t.sub && <div className="mt-1 text-sm text-foreground/80">{t.sub}</div>}
                {t.org && <div className="mt-1 text-sm text-muted-foreground">{t.org}</div>}
                <div className="mt-3 inline-block rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {t.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
