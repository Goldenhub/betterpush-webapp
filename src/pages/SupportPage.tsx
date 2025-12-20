import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MessageSquare } from "lucide-react";

export default function SupportPage() {
  const [supportMessage, setSupportMessage] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [supportLoading, setSupportLoading] = useState(false);
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSupportLoading(true);
    try {
      // In a real app, send to backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSupportSubmitted(true);
      setSupportMessage("");
      setSupportEmail("");
      setTimeout(() => setSupportSubmitted(false), 3000);
    } catch (err) {
      console.error("Failed to submit support request");
    } finally {
      setSupportLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mb-8 text-sm font-medium inline-block" style={{ color: "rgb(255, 178, 36)" }}>
          ← Back to home
        </Link>
        <h1 className="text-5xl font-bold mb-4">Support</h1>
        <p className="text-xl text-slate-600 mb-12">We're here to help. Tell us what's on your mind.</p>

        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          {supportSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" style={{ color: "rgb(255, 178, 36)" }}>
                  ✓
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
              <p className="text-slate-600">Your message has been received. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSupportSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input type="email" value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all" style={{ "--tw-ring-color": "rgb(255, 178, 36)" } as any} placeholder="you@example.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all" style={{ "--tw-ring-color": "rgb(255, 178, 36)" } as any} placeholder="What's the issue?" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea value={supportMessage} onChange={(e) => setSupportMessage(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all resize-none" style={{ "--tw-ring-color": "rgb(255, 178, 36)" } as any} placeholder="Please describe your issue or feedback..." rows={6} required />
              </div>

              <button type="submit" disabled={!supportLoading} className="w-full px-4 py-3 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-105" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 178, 36), rgb(255, 195, 100))", boxShadow: "0 4px 15px rgba(255, 178, 36, 0.3)" }}>
                {supportLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(255, 178, 36, 0.15)" }}>
              <Mail className="w-6 h-6" style={{ color: "rgb(255, 178, 36)" }} />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-slate-600">support@betterpush.dev</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(255, 178, 36, 0.15)" }}>
              <MessageSquare className="w-6 h-6" style={{ color: "rgb(255, 178, 36)" }} />
            </div>
            <h3 className="font-semibold mb-2">Chat</h3>
            <p className="text-sm text-slate-600">Available during business hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
