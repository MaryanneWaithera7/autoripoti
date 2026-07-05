"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSuccessMessage("");
  }

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
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

    setSuccessMessage(
      "Your message has been sent successfully. AutoRipoti will get back to you soon."
    );

    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Contact AutoRipoti
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Reach out to AutoRipoti
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Contact AutoRipoti for vehicle verification support, partnership
          enquiries, or help choosing the right report for your needs.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-emerald-400">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="mt-8">
              <div>
                <label className="block text-sm font-semibold text-slate-300">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="mt-5">
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
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
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
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-emerald-400">
              Contact details
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-semibold">Email</p>
                <p className="mt-2 text-slate-400">hello@autoripoti.co.ke</p>
              </div>

              <div>
                <p className="font-semibold">Location</p>
                <p className="mt-2 text-slate-400">Nairobi, Kenya</p>
              </div>

              <div>
                <p className="font-semibold">For buyers</p>
                <p className="mt-2 text-slate-400">
                  Ask about vehicle checks, report options, and the details you
                  need before requesting verification.
                </p>
              </div>

              <div>
                <p className="font-semibold">For partners</p>
                <p className="mt-2 text-slate-400">
                  Dealers, insurers, lenders, and mobility businesses can
                  contact AutoRipoti for future partnership opportunities.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5">
              <p className="font-semibold text-emerald-400">
                Quick buyer reminder
              </p>
              <p className="mt-2 text-slate-300">
                If a seller is rushing you to pay before verification, slow down
                and check the vehicle first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}