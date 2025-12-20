import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mb-8 text-sm font-medium inline-block" style={{ color: "rgb(255, 178, 36)" }}>
          ← Back to home
        </Link>
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: December 20, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              BetterPush ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our deployment management platform. Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Information You Provide</h3>
            <p className="text-slate-600 leading-relaxed mb-3">We collect information that you voluntarily provide to us, including:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
              <li><strong>Profile Information:</strong> Optional profile details you choose to provide</li>
              <li><strong>Integration Credentials:</strong> OAuth tokens and API keys for third-party platforms (Vercel, Netlify, Cloudflare Pages, Render)</li>
              <li><strong>Support Communications:</strong> Information you provide when contacting our support team</li>
              <li><strong>Feedback:</strong> Any feedback, suggestions, or comments you submit</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-slate-600 leading-relaxed mb-3">When you use our Service, we automatically collect certain information:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Usage Data:</strong> Information about how you interact with our Service, including deployment history, feature usage, and preferences</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device identifiers, and IP address</li>
              <li><strong>Log Data:</strong> Server logs, error reports, and diagnostic information</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to maintain sessions and improve user experience</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Information from Third Parties</h3>
            <p className="text-slate-600 leading-relaxed">
              When you connect third-party platforms to BetterPush, we receive information from those platforms necessary to provide our Service, such as project lists, deployment status, and configuration data. This information is governed by the privacy policies of those third-party platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-3">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our deployment management platform</li>
              <li><strong>Account Management:</strong> To create and manage your account, authenticate users, and provide customer support</li>
              <li><strong>Integration Management:</strong> To connect and manage your third-party platform integrations</li>
              <li><strong>Communication:</strong> To send you service-related notifications, updates, and security alerts</li>
              <li><strong>Analytics:</strong> To understand how users interact with our Service and identify areas for improvement</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security vulnerabilities</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Storage and Security</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Encryption:</strong> All data transmitted between your browser and our servers is encrypted using TLS/SSL</li>
              <li><strong>Secure Storage:</strong> Sensitive data, including OAuth tokens and API keys, are encrypted at rest</li>
              <li><strong>Access Controls:</strong> We restrict access to personal information to authorized personnel only</li>
              <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
              <li><strong>Data Retention:</strong> We retain your data only as long as necessary to provide our Service or as required by law</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-slate-600 leading-relaxed mb-3">We do not sell your personal information. We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Third-Party Platforms:</strong> With platforms you connect (Vercel, Netlify, etc.) to enable deployment management functionality</li>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our Service (hosting, analytics, customer support)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to affected users</li>
              <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of BetterPush, our users, or the public</li>
              <li><strong>With Your Consent:</strong> When you explicitly consent to sharing your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
              <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent is the legal basis</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              To exercise these rights, please contact us at privacy@betterpush.dev. We will respond to your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-slate-600 leading-relaxed mb-3">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Maintain your session and keep you logged in</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze usage patterns and improve our Service</li>
              <li>Provide personalized content and features</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
            <p className="text-slate-600 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Third-Party Links</h2>
            <p className="text-slate-600 leading-relaxed">
              Our Service may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of every website you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none space-y-2 text-slate-600 ml-4 mt-3">
              <li><strong>Email:</strong> privacy@betterpush.dev</li>
              <li><strong>Support:</strong> <Link to="/support" className="underline hover:opacity-80" style={{ color: "rgb(255, 178, 36)" }}>Contact Support</Link></li>
            </ul>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              By using BetterPush, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
