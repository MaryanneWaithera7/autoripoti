export default function RequestReportPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Request a Report
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Start your vehicle verification request.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Share the vehicle details you have, and AutoRipoti will help you review
          key information before you move forward with the purchase.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <form className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div>
              <label className="block text-sm font-semibold text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-300">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="e.g. 0712 345 678"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-300">
                Vehicle Registration Number
              </label>
              <input
                type="text"
                placeholder="e.g. KDA 123A"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 uppercase text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-300">
                Chassis/VIN Number
              </label>
              <input
                type="text"
                placeholder="Enter chassis or VIN number if available"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-300">
                Report Type
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400">
                <option>Basic Check - KES 500</option>
                <option>Full Vehicle Report - KES 1,200</option>
                <option>Premium Buyer Review - KES 2,000</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-300">
                Additional Notes
              </label>
              <textarea
                placeholder="Tell us anything important about the vehicle or seller."
                rows={4}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Submit Request
            </button>
          </form>

          <div className="rounded-3xl bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-emerald-400">
              What happens after you submit?
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-semibold">1. We receive your request</p>
                <p className="mt-2 text-slate-400">
                  Your vehicle details are captured so the review process can
                  begin.
                </p>
              </div>

              <div>
                <p className="font-semibold">2. We review the details</p>
                <p className="mt-2 text-slate-400">
                  AutoRipoti checks the submitted information and prepares the
                  selected report type.
                </p>
              </div>

              <div>
                <p className="font-semibold">3. You receive your report</p>
                <p className="mt-2 text-slate-400">
                  The completed report is sent digitally for you to review before
                  taking the next step with the seller.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5">
              <p className="font-semibold text-emerald-400">
                Tip before buying
              </p>
              <p className="mt-2 text-slate-300">
                Always verify the vehicle before paying a deposit, signing sale
                documents, or starting ownership transfer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}