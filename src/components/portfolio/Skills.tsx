import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Code2, BarChart3, PieChart, Layers, Database, Wrench, Filter, X } from "lucide-react";
import {
  SiPython, SiR, SiJavascript, SiPhp, SiKotlin, SiC, SiCplusplus,
  SiReact, SiNodedotjs, SiExpress, SiSpringboot,
  SiMysql, SiMongodb,
  SiDocker, SiGithub, SiPostman, SiRstudioide, SiIntellijidea,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

const SKILL_ICONS: Record<string, IconType> = {
  "Python": SiPython,
  "R": SiR,
  "Java": FaJava,
  "JavaScript": SiJavascript,
  "C": SiC,
  "C++": SiCplusplus,
  "PHP": SiPhp,
  "Kotlin": SiKotlin,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Spring Boot": SiSpringboot,
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,
  "Docker": SiDocker,
  "GitHub": SiGithub,
  "Postman": SiPostman,
  "RStudio": SiRstudioide,
  "IntelliJ IDEA": SiIntellijidea,
  "VS Code": VscVscode,
};

const CATEGORIES = [
  {
    id: "programming",
    icon: Code2,
    title: "Programming Languages",
    items: ["Python", "R", "Java", "JavaScript", "C", "C++", "PHP", "Kotlin"],
  },
  {
    id: "datascience",
    icon: BarChart3,
    title: "Data Science",
    items: ["Data Analysis", "EDA", "Data Cleaning", "Predictive Modelling", "Regression Analysis", "Hypothesis Testing", "ANOVA"],
  },
  {
    id: "bi",
    icon: PieChart,
    title: "BI & Visualization",
    items: ["Power BI", "DAX", "Dashboard Development", "Excel Analytics"],
  },
  {
    id: "frameworks",
    icon: Layers,
    title: "Frameworks",
    items: ["React", "Node.js", "Express.js", "Spring Boot"],
  },
  {
    id: "databases",
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "Oracle"],
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Tools",
    items: ["Docker", "GitHub", "Postman", "RStudio", "IntelliJ IDEA", "VS Code"],
  },
];


export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const getFilteredCategories = () => {
    if (activeFilter === "all") {
      return CATEGORIES;
    }
    return CATEGORIES.filter(cat => cat.id === activeFilter);
  };

  const getActiveCategoryTitle = () => {
    if (activeFilter === "all") return "All Skills";
    return CATEGORIES.find(cat => cat.id === activeFilter)?.title || "Skills";
  };

  const filterButtons = [
    { id: "all", label: "All Skills", icon: Filter },
    ...CATEGORIES.map(cat => ({ id: cat.id, label: cat.title, icon: cat.icon })),
  ];

  return (
    <Section id="skills" eyebrow="Skills" title="A toolkit for modern data work" subtitle="The stack I use to ship insights and software.">
      
      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveFilter(btn.id)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === btn.id
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                : "border border-primary/20 bg-primary/5 text-foreground/70 hover:bg-primary/10 hover:text-foreground"
            }`}
          >
            <btn.icon className="size-3.5" />
            {btn.label}
            {activeFilter === btn.id && btn.id !== "all" && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFilter("all");
                }}
                className="ml-1 rounded-full hover:bg-white/20 p-0.5"
              >
                <X className="size-3" />
              </button>
            )}
          </button>
        ))}
      </motion.div>

      {/* Active Filter Indicator */}
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
          Showing: {getActiveCategoryTitle()}
        </span>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {getFilteredCategories().map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(0,240,255,0.25)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <cat.icon className="size-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((s, j) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + j * 0.03 }}
                  className="inline-flex items-center gap-1.5 rounded-md border border-primary/15 bg-primary/[0.06] px-2.5 py-1 text-xs font-medium text-foreground/90 transition-all hover:border-primary/50 hover:bg-primary/15 hover:text-primary"
                >
                  {SKILL_ICONS[s] && (() => { const Icon = SKILL_ICONS[s]; return <Icon className="size-3.5 shrink-0" />; })()}
                  {s}
                </motion.span>
              ))}
            </div>

            <div className="pointer-events-none absolute -bottom-10 -right-10 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "radial-gradient(circle, rgba(0,240,255,0.4), transparent 70%)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {getFilteredCategories().length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-12 text-center"
        >
          <p className="text-muted-foreground">No skills found in this category.</p>
          <button
            onClick={() => setActiveFilter("all")}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary hover:bg-primary/20"
          >
            View all skills
          </button>
        </motion.div>
      )}
    </Section>
  );
}