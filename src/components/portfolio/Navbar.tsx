import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import mainLogo from "@/assets/Main Logo.png";

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
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
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

  const logoFilter =
    theme === "dark"
      ? "drop-shadow(0 0 22px rgba(0,240,255,0.6)) drop-shadow(0 0 6px rgba(0,240,255,0.35))"
      : "none";

  const activeNavTextClass =
    theme === "dark"
      ? "text-primary drop-shadow-[0_0_8px_rgba(0,240,255,0.45)]"
      : "text-primary drop-shadow-[0_0_4px_rgba(0,240,255,0.28)]";

  const activeNavPillClass =
    theme === "dark"
      ? "border border-primary/45 bg-primary/20 shadow-[0_0_16px_rgba(0,240,255,0.18)]"
      : "border border-primary/35 bg-primary/25 shadow-[0_0_12px_rgba(0,240,255,0.12)]";

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
            <span
              className={`relative inline-flex size-9 items-center justify-center overflow-hidden rounded-lg transition-all ${theme === "light" ? "border border-primary/35 bg-primary/10 shadow-[0_0_20px_rgba(0,240,255,0.35)]" : "bg-transparent"}`}
            >
              <img
                src={mainLogo}
                alt="Kavishka Edirisinghe"
                className="block size-9 object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: logoFilter }}
              />
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide sm:inline">Kavishka Edirisinghe</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${active === l.id ? activeNavTextClass : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className={`absolute inset-0 -z-10 rounded-full ${activeNavPillClass}`}
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
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition-colors ${active === l.id ? `${theme === "dark" ? "bg-primary/20" : "bg-primary/25"} ${activeNavTextClass}` : "text-muted-foreground"}`}
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
