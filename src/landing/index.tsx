import { CloudFlarePages, Netlify, Render, Vercel } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle, Code2, ColumnsSettings, DotSquare, Rocket, ScrollText, Settings2, Webhook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      {/* Hero section start */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-background-light">
        <div className="absolute top-0 left-0 right-0 h-150 bg-subtle-gradient pointer-events-none z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-light bg-background-subtle mb-8 animate-fade-up opacity-0">
            <span className="flex h-2 w-2 rounded-full bg-accent"></span>
            <span className="text-xs font-medium text-text-secondary">v1.0 BetterPush is live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-text-primary animate-fade-up opacity-0 delay-100">
            Deploy Anywhere. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-text-primary to-gray-500">Migrate Seamlessly.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-normal animate-fade-up opacity-0 delay-200">BetterPush is the universal deployment interface for modern web applications, abstracting away provider complexities for unparalleled optionality.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-300">
            <Button asChild className="w-full sm:w-auto bg-accent text-text-primary text-base font-bold h-12 px-8 rounded-md hover:bg-[#e5a020] transition-all shadow-lg shadow-orange-100 hover:shadow-xl flex items-center justify-center gap-2">
              <Link to="/login">Start Deploying</Link>
            </Button>
            <Button asChild className="w-full sm:w-auto bg-transparent border border-transparent text-text-secondary hover:text-accent text-base font-medium h-12 px-8 rounded-md hover:bg-orange-50/50 transition-colors flex items-center justify-center gap-2">
              <Link to="/docs">Explore Documentation</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Hero section end */}

      <section className="py-24 border-t border-border-light bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-4">Your Code, Your Choice. Today &amp; Tomorrow.</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Connect your application to BetterPush once, and gain the freedom to deploy to any supported provider. Evolve your infrastructure without rewriting your deployment pipeline.</p>
          </div>
          <div className="relative group bg-white rounded-xl border border-border-light p-8 md:p-12 shadow-soft hover:shadow-hover transition-shadow duration-500">
            <div className="font-mono text-xs md:text-sm leading-relaxed text-text-secondary overflow-x-auto whitespace-pre text-center flex justify-center scrollbar-hide select-none">
              <code className="block">
                <span className="text-text-primary font-bold border border-gray-200 bg-gray-50 px-2 py-1 rounded shadow-sm inline-block mb-2">[ Your App Code ]</span> <br />
                <div className="flex justify-center">
                  <ArrowDown />
                </div>
                <span className="text-white px-3 py-1.5 rounded shadow-lg inline-block my-2">
                  <img src="/betterpush.png" className="w-20" alt="" />
                </span>{" "}
                <br />
                <div className="flex justify-center">
                  <ArrowDown />
                </div>
                <div className="flex items-center">
                  <div>
                    +---<span className="text-gray-400 italic">(Today)</span> ---&gt;{" "}
                  </div>
                  <span className="text-text-primary font-semibold border border-gray-200 bg-white px-2 py-1 rounded inline-flex items-center gap-1">
                    <Vercel />
                  </span>
                </div>
                <br />
                <div className="flex justify-center">
                  <ArrowDown />
                </div>
                <div className="flex items-center">
                  <div>
                    +---<span className="text-gray-400 italic">(Later)</span> ---&gt;{" "}
                  </div>
                  <span className="text-text-primary font-semibold border border-gray-200 bg-white px-2 py-1 rounded inline-flex items-center gap-1">
                    <Netlify />
                  </span>
                </div>
                <br />
                <div className="flex justify-center">
                  <ArrowDown />
                </div>
                <div className="flex items-center justify-center">
                  <div>
                    +---<span className="text-gray-400 italic">(Future)</span> ---&gt;{" "}
                  </div>
                  <span className="text-text-primary font-semibold border border-gray-200 bg-white px-2 py-1 rounded inline-flex items-center gap-1">
                    <Render />
                  </span>
                </div>
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                One Workflow. <br />
                All Your Deployments.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">Forget learning provider-specific APIs and configuration files. BetterPush provides a single, intuitive web interface for managing all your deployments, regardless of the underlying platform.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-lg bg-background-subtle border border-border-light hover:border-accent/30 transition-colors">
                  <ScrollText color="#ffb224" />
                  <h3 className="font-bold text-text-primary text-sm">Unified Logs</h3>
                  <p className="text-xs text-text-secondary mt-1">Aggregated runtime and build logs in one dashboard.</p>
                </div>
                <div className="p-4 rounded-lg bg-background-subtle border border-border-light hover:border-accent/30 transition-colors">
                  <Settings2 color="#ffb224" />
                  <h3 className="font-bold text-text-primary text-sm">Unified Config</h3>
                  <p className="text-xs text-text-secondary mt-1">Visual environment variable management.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full">
              <div className="bg-white rounded-xl shadow-soft border border-border-light overflow-hidden transform transition-transform hover:scale-[1.01]">
                <div className="bg-background-subtle px-4 py-3 flex items-center gap-4 border-b border-border-light">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-border-light"></div>
                    <div className="size-3 rounded-full bg-border-light"></div>
                    <div className="size-3 rounded-full bg-border-light"></div>
                  </div>
                  <div className="flex-1 bg-white rounded text-center text-[10px] text-text-secondary py-1 border border-border-light shadow-sm font-mono">betterpush.dev</div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">marketing-site-v2</h4>
                      <span className="text-xs text-text-secondary">Last deployed 2m ago</span>
                    </div>
                    <button className="bg-black text-white text-xs font-bold py-2 px-4 rounded shadow hover:bg-gray-800 transition-colors">Deploy</button>
                  </div>
                  <div className="flex items-center justify-between relative px-2">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
                    <div className="flex flex-col items-center gap-2 bg-white p-2">
                      <div className="size-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-text-secondary">
                        <Code2 />
                      </div>
                      <span className="text-[10px] font-bold text-text-secondary uppercase">Git Push</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white p-2">
                      <div className="size-12 rounded-full bg-white border-4 border-black text-accent flex items-center justify-center shadow-lg">
                        <img src="/betterpush-icon.png" alt="betterpush icon" className="w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-text-primary uppercase">Processing</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white p-2">
                      <div className="size-10 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600">
                        <CheckCircle />
                      </div>
                      <span className="text-[10px] font-bold text-green-600 uppercase">Live</span>
                    </div>
                  </div>
                  <div className="mt-8 bg-gray-50 rounded border border-gray-100 p-3 font-mono text-[10px] text-gray-500">
                    &gt; Starting build process
                    <br />
                    <span className="text-blue-500">i</span> Inspecting configuration...
                    <br />
                    <span className="text-green-500">✓</span> Build completed in 4.2s
                    <br />
                    <span className="text-green-500">✓</span> Deployed to Vercel (production)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-subtle border-y border-border-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="w-full relative bg-white border border-border-light rounded-xl p-8 shadow-sm">
              <div className="absolute -top-3 -right-3 bg-accent text-text-primary text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase">no lock-in</div>
              <div className="space-y-8">
                <div className="flex items-center gap-4 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                  <div className="w-16 text-right text-xs font-mono text-gray-400">Current</div>
                  <div className="h-px bg-gray-300 w-8"></div>
                  <div className="flex-1 bg-gray-50 border border-gray-200 p-3 rounded flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Vercel />
                    </div>
                    <span className="text-[10px] bg-gray-200 text-gray-600 px-1.5 rounded">Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16"></div>
                  <div className="w-8 flex justify-center">
                    <ArrowDown />
                  </div>
                  <div className="flex-1">
                    <div className="bg-accent-light border border-accent/20 p-2 rounded text-center text-xs text-text-primary font-medium">Click "Change Provider" in Settings</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-right text-xs font-mono text-accent font-bold">New</div>
                  <div className="h-px bg-accent w-8"></div>
                  <div className="flex-1 bg-white border border-accent shadow-md p-3 rounded flex items-center justify-between relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                    <div className="flex items-center gap-2">
                      <Netlify />
                    </div>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                Switch Providers, <br />
                Not Workflows.
              </h2>
              <div className="p-4 bg-yellow-50/50 border border-yellow-100 rounded-lg">
                <p className="text-lg text-text-secondary leading-relaxed">BetterPush ensures your deployment logic remains consistent, even when your infrastructure choices change. Migrate between Vercel, Netlify, Cloudflare Pages, and more with minimal effort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-6">Abstracted Infrastructure. Total Control.</h2>
          <p className="text-lg text-text-secondary mb-16">BetterPush sits as a thin, intelligent layer between your application and your deployment providers. We handle the intricacies of each platform.</p>
          <div className="relative flex flex-col items-center gap-6 isolate">
            <div className="w-full max-w-sm bg-white border border-border-light rounded-lg p-4 shadow-sm z-30 flex items-center justify-center gap-3">
              <div className="size-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
                <DotSquare />
              </div>
              <span className="font-semibold text-text-primary">Your Application</span>
            </div>
            <div className="h-12 w-px border-l-2 border-dashed border-gray-300"></div>
            <div className="w-full max-w-md bg-black text-white rounded-xl p-6 shadow-xl z-20 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-tr from-gray-900 to-black"></div>
              <div className="relative flex flex-col items-center gap-1">
                <div className="bg-white rounded-full p-2">
                  <img src="/betterpush-icon.png" alt="betterpush icon" className="w-5" />
                </div>
                <div className="text-xl font-bold tracking-tight">BetterPush</div>
                <span className="text-xs text-gray-400 font-mono tracking-wider">UNIVERSAL ADAPTER LAYER</span>
              </div>
            </div>
            <div className="h-12 w-px border-l-2 border-dashed border-gray-300"></div>
            <div className="w-full max-w-xl bg-gray-50 border border-border-light rounded-lg p-6 grid grid-cols-3 gap-4 z-10">
              <div className="flex flex-col items-center gap-1 opacity-60">
                <Vercel />
                <span className="text-[10px] uppercase font-bold text-gray-500">Vercel</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-60">
                <Netlify />
                <span className="text-[10px] uppercase font-bold text-gray-500">Netlify</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-60">
                <CloudFlarePages />
                <span className="text-[10px] uppercase font-bold text-gray-500">Cloudflare Pages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-subtle border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-text-primary tracking-tight">Deploy to Your Favorite Platforms.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="h-20 flex flex-col items-center justify-center bg-white rounded-lg border border-border-light hover:border-gray-300 hover:shadow-sm transition-all group">
              <Vercel />
            </div>
            <div className="h-20 flex flex-col items-center justify-center bg-white rounded-lg border border-border-light hover:border-gray-300 hover:shadow-sm transition-all group">
              <Netlify />
            </div>
            <div className="h-20 flex flex-col items-center justify-center bg-white rounded-lg border border-border-light hover:border-gray-300 hover:shadow-sm transition-all group">
              <CloudFlarePages />
              <span className="text-xs font-semibold text-text-secondary">Cloudflare Pages</span>
            </div>
            <div className="h-20 flex flex-col items-center justify-center bg-white rounded-lg border border-border-light hover:border-gray-300 hover:shadow-sm transition-all group">
              <Render />
              <span className="text-xs font-semibold text-text-secondary">Render</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <a className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-1 border-b border-dashed border-gray-300 pb-0.5 hover:border-gray-900" href="#">
              Don't see your provider? Tell us!
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-16 tracking-tight">Get Started in Three Simple Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl border border-border-light bg-background-light hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
              <div className="size-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-accent transition-colors">
                <Webhook />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">1. Connect Your Repo</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Integrate BetterPush with your Git repository (GitHub, GitLab, Bitbucket) via our web app.</p>
            </div>
            <div className="group p-8 rounded-xl border border-border-light bg-background-light hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
              <div className="size-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-accent transition-colors">
                <ColumnsSettings />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">2. Choose Your Provider</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Select your desired deployment target (e.g., Vercel) through the BetterPush web UI.</p>
            </div>
            <div className="group p-8 rounded-xl border border-border-light bg-background-light hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
              <div className="size-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-accent transition-colors">
                <Rocket />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">3. Deploy &amp; Iterate</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Trigger deployment from the web app. BetterPush handles the rest, ensuring seamless deployments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-subtle border-t border-border-light relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-transparent to-orange-50/30 opacity-50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-6">Ready to Streamline Your Deployments?</h2>
          <p className="text-xl text-text-secondary mb-10 font-light">Join developers who are simplifying their stack and gaining deployment freedom.</p>
          <Button asChild className="bg-accent hover:bg-[#e5a020] text-text-primary text-lg font-bold h-14 px-8 rounded-md transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-fit mx-auto">
            <Link to="/login">Start Building with BetterPush</Link>
          </Button>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-5 rounded-lg border border-border-light shadow-sm text-left">
              <p className="text-text-secondary text-sm mb-4">"Migrating from Netlify to Vercel took me literally 30 seconds with BetterPush. Insane."</p>
              <div className="flex items-center gap-3">
                <div className="size-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">AC</div>
                <div>
                  <div className="text-text-primary text-xs font-bold">Alex Chen</div>
                  <div className="text-text-secondary text-[10px]">Indie Hacker</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-border-light shadow-sm text-left">
              <p className="text-text-secondary text-sm mb-4">"The unified config dashboard is a game changer for our micro-frontend architecture."</p>
              <div className="flex items-center gap-3">
                <div className="size-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">SJ</div>
                <div>
                  <div className="text-text-primary text-xs font-bold">Sarah Jones</div>
                  <div className="text-text-secondary text-[10px]">Senior DevOps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
