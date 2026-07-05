export default function TermsPage() {
  const sections = [
    {
      title: "Use of AutoRipoti",
      text: "AutoRipoti provides vehicle verification support to help buyers review key information before making a purchase decision. The platform is intended for informational and decision-support purposes.",
    },
    {
      title: "Information Provided by Users",
      text: "Users are responsible for submitting accurate vehicle details, including registration number, chassis/VIN number where available, contact details, and any additional information relevant to the request.",
    },
    {
      title: "Report Limitations",
      text: "AutoRipoti reports are prepared based on the information and verification sources available at the time of review. A report should not be treated as a guarantee that a vehicle has no issues.",
    },
    {
      title: "Payments and Report Requests",
      text: "Report requests may require payment before processing. Pricing depends on the selected report type and the level of verification requested.",
    },
    {
      title: "Buyer Responsibility",
      text: "Users should combine AutoRipoti reports with physical inspection, seller questioning, document review, and professional advice where necessary before completing a vehicle purchase.",
    },
    {
      title: "Changes to Terms",
      text: "AutoRipoti may update these terms as the platform grows, new features are introduced, or legal and operational requirements change.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Terms and Conditions
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Terms for using AutoRipoti.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          These terms explain how AutoRipoti should be used, what users should
          understand before requesting a report, and the limits of vehicle
          verification information.
        </p>

        <div className="mt-12 space-y-5">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-xl font-bold text-emerald-400">
                {section.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-300">{section.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}