import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-night px-5 py-8 text-sm text-paper/40 md:px-10">
      <div className="mx-auto flex max-w-page flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Toronto, Canada</p>
      </div>
    </footer>
  );
}
