import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";
import { GridBackground } from "@/components/portfolio/GridBackground";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavishka Edirisinghe | Data Science Portfolio" },
      { name: "description", content: "Data Science Undergraduate specializing in analytics, business intelligence, predictive modeling, and data-driven solutions." },
      { property: "og:title", content: "Kavishka Edirisinghe | Data Science Portfolio" },
      { property: "og:description", content: "Data Science Undergraduate specializing in analytics, BI, and predictive modeling." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const theme = stored ?? "dark";
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    if (!stored) localStorage.setItem("theme", "dark");
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <ScrollProgress />
      <GridBackground />
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
