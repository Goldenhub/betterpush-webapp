import { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const [supportMessage, setSupportMessage] = useState("");
  const [supportEmail, setSupportEmail] = useState("");

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xl text-slate-600 mb-12 text-center">We're here to help. Tell us what's on your mind.</p>

        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input type="email" value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all" placeholder="you@example.com" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all" placeholder="What's the issue?" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea value={supportMessage} onChange={(e) => setSupportMessage(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all resize-none" placeholder="Please describe your issue or feedback..." rows={6} required />
            </div>

            <button type="submit" disabled={true} className="w-full px-4 py-3 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-105" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 178, 36), rgb(255, 195, 100))", boxShadow: "0 4px 15px rgba(255, 178, 36, 0.3)" }}>
              Send Message
            </button>
          </form>
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
