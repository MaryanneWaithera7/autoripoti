export default function AdminPage() {
  const requests = [
    {
      customer: "Mary W.",
      email: "mary@example.com",
      phone: "0712 345 678",
      vehicle: "KDA 123A",
      reportType: "Full Vehicle Report",
      payment: "Paid",
      status: "In Review",
      submitted: "Today",
    },
    {
      customer: "James K.",
      email: "james@example.com",
      phone: "0722 111 222",
      vehicle: "KCY 456B",
      reportType: "Basic Check",
      payment: "Pending",
      status: "New Request",
      submitted: "Yesterday",
    },
    {
      customer: "Amina N.",
      email: "amina@example.com",
      phone: "0799 888 777",
      vehicle: "KDD 789C",
      reportType: "Premium Buyer Review",
      payment: "Paid",
      status: "Completed",
      submitted: "2 days ago",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Admin Dashboard
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Manage AutoRipoti report requests.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Review submitted vehicle checks, track payment status, update report
          progress, and prepare completed reports for customer delivery.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Total Requests</p>
            <h2 className="mt-3 text-4xl font-bold">3</h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">New Requests</p>
            <h2 className="mt-3 text-4xl font-bold text-emerald-400">1</h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">In Review</p>
            <h2 className="mt-3 text-4xl font-bold">1</h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Completed</p>
            <h2 className="mt-3 text-4xl font-bold">1</h2>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">Report Requests</h2>
              <p className="mt-2 text-slate-400">
                View incoming vehicle report requests,payment status, and current review progress.
              </p>
            </div>

            <button className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400">
              Export Requests
            </button>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-slate-950 text-slate-300">
                <tr>
                  <th className="px-4 py-4">Customer</th>
                  <th className="px-4 py-4">Contact</th>
                  <th className="px-4 py-4">Vehicle</th>
                  <th className="px-4 py-4">Report Type</th>
                  <th className="px-4 py-4">Payment</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Submitted</th>
                  <th className="px-4 py-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr
                    key={request.vehicle}
                    className="border-t border-slate-800"
                  >
                    <td className="px-4 py-4 font-semibold">
                      {request.customer}
                    </td>

                    <td className="px-4 py-4 text-slate-300">
                      <p>{request.email}</p>
                      <p className="text-slate-500">{request.phone}</p>
                    </td>

                    <td className="px-4 py-4 font-semibold">
                      {request.vehicle}
                    </td>

                    <td className="px-4 py-4 text-slate-300">
                      {request.reportType}
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-400">
                        {request.payment}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                        {request.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-slate-400">
                      {request.submitted}
                    </td>

                    <td className="px-4 py-4">
                      <button className="rounded-full border border-slate-600 px-4 py-2 text-slate-200 hover:border-emerald-400">
                        Open
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-emerald-400">
              Admin workflow
            </h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>✓ Confirm request details</li>
              <li>✓ Confirm payment status</li>
              <li>✓ Review vehicle information</li>
              <li>✓ Prepare PDF report</li>
              <li>✓ Send completed report to customer email</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-emerald-400">
              Report delivery
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
                Keep every report request organized from submission to completion, including
    customer details, vehicle information, payment status, review progress, and
    final report actions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}