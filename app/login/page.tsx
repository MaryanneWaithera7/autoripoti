export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Login
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Access your AutoRipoti account.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Sign in to track vehicle report requests, view report progress, and
            access completed reports when they are ready.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="mt-2 text-slate-400">
            Enter your details to continue.
          </p>

          <form className="mt-8">
            <div>
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
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Do not have an account?{" "}
            <a href="/register" className="font-semibold text-emerald-400">
              Create one
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}