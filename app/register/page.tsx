"use client";

import { useState } from "react";
import { useRouter} from "next/navigation"

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    }

    if (!formData.password.trim()) {
  newErrors.password = "Password is required.";
} else if (formData.password.length < 8) {
  newErrors.password = "Password must be at least 8 characters long.";
} else if (!/[A-Z]/.test(formData.password)) {
  newErrors.password = "Password must contain at least one uppercase letter.";
} else if (!/[a-z]/.test(formData.password)) {
  newErrors.password = "Password must contain at least one lowercase letter.";
} else if (!/[0-9]/.test(formData.password)) {
  newErrors.password = "Password must contain at least one number.";
} else if (!/[^A-Za-z0-9]/.test(formData.password)) {
  newErrors.password = "Password must contain at least one special character.";
}

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
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
  "Account created successfully. Redirecting you to login..."
);

setTimeout(() => {
  router.push("/login");
}, 1500);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10 text-white">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Create Account
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Create your AutoRipoti account.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Create an account to track report requests, follow progress, and
            access completed vehicle reports when they are ready.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">Create account</h2>
          <p className="mt-2 text-slate-400">
            Enter your details to get started.
          </p>

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
                <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>
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
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. 0712 345 678"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
              {errors.phoneNumber && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.phoneNumber}
                </p>
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
  placeholder="Create a strong password"
  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
/>

<p className="mt-2 text-sm leading-6 text-slate-400">
  Use at least 8 characters with an uppercase letter, lowercase letter, number,
  and special character.
</p>

{errors.password && (
  <p className="mt-2 text-sm text-red-400">{errors.password}</p>
)}
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-300">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.confirmPassword}
                </p>
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