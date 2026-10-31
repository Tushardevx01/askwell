import Link from "next/link";
import { APP_NAME, PLAN_LIMITS } from "@askwell/shared";
import { ArrowRight, Bot, Code, Sparkles, Check } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-glass border-b border-zinc-800/80 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-black font-bold text-sm">
              A
            </div>
            <span className="font-semibold text-lg tracking-tight">{APP_NAME}</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-colors"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-400 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
          <span>AI chat widget for any website</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none">
          Turn your docs into an instant AI support assistant
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Upload product documents or paste text. Copy one script tag. Your visitors get instant, accurate answers 24/7.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            Start free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-300 font-medium text-sm hover:bg-zinc-800/80 transition-colors"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 border-t border-zinc-900 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold">How it works</h2>
          <p className="mt-3 text-zinc-400 text-sm">Up and running on your site in under 3 minutes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-glass">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-white">
              <span className="font-semibold text-sm">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Upload Knowledge</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Upload PDF, Markdown, or plain text documentation. Our engine chunks and indexes everything automatically.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-glass">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-white">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Embed One Tag</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Copy your unique snippet from the install tab and paste it into your HTML or website builder.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-glass">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-white">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Instant Support</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your visitors get answers grounded strictly in your docs. Unanswered questions say &ldquo;I don&apos;t know&rdquo;.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 border-t border-zinc-900 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-3 text-zinc-400 text-sm">Start free, upgrade as you grow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-glass flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-xl">Free</h3>
              <p className="text-zinc-400 text-sm mt-1">For side projects and small sites.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-zinc-400 text-sm">/ month</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>{PLAN_LIMITS.free.projects} Project</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>{PLAN_LIMITS.free.messagesPerMonth} messages / month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>{PLAN_LIMITS.free.knowledgeSources} knowledge sources</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-500">
                  <span>Standard widget styling</span>
                </li>
              </ul>
            </div>
            <Link
              href="/dashboard"
              className="mt-8 block text-center py-2.5 rounded-full border border-zinc-700 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Get started free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="p-8 rounded-2xl border border-white/20 bg-zinc-900/40 backdrop-blur-glass relative flex flex-col justify-between shadow-2xl">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider">
              Popular
            </div>
            <div>
              <h3 className="font-semibold text-xl">Pro</h3>
              <p className="text-zinc-400 text-sm mt-1">For businesses and production sites.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-zinc-400 text-sm">/ month</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>{PLAN_LIMITS.pro.projects} Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>{PLAN_LIMITS.pro.messagesPerMonth.toLocaleString()} messages / month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>{PLAN_LIMITS.pro.knowledgeSources} knowledge sources</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>Custom branding & colors</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>Remove &ldquo;Powered by&rdquo; badge</span>
                </li>
              </ul>
            </div>
            <Link
              href="/dashboard"
              className="mt-8 block text-center py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-10 px-6 text-center text-xs text-zinc-500">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
      </footer>
    </div>
  );
}
