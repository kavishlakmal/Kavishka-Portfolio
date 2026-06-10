export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-primary/15 px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <div className="font-display text-lg font-semibold">Kavishka Edirisinghe</div>
          <div className="text-xs text-muted-foreground">Data Science Undergraduate</div>
        </div>
        <div className="font-mono text-xs italic text-muted-foreground">
          "Transforming Data Into Actionable Insights"
        </div>
        <div className="text-xs text-muted-foreground">© {year} · All rights reserved.</div>
      </div>
    </footer>
  );
}
