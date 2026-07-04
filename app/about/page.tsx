export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          About AutoRipoti
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Making vehicle history verification simple,clear,and accessible to Kenya's used-car market.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          AutoRipoti is a vehicle history verification platform being built for
          the Kenyan used-car market. Our goal is to help buyers request clearer
          vehicle reports before committing their money.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Many used-car buyers face risks such as fake documents, hidden
          accident damage, stolen vehicle cases, mileage fraud, unclear import
          details, and unresolved legal caveats. AutoRipoti is being designed to
          reduce that uncertainty by organizing available verification
          information into a simple, understandable report.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-emerald-400">
              Our Mission
            </h2>
            <p className="mt-3 text-slate-400">
              To make vehicle history checks easier, clearer, and more accessible
              for everyday buyers.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-emerald-400">
              Our Vision
            </h2>
            <p className="mt-3 text-slate-400">
              To become a trusted vehicle verification platform starting in Kenya
              and expanding across Africa.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-emerald-400">
              Our Promise
            </h2>
            <p className="mt-3 text-slate-400">
              To communicate clearly and avoid claiming official integrations
              before formal partnerships exist.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}