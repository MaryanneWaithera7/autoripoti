export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      text: "AutoRipoti may collect information such as your name, email address, phone number, vehicle registration number, chassis/VIN number, report type selected, and any notes you submit with your request.",
    },
    {
      title: "How We Use Your Information",
      text: "We use submitted information to process vehicle report requests, communicate with customers, prepare reports, manage support enquiries, and improve the AutoRipoti service.",
    },
    {
      title: "Vehicle Information",
      text: "Vehicle details submitted through AutoRipoti are used only for the purpose of reviewing and preparing the requested report. Customers should avoid submitting information they are not authorized to share.",
    },
    {
      title: "Data Protection",
      text: "AutoRipoti is designed to handle customer information responsibly. As the platform grows, additional security measures will be added to protect accounts, report requests, payment records, and report files.",
    },
    {
      title: "Sharing of Information",
      text: "AutoRipoti does not sell customer information. Information may only be shared when necessary to process a request, comply with legal requirements, support payment processing, or deliver requested services.",
    },
    {
      title: "Customer Rights",
      text: "Customers may contact AutoRipoti to ask questions about their submitted information, request corrections, or seek support related to their report request.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Privacy Policy
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          How AutoRipoti handles customer information.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This policy explains the type of information AutoRipoti may collect,
          how it is used, and how customer details are handled when requesting a
          vehicle report.
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