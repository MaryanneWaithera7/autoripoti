export default function registerPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Create Account
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">        import ... from "../../../app/register/page.js";
            Start your AutoRipoti account.
          </h1>
"../../../app/register/page.js"
"../../../app/register/page.js"
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Create an account to request vehicle checks, track report progress,
            and access completed reports when they are ready.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">Create your account</h2>
          <p className="mt-2 text-slate-400">
            Enter your details to get started.
          </p>

          <form className="mt-8">
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
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <a href="/login" className="font-semibold text-emerald-400">
              Login
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}