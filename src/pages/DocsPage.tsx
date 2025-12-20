import { Link } from "react-router-dom";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mb-8 text-sm font-medium inline-block" style={{ color: "rgb(255, 178, 36)" }}>
          ← Back to home
        </Link>
        <h1 className="text-5xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-slate-600 mb-12">Learn how to use BetterPush to manage your deployments</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
            <div className="space-y-4 text-slate-600">
              <p>BetterPush is a unified deployment interface that helps you manage deployments across multiple platforms. Here's how to get started:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Create an account and log in</li>
                <li>Connect your repositories and deployment targets</li>
                <li>Set up your first deployment</li>
                <li>Monitor and manage your deployments in real-time</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Core Concepts</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-400 pl-6" style={{ borderLeftColor: "rgb(255, 178, 36)" }}>
                <h3 className="text-xl font-semibold mb-2">Connections</h3>
                <p className="text-slate-600">Links to your repositories and deployment targets. We support GitHub, GitLab, and other platforms with secure token-based authentication.</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-6" style={{ borderLeftColor: "rgb(255, 178, 36)" }}>
                <h3 className="text-xl font-semibold mb-2">Deployments</h3>
                <p className="text-slate-600">Deploy your applications with a single click. Manage versions, rollbacks, and configurations from one unified dashboard.</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-6" style={{ borderLeftColor: "rgb(255, 178, 36)" }}>
                <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
                <p className="text-slate-600">Real-time logs, metrics, and deployment status. Get instant notifications for any issues or failures.</p>
              </div>
            </div>
          </section>

          {/* Under Development Notice */}
          <section className="mt-16">
            <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 p-12 text-center">
              {/* Background gradient */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 178, 36), rgb(255, 195, 100))" }} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 178, 36, 0.2), rgba(255, 195, 100, 0.1))" }}>
                  <svg className="w-10 h-10" style={{ color: "rgb(255, 178, 36)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, rgb(255, 178, 36), rgb(255, 195, 100))" }}>
                  Under Development
                </h2>
                
                <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                  We're working hard to bring you comprehensive documentation, best practices, and advanced guides. Check back soon!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/support" className="px-6 py-3 font-medium rounded-lg transition-all hover:shadow-lg hover:scale-105 text-white" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 178, 36), rgb(255, 195, 100))" }}>
                    Contact Support
                  </Link>
                  <Link to="/" className="px-6 py-3 font-medium rounded-lg transition-all hover:shadow-md text-slate-600 border border-slate-300">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
