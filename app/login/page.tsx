"use client";

import { useState } from "react";
import { useRouter} from "next/navigation"

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);
    setSuccessMessage("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

   setSuccessMessage("Login successful. Redirecting you to your dashboard...");

setTimeout(() => {
  router.push("/dashboard");
}, 1500);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10 text-white">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
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

          <form onSubmit={handleSubmit} className="mt-8">
            <div>
              <label className="block text-sm font-semibold text-slate-300">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-300">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {successMessage && (
              <p className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-400">
                {successMessage}
              </p>
            )}

            <button
              type="submit"
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