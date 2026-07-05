export default function SampleReportPage() {
  const reportSections = [
    {
      title: "Vehicle Identity",
      status: "Review Completed",
      details: [
        "Registration number reviewed",
        "Chassis/VIN details checked where provided",
        "Vehicle make and model cross-checked against submitted details",
      ],
    },
    {
      title: "Ownership & Documentation",
      status: "Possible Red Flags Reviewed",
      details: [
        "Ownership information reviewed from available details",
        "Document consistency checked",
        "Transfer-risk notes prepared for buyer review",
      ],
    },
    {
      title: "Accident & Damage Indicators",
      status: "Buyer Review Recommended",
      details: [
        "Visible and reported damage concerns reviewed",
        "Repair history indicators noted where available",
        "Buyer advised on inspection questions to ask",
      ],
    },
    {
      title: "Mileage & Value Concerns",
      status: "Risk Summary Prepared",
      details: [
        "Mileage concerns reviewed against vehicle age and condition",
        "Possible value-impact notes included",
        "Buyer questions prepared for seller negotiation",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Sample Report
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Preview the AutoRipoti report before you request one.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This sample shows how an AutoRipoti vehicle report is organized, including
  the key sections, review notes, and buyer-risk summary you can expect before
  making a used-car purchase decision.
        </p>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col justify-between gap-6 border-b border-slate-800 pb-8 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold">AutoRipoti Vehicle Report</h2>
              <p className="mt-2 text-slate-400">
                Sample report preview for buyer education
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5">
              <p className="text-sm text-slate-400">Sample Vehicle</p>
              <p className="mt-2 text-2xl font-bold text-emerald-400">
                KDA 123A
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reportSections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <p className="text-sm font-semibold text-emerald-400">
                  {section.status}
                </p>

                <h3 className="mt-3 text-2xl font-bold">{section.title}</h3>

                <ul className="mt-5 space-y-3 text-slate-300">
                  {section.details.map((detail) => (
                    <li key={detail}>✓ {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-400">
              Buyer Risk Summary
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              The final report summary helps the buyer identify what looks
              normal, what needs clarification, and what should be checked before
              paying, negotiating, or signing transfer documents.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/request-report"
            className="inline-block rounded-full bg-emerald-500 px-8 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Request Your Report
          </a>
        </div>
      </section>
    </main>
  );
}