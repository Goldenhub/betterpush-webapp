import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mb-8 text-sm font-medium inline-block" style={{ color: "rgb(255, 178, 36)" }}>
          ← Back to home
        </Link>
        <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-12">Last updated: December 20, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing and using BetterPush ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these Terms of Service, please do not use this Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-slate-600 leading-relaxed">
              BetterPush provides a unified deployment management platform that allows users to connect, trigger, and monitor deployments across multiple hosting platforms including Vercel, Netlify, Cloudflare Pages, and Render. The Service is provided "as is" and "as available."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-slate-600 leading-relaxed mb-3">When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Ensuring your account information remains accurate and up-to-date</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
            <p className="text-slate-600 leading-relaxed mb-3">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute malware, viruses, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Integrations</h2>
            <p className="text-slate-600 leading-relaxed">
              BetterPush integrates with third-party platforms such as Vercel, Netlify, Cloudflare Pages, and Render. Your use of these integrations is subject to the respective third-party terms of service. We are not responsible for the availability, functionality, or policies of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              The Service and its original content, features, and functionality are owned by BetterPush and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Data and Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Your use of the Service is also governed by our Privacy Policy. We collect and use your data as described in our <Link to="/privacy" className="underline hover:opacity-80" style={{ color: "rgb(255, 178, 36)" }}>Privacy Policy</Link>. By using the Service, you consent to such collection and use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Service Availability</h2>
            <p className="text-slate-600 leading-relaxed">
              We strive to maintain high availability of the Service but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, BetterPush shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4 mt-3">
              <li>Your use or inability to use the Service</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the Service</li>
              <li>Any bugs, viruses, or the like that may be transmitted through the Service by any third party</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
            <p className="text-slate-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless BetterPush and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
            <p className="text-slate-600 leading-relaxed">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which BetterPush operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms, please contact us through our <Link to="/support" className="underline hover:opacity-80" style={{ color: "rgb(255, 178, 36)" }}>support page</Link> or email us at support@betterpush.dev
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              By using BetterPush, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
