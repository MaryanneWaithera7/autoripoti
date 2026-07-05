import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-20 text-white">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          404 — Page Not Found
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          This page does not exist.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          The page you are looking for may have been moved, renamed, or does not
          exist. You can return home or start a vehicle report request.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Go Home
          </Link>

          <Link
            href="/request-report"
            className="rounded-full border border-slate-600 px-8 py-3 font-semibold text-white hover:border-emerald-400"
          >
            Request Report
          </Link>
        </div>
      </section>
    </main>
  );
}
