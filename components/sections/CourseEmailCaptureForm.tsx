"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

// Comprehensive email validation (matches server-side validation)
function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;

  // Trim whitespace
  email = email.trim().toLowerCase();

  // Check length constraints
  if (email.length < 3 || email.length > 254) return false;

  // RFC 5322 compliant email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  // Additional validation
  const [localPart, domain] = email.split("@");

  // Validate local part (before @)
  if (localPart.length > 64) return false;
  if (localPart.startsWith(".") || localPart.endsWith(".")) return false;
  if (localPart.includes("..")) return false;

  // Validate domain part (after @)
  if (domain.length > 253) return false;
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  if (domain.includes("..")) return false;

  // Check for valid TLD (at least 2 characters)
  const domainParts = domain.split(".");
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2) return false;

  return true;
}

export default function CourseEmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/course-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Welcome! Check your email for next steps.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col md:flex-row lg:flex-col gap-4">
        <div className="flex-1 relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-violet-500 focus:outline-none transition-colors"
            disabled={status === "loading" || status === "success"}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-8 py-4 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 min-w-[180px]"
        >
          {status === "loading" && (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Joining...</span>
            </>
          )}
          {status === "success" && (
            <>
              <CheckCircle2 className="h-5 w-5" />
              <span>Joined!</span>
            </>
          )}
          {status !== "loading" && status !== "success" && "Join Waitlist"}
        </button>
      </div>

      {/* Status Messages */}
      {message && (
        <div
          className={`p-4 rounded-lg text-center font-medium ${
            status === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
