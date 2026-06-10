import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (typeof window !== "undefined" && (localStorage.getItem("theme") as "light" | "dark")) || "dark",
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 140 && r.bottom >= 140) { setActive(l.id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-3"
    >
      <div className="mx-auto max-w-7xl">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass-strong" : "border border-transparent"}`}>
          <button onClick={() => go("hero")} className="group flex items-center gap-2">
            <div className="grid size-9 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all group-hover:bg-primary/20">
              KE
            </div>
            <span className="hidden font-display text-sm font-semibold tracking-wide sm:inline">Kavishka Edirisinghe</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full border border-primary/40 bg-primary/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors"
            >
              {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
            <button
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
              className="rounded-full p-2 text-muted-foreground hover:bg-primary/10 hover:text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>



        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mt-2 overflow-hidden rounded-2xl p-2 lg:hidden"
            >
              {links.map(l => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm ${active === l.id ? "bg-primary/15 text-foreground" : "text-muted-foreground"}`}
                >
                  {l.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
