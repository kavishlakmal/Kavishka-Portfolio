import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, Copy, Check, Send, Download, Loader2 } from "lucide-react";

const INFO = [
  {
    label: "Email",
    value: "kavishka.l.edirisinghe@gmail.com",
    copy: "kavishka.l.edirisinghe@gmail.com",
    url: "mailto:kavishka.l.edirisinghe@gmail.com",
    icon: () => <Mail className="size-4" />,
  },
  {
    label: "Phone",
    value: "+94 70 596 3473",
    copy: "+94705963473",
    url: "tel:+94705963473",
    icon: () => <Phone className="size-4" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kavishlakmal",
    copy: "https://www.linkedin.com/in/kavishlakmal",
    url: "https://www.linkedin.com/in/kavishlakmal",
    icon: () => (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/kavishlakmal",
    copy: "https://github.com/kavishlakmal",
    url: "https://github.com/kavishlakmal",
    icon: () => (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const copy = async (v: string, k: string) => {
    try {
      await navigator.clipboard.writeText(v);
      setCopied(k);
      setTimeout(() => setCopied(null), 1600);
    } catch (err) {
      console.error("Failed to copy:", err);
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = v;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(k);
      setTimeout(() => setCopied(null), 1600);
    }
  };

  const submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xeewzyqb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 4000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together" subtitle="Open to internships, collaborations and meaningful conversations.">
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-2"
        >
          <div className="absolute inset-0 opacity-50"
            style={{ background: "radial-gradient(circle at 0% 100%, rgba(0,240,255,0.3), transparent 60%)" }}
          />
          <div className="relative">
            <h3 className="font-display text-xl font-semibold">Connect with Me</h3>
            <p className="mt-1 text-sm text-muted-foreground">Reach out via email or social media.</p>

            <div className="mt-6 space-y-3">
              {INFO.map(i => (
                <a
                  key={i.label}
                  href={i.url}
                  target={i.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-primary/15 bg-primary/[0.04] p-3 transition-all hover:border-primary/40 hover:bg-primary/10"
                >
                  <div className="grid size-9 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <i.icon />
                  </div>
                  <div className="min-w-0 grow">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{i.label}</div>
                    <div className="truncate text-sm font-medium group-hover:text-primary transition-colors">{i.value}</div>
                  </div>
                  <button
                    onClick={e => { e.preventDefault(); copy(i.copy, i.label); }}
                    aria-label={`Copy ${i.label}`}
                    className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary shrink-0"
                  >
                    {copied === i.label ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
                  </button>
                </a>
              ))}
            </div>

            <div className="mt-6 border-t border-primary/15 pt-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-green-400" />
                </span>
                <span className="text-sm text-muted-foreground">Available for internships</span>
              </div>
              <a
                href="/cv/Kavishka_Edirisinghe.pdf"
                download="Kavishka_Edirisinghe.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 sm:p-8 lg:col-span-3"
        >
          <h3 className="font-display text-xl font-semibold">Send a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">I'll get back to you within 24 hours.</p>
          
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" type="text" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" type="text" placeholder="What's this about?" />
          </div>
          <div className="mt-4">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me a bit about it…"
              className="mt-2 w-full rounded-xl border border-primary/20 bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,240,255,0.18)]"
            />
          </div>

          {error && (
            <p className="mt-3 text-sm text-destructive">Something went wrong. Please try again.</p>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.97 }}
            className="group relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {sent ? (
              <><Check className="size-4" />Sent · I'll get back to you</>
            ) : loading ? (
              <><Loader2 className="size-4 animate-spin" />Sending…</>
            ) : (
              <><Send className="size-4 transition-transform group-hover:translate-x-0.5" />Send Message</>
            )}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, ...rest }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        required
        name={name}
        {...rest}
        className="mt-2 w-full rounded-xl border border-primary/20 bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,240,255,0.18)]"
      />
    </label>
  );
}