
import Link from "next/link";

type Props = {
  signatureClassName?: string;
};

export default function Header({ signatureClassName }: Props) {
  return (
    <header className="fixed left-0 right-0 top-4 z-40 flex justify-center px-4">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-white/40 via-cyan-200/60 to-blue-500/70 shadow-inner shadow-white/40" />
          <div className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-[0.25em] text-white/50">
              Pavel K
            </span>
            <span className={`text-lg text-white ${signatureClassName ?? ""}`}>
              pavelk.
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <a
            href="#listen"
            className="text-white/70 transition hover:text-white"
          >
            Listen
          </a>
          <a
            href="mailto:pavelkuznetsov.berlin@gmail.com"
            className="text-white/70 transition hover:text-white"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden text-white/50 sm:inline">Now booking</span>
          <a
            href="mailto:pavelkuznetsov.berlin@gmail.com"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow transition hover:-translate-y-0.5"
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
