import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import profileImg from "@/assets/Profile.png";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center px-4 pt-28 lg:pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl lg:text-4xl">Hi, I'm</span>
            Kavishka<br />
            <span className="text-gradient">Edirisinghe</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-primary">Data Science Undergraduate</p>
          <p className="mt-3 max-w-xl text-xl text-foreground/90">
            Transforming Data Into Actionable Insights.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Motivated Data Science undergraduate with strong foundations in analytics, statistics,
            business intelligence, and software development. Passionate about turning complex
            datasets into meaningful solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
  href="/cv/Kavishka_Edirisinghe.pdf"
  download="Kavishka_Edirisinghe.pdf"
  className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-primary/10"
>
  <Download className="size-4" />
  Download CV
</a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/kavishlakmal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              aria-label="GitHub"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kavishlakmal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              aria-label="LinkedIn"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:kavishka.l.edirisinghe@gmail.com"
              className="flex size-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center aspect-square w-full"
        >
          {/* Slow rotating outer dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute size-[88%] rounded-full border border-dashed border-primary/30"
          />

          {/* Pulsing glow ring */}
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute size-[76%] rounded-full border border-primary/50 shadow-[0_0_40px_rgba(0,240,255,0.15)]"
          />

          {/* Floating profile image */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative size-[68%] rounded-full overflow-hidden ring-4 ring-primary/60 shadow-[0_0_70px_rgba(0,240,255,0.35)]"
          >
            <img
              src={profileImg}
              alt="Kavishka Edirisinghe"
              className="size-full object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
