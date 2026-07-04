export default function DashboardPage() {
  const reports = [
    {
      vehicle: "KDA 123A",
      type: "Full Vehicle Report",
      status: "In Review",
      date: "Today",
    },
    {
      vehicle: "KCY 456B",
      type: "Basic Check",
      status: "Completed",
      date: "Yesterday",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Customer Dashboard
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Track your vehicle report requests.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          View your submitted vehicle checks, follow report progress, and access
          completed reports once they are ready.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Total Requests</p>
            <h2 className="mt-3 text-4xl font-bold">2</h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">In Review</p>
            <h2 className="mt-3 text-4xl font-bold text-emerald-400">1</h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Completed</p>
            <h2 className="mt-3 text-4xl font-bold">1</h2>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">My Report Requests</h2>
              <p className="mt-2 text-slate-400">
                These are sample records for now. Later, this section will show
                real requests from the database.
              </p>
            </div>

            <a
              href="/request-report"
              className="rounded-full bg-emerald-500 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-emerald-400"
            >
              New Request
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-slate-300">
                <tr>
                  <th className="px-4 py-4">Vehicle</th>
                  <th className="px-4 py-4">Report Type</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Date</th>
                </tr>
              </thead>

              <tbody>
                {reports.map((report) => (
                  <tr key={report.vehicle} className="border-t border-slate-800">
                    <td className="px-4 py-4 font-semibold">{report.vehicle}</td>
                    <td className="px-4 py-4 text-slate-300">{report.type}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-400">
                        {report.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-400">{report.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}