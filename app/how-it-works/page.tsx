export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Submit vehicle details",
      description:
        "Enter the vehicle registration number, chassis number, and any basic details you have about the car.",
    },
    {
      number: "02",
      title: "Choose your verification level",
      description:
        "Select the type of report you need depending on how much detail you want before making a purchase decision.",
    },
    {
      number: "03",
      title: "AutoRipoti reviews available sources",
      description:
        "Our team reviews available verification sources and organizes the findings into a clear report.",
    },
    {
      number: "04",
      title: "Receive your report",
      description:
        "You receive a simple vehicle history report that helps you understand potential risks before buying.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          How It Works
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          How AutoRipoti helps you verify before you buy.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          AutoRipoti is designed to make vehicle verification easier for used-car
          buyers. Instead of relying only on trust, buyers can request a clearer
          report before making a payment decision.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-sm font-semibold text-emerald-400">
                {step.number}
              </p>
              <h2 className="mt-4 text-2xl font-bold">{step.title}</h2>
              <p className="mt-4 leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
  <h2 className="text-2xl font-bold text-emerald-400">
    Look past the surface
  </h2>

  <p className="mt-3 leading-7 text-slate-300">
    A clean-looking car can still carry hidden risks. AutoRipoti helps you slow
    down the buying process, review key vehicle details, and ask better
    questions before negotiating, paying, or signing transfer documents.
  </p>
</div>

        <div className="mt-12 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
          <h2 className="text-2xl font-bold text-emerald-400">
            Before you buy, know the car. 
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The goal is not just to give you information. It is to help you spot warning
    signs, ask the seller the right questions, and avoid rushing into a purchase
    without understanding the vehicle’s background.
          </p>
        </div>
      </section>
    </main>
  );
}