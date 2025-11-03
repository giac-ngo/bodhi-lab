import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import lotusIcon from "@assets/44_1762155616660.png";
import bellIcon from "@assets/Bell_no_bg (1)_1762155616660.png";
import buddhaIcon from "@assets/2_1762155709385.png";
import sutraIcon from "@assets/Wordless Sutra Icon - Sumi-e Style_1762155698128.png";

export default function Career() {
  return (
    <div className="min-h-screen bg-[#EFE0BD] text-[#8B4513]">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFE0BD] via-[#E5D5B7] to-[#EFE0BD]"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(rgba(139, 69, 19, 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 backdrop-blur-md bg-[#EFE0BD]/80 border-b border-[#8B4513]/20">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <a className="flex items-center" data-testid="link-brand">
                <span className="font-serif font-bold text-[#991b1b] text-lg">Bodhi Technology Lab</span>
              </a>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/">
                <a className="font-serif text-[#8B4513]/70 hover:text-[#991b1b] px-4 py-2 rounded-full hover:bg-[#8B4513]/5 transition-colors" data-testid="link-home">
                  Home
                </a>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src={sutraIcon} alt="Sutra" className="w-12 h-12 object-contain" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#991b1b] mb-6" data-testid="text-career-title">
              Join Our Sacred Mission
            </h1>
            <p className="font-serif text-xl text-[#8B4513]/80 mb-8 max-w-3xl mx-auto">
              Build technology that serves the Dharma, not the market. Join a global team of engineers, monastics, and practitioners creating tools for awakening.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#991b1b] to-transparent mx-auto"></div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="py-16 px-4 bg-[#EFE0BD]/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-[#991b1b] mb-12 text-center" data-testid="text-culture-title">
              Our Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/50 backdrop-blur-md rounded-2xl border-2 border-[#8B4513]/20 p-6 space-y-4" data-testid="card-culture-intentional">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#991b1b]/10 flex items-center justify-center">
                    <img src={lotusIcon} alt="Lotus" className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2c2c2c]">Intentional Work</h3>
                </div>
                <p className="font-serif text-sm text-[#8B4513]/70">
                  Every feature serves a spiritual purpose. No dark patterns, no manipulation, no surveillance. We build tools that cultivate presence, not addiction.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-md rounded-2xl border-2 border-[#8B4513]/20 p-6 space-y-4" data-testid="card-culture-distributed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#991b1b]/10 flex items-center justify-center">
                    <img src={bellIcon} alt="Bell" className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2c2c2c]">Fully Distributed</h3>
                </div>
                <p className="font-serif text-sm text-[#8B4513]/70">
                  Work from anywhere—temples, monasteries, meditation centers, or home. Async-first culture with weekly syncs across time zones.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-md rounded-2xl border-2 border-[#8B4513]/20 p-6 space-y-4" data-testid="card-culture-contemplative">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#991b1b]/10 flex items-center justify-center">
                    <img src={buddhaIcon} alt="Buddha" className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2c2c2c]">Contemplative Tech</h3>
                </div>
                <p className="font-serif text-sm text-[#8B4513]/70">
                  We practice what we build. Regular meditation sessions, Dharma talks, and mindful code reviews are part of our workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-[#991b1b] mb-4 text-center" data-testid="text-positions-title">
              Open Positions
            </h2>
            <p className="font-serif text-lg text-[#8B4513]/70 text-center mb-12 max-w-2xl mx-auto">
              We're seeking skilled practitioners who understand both technology and the spiritual path
            </p>

            <div className="space-y-6">
              {/* Senior Full-Stack Engineer */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl border-2 border-[#8B4513]/20 p-8 hover:border-[#991b1b]/40 transition-all duration-300 hover:shadow-xl" data-testid="card-job-fullstack">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#991b1b] mb-2">Senior Full-Stack Engineer</h3>
                    <p className="font-serif text-sm text-[#8B4513]/70">Remote • Full-time • Engineering</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-[#991b1b]/10 text-[#991b1b] font-serif font-semibold text-sm whitespace-nowrap">
                    Open
                  </span>
                </div>
                <p className="font-serif text-[#2c2c2c] mb-6">
                  Lead development of white-label platforms for Buddhist temples. Build React/TypeScript frontends, Node.js/Express backends, and PostgreSQL databases. Experience with AI integration (OpenAI, Anthropic) preferred.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">React</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">TypeScript</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Node.js</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">PostgreSQL</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">AI/LLMs</span>
                </div>
                <a
                  href="mailto:talent@boddhilab.io?subject=Application: Senior Full-Stack Engineer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#991b1b] text-white font-serif font-semibold rounded-xl hover:bg-[#7a1515] transition-all duration-300 shadow-md"
                  data-testid="button-apply-fullstack"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* AI/ML Engineer */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl border-2 border-[#8B4513]/20 p-8 hover:border-[#991b1b]/40 transition-all duration-300 hover:shadow-xl" data-testid="card-job-ai">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#991b1b] mb-2">AI/ML Engineer</h3>
                    <p className="font-serif text-sm text-[#8B4513]/70">Remote • Full-time • Engineering</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-[#991b1b]/10 text-[#991b1b] font-serif font-semibold text-sm whitespace-nowrap">
                    Open
                  </span>
                </div>
                <p className="font-serif text-[#2c2c2c] mb-6">
                  Design and train Buddhist AI agents with domain knowledge from sutras, commentaries, and Dharma teachings. Work with RAG systems, fine-tuning, and multi-tradition Buddhist knowledge bases.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Python</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">LangChain</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Vector DBs</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">RAG</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Fine-tuning</span>
                </div>
                <a
                  href="mailto:talent@boddhilab.io?subject=Application: AI/ML Engineer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#991b1b] text-white font-serif font-semibold rounded-xl hover:bg-[#7a1515] transition-all duration-300 shadow-md"
                  data-testid="button-apply-ai"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Product Designer */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl border-2 border-[#8B4513]/20 p-8 hover:border-[#991b1b]/40 transition-all duration-300 hover:shadow-xl" data-testid="card-job-designer">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#991b1b] mb-2">Product Designer (UI/UX)</h3>
                    <p className="font-serif text-sm text-[#8B4513]/70">Remote • Full-time • Design</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-[#991b1b]/10 text-[#991b1b] font-serif font-semibold text-sm whitespace-nowrap">
                    Open
                  </span>
                </div>
                <p className="font-serif text-[#2c2c2c] mb-6">
                  Craft contemplative user experiences that honor Buddhist aesthetics and principles. Design interfaces that reduce suffering, not amplify it. Experience with Figma, accessibility, and bilingual (EN/VN) design systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Figma</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">UI/UX</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Design Systems</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Accessibility</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Bilingual</span>
                </div>
                <a
                  href="mailto:talent@boddhilab.io?subject=Application: Product Designer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#991b1b] text-white font-serif font-semibold rounded-xl hover:bg-[#7a1515] transition-all duration-300 shadow-md"
                  data-testid="button-apply-designer"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* DevOps Engineer */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl border-2 border-[#8B4513]/20 p-8 hover:border-[#991b1b]/40 transition-all duration-300 hover:shadow-xl" data-testid="card-job-devops">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#991b1b] mb-2">DevOps Engineer</h3>
                    <p className="font-serif text-sm text-[#8B4513]/70">Remote • Full-time • Infrastructure</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-[#991b1b]/10 text-[#991b1b] font-serif font-semibold text-sm whitespace-nowrap">
                    Open
                  </span>
                </div>
                <p className="font-serif text-[#2c2c2c] mb-6">
                  Build decentralized, censorship-resistant infrastructure for global Buddhist communities. Manage Kubernetes clusters, CI/CD pipelines, monitoring, and elastic compute that scales to zero.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Kubernetes</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Docker</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">CI/CD</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Terraform</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-sans bg-[#991b1b]/10 text-[#991b1b]">Monitoring</span>
                </div>
                <a
                  href="mailto:talent@boddhilab.io?subject=Application: DevOps Engineer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#991b1b] text-white font-serif font-semibold rounded-xl hover:bg-[#7a1515] transition-all duration-300 shadow-md"
                  data-testid="button-apply-devops"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-[#EFE0BD]/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-[#991b1b] mb-12 text-center" data-testid="text-benefits-title">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4" data-testid="card-benefit-compensation">
                <img src={lotusIcon} alt="Lotus" className="w-6 h-6 object-contain flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-2">Competitive Compensation</h3>
                  <p className="font-serif text-sm text-[#8B4513]/70">
                    Market-rate salaries with equity options. Fair pay for righteous work.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="card-benefit-retreat">
                <img src={lotusIcon} alt="Lotus" className="w-6 h-6 object-contain flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-2">Retreat Support</h3>
                  <p className="font-serif text-sm text-[#8B4513]/70">
                    Paid time for meditation retreats. We encourage deep practice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="card-benefit-flexible">
                <img src={lotusIcon} alt="Lotus" className="w-6 h-6 object-contain flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-2">Flexible Hours</h3>
                  <p className="font-serif text-sm text-[#8B4513]/70">
                    Async-first with core overlap hours. Honor your natural rhythms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="card-benefit-learning">
                <img src={lotusIcon} alt="Lotus" className="w-6 h-6 object-contain flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-2">Learning Budget</h3>
                  <p className="font-serif text-sm text-[#8B4513]/70">
                    Annual budget for courses, books, and conferences—technical or spiritual.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="card-benefit-health">
                <img src={lotusIcon} alt="Lotus" className="w-6 h-6 object-contain flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-2">Health & Wellness</h3>
                  <p className="font-serif text-sm text-[#8B4513]/70">
                    Comprehensive health insurance. Mental health and meditation app stipends.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="card-benefit-sabbatical">
                <img src={lotusIcon} alt="Lotus" className="w-6 h-6 object-contain flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-2">Sabbatical Program</h3>
                  <p className="font-serif text-sm text-[#8B4513]/70">
                    After 3 years: 3-month paid sabbatical for deep practice or study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-[#991b1b] mb-12 text-center" data-testid="text-process-title">
              Application Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6" data-testid="card-step-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#991b1b] text-white flex items-center justify-center font-serif font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2c2c2c] mb-2">Submit Application</h3>
                  <p className="font-serif text-[#8B4513]/70">
                    Email us at <a href="mailto:talent@boddhilab.io" className="text-[#991b1b] underline font-semibold" data-testid="link-email-talent">talent@boddhilab.io</a> with your resume, portfolio, and a brief note about why you're drawn to this work.
                  </p>
                </div>
              </div>

              <div className="flex gap-6" data-testid="card-step-2">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#991b1b] text-white flex items-center justify-center font-serif font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2c2c2c] mb-2">Initial Conversation</h3>
                  <p className="font-serif text-[#8B4513]/70">
                    30-minute video call to discuss your experience, our mission, and mutual fit. No technical questions—just getting to know each other.
                  </p>
                </div>
              </div>

              <div className="flex gap-6" data-testid="card-step-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#991b1b] text-white flex items-center justify-center font-serif font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2c2c2c] mb-2">Technical Interview</h3>
                  <p className="font-serif text-[#8B4513]/70">
                    A practical coding session or design review relevant to our work. We value clarity and intention over leetcode puzzles.
                  </p>
                </div>
              </div>

              <div className="flex gap-6" data-testid="card-step-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#991b1b] text-white flex items-center justify-center font-serif font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2c2c2c] mb-2">Team Conversations</h3>
                  <p className="font-serif text-[#8B4513]/70">
                    Meet potential teammates across engineering, design, and product. We work collaboratively—chemistry matters.
                  </p>
                </div>
              </div>

              <div className="flex gap-6" data-testid="card-step-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#991b1b] text-white flex items-center justify-center font-serif font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2c2c2c] mb-2">Offer & Onboarding</h3>
                  <p className="font-serif text-[#8B4513]/70">
                    If there's alignment, we'll extend an offer within 48 hours. Onboarding includes meeting monastery partners and understanding our spiritual foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#991b1b]/10 to-[#8B4513]/10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={bellIcon} alt="Bell" className="w-16 h-16 object-contain mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-[#991b1b] mb-4" data-testid="text-contact-title">
              Don't See Your Role?
            </h2>
            <p className="font-serif text-lg text-[#8B4513]/80 mb-8 max-w-2xl mx-auto">
              We're always interested in meeting talented individuals who share our mission. Send us your background and what you'd like to build.
            </p>
            <a
              href="mailto:talent@boddhilab.io?subject=General Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#991b1b] text-white font-serif font-semibold text-lg rounded-xl hover:bg-[#7a1515] transition-all duration-300 shadow-xl"
              data-testid="button-contact-general"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-[#8B4513]/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="font-serif text-[#8B4513]/60 mb-4">
              © 2025 Bodhi Technology Lab. Building technology for awakening.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/career">
                <a className="font-serif text-[#8B4513]/70 hover:text-[#991b1b] transition-colors" data-testid="link-footer-career">
                  Career
                </a>
              </Link>
              <Link href="/privacy">
                <a className="font-serif text-[#8B4513]/70 hover:text-[#991b1b] transition-colors" data-testid="link-footer-privacy">
                  Privacy
                </a>
              </Link>
              <Link href="/terms">
                <a className="font-serif text-[#8B4513]/70 hover:text-[#991b1b] transition-colors" data-testid="link-footer-terms">
                  Terms
                </a>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
