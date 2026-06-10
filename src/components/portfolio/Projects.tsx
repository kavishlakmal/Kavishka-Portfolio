import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { ArrowUpRight, ExternalLink, Calendar, Users } from "lucide-react";
import { SiGithub } from "react-icons/si";
import dwBiImg from "@/assets/DataWarehousingBusinessIntelligence.png";
import studentImg from "@/assets/StudentPerformanceDataAnalysis.jpg";
import nexusImg from "@/assets/Nexus.png";
import habitxImg from "@/assets/HabitX.png";
import cocosmartImg from "@/assets/CocoSmart.png";
import bankingImg from "@/assets/OnlineBankingSystem.png";
import onlineJobsImg from "@/assets/OnlineJobs.jpeg";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  image?: string;
  imageContain?: boolean;
  imageBg?: string;
  liveDemo?: string;
  liveLabel?: string;
  sourceCode?: string;
  date: string;
  type: "Individual" | "Group";
};

const PROJECTS: Project[] = [
  {
    title: "Data Warehousing & Business Intelligence",
    desc: "Designed a 6-dimension star schema data warehouse on the Online Shop 2024 dataset with SCD Type 2 on the customer dimension. Built 3 SSIS packages integrating SQL Server, Excel and CSV sources, deployed an SSAS multidimensional cube with Date Hierarchy for OLAP operations, and published interactive Power BI reports using DAX.",
    tech: ["SQL Server", "SSIS", "SSAS", "Power BI", "DAX", "T-SQL"],
    image: dwBiImg,
    liveDemo: "https://app.powerbi.com/groups/8c2c13a9-b472-40c0-b689-f7b90f26620c/reports/5b77a456-515c-4287-af67-80b854cd0ddb?ctid=44e3cf94-19c9-4e32-96c3-14f5bf01391a&pbi_source=linkShare",
    liveLabel: "Power BI",
    date: "Feb 2026 – May 2026",
    type: "Individual",
  },
  {
    title: "Student Performance Data Analysis",
    desc: "Conducted descriptive (distributions, summary stats) and inferential analysis (Pearson correlation, ANOVA, T-tests) on a 6,607-student Kaggle dataset using R. Built a Multiple Linear Regression model with a 70/30 train-test split achieving R² ≈ 77%, identifying study hours and prior performance as dominant predictors.",
    tech: ["R", "Statistics", "Regression", "ANOVA"],
    image: studentImg,
    date: "Feb 2026 – May 2026",
    type: "Group",
  },
  {
    title: "Nexus – Smart Campus Operations Hub",
    desc: "Full-stack university management platform built with Spring Boot and React covering facility bookings, maintenance incidents, notifications, and role-based access control. Developed the Maintenance & Incident Ticketing module with REST APIs supporting Cloudinary attachments, technician assignment, comment system, status/priority filtering, and a React frontend with live progress stepper and role-specific dashboards.",
    tech: ["Spring Boot", "React", "Cloudinary", "REST APIs"],
    image: nexusImg,
    sourceCode: "https://github.com/SandeepaGunathilaka/it3030-paf-2026-smart-campus-group-Y3S1-WD-106",
    date: "Feb 2026 – May 2026",
    type: "Group",
  },
  {
    title: "HabitX – Habit Tracking Android App",
    desc: "Android habit-tracking application built with Kotlin and Material Design 3, featuring habit tracking with circular progress indicators, mood journaling with line chart visualisation, and a water intake tracker with customisable reminder intervals powered by WorkManager.",
    tech: ["Kotlin", "Android", "Material Design 3", "WorkManager"],
    image: habitxImg,
    sourceCode: "https://github.com/kavishlakmal/HabitX",
    imageContain: true,
    imageBg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    date: "Sep 2025 – Oct 2025",
    type: "Individual",
  },
  {
    title: "CocoSmart – Plantation Management System",
    desc: "Full-stack MERN coconut plantation management system covering marketplace, finance, authentication, and HR & workforce management. Developed the Labor Management and Task Assignment modules with REST APIs for worker registration with age/NIC validation, task lifecycle management, multi-worker assignment, and real-time availability tracking.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: cocosmartImg,
    sourceCode: "https://github.com/ShafnyHadhy/cocosmart-frontend",
    liveDemo: "https://cocosmart.vercel.app/",
    date: "Jul 2025 – Oct 2025",
    type: "Group",
  },
  {
    title: "Online Banking System",
    desc: "Java web-based online banking system built with Servlets, JSP and MySQL covering user management, accounts, fund transfers, bill payments, and offers. Developed the Transactions module with fund transfer CRUD operations and a scheduled transactions feature with date/time support, following MVC architecture with JDBC.",
    tech: ["Java", "JSP", "Servlets", "MySQL"],
    image: bankingImg,
    sourceCode: "https://github.com/ShafnyHadhy/online-banking-system",
    date: "Feb 2025 – May 2025",
    type: "Group",
  },
  {
    title: "OnlineJobs – Online Job Portal",
    desc: "Led a 5-member team to build a PHP and MySQL web-based job portal supporting job seeker, employer, and admin roles. Covers job listings, applications, user management, and an admin dashboard for managing users, job postings, and contact messages.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: onlineJobsImg,
    sourceCode: "https://github.com/kavishlakmal/Online_Job_Portal",
    date: "Aug 2024 – Nov 2024",
    type: "Group",
  },
];

export function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === "all") return true;
    if (filter === "data") return project.tech.some(t => ["SQL Server", "Power BI", "R", "Statistics", "SSIS", "SSAS"].includes(t));
    if (filter === "web") return project.tech.some(t => ["React", "Spring Boot", "Node.js", "Express", "PHP", "JSP"].includes(t));
    if (filter === "mobile") return project.tech.includes("Kotlin");
    return true;
  });

  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "data", label: "Data Science" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
  ];

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work" subtitle="End-to-end products and experiments across data, web, and mobile.">

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
            onClick={() => setFilter(btn.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              filter === btn.id
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                : "border border-primary/20 bg-primary/5 text-foreground/70 hover:bg-primary/10 hover:text-foreground"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all hover:border-primary/50 hover:shadow-[0_15px_50px_rgba(0,240,255,0.25)]"
          >
            {/* Project Image */}
            {p.image && (
              <div
                className="relative h-44 overflow-hidden"
                style={p.imageBg ? { background: p.imageBg } : undefined}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${p.imageContain ? "object-contain py-2" : "object-cover"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            )}

            <div className="flex flex-col flex-1 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold leading-tight">{p.title}</h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="size-3" />{p.date}</span>
                <span className="flex items-center gap-1"><Users className="size-3" />{p.type}</span>
              </div>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map(t => (
                  <span key={t} className="rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>

              <div className="min-h-4 flex-1" />
              <div className="pt-4 border-t border-border flex items-center gap-2 min-h-[2.25rem]">
                {p.liveDemo && (
                  <a
                    href={p.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <ExternalLink className="size-3" />
                    {p.liveLabel ?? "Live Demo"}
                  </a>
                )}
                {p.sourceCode && (
                  <a
                    href={p.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <SiGithub className="size-3" />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div
              className="pointer-events-none absolute -bottom-12 -right-12 size-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
              style={{ background: "radial-gradient(circle, rgba(0,240,255,0.5), transparent 70%)" }}
            />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
