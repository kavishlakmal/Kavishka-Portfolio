import { motion } from "framer-motion";
import { Section } from "./Section";
import mongodbLogo from "@/assets/mongodb_logo.jfif";
import sliitLogo from "@/assets/sliit_logo.jfif";
import ciscoLogo from "@/assets/cisco_logo.jfif";
import oracleLogo from "@/assets/oracle_logo.jfif";
import esoftLogo from "@/assets/esoft_logo.jfif";
import moratuwLogo from "@/assets/moratuwa_logo.jfif";
import awsLogo from "@/assets/aws_logo.png";

const CERTS = [
  {
    name: "MongoDB Data Modeling Path",
    org: "MongoDB",
    issued: "May 2026",
    logo: mongodbLogo,
  },
  {
    name: "MongoDB Atlas Administrator Path",
    org: "MongoDB",
    issued: "May 2026",
    logo: mongodbLogo,
  },
  {
    name: "AI/ML Engineer — Stage 1",
    org: "SLIIT",
    issued: "Jan 2026",
    logo: sliitLogo,
  },
  {
    name: "Introduction to Data Science",
    org: "Cisco",
    issued: "Dec 2025",
    logo: ciscoLogo,
  },
  {
    name: "Oracle Java Foundations",
    org: "Oracle",
    issued: "Sep 2025",
    logo: oracleLogo,
  },
  {
    name: "Python for Beginners",
    org: "University of Moratuwa",
    issued: "Dec 2024",
    logo: moratuwLogo,
  },
  {
    name: "Diploma in Information Technology",
    org: "ESOFT Metro Campus",
    issued: "Jul 2019",
    logo: esoftLogo,
  },
  {
    name: "Diploma in English",
    org: "ESOFT Metro Campus",
    issued: "Jun 2019",
    logo: esoftLogo,
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    org: "Amazon Web Services",
    issued: "Jun 2026",
    logo: awsLogo,
  },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning" subtitle="Credentials that back the craft.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            whileHover={{ y: -6, rotate: -0.4 }}
            className="group relative overflow-hidden rounded-2xl glass p-5 transition-all hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(0,240,255,0.2)] dark:hover:shadow-[0_15px_40px_rgba(0,240,255,0.3)]"
          >
            <div
              className="absolute right-0 top-0 size-24 opacity-10 transition-opacity group-hover:opacity-25 dark:opacity-30 dark:group-hover:opacity-60"
              style={{ background: "radial-gradient(circle at 100% 0%, rgba(0,240,255,0.6), transparent 60%)" }}
            />
            <div className="relative">
              <div className="size-12 overflow-hidden rounded-lg border border-primary/30">
                <img
                  src={c.logo}
                  alt={c.org}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold leading-snug">{c.name}</h3>
              <div className="mt-1 text-xs text-muted-foreground">{c.org}</div>
              {c.issued && (
                <div className="mt-2 inline-block rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                  Issued {c.issued}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
