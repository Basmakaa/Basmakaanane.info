import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with 💜 &
          curiosity.
        </p>
        <p>Ottawa · Silicon Valley · The World 🌍</p>
      </div>
    </footer>
  );
}
