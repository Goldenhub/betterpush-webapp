import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/betterpush-icon.png" alt="BetterPush" className="h-8 w-auto" />
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/docs" className="px-3 py-2 text-sm font-medium transition-colors hover:opacity-80" style={{ color: "rgb(100, 116, 139)" }}>
                Docs
              </Link>
              <button disabled className="px-3 py-2 text-sm font-medium transition-colors opacity-50 cursor-not-allowed" style={{ color: "rgb(100, 116, 139)" }}>
                Pricing
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {isLandingPage && (
              <>
                <Link to="/login" className="px-4 py-2 text-sm font-medium transition-colors hover:opacity-80" style={{ color: "rgb(255, 178, 36)" }}>
                  Login
                </Link>
                <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-all hover:shadow-lg hover:scale-105" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 178, 36), rgb(255, 195, 100))" }}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />
    </div>
  );
}
