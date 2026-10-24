export default function Index({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-muted">
      <span className="text-clay">{n}</span>
      <span className="h-px w-8 bg-ink/20" />
      <span>{label}</span>
    </div>
  );
}
