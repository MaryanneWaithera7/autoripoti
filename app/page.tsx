export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      

      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Vehicle History Verification for Kenya
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Verify a used car before you buy it.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          AutoRipoti helps buyers request vehicle history reports based on
          available verification sources, helping reduce the risk of hidden
          ownership issues, accident history, stolen status, import concerns,
          mileage fraud, and legal caveats.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#request"
            className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Request a Report
          </a>

          <a
            href="#how"
            className="rounded-full border border-slate-600 px-8 py-3 font-semibold text-white hover:border-emerald-400"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="bg-slate-900 px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold">Buying a used car should not be a gamble.</h3>
          <p className="mt-4 max-w-3xl text-slate-300">
            Many buyers face risks such as fake documents, hidden accident damage,
            odometer fraud, stolen vehicle cases, and unclear ownership history.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Fake logbooks",
              "Hidden accident history",
              "Stolen vehicle risk",
              "Mileage fraud",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h4 className="font-semibold text-emerald-400">{item}</h4>
                <p className="mt-3 text-sm text-slate-400">
                  AutoRipoti helps surface available information before a buyer makes a decision.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold">One request. A clearer vehicle report.</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-900 p-6">
              <p className="text-emerald-400">01</p>
              <h4 className="mt-3 text-xl font-semibold">Enter Plate or Chassis</h4>
              <p className="mt-3 text-slate-400">
                The customer submits the vehicle registration number or chassis number.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              <p className="text-emerald-400">02</p>
              <h4 className="mt-3 text-xl font-semibold">Verification Review</h4>
              <p className="mt-3 text-slate-400">
                The AutoRipoti team reviews available records and prepares the report.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              <p className="text-emerald-400">03</p>
              <h4 className="mt-3 text-xl font-semibold">Receive Report</h4>
              <p className="mt-3 text-slate-400">
                The customer receives a clear, downloadable vehicle history report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-slate-900 px-8 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold">Choose the report that fits your verification needs.</h3>
          <p className="mt-4 text-slate-300">
            Start with a simple vehicle history check for KES 500, or request a more detailed report for up to KES 2,000.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-emerald-500 bg-slate-950 p-8">
            <p className="text-sm uppercase tracking-widest text-emerald-400">
              Pay Per Report
            </p>
            <h4 className="mt-4 text-4xl font-bold">KES 500 - 2,000</h4>
            <p className="mt-4 text-slate-400">
              Pay only for the level of verification you need before buying a used car. The report will include available information on ownership history, accident history, stolen status, mileage verification, and legal caveats.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="px-8 py-20 text-center">
        <h3 className="text-3xl font-bold">Ready to verify before you buy?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          AutoRipoti is being built to help used-car buyers make safer,
          better-informed decisions.
        </p>

        <a
          id="request"
          href="mailto:hello@autoripoti.co.ke"
          className="mt-8 inline-block rounded-full bg-emerald-500 px-8 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Contact AutoRipoti
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-8 py-6 text-center text-sm text-slate-500">
        © 2026 AutoRipoti. Know the Car. Own the Truth.
      </footer>
    </main>
  );
}