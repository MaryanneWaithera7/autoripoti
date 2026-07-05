export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          About AutoRipoti
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Building trust in Kenya's used-car market.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          AutoRipoti is a vehicle history verification platform 
          created to help used-car
           buyers review important vehicle details before 
          making a purchase decision.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          We focus on the risks buyers often worry about most — unclear ownership,
  hidden accident history, stolen vehicle concerns, mileage fraud, document
  inconsistencies, and legal red flags.
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