import { Link } from "react-router-dom";
import { Link2, Zap, BarChart3, Check } from "lucide-react";
import { CloudFlarePages, Netlify, Render, Vercel } from "../assets/icons";

const providerIcons = {
  vercel: <Vercel />,
  netlify: <Netlify />,
  cloudflare: <CloudFlarePages />,
  render: <Render />,
};

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 178, 36, 0.1), transparent), linear-gradient(to bottom right, rgba(255, 178, 36, 0.05), transparent)",
          }}
        />
        <div className="flex justify-center">
          <span className="border border-[rgb(255,178,36)] px-3 py-1 rounded-full text-black text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-[rgb(255,178,36)]"></span>{" "}
            Coming soon
          </span>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Deploy to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(255, 178, 36), rgb(255, 195, 100))",
              }}
            >
              every platform
            </span>
            <br />
            from one place
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Unified deployment interface for modern developers. Connect,
            trigger, and monitor deployments across multiple platforms with
            confidence.
          </p>
          <div className="flex gap-8 items-center justify-center mb-8">
            {Object.entries(providerIcons).map(([key, Icon]) => (
              <div
                key={key}
                title={key}
                className="w-14 p-3 rounded-full border border-slate-200 hover:shadow-md transition-all"
              >
                {Icon}
              </div>
            ))}
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to="/signup"
              className="px-8 py-3 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:scale-105"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(255, 178, 36), rgb(255, 195, 100))",
                boxShadow: "0 4px 15px rgba(255, 178, 36, 0.3)",
              }}
            >
              Get Started
            </Link>
            <Link
              to="/docs"
              className="px-8 py-3 font-medium rounded-lg transition-all hover:shadow-lg hover:scale-105 text-[rgb(255,178,36)]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(255, 178, 36, 0.15), rgba(255, 195, 100, 0.15))",
                border: "1.5px solid rgb(255, 178, 36)",
              }}
            >
              View Docs
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(255, 178, 36), rgb(255, 195, 100))",
            }}
          >
            How it works
          </h2>
          <p className="text-slate-600 text-center text-lg mb-16 max-w-2xl mx-auto">
            Three simple steps to unify your deployment workflow
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative group">
              <div
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(255, 178, 36), rgb(255, 195, 100))",
                }}
              />
              <div className="relative bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(255, 178, 36, 0.15)" }}
                >
                  <Link2
                    className="w-6 h-6"
                    style={{ color: "rgb(255, 178, 36)" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect</h3>
                <p className="text-slate-600 leading-relaxed">
                  Link your repositories and deployment targets. Secure,
                  token-based integration with industry-standard platforms.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(255, 178, 36), rgb(255, 195, 100))",
                }}
              />
              <div className="relative bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(255, 178, 36, 0.15)" }}
                >
                  <Zap
                    className="w-6 h-6"
                    style={{ color: "rgb(255, 178, 36)" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trigger & Manage</h3>
                <p className="text-slate-600 leading-relaxed">
                  Deploy with a single click. Manage versions, rollbacks, and
                  configurations across all platforms from one dashboard.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(255, 178, 36), rgb(255, 195, 100))",
                }}
              />
              <div className="relative bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(255, 178, 36, 0.15)" }}
                >
                  <BarChart3
                    className="w-6 h-6"
                    style={{ color: "rgb(255, 178, 36)" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Monitor</h3>
                <p className="text-slate-600 leading-relaxed">
                  Real-time logs, metrics, and deployment status. Get notified
                  instantly when something goes wrong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Exists Section */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(255, 178, 36), rgb(255, 195, 100))",
            }}
          >
            Why BetterPush
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div
                  className="flex items-center justify-center h-10 w-10 rounded-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255, 178, 36, 0.3), rgba(255, 195, 100, 0.15))",
                  }}
                >
                  <span
                    className="font-bold"
                    style={{ color: "rgb(255, 178, 36)" }}
                  >
                    <Check />
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Stop context-switching
                </h3>
                <p className="text-slate-600">
                  Tired of juggling multiple dashboards and deployment tools?
                  One unified interface for all your platforms.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div
                  className="flex items-center justify-center h-10 w-10 rounded-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255, 178, 36, 0.3), rgba(255, 195, 100, 0.15))",
                  }}
                >
                  <span
                    className="font-bold"
                    style={{ color: "rgb(255, 178, 36)" }}
                  >
                    <Check />
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Security by default
                </h3>
                <p className="text-slate-600">
                  Encrypted credentials, granular permissions, and audit logs.
                  Your deployments stay secure and compliant.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div
                  className="flex items-center justify-center h-10 w-10 rounded-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255, 178, 36, 0.3), rgba(255, 195, 100, 0.15))",
                  }}
                >
                  <span
                    className="font-bold"
                    style={{ color: "rgb(255, 178, 36)" }}
                  >
                    <Check />
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Scale with confidence
                </h3>
                <p className="text-slate-600">
                  From side projects to production deployments. Handles
                  everything from single servers to multi-region setups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(255, 178, 36), rgb(255, 195, 100))",
            }}
          >
            Ready to simplify deployments?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers managing deployments across multiple
            platforms with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="px-8 py-3 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:scale-105"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(255, 178, 36), rgb(255, 195, 100))",
                boxShadow: "0 4px 15px rgba(255, 178, 36, 0.3)",
              }}
            >
              Get Started
            </Link>
            {/* <a
              href="https://github.com/goldenhub/betterpush"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 font-medium rounded-lg transition-all hover:shadow-lg hover:scale-105 text-[rgb(255,178,36)] flex gap-2"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(255, 178, 36, 0.15), rgba(255, 195, 100, 0.15))",
                border: "1.5px solid rgb(255, 178, 36)",
              }}
            >
              <Star />
              Star on GitHub
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img
                src="/betterpush-icon.png"
                alt="BetterPush"
                className="h-8 w-auto mb-4"
              />
              <p className="text-slate-600 text-sm">
                Unified deployment interface for modern developers.
              </p>
            </div>
            <div className="flex md:justify-end gap-8">
              <div>
                <h4 className="font-semibold text-sm mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-950 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-950 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-950 transition-colors"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <Link
                      to="/docs"
                      className="hover:text-slate-950 transition-colors"
                    >
                      Docs
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-950 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/support"
                      className="hover:text-slate-950 transition-colors"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <Link
                      to="/privacy"
                      className="hover:text-slate-950 transition-colors"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="hover:text-slate-950 transition-colors"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; 2025 BetterPush. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-950 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-slate-950 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-slate-950 transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
