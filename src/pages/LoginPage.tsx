import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Login functionality disabled for now
    console.log("Login attempt:", { email, password });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255, 178, 36, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 178, 36, 0.2), transparent 50%)" }} />
      <div className="w-full max-w-md relative z-10">
        <Link to="/" className="mb-6 text-sm font-medium inline-flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: "rgb(255, 178, 36)" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
        <div className="rounded-xl border border-slate-200 p-8 backdrop-blur-sm" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 178, 36, 0.05))" }}>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 bg-clip-text text-transparent">Welcome back</h1>
          <p className="text-slate-600 mb-6">Sign in to your account</p>

          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all" style={{ borderColor: email ? "rgb(255, 178, 36)" : "rgb(226, 232, 240)", "--tw-ring-color": "rgb(255, 178, 36)" } as any} placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all" style={{ borderColor: password ? "rgb(255, 178, 36)" : "rgb(226, 232, 240)", "--tw-ring-color": "rgb(255, 178, 36)" } as any} placeholder="••••••••" required />
            </div>

            <button type="submit" disabled className="w-full px-4 py-2 text-white font-medium rounded-lg transition-all opacity-50 cursor-not-allowed" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 178, 36), rgb(255, 195, 100))", boxShadow: "0 4px 15px rgba(255, 178, 36, 0.3)" }}>
              Sign in
            </button>
          </form>

          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-50 text-slate-600">Or continue with</span>
            </div>
          </div>

          <button type="button" disabled className="w-full px-4 py-2 border border-slate-300 rounded-lg font-medium transition-all flex items-center justify-center gap-2 opacity-50 cursor-not-allowed" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 178, 36, 0.1), rgba(255, 195, 100, 0.05))", color: "rgb(255, 178, 36)" }}>
            GitHub
          </button>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium hover:underline" style={{ color: "rgb(255, 178, 36)" }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
