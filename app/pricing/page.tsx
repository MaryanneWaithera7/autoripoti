export default function PricingPage() {
  const plans = [
    {
      name: "Basic Check",
      price: "KES 500",
      description:
        "A quick starting point for buyers who want to confirm essential vehicle details before moving forward.",
      features: [
        "Vehicle identity review",
        "Basic ownership risk indicators",
        "Initial red-flag summary",
        "Delivered digitally",
      ],
    },
    {
      name: "Full Vehicle Report",
      price: "KES 1,200",
      description:
        "A deeper review for buyers who want stronger confidence before negotiating, paying, or signing documents.",
      features: [
        "Ownership history indicators",
        "Accident and damage red-flag review",
        "Stolen vehicle risk check",
        "Mileage concern review",
        "Import and legal-risk notes",
      ],
      highlighted: true,
    },
    {
      name: "Premium Buyer Review",
      price: "KES 2,000",
      description:
        "For serious buyers who want a more detailed review before committing to a high-value purchase.",
      features: [
        "Everything in Full Vehicle Report",
        "Detailed buyer-risk summary",
        "Questions to ask the seller",
        "Document review guidance",
        "Priority delivery",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Pricing
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Choose the level of verification that matches your buying decision.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Whether you are casually checking a vehicle or preparing to pay a
          deposit, AutoRipoti gives you options based on how much detail you need
          before moving forward.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.highlighted
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              {plan.highlighted && (
                <p className="mb-4 inline-block rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-slate-950">
                  Most Popular
                </p>
              )}

              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-4 text-4xl font-bold text-emerald-400">
                {plan.price}
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a
                href="/request-report"
                className={`mt-8 inline-block rounded-full px-6 py-3 font-semibold ${
                  plan.highlighted
                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                    : "border border-slate-600 text-white hover:border-emerald-400"
                }`}
              >
                Request This Report
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-900 p-6">
          <h2 className="text-2xl font-bold text-emerald-400">
            Not sure which report to choose?
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            Start with the Full Vehicle Report if you are close to buying. It is
            designed for buyers who want a stronger view of possible risks before
            money changes hands.
          </p>
        </div>
      </section>
    </main>
  );
}