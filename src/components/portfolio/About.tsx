import { motion } from "framer-motion";
import { BarChart3, Brain, Database, LineChart, Code2, MapPin, Briefcase, GraduationCap, BookOpen, Award, Smartphone, TrendingUp, Laptop } from "lucide-react";
import { Section } from "./Section";

const skills = [
  { icon: BarChart3, label: "Data Analysis" },
  { icon: LineChart, label: "Statistical Analysis" },
  { icon: Brain, label: "Business Intelligence" },
  { icon: Database, label: "Data Warehousing" },
  { icon: TrendingUp, label: "Predictive Modeling" },
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Smartphone, label: "Android Development" },
];

const info = [
  { icon: MapPin, label: "Location", value: "Kadawatha, Gampaha District" },
];

const internshipRoles = [
  "Data Science",
  "Data Analytics",
  "Business Intelligence",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Engineering",
  "Database Administration",
];

const EDUCATION = [
  {
    icon: GraduationCap,
    period: "2023 — Present",
    title: "BSc (Hons) in IT — Specializing in Data Science",
    sub: "",
    org: "Sri Lanka Institute of Information Technology (SLIIT)",
    detail: "CGPA: 3.76",
  },
  {
    icon: BookOpen,
    period: "2019 — 2022",
    title: "G.C.E Advanced Level (Physical Sciences)",
    sub: "",
    org: "D.S. Senanayake College, Colombo 07",
    detail: "Physics: C · Combined Mathematics: C · Chemistry: S",
  },
  {
    icon: Laptop,
    period: "2018 - 2019",
    title: "Diploma in Information Technology",
    sub: "",
    org: "ESOFT Metro Campus",
    detail: "Information Technology",
  },
  {
    icon: Award,
    period: "2013 — 2018",
    title: "G.C.E Ordinary Level",
    sub: "",
    org: "Asoka College, Colombo 10",
    detail: "9 A Passes",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building the future with data" subtitle="Data-driven thinker. Engineer at heart.">
      <div className="grid items-stretch gap-12 lg:grid-cols-2">

        {/* LEFT — intro + skills + personal info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          <div className="glass-strong rounded-3xl p-7 flex flex-col flex-1">
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm a Data Science undergraduate at SLIIT, passionate about transforming raw data
            into clear, actionable insights. My focus spans analytics, statistics, predictive
            modelling, and business intelligence, bridging engineering rigor with storytelling.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From ETL pipelines and warehouse design to full-stack platforms and predictive
            regression, I love shipping end-to-end solutions that make data useful.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map(s => (
              <div key={s.label} className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-xs">
                <s.icon className="size-3.5 text-primary" />
                {s.label}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 space-y-3">
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5 glass rounded-2xl px-6 py-5"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{item.label}</div>
                  <div className="mt-0.5 text-base font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-start gap-5 glass rounded-2xl px-6 py-5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Briefcase className="size-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Seeking Internship In</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {internshipRoles.map(role => (
                    <span key={role} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </motion.div>

        {/* RIGHT — Education timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="mb-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Education</div>
            <h3 className="mt-1 font-display text-xl font-semibold">Academic Journey</h3>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent sm:left-5" />

            <div className="space-y-6">
              {EDUCATION.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="relative pl-14 sm:pl-16"
                >
                  <div className="absolute left-0 top-0 grid size-9 place-items-center rounded-xl border border-primary/40 bg-background text-primary shadow-[0_0_20px_rgba(0,240,255,0.35)] sm:size-10">
                    <t.icon className="size-4" />
                  </div>

                  <div className="glass rounded-2xl p-4 transition-all hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,240,255,0.2)]">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{t.period}</div>
                    <h4 className="mt-1 font-display text-base font-semibold leading-snug">{t.title}</h4>
                    {t.sub && <div className="mt-0.5 text-sm text-foreground/80">{t.sub}</div>}
                    {t.org && <div className="mt-0.5 text-xs text-muted-foreground">{t.org}</div>}
                    <div className="mt-3 inline-block rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      {t.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
