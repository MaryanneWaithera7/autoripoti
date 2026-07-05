export default function FAQPage() {
  const faqs = [
    {
      question: "What does AutoRipoti help me do?",
      answer:
        "AutoRipoti helps used-car buyers review key vehicle details before making a purchase decision. The goal is to help you identify possible red flags before paying, negotiating, or beginning ownership transfer.",
    },
    {
      question: "What details do I need to request a report?",
      answer:
        "You should provide the vehicle registration number, and if available, the chassis or VIN number. You can also add notes about the seller, vehicle condition, or any concern you already have.",
    },
    {
      question: "Which report should I choose?",
      answer:
        "If you are only doing an early check, the Basic Check may be enough. If you are close to buying, the Full Vehicle Report is recommended. If the vehicle is high-value or you want deeper review support, choose the Premium Buyer Review.",
    },
    {
      question: "How will I receive my report?",
      answer:
        "Completed reports will be delivered digitally using the contact details provided during your request. When customer accounts are enabled, reports may also be accessible through the customer dashboard.",
    },
    {
      question: "Can AutoRipoti guarantee that a car has no issues?",
      answer:
        "No verification service can guarantee that a vehicle has no issues. AutoRipoti helps organize available information and possible red flags so that buyers can make more informed decisions.",
    },
    {
      question: "Can dealers or businesses use AutoRipoti?",
      answer:
        "Yes. AutoRipoti is being designed to support individual buyers first, with dealer, lender, insurer, and fleet verification workflows planned as the platform grows.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          FAQ
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Questions buyers ask before requesting a report.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Here are quick answers to help you understand how AutoRipoti works and
          what to prepare before submitting a vehicle verification request.
        </p>

        <div className="mt-12 space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-xl font-bold text-emerald-400">
                {faq.question}
              </h2>
              <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}