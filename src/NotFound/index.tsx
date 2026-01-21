// pages/404.jsx

import { Link, useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center">
      <div className="max-w-4xl w-full items-center">
        <div className="py-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Page not found</h1>
          <p className="text-slate-600 mb-6">We couldn't find the page you're looking for. It might have been moved or deleted — or maybe the URL was mistyped.</p>

          <div className="flex flex-wrap gap-3">
            <Link to="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-transparent shadow-[0_1px_2px_rgba(10,13,20,0.03)] bg-white text-slate-900 hover:bg-slate-50">
              Go home
            </Link>

            <button type="button" onClick={() => navigate(-1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100">
              Go back
            </button>
          </div>

          <p className="text-sm text-slate-400 mt-6">Tip: double-check the URL or try searching — we might have moved the content.</p>
        </div>
      </div>
    </main>
  );
}
