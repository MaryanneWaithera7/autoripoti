import Link from "next/link";

export default function footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-8 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">AutoRipoti</h2>
          <p className="mt-2 text-sm text-emerald-400">
            Know the Car. Own the Truth.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Vehicle history verification built to help buyers review key car
            details before making a purchase decision.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200">Company</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link href="/about" className="block hover:text-white">
              About
            </Link>
            <Link href="/how-it-works" className="block hover:text-white">
              How It Works
            </Link>
            <Link href="/pricing" className="block hover:text-white">
              Pricing
            </Link>
            <Link href="/faq" className="block hover:text-white">
              FAQ
            </Link>
            <Link href="/terms" className="block hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="block hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="block hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200">Reports</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link href="/sample-report" className="block hover:text-white">
              Sample Report
            </Link>
            <Link href="/request-report" className="block hover:text-white">
              Request Report
            </Link>
            <Link href="/login" className="block hover:text-white">
              Login
            </Link>
            <Link href="/register" className="block hover:text-white">
              Create Account
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>Nairobi, Kenya</p>
            <p>hello@autoripoti.co.ke</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-800 pt-6 text-sm text-slate-500">
        © 2026 AutoRipoti. All rights reserved.
      </div>
    </footer>
  );
}