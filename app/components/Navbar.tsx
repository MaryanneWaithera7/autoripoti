import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-8 py-6 text-white">
      <Link href="/" className="block">
        <h1 className="text-2xl font-bold tracking-tight">AutoRipoti</h1>
        <p className="text-sm text-emerald-400">
          Know the Car. Own the Truth.
        </p>
      </Link>

      <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <Link href="/about" className="hover:text-white">
          About
        </Link>
        <Link href="/how-it-works" className="hover:text-white">
          How It Works
        </Link>
        <Link href="/pricing" className="hover:text-white">
          Pricing
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
        <Link
          href="/request-report"
          className="rounded-full bg-emerald-500 px-5 py-2 font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Request Report
        </Link>
      </div>
    </nav>
  );
}