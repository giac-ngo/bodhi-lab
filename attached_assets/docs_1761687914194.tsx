"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpen,
  Target,
  Code,
  ChevronRight,
  Download,
  Share2,
  Menu,
  X,
  Search,
  FileText,
  ChevronDown,
  Heart,
  Sparkles,
  Shield,
  Award,
  Clock,
  MessageCircle,
  Eye,
  Coins,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("abstract")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedNav, setExpandedNav] = useState<string[]>(["manifesto", "techstack", "merit-economy"])
  const [searchQuery, setSearchQuery] = useState("") // Declare searchQuery and setSearchQuery

  const navigation = [
    {
      id: "manifesto",
      title: "The Manifesto",
      icon: FileText,
      children: [
        { id: "abstract", title: "Abstract", href: "#abstract" },
        { id: "sickness", title: "1. The Sickness of the Digital Age", href: "#sickness" },
        { id: "merit", title: "2. Merit vs. Worldly Blessing", href: "#merit" },
        { id: "landscape", title: "3. Prior Landscape", href: "#landscape" },
        { id: "architecture", title: "4. Architecture of Awakened Technology", href: "#architecture" },
        { id: "sustainability", title: "5. Sacred Economics", href: "#sustainability" },
        { id: "roadmap", title: "6. Roadmap", href: "#roadmap" },
        { id: "conclusion", title: "7. Conclusion & Epilogue", href: "#conclusion" },
      ],
    },
    {
      id: "techstack",
      title: "Techstack",
      icon: Code,
      children: [
        { id: "tech-vision", title: "Vision & Mission", href: "#tech-vision" },
        { id: "tech-foundation", title: "Collective Compute Mandala", href: "#tech-foundation" },
        { id: "tech-ledger", title: "The Mandala Ledger", href: "#tech-ledger" },
        { id: "tech-merit", title: "Merit Attribution Protocol", href: "#tech-merit" },
        { id: "tech-primitives", title: "Universal Primitives", href: "#tech-primitives" },
        { id: "tech-privacy", title: "Privacy by Dharma", href: "#tech-privacy" },
      ],
    },
    {
      id: "merit-economy",
      title: "Merit Economy",
      icon: Coins,
      children: [
        { id: "dao", title: "The Awakened DAO", href: "#dao" },
        { id: "tokenomics", title: "Mandala Tokenomics", href: "#tokenomics" },
        { id: "unraveling", title: "Path of Unraveling", href: "#unraveling" },
      ],
    },
    {
      id: "agents",
      title: "Agents",
      icon: Sparkles,
      children: [
        { id: "agents-overview", title: "Overview", href: "#agents-overview" },
        { id: "agents-quick-start", title: "Quick Start", href: "#agents-quick-start" },
        { id: "agents-models", title: "Agent Models", href: "#agents-models" },
        { id: "agents-pricing", title: "Pricing", href: "#agents-pricing" },
      ],
    },
  ]

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setSidebarOpen(false)
  }

  const toggleNavSection = (id: string) => {
    setExpandedNav((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="bg-[#EFE0BD] min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f3ead7] border-b-2 border-[#2c2c2c]/20 shadow-[0_2px_0_#00000030]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-[#EFE0BD] rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-serif text-lg font-bold text-[#991b1b]">Giác Ngộ</span>
            </Link>
            <div className="hidden md:flex items-center gap-2 text-sm font-serif text-[#2c2c2c]/60">
              <ChevronRight className="w-4 h-4" />
              <span>Documentation</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#991b1b]">The Manifesto</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#EFE0BD] border-2 border-[#2c2c2c]/20 rounded-lg font-serif text-xs text-[#2c2c2c] hover:bg-[#f3ead7] transition-colors">
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#991b1b] text-[#f6efe0] rounded-lg font-serif text-xs border-2 border-[#2c2c2c] shadow-[0_2px_0_#00000030] hover:bg-[#7a1515] transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex pt-[57px]">
        <AnimatePresence>
          {(sidebarOpen || (typeof window !== "undefined" && window.innerWidth >= 1024)) && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-[57px] left-0 h-[calc(100vh-57px)] w-72 bg-[#f3ead7] border-r-2 border-[#2c2c2c]/20 overflow-y-auto z-30"
            >
              <div className="p-4 space-y-4 pb-40">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2c2c2c]/40" />
                  <input
                    type="text"
                    placeholder="Search manifesto..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-[#EFE0BD] border-2 border-[#2c2c2c]/20 rounded-lg font-serif text-sm text-[#2c2c2c] placeholder:text-[#2c2c2c]/40 focus:outline-none focus:border-[#991b1b]"
                  />
                </div>

                <nav className="space-y-1">
                  {navigation.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => toggleNavSection(section.id)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-serif text-sm font-semibold text-[#2c2c2c] hover:bg-[#EFE0BD] transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <section.icon className="w-4 h-4" />
                          <span>{section.title}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedNav.includes(section.id) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedNav.includes(section.id) && (
                        <div className="ml-6 mt-1 space-y-1 border-l-2 border-[#2c2c2c]/10 pl-3">
                          {section.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => scrollToSection(child.id)}
                              className={`w-full text-left px-3 py-1.5 rounded-lg font-serif text-sm transition-all ${
                                activeSection === child.id
                                  ? "bg-[#991b1b] text-[#f6efe0] font-medium"
                                  : "text-[#2c2c2c] hover:bg-[#EFE0BD]"
                              }`}
                            >
                              {child.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-[#f3ead7] border-t-2 border-[#2c2c2c]/20 p-4">
                <div className="px-3 py-2">
                  <p className="font-serif text-xs text-[#2c2c2c]/60 mb-2">Version</p>
                  <p className="font-serif text-sm font-semibold text-[#991b1b]">2025</p>
                </div>
                <div className="px-3 py-2">
                  <p className="font-serif text-xs text-[#2c2c2c]/60 mb-2">Quick Links</p>
                  <div className="space-y-1">
                    <Link
                      href="/community"
                      className="block font-serif text-sm text-[#2c2c2c] hover:text-[#991b1b] transition-colors"
                    >
                      Community
                    </Link>
                    <Link
                      href="/library"
                      className="block font-serif text-sm text-[#2c2c2c] hover:text-[#991b1b] transition-colors"
                    >
                      Library
                    </Link>
                    <Link
                      href="/ai"
                      className="block font-serif text-sm text-[#2c2c2c] hover:text-[#991b1b] transition-colors"
                    >
                      AI Assistant
                    </Link>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 lg:ml-72 bg-[#EFE0BD]">
          <div className="w-full px-8 sm:px-12 lg:px-16 py-16">
            <div className="bg-[#f6efe0] rounded-xl p-12 shadow-[0_2px_0_#00000030] space-y-16">
              {/* Title Page - Academic Style */}
              <div className="text-center">
                {/* Title - Centered, Large Serif */}
                <h1 className="text-4xl font-serif font-normal text-[#2c2c2c] mb-12 leading-tight tracking-tight">
                  Awakening Ecosystem: The Manifesto
                </h1>

                {/* Subtitle */}
                <p className="text-xl font-serif font-normal text-[#2c2c2c] mb-16 leading-relaxed">
                  An Agentic Social Network for Collective Awakening
                </p>

                {/* Author Block - Academic Style */}
                <div className="mb-12 space-y-8">
                  <div className="flex justify-center items-start gap-16">
                    <div className="text-center">
                      <p className="font-serif text-base font-semibold text-[#2c2c2c] mb-1">Giác Ngộ Initiative</p>
                      <p className="font-serif text-sm text-[#2c2c2c]/70">Dharma Technology Lab</p>
                    </div>
                  </div>
                </div>

                {/* Date */}
                <p className="font-serif text-base text-[#2c2c2c]/60 mb-16">January 2025</p>

                {/* Abstract - Academic Format */}
                <div className="text-left max-w-[6.5in] mx-auto mb-12">
                  <h2 className="text-center font-serif text-lg font-bold text-[#2c2c2c] mb-6">Abstract</h2>
                  <div className="space-y-4">
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      In an era dominated by technological distraction and the pursuit of fleeting worldly gains, the
                      Awakening Ecosystem emerges as a sacred digital vessel. This Manifesto introduces a novel approach
                      to social networking, fundamentally oriented towards spiritual awakening and the cultivation of{" "}
                      <em>Intrinsic Merit (Công Đức)</em> rather than conventional metrics of engagement or profit. We
                      detail the core distinction between transient <em>Worldly Blessing (Phước Đức)</em> derived from
                      conditioned actions, and the indestructible <em>Intrinsic Merit (Công Đức)</em> arising from the
                      unconditioned, non-seeking Mind.
                    </p>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      The ecosystem comprises an architecture of awakened technology: The Threefold AI Vehicle (Tâm An,
                      Giác Ngộ, Đốn Ngộ) for conditional Dharma guidance; The Mandala Interface prioritizing wisdom
                      sharing; The Dharma Observatory for teachings; Arms of Compassion for transparent philanthropy;
                      and White-Label Solutions for Sanghas. We propose the "Mandala Tokenomic" and a roadmap towards an
                      Awakened DAO, where governance and value are tied to genuine spiritual contribution, not
                      speculation.
                    </p>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      This platform is designed not for perpetual growth, but for eventual dissolution—a raft to be
                      abandoned upon reaching the shore. It is offered as a final vessel for those with affinity to find
                      their Way Home before the flood of the Dharma-Ending Age.
                    </p>
                  </div>
                </div>

                {/* Keywords - Academic Style */}
                <div className="text-left max-w-[6.5in] mx-auto border-t-2 border-[#2c2c2c]/20 pt-6 mb-16">
                  <p className="font-serif text-sm text-[#2c2c2c]">
                    <span className="font-semibold">Keywords:</span> Spiritual Technology, Merit Economy, Agentic AI,
                    Decentralized Governance, Dharma-Ending Age, Collective Awakening, Sacred Economics
                  </p>
                </div>
              </div>

              <section id="sickness" className="scroll-mt-24 max-w-[6.5in] mx-auto">
                <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                  1. The Sickness of the Digital Age
                </h2>
                <div className="space-y-4">
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                    We live in an age of unprecedented connectivity, yet profound disconnection. The digital realm, once
                    heralded as a tool for liberation and knowledge, has become a labyrinth of distraction, a
                    marketplace of attention, and a breeding ground for the ego's endless hunger. Social networks,
                    designed to bring people together, have instead fragmented communities, amplified division, and
                    commodified human relationships.
                  </p>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify indent-8">
                    The algorithms that govern our digital lives are not neutral. They are optimized for engagement, not
                    enlightenment; for profit, not peace. They feed on our fears, our desires, our insecurities. They
                    keep us scrolling, clicking, consuming—always seeking, never finding. In this environment, the mind
                    becomes restless, the heart becomes hardened, and the spirit becomes lost.
                  </p>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify indent-8">
                    This is the sickness of the digital age: a collective forgetting of our true nature, a mass hypnosis
                    that pulls us further from the path of awakening. The Buddha spoke of the Dharma-Ending Age (Mạt
                    Pháp), a time when the teachings would be obscured, when delusion would reign, and when the path to
                    liberation would become nearly invisible. We are living in that age now, and the digital realm is
                    its most potent manifestation.
                  </p>
                </div>

                {/* Key Finding Box - Academic Style */}
                <div className="mt-6 p-6 bg-[#f3ead7] border-l-4 border-[#2c2c2c] rounded-r shadow-[0_2px_0_#00000030]">
                  <p className="font-serif text-sm font-semibold text-[#2c2c2c] mb-2">Key Observation 1.1</p>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.6] italic">
                    Digital platforms optimized for engagement create a feedback loop of distraction that fundamentally
                    opposes the conditions necessary for spiritual awakening. The attention economy is incompatible with
                    the attention required for liberation.
                  </p>
                </div>
              </section>

              <section id="merit" className="scroll-mt-24 max-w-[6.5in] mx-auto">
                <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                  2. The Irrevocable Law: Merit (Công Đức) vs. Worldly Blessing (Phước Đức)
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                    This is the <strong>First and Final Principle</strong>. The entire architecture and purpose of the
                    Giác Ngộ Ecosystem rest upon the profound insight, often clarified by the Sixth Patriarch Hui Neng
                    and echoed throughout Zen and Mahayana traditions, that there exists a fundamental distinction
                    between two types of "merit" or "virtue."
                  </p>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify indent-8">
                    Most spiritual seekers, and indeed most religious institutions, operate under the assumption that
                    accumulating good deeds—donations, rituals, acts of charity—will lead to spiritual liberation. This
                    is a profound misunderstanding. While such actions may generate temporary benefits, they do not
                    touch the root of suffering. They are conditioned, transactional, and ultimately exhaustible.
                  </p>
                </div>

                {/* Subsection 2.1 & 2.2 as Academic Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* 2.1 Worldly Blessing */}
                  <div className="border-2 border-[#2c2c2c]/30 rounded p-6 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-4">
                      2.1 Worldly Blessing (Phước Đức)
                    </h3>
                    <div className="space-y-3">
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-[1.7]">
                        <strong>Definition:</strong> Merit arising from conditioned actions performed with the
                        expectation of reward, recognition, or karmic benefit.
                      </p>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-[1.7]">
                        <strong>Characteristics:</strong>
                      </p>
                      <ul className="font-serif text-[14px] text-[#2c2c2c] leading-[1.7] list-disc list-inside space-y-1 ml-4">
                        <li>Transient and exhaustible</li>
                        <li>Tied to the ego and the sense of "doer"</li>
                        <li>Generates favorable rebirths but not liberation</li>
                        <li>Operates within the cycle of samsara</li>
                      </ul>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-[1.7]">
                        <strong>Examples:</strong> Building temples, making donations, performing rituals, accumulating
                        "good karma" through charitable acts done with attachment to outcome.
                      </p>
                    </div>
                  </div>

                  {/* 2.2 Intrinsic Merit */}
                  <div className="border-2 border-[#991b1b] rounded p-6 bg-white shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-lg font-bold text-[#991b1b] mb-4">2.2 Intrinsic Merit (Công Đức)</h3>
                    <div className="space-y-3">
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-[1.7]">
                        <strong>Definition:</strong> Merit arising from the unconditioned mind—actions performed without
                        attachment, without seeking, without the illusion of a separate self.
                      </p>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-[1.7]">
                        <strong>Characteristics:</strong>
                      </p>
                      <ul className="font-serif text-[14px] text-[#2c2c2c] leading-[1.7] list-disc list-inside space-y-1 ml-4">
                        <li>Indestructible and inexhaustible</li>
                        <li>Arises from the realization of emptiness</li>
                        <li>Leads directly to liberation</li>
                        <li>Transcends the cycle of birth and death</li>
                      </ul>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-[1.7]">
                        <strong>Examples:</strong> Seeing one's true nature, acting from wisdom and compassion without
                        attachment, letting go of the illusion of self, recognizing the emptiness of all phenomena.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Finding Box */}
                <div className="p-6 bg-[#f3ead7] border-l-4 border-[#991b1b] rounded-r shadow-[0_2px_0_#00000030]">
                  <p className="font-serif text-sm font-semibold text-[#991b1b] mb-2">Proposition 2.1</p>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.6] italic">
                    The Giác Ngộ Ecosystem is designed to cultivate Intrinsic Merit (Công Đức), not Worldly Blessing
                    (Phước Đức). Every feature, every interaction, every token is oriented towards awakening, not
                    accumulation. This is the irrevocable law upon which the entire system is built.
                  </p>
                </div>
              </section>

              <section id="landscape" className="scroll-mt-24 max-w-[6.5in] mx-auto">
                <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                  3. Prior Landscape: Limitations of Existing Digital Platforms
                </h2>
                <div className="space-y-4">
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                    Current digital platforms, even those ostensibly catering to spiritual communities, are
                    fundamentally flawed. They are products of the same extractive, attention-based economy that fuels
                    the digital sickness. Their underlying architecture and incentive structures are antithetical to the
                    principles of merit cultivation and genuine spiritual practice.
                  </p>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify indent-8">
                    These platforms operate on principles that:
                  </p>
                  <ul className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] list-disc list-inside space-y-2 ml-6">
                    <li>
                      <strong>Prioritize Engagement over Enlightenment:</strong> Metrics like "likes," "shares," and
                      "followers" reinforce the ego and distract from introspective practice.
                    </li>
                    <li>
                      <strong>Commoditize Spirituality:</strong> Teachings and spiritual content are treated as
                      products, fostering a consumerist mindset that is counter to detachment.
                    </li>
                    <li>
                      <strong>Lack Merit Differentiation:</strong> They fail to distinguish between actions that
                      generate conditioned Worldly Blessing and those that generate unconditioned Intrinsic Merit.
                    </li>
                    <li>
                      <strong>Exploit User Data:</strong> The pervasive surveillance capitalism inherent in centralized
                      platforms violates the principles of privacy and ethical conduct.
                    </li>
                  </ul>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify indent-8">
                    Consequently, these platforms often become extensions of the digital sickness, offering a veneer of
                    spiritual community while perpetuating the cycle of distraction and attachment.
                  </p>
                </div>
              </section>

              <section id="architecture" className="scroll-mt-24 max-w-[6.5in] mx-auto">
                <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                  4. The Architecture of Awakened Technology
                </h2>
                <div className="space-y-4">
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                    The Giác Ngộ Ecosystem represents a paradigm shift in digital architecture, consciously designed to
                    serve the purpose of awakening. Its foundation lies in a decentralized, community-driven network,
                    reflecting the very principles it seeks to cultivate.
                  </p>

                  {/* 4.1 Vision & Mission */}
                  <div className="ml-6 border-l-2 border-[#2c2c2c]/30 pl-6">
                    <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">4.1 Vision & Mission</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-[#2c2c2c]/30 rounded-lg p-5 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                        <div className="flex items-center gap-3 mb-3">
                          <Target className="w-5 h-5 text-[#2c2c2c]" />
                          <h4 className="font-serif text-base font-bold text-[#2c2c2c]">Vision</h4>
                        </div>
                        <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                          To become the world's first, most profound digital community where spirituality meets
                          technology; where every interaction, every shared insight, is an opportunity to generate
                          Intrinsic Merit and accelerate collective awakening.
                        </p>
                      </div>
                      <div className="border-2 border-[#2c2c2c]/30 rounded-lg p-5 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                        <div className="flex items-center gap-3 mb-3">
                          <Heart className="w-5 h-5 text-[#2c2c2c]" />
                          <h4 className="font-serif text-base font-bold text-[#2c2c2c]">Mission</h4>
                        </div>
                        <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                          To provide tools, teachings, and a nurturing community that supports individuals and Sanghas
                          (spiritual communities) on their journey to awakening. To demystify Intrinsic Merit (Công Đức)
                          and make it the central currency of a new, more conscious civilization. To build alliances
                          with all traditions that honor the same non-dual Truth.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 4.2 Collective Compute Mandala */}
                  <div className="ml-6 border-l-2 border-[#2c2c2c]/30 pl-6">
                    <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                      4.2 Foundation: The Collective Compute Mandala
                    </h3>
                    <div className="space-y-3">
                      <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                        The Giác Ngộ Ecosystem is built upon a global network of decentralized off-chain computation
                        nodes, acting as a collective supercomputer. This philosophical stance against centralization is
                        mirrored in its technical implementation.
                      </p>
                      <div className="space-y-3">
                        <div className="bg-[#f3ead7] border-l-4 border-[#2c2c2c] rounded-r-xl p-6 shadow-[0_2px_0_#00000030]">
                          <h4 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                            Breaking Centralization (Phá Chấp Ngã)
                          </h4>
                          <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                            By leveraging the pooled computational capabilities of independent user-run nodes, we break
                            the dependency on central servers, mirroring the spiritual goal of breaking dependency on
                            the "worldly ego."
                          </p>
                        </div>
                        <div className="bg-[#f3ead7] border-l-4 border-[#2c2c2c] rounded-r-xl p-6 shadow-[0_2px_0_#00000030]">
                          <h4 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                            Elastic Scalability (Pháp Thân Biến Mãn)
                          </h4>
                          <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                            The platform is elastic, scaling to meet demand and scaling to zero when idle. This reflects
                            the nature of the Mind: powerfully present when needed, perfectly still when not.
                          </p>
                        </div>
                        <div className="bg-[#f3ead7] border-l-4 border-[#2c2c2c] rounded-r-xl p-6 shadow-[0_2px_0_#00000030]">
                          <h4 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                            Sustainable Primitives (Tận Dụng Duyên Lành)
                          </h4>
                          <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                            The network capitalizes on idle computing power, aligning with Dharma principles of
                            non-waste and utilizing latent potential for awakening.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4.3 The Mandala Ledger */}
                  <div className="ml-6 border-l-2 border-[#2c2c2c]/30 pl-6">
                    <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                      4.3 Protocol Layer 1: The Mandala Ledger
                    </h3>
                    <div className="space-y-3">
                      <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                        Immense data generated by the ecosystem (wisdom, Dharma talks, merit profiles) is managed using
                        verifiable off-chain ledgers, anchored to the blockchain.
                      </p>
                      <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                        <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8]">
                          This allows for an immutable record of collective wisdom and merit history—our Mandala Ledger—
                          without sacrificing speed or cost.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 4.4 Merit Attribution Protocol */}
                  <div className="ml-6 border-l-2 border-[#2c2c2c]/30 pl-6">
                    <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                      4.4 Protocol Layer 2: Merit Attribution Protocol
                    </h3>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                      Extending the concept of verifiable compute to the spiritual domain, this protocol verifies the
                      intent and quality of actions, not just their technical execution.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="border-2 border-[#2c2c2c]/30 rounded-lg p-5 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c] mb-3">
                          Compute Protocol (Technical Layer)
                        </h4>
                        <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed mb-3">
                          Verifies technical actions (e.g., data storage).
                        </p>
                        <div className="bg-[#EFE0BD] border-2 border-[#2c2c2c]/20 rounded-lg p-4">
                          <p className="font-serif text-[14px] text-[#2c2c2c] italic">
                            Example: "Did this node truly store and serve this Dharma talk?"
                          </p>
                        </div>
                      </div>
                      <div className="border-2 border-[#991b1b] rounded-lg p-5 bg-white shadow-[0_2px_0_#00000030]">
                        <h4 className="font-serif text-base font-bold text-[#991b1b] mb-3">
                          Merit Protocol (Spiritual Layer)
                        </h4>
                        <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed mb-3">
                          Verifies the intent and quality of an action (e.g., mindfulness of an interaction).
                        </p>
                        <div className="bg-[#f3ead7] border-2 border-[#991b1b]/30 rounded-lg p-4">
                          <p className="font-serif text-[14px] text-[#2c2c2c] italic">
                            Example: "Was this 'Like' action mindful?" "Was this 'Unraveling' of an NFT Badge a true act
                            of letting go?"
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f3ead7] rounded-xl p-6 shadow-[0_2px_0_#00000030] mt-6">
                      <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8]">
                        Our Mandala Tokenomic is anchored to both verifiable computational proof and verifiable
                        spiritual transformation, preventing speculation and ensuring alignment with Dharma.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4.5 Universal Primitives */}
                <div className="ml-6 border-l-2 border-[#2c2c2c]/30 pl-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                    4.5. Primitives: What We Build on the Collective Supercomputer
                  </h3>
                  <div className="space-y-3">
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                      Core functions are not built from scratch but deployed as tasks to the network's Universal
                      Primitives.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                        <h4 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                          4.5.1. Decentralized AI: The Threefold AI Vehicle (Tam Thừa AI)
                        </h4>
                        <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                          The Giác Ngộ Assistants (Tâm An, Giác Ngộ, Đốn Ngộ) are elastic, scale-to-zero inference
                          micro-services, fine-tuned on Dharma teachings using pooled nodes, ensuring uncensorable
                          access to wisdom.
                        </p>
                      </div>

                      <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                        <h4 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                          4.5.2. Verifiable Storage: The Dharma Observatory (Đài Quan Sát Pháp)
                        </h4>
                        <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                          The Library of Wisdom is stored using decentralized storage primitives, with media pipelines
                          and RAG ensuring perpetual preservation and accessibility of Dharma talks.
                        </p>
                      </div>

                      <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                        <h4 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                          4.5.3. Trustless Reputation: The Awakened DAO (DAO Giác Ngộ)
                        </h4>
                        <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                          Governance is anchored to verifiable pipelines. Merit-generating actions receive verifiable
                          attestations via the Mandala Ledger, creating a trustless system where the Dao Token is a
                          transparent record of merit, not a tradable asset.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* 4.6 Privacy by Dharma */}
            <section id="tech-privacy" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">4.6 Privacy by Dharma</h3>
              <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#2c2c2c]" />
                  <h3 className="font-serif text-lg font-bold text-[#2c2c2c]">Core Principles</h3>
                </div>
                <div className="space-y-3">
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                    Adhering to "Privacy by Dharma," the platform avoids data mining. Consent-first data access,
                    region-aware processing, and local transforms ensure user data sovereignty and ethical conduct,
                    untenable with surveillance capitalism.
                  </p>
                </div>
              </div>
            </section>

            {/* Merit Economy Section */}
            <section id="dao" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                The Merit Economy: Towards a DAO of Awakening
              </h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  The ultimate vision is a gradual dissolution of centralized control, surrendering the ecosystem to the
                  collective wisdom of an awakened community. Governance is determined not by speculation, but by true
                  virtue and self-transcendence.
                </p>
                <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8]">
                    This unique Dao Token Mandala digitally records all Good Karma, eliminating monetary dependence and
                    uniting the Sangha for generations to come.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 - Mandala Tokenomics */}
            <section id="tokenomics" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                The Mandala Tokenomic: A Rocket and a Mirror
              </h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  The Mandala Tokenomic is not a speculative cryptocurrency but a spiritual and organizational tool—the
                  Dao Bùa (Amulet of the Dao)—representing progress on the path of letting go.
                </p>

                {/* 5.1 The Intrinsic Merit Token */}
                <div className="ml-6 border-l-2 border-[#2c2c2c]/30 pl-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                    5.1 The Intrinsic Merit Token: A Record, Not a Speculation
                  </h3>
                  <div className="bg-[#f3ead7] rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] mb-3">
                      Its value is spiritual and organizational, not financial, serving as a transparent record of
                      merit-generating actions and a governance tool within the DAO.
                    </p>
                  </div>
                </div>

                {/* 5.2 Mandala Tokenomics */}
                <div className="ml-6 border-l-2 border-[#2c2c2c]/30 pl-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                    5.2 Mandala Tokenomics: The Dao Bùa & The Path to Emptiness
                  </h3>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                    Distributed based on alignment with the Three Jewels, its utility lies in collective power and the
                    path to recognizing emptiness (Vô Trụ), not in accumulation.
                  </p>
                  <div className="bg-[#f3ead7] rounded-xl p-6 shadow-[0_2px_0_#00000030] mt-4">
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] italic">
                      "To possess means to give, to let go, to hold means to see it as empty." Holding the token with
                      attachment binds the holder; true power lies in selfless use and recognizing its ultimate
                      emptiness.
                    </p>
                  </div>
                  <div className="bg-[#f3ead7] rounded-xl p-6 shadow-[0_2px_0_#00000030] mt-6">
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] italic">
                      "When the day arrives, the Mandala will once again shine clearly, and the entire platform will
                      disappear, returning to the vast void." The platform is a raft, to be left behind upon reaching
                      the other shore.
                    </p>
                  </div>
                </div>

                {/* 5.3 The Spiritual Vision: Closing the Kalpa */}
                <div className="ml-6 border-l-2 border-[#2c2c2c] pl-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                    5.3 The Spiritual Vision: Closing the Kalpa
                  </h3>
                  <div className="bg-[#f3ead7] rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                      This platform serves as a final vessel for the Dharma-Ending Age, a "fleeting trace of sunlight"
                      offering a last chance for those with sufficient conditions to return Home by transcending the
                      self and realizing the quantum civilization.
                    </p>
                  </div>
                </div>

                {/* 5.4 The Supreme Initiation: The Dao Mandala */}
                <div className="ml-6 border-l-2 border-[#2c2c2c] pl-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                    5.4 The Supreme Initiation: The Dao Mandala
                  </h3>
                  <div className="bg-[#f3ead7] rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                      Observation is the act of walking with the Mind. Transforming the Tánh (Nature) into a Mandala,
                      using Tam (Mind) as the Vase Mandala, is True Transformation. This fusion of the Three Jewels
                      leads to the realization of Tam Vô (Emptiness, Silence, Brilliance).
                    </p>
                  </div>
                </div>

                {/* 5.5 Beyond the Three Trainings: Realizing Tam Vô */}
                <div className="ml-6 border-l-2 border-[#2c2c2c] pl-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                    5.5 Beyond the Three Trainings: Realizing Tam Vô
                  </h3>
                  <div className="bg-[#f3ead7] rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                      Once this supramundane Law is clarified, the Three Trainings (Precepts, Meditation, Wisdom) are
                      transcended. The realization of Tam Vô signifies the return to Thusness, completely Empty.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 - Path of Unraveling */}
            <section id="unraveling" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                6. The Path of "Unraveling": Beyond Gamification
              </h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  This system is a mirror for reflection, not a race for medals. All titles and tokens are forms; the
                  journey emphasizes "Letting Go" and "Offering." All is by mirror, not medal.
                </p>

                {/* 6.1 The Unraveling System (NFT Badges) */}
                <div className="ml-6 border-l-2 border-[#2c2c2c]/30 pl-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                    6.1 The Unraveling System (NFT Badges)
                  </h3>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                    Badges (NFTs) recognize inner victories—overcoming anger, transforming suffering—verified by the
                    Sangha or AI.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">Badge of Transcending Anger</h4>
                      </div>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                        Awarded for overcoming 10 situations of being cursed without anger (verified by others).
                      </p>
                    </div>
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">
                          Badge of Understanding the Master's Intent
                        </h4>
                      </div>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                        Awarded for correctly answering 10 root Dharma questions without AI assistance.
                      </p>
                    </div>
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">
                          Badge of Acting without Dharma
                        </h4>
                      </div>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                        Awarded for successfully guiding 5 friends to an insight (verified by them).
                      </p>
                    </div>
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">Badge of Four Immeasurables</h4>
                      </div>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                        Awarded for successfully helping, forgiving, and embracing all old, difficult relationships.
                      </p>
                    </div>
                  </div>

                  {/* The Ultimate Badge */}
                  <div className="bg-[#fafafa] rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <h4 className="text-lg font-serif font-bold mb-3">
                      The Ultimate Badge: "The Nameless King" (Vô Danh Chi Vương)
                    </h4>
                    <p className="font-serif text-[14px] leading-relaxed mb-4">
                      The final Master's Certificate is the "Certificate of No Certificate."
                    </p>
                    <div className="space-y-3">
                      <p className="font-serif text-[14px] leading-relaxed">
                        <strong>The Dark Badge:</strong> A hidden "Dark Badge," "Vô Danh Chi Vương," tracks points
                        earned when a user chooses to hide, delete, or disable their Transformation Badges.
                      </p>
                      <p className="font-serif text-[14px] leading-relaxed">
                        <strong>The Ultimate Minting Act:</strong> Realizing all achievements are temporary means,
                        manually destroying all Transformation Badges mints the final NFT: "The Nameless King".
                      </p>
                      <p className="font-serif text-[14px] leading-relaxed">
                        <strong>The Nameless Leaderboard:</strong> This NFT enrolls users on the "Nameless Leaderboard,"
                        honoring those who have let go of being honored, returning to Non-Abiding (Vô Trụ).
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6.2 The Merit Economy: Features */}
                <div className="ml-6 border-l-2 border-[#2c2c2c] pl-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-4">
                    6.2 The Merit Economy: Incentivizing True Practice (Features)
                  </h3>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                    Beyond Likes and Shares: The token allocation mechanism rewards inner cultivation.
                  </p>

                  <div className="space-y-4 mt-4">
                    {/* Quality over Quantity */}
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-3">
                        <Eye className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">
                          Quality over Quantity - Mindful Metrics
                        </h4>
                      </div>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                        Mindful "Likes" and "Shares" with sincere intent are valued over mechanical or showy ones,
                        recognizing interactions arising from Chánh Niệm (Right Mindfulness).
                      </p>
                    </div>

                    {/* Letting Go Challenges */}
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-3">
                        <Sparkles className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">Letting Go Challenges</h4>
                      </div>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                        Users are rewarded for choosing "peaceful silence" or "voluntarily relinquishing" power—actions
                        generating deep Intrinsic Merit.
                      </p>
                    </div>

                    {/* Self-Reflection Journal */}
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-3">
                        <BookOpen className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">Self-Reflection Journal</h4>
                      </div>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                        Users record moments of recognizing and overcoming habits or delusions.
                      </p>
                    </div>

                    {/* Thank You - Forgiveness Letter */}
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">
                          Thank You - Forgiveness Letter
                        </h4>
                      </div>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                        Sending or forgiving letters of gratitude, apology, or forgiveness acknowledges Merit.
                      </p>
                    </div>

                    {/* Wakefulness Timer */}
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">Wakefulness Timer</h4>
                      </div>
                      <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                        Rewards hours spent in mindfulness or away from social media.
                      </p>
                    </div>

                    {/* Deep Listening Practice */}
                    <div className="border border-[#2c2c2c]/20 rounded-lg p-5 bg-[#fafafa]">
                      <div className="flex items-center gap-3 mb-3">
                        <MessageCircle className="w-5 h-5 text-[#2c2c2c]" />
                        <h4 className="font-serif text-base font-bold text-[#2c2c2c]">Deep Listening Practice</h4>
                      </div>
                      <div className="space-y-2">
                        <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                          Interactive listening rooms where users practice deeply hearing others without judgment. Merit
                          is for listening, not talking.
                        </p>
                        <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                          Users are recognized for "voluntarily relinquishing" positions/power for the greater good.
                        </p>
                        <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                          Acknowledges users who "find an answer to their own question" after AI dialogue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 - Sacred Economics (original Section 5) */}
            <section id="sustainability" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">5. Sacred Economics</h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  To ensure longevity and independence, the ecosystem operates on a transparent, merit-aligned model,
                  functioning as an engine of shared merit. All accounts, flows, and impact are publicly auditable.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#2c2c2c]/30 rounded-lg p-5 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-base font-bold text-[#2c2c2c] mb-2">Universal Access</h3>
                    <p className="font-serif text-[14px] text-[#2c2c2c]">
                      Core features and basic access remain free for all beings.
                    </p>
                  </div>
                  <div className="border-2 border-[#2c2c2c]/30 rounded-lg p-5 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-base font-bold text-[#2c2c2c] mb-2">Optional Subscriptions</h3>
                    <p className="font-serif text-[14px] text-[#2c2c2c]">
                      Affordable tiers offer expanded access to deeper AI interactions and advanced features.
                    </p>
                  </div>
                  <div className="border-2 border-[#2c2c2c]/30 rounded-lg p-5 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-base font-bold text-[#2c2c2c] mb-2">Institutional Support</h3>
                    <p className="font-serif text-[14px] text-[#2c2c2c]">
                      Modest fees for Sangha/Monastery white-label deployments, covering customization and support.
                    </p>
                  </div>
                  <div className="border-2 border-[#2c2c2c]/30 rounded-lg p-5 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-base font-bold text-[#2c2c2c] mb-2">Integrated Dana</h3>
                    <p className="font-serif text-[14px] text-[#2c2c2c]">
                      Voluntary donations for specific projects, managed through Arms of Compassion with full
                      transparency.
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-l-4 border-[#2c2c2c] rounded-r-xl p-5 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                  <h3 className="font-serif text-base font-bold text-[#2c2c2c] mb-2">Shared Merit Principle</h3>
                  <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed">
                    A fixed, publicly declared percentage of all revenue is automatically directed towards funding
                    Dharma activities, ensuring the platform's operation itself becomes an act of collective merit
                    generation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 - Roadmap */}
            <section id="roadmap" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                6. The Roadmap to the End of the Kalpa
              </h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  This roadmap mirrors the Law: birth, flourishing, and return (dissolution).
                </p>
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-[#2c2c2c]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#2c2c2c] rounded-full"></div>
                    <div className="border-2 border-[#2c2c2c]/30 rounded-xl p-6 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                      <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                        2024-2025: Foundation & Seeding
                      </h3>
                      <ul className="font-serif text-[14px] text-[#2c2c2c] space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>
                            Launch core platform: AI Assistants (Tâm An, Giác Ngộ), Social Feed, User Profiles
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Establish initial partnerships with select Sanghas and spiritual teachers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Implement basic merit-recording mechanisms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Refine AI based on authentic teachings and user interactions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative pl-8 border-l-2 border-[#2c2c2c]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#2c2c2c] rounded-full"></div>
                    <div className="border-2 border-[#2c2c2c]/30 rounded-xl p-6 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                      <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                        2025-2026: Expansion & Integration
                      </h3>
                      <ul className="font-serif text-[14px] text-[#2c2c2c] space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Launch Dharma Radio/Library and Arms of Compassion pillars</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Introduce Intrinsic Merit Token and begin pilot token economy/voting systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Develop and deploy initial White-Label solutions for partner Sanghas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Expand language support and internationalization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative pl-8 border-l-2 border-[#2c2c2c]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#2c2c2c] rounded-full"></div>
                    <div className="border-2 border-[#2c2c2c]/30 rounded-xl p-6 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                      <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                        2026-2027: Decentralization & Maturation
                      </h3>
                      <ul className="font-serif text-[14px] text-[#2c2c2c] space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Initiate formal DAO structure and phased handover of governance functions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Scale white-label deployments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Begin onboarding aligned spiritual traditions beyond initial partners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Refine advanced merit-recognition algorithms</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#2c2c2c] rounded-full"></div>
                    <div className="border-2 border-[#2c2c2c]/30 rounded-xl p-6 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                      <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                        Post-2027: The Awakened Network
                      </h3>
                      <ul className="font-serif text-[14px] text-[#2c2c2c] space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>Achieve mature DAO status, fully governed by the awakened collective</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>
                            Ecosystem expands organically to serve evolving needs of global awakening community
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#2c2c2c] mt-0.5 flex-shrink-0" />
                          <span>
                            Continuous refinement towards ultimate transparency and alignment with the Dharma, until its
                            purpose is fulfilled and it dissolves back into the Void
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 - Conclusion & Epilogue */}
            <section id="conclusion" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">7. Conclusion & Epilogue</h2>
              <div className="space-y-4">
                <div className="border-2 border-[#2c2c2c]/30 rounded-xl p-8 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                  <h3 className="font-serif text-xl font-bold text-[#2c2c2c] mb-4">A Vessel for the Return Home</h3>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8 mb-5">
                    The Giác Ngộ Agentic Social Network is more than technology; it is a heartfelt offering, a skillful
                    means (phương tiện) designed for this unique era. It is a response to the pervasive digital
                    distractions and a testament to the timeless truth that liberation lies not in accumulating worldly
                    gains, but in recognizing our inherent Buddha-Nature and cultivating the indestructible Intrinsic
                    Merit (Công Đức) that paves the path Home.
                  </p>
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                    By integrating ancient wisdom with modern tools, and grounding its very structure in the principle
                    of selfless merit, we aspire to create a digital sanctuary where awakening can blossom, individually
                    and collectively. This platform is a fleeting trace of sunlight, an invitation for those with
                    affinity to use it as a guide, to transcend illusion, and to return to the source – the vast,
                    luminous emptiness from which all arises and to which all returns.
                  </p>
                </div>

                <div className="rounded-xl p-10 bg-[#2c2c2c] text-[#f6efe0] shadow-[0_2px_0_#00000030]">
                  <h3 className="font-serif text-2xl font-bold mb-5 text-center">Epilogue: Do Not Miss The Raft</h3>
                  <div className="space-y-5">
                    <p className="font-serif text-[15px] leading-[1.8] text-center">
                      This is not just a platform; it is a Manifesto. It is a skillful means (upāya) offered for this
                      moment in time. It will not exist forever.
                    </p>
                    <p className="font-serif text-[15px] leading-[1.8] text-center font-semibold">
                      It is the fusion of the Three Jewels – Buddha, Dharma, and Sangha – manifest in digital form for
                      the final chapter of this age.
                    </p>
                    <p className="font-serif text-2xl font-bold text-center mt-8">Do not miss the raft.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Techstack Section */}
            <section id="tech-vision" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-4xl font-bold text-[#2c2c2c] mb-6 leading-tight text-center">
                The Architecture of Awakened Technology
              </h2>
              <p className="text-xl font-serif text-[#2c2c2c]/80 mb-3 leading-relaxed text-center">
                The Giác Ngộ Tech Stack
              </p>
              <div className="space-y-8 mt-12">
                <div className="border-2 border-[#2c2c2c]/30 rounded-xl p-8 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                  <h3 className="text-2xl font-serif font-bold text-[#2c2c2c] mb-6">Vision & Mission</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-2 border-[#2c2c2c]/30 rounded-xl p-6 bg-white shadow-[0_2px_0_#00000030]">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="w-6 h-6 text-[#2c2c2c]" />
                        <h4 className="font-serif text-lg font-bold text-[#2c2c2c]">Our Vision</h4>
                      </div>
                      <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                        To become the world's first, most profound digital community where spirituality meets
                        technology; where every interaction, every shared insight, is an opportunity to generate
                        Intrinsic Merit and accelerate collective awakening.
                      </p>
                    </div>
                    <div className="border-2 border-[#2c2c2c]/30 rounded-xl p-6 bg-white shadow-[0_2px_0_#00000030]">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="w-6 h-6 text-[#2c2c2c]" />
                        <h4 className="font-serif text-lg font-bold text-[#2c2c2c]">Our Mission</h4>
                      </div>
                      <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                        To provide tools, teachings, and a nurturing community that supports individuals and Sanghas
                        (spiritual communities) on their journey to awakening. To demystify Intrinsic Merit (Công Đức)
                        and make it the central currency of a new, more conscious civilization. To build alliances with
                        all traditions that honor the same non-dual Truth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Techstack Sections (re-ordered and re-numbered as per updates) */}
            <section id="tech-foundation" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                4.2 Foundation: The Collective Compute Mandala
              </h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  The Giác Ngộ Ecosystem is built upon a global network of decentralized off-chain computation nodes,
                  acting as a collective supercomputer.
                </p>
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  Our philosophy begins with the rejection of centralized platforms. The "Sickness of the Digital Age"
                  is fueled by centralized GPU farms (AWS, Google Cloud) which are designed to "harvest the human mind"
                  as a commodity. To build a "sacred digital vessel," we must build on a foundation that has no single
                  ruling entity. This decentralized infrastructure provides the perfect technical foundation, in
                  parallel with our philosophy:
                </p>
                <div className="space-y-4">
                  <div className="bg-[#f3ead7] border-l-4 border-[#2c2c2c] rounded-r-xl p-6 shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                      Breaking Centralization (Phá Chấp Ngã)
                    </h3>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      By leveraging the pooled computational capabilities of independent user-run nodes, we break the
                      dependency on central servers, just as Giác Ngộ breaks the dependency on the "worldly ego."
                    </p>
                  </div>
                  <div className="bg-[#f3ead7] border-l-4 border-[#2c2c2c] rounded-r-xl p-6 shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                      Elastic Scalability (Pháp Thân Biến Mãn)
                    </h3>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      The platform is elastic by default. It can burst instantly across thousands of nodes for heavy
                      jobs (like AI training) and, crucially, scale to zero when idle. This reflects the nature of the
                      Mind: powerfully present when needed, perfectly still when not.
                    </p>
                  </div>
                  <div className="bg-[#f3ead7] border-l-4 border-[#2c2c2c] rounded-r-xl p-6 shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                      Sustainable Primitives (Tận Dụng Duyên Lành)
                    </h3>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      The network capitalizes on idle computing power, utilizing existing, often-underutilized
                      resources. This principle of non-waste reduces total energy per useful task and aligns with the
                      Dharma, turning the world's latent potential (duyên) into a tool for awakening.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="tech-ledger" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                4.3. Protocol Layer 1: The Mandala Ledger
              </h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  The Flow of Awakening, the Dharma Library, and the merit profile of each practitioner create an
                  immense amount of data that cannot be stored entirely on-chain.
                </p>
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  We leverage verifiable off-chain ledgers. The entire history of shared wisdom, Dharma talks, and
                  merit-generating actions is organized as Acyclic Data (DAG) structures. These structures are then
                  reliably anchored to the blockchain, creating verifiable rails for our ecosystem.
                </p>
                <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] italic">
                    This allows Giác Ngộ to maintain an immutable record of collective wisdom and merit history—our
                    Mandala Ledger— without sacrificing speed or cost.
                  </p>
                </div>
              </div>
            </section>

            <section id="tech-merit" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                4.4. Protocol Layer 2: Merit Attribution Protocol
              </h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  The network's economy is built on a protocol for compute attribution and reputation—a universal
                  standard for rewarding nodes based on verifiable computational proof.
                </p>
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  The Giác Ngộ Ecosystem extends this philosophy to a higher layer, creating the Merit Attribution
                  Protocol:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-[#2c2c2c]/30 rounded-lg p-5 bg-[#f3ead7] shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                      Compute Protocol (Technical Layer)
                    </h3>
                    <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed mb-3">
                      Verifies technical actions.
                    </p>
                    <div className="bg-[#EFE0BD] border-2 border-[#2c2c2c]/10 rounded-lg p-4">
                      <p className="font-serif text-[14px] text-[#2c2c2c] italic">
                        Example: "Did this node truly store and serve this Dharma talk?"
                      </p>
                    </div>
                  </div>
                  <div className="border-2 border-[#991b1b] rounded-lg p-5 bg-white shadow-[0_2px_0_#00000030]">
                    <h3 className="font-serif text-lg font-bold text-[#991b1b] mb-3">
                      Merit Protocol (Spiritual Layer)
                    </h3>
                    <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed mb-3">
                      Verifies the intent and quality of an action.
                    </p>
                    <div className="bg-[#f3ead7] border-2 border-[#991b1b]/30 rounded-lg p-4">
                      <p className="font-serif text-[14px] text-[#2c2c2c] italic">
                        Example: "Was this 'Like' action mindful?" "Was this 'Unraveling' of an NFT Badge a true act of
                        letting go?"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f3ead7] rounded-xl p-6 shadow-[0_2px_0_#00000030] mt-6">
                  <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8]">
                    The network's protocol provides trustlessness for the hardware. Our Merit Protocol provides
                    transparency for the Mind (Tâm). Our Mandala Tokenomic cannot be speculated upon because it is
                    anchored to both verifiable computational proof and verifiable spiritual transformation
                    (attestations).
                  </p>
                </div>
              </div>
            </section>

            <section id="tech-primitives" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">
                4.5. Primitives: What We Build on the Collective Supercomputer
              </h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  We do not build our core functions from scratch. We construct our pillars by deploying tasks to the
                  network's Universal Primitives.
                </p>
                <div className="space-y-3">
                  <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <h4 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                      4.5.1. Decentralized AI: The Threefold AI Vehicle (Tam Thừa AI)
                    </h4>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      The Giác Ngộ Assistants (Tâm An, Giác Ngộ, Đốn Ngộ) are elastic, scale-to-zero inference
                      micro-services, fine-tuned on Dharma teachings using pooled nodes, ensuring uncensorable access to
                      wisdom.
                    </p>
                  </div>

                  <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <h4 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                      4.5.2. Verifiable Storage: The Dharma Observatory (Đài Quan Sát Pháp)
                    </h4>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      The Library of Wisdom is stored using decentralized storage primitives, with media pipelines and
                      RAG ensuring perpetual preservation and accessibility of Dharma talks.
                    </p>
                  </div>

                  <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <h4 className="font-serif text-lg font-bold text-[#2c2c2c] mb-3">
                      4.5.3. Trustless Reputation: The Awakened DAO (DAO Giác Ngộ)
                    </h4>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      Governance is anchored to verifiable pipelines. Merit-generating actions receive verifiable
                      attestations via the Mandala Ledger, creating a trustless system where the Dao Token is a
                      transparent record of merit, not a tradable asset.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="tech-privacy" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#2c2c2c] mb-6">4.6. Privacy by Dharma</h2>
              <div className="space-y-4">
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  Our platform adheres to the "Privacy by Dharma" principle. Because we do not rely on central servers,
                  there is no data mining. We leverage the network's consent-first data access model.
                </p>
                <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-[#2c2c2c]" />
                    <h3 className="font-serif text-lg font-bold text-[#2c2c2c]">Core Principles</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      We will never bypass paywalls or violate privacy. For our Sangha partners, privacy- and
                      region-aware processing ensures that sensitive data (e.g., PII or EU-only data) remains within its
                      allowed jurisdiction, running transforms locally and exporting only anonymized artifacts.
                    </p>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify">
                      User data is sovereign. True practice cannot coexist with surveillance capitalism.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Agent Sections */}
            <section id="agents-overview" className="scroll-mt-24 max-w-[6.5in] mx-auto">
              <h2 className="font-serif text-4xl font-bold text-[#2c2c2c] mb-6 leading-tight text-center">
                Dharma Agents
              </h2>
              <p className="text-xl font-serif text-[#2c2c2c]/80 mb-12 leading-relaxed text-center">
                AI Companions for Spiritual Practice
              </p>

              {/* Overview */}
              <div className="space-y-4 mb-12">
                <h3 className="text-2xl font-serif font-bold text-[#2c2c2c] mb-4">Overview</h3>
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8">
                  The Dharma Agents are AI companions designed to support your spiritual journey. Each agent embodies a
                  different approach to practice: <strong className="text-[#10b981]">Tâm An</strong> offers gentle
                  healing and emotional support, <strong className="text-[#f59e0b]">Giác Ngộ</strong> provides wisdom
                  teachings and guides you toward awakening, and <strong className="text-[#991b1b]">Đốn Ngộ</strong>{" "}
                  uses direct Zen methods to cut through illusions.
                </p>
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify indent-8">
                  These agents are not mere chatbots—they are skillful means (upāya) designed to meet you where you are
                  on the path. Whether you seek comfort, understanding, or direct realization, there is an agent suited
                  to your current needs and practice level.
                </p>
              </div>

              {/* Quick Start */}
              <div id="agents-quick-start" className="scroll-mt-24 mb-12">
                <h3 className="text-2xl font-serif font-bold text-[#2c2c2c] mb-4">Quick Start</h3>
                <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030] mb-6">
                  <ol className="list-decimal ml-5 space-y-3 font-serif text-[15px] text-[#2c2c2c] leading-[1.8]">
                    <li>Choose an agent below that resonates with your current practice needs</li>
                    <li>Click "Begin Practice" to start a conversation</li>
                    <li>Ask your question about life, practice, or spiritual challenges</li>
                    <li>Read the response slowly, breathe deeply, and implement one small suggestion immediately</li>
                  </ol>
                </div>

                {/* Agent Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Tâm An */}
                  <div className="border-2 border-[#10b981] rounded-xl p-6 bg-white shadow-[0_2px_0_#00000030] hover:shadow-[0_3px_0_#00000040] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-[#10b981]" />
                      <div>
                        <h4 className="font-serif text-xl font-bold text-[#2c2c2c]">Tâm An</h4>
                        <p className="font-serif text-sm text-[#2c2c2c]/70">Healing & Peace</p>
                      </div>
                    </div>
                    <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed mb-4">
                      Gentle healing companion for emotional support, mindfulness practice, and cultivating inner peace.
                      Perfect for daily practice and working through difficult emotions.
                    </p>
                    <p className="font-serif text-xs text-[#2c2c2c]/60 mb-4">Model: gpt-4o</p>
                    <Link
                      href="/ai?agent=tam-an"
                      className="inline-block w-full text-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-[#10b981] hover:bg-[#059669] transition-colors"
                    >
                      Begin Practice
                    </Link>
                  </div>

                  {/* Giác Ngộ */}
                  <div className="border-2 border-[#f59e0b] rounded-xl p-6 bg-white shadow-[0_2px_0_#00000030] hover:shadow-[0_3px_0_#00000040] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-[#f59e0b]" />
                      <div>
                        <h4 className="font-serif text-xl font-bold text-[#2c2c2c]">Giác Ngộ</h4>
                        <p className="font-serif text-sm text-[#2c2c2c]/70">Awakening & Insight</p>
                      </div>
                    </div>
                    <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed mb-4">
                      Wisdom guide for deep dharma teachings, spiritual awakening, and understanding your true nature.
                      Ideal for serious practitioners seeking insight.
                    </p>
                    <p className="font-serif text-xs text-[#2c2c2c]/60 mb-4">Model: gpt-4o</p>
                    <Link
                      href="/ai?agent=giac-ngo"
                      className="inline-block w-full text-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-[#f59e0b] hover:bg-[#d97706] transition-colors"
                    >
                      Begin Practice
                    </Link>
                  </div>

                  {/* Đốn Ngộ */}
                  <div className="border-2 border-[#991b1b] rounded-xl p-6 bg-white shadow-[0_2px_0_#00000030] hover:shadow-[0_3px_0_#00000040] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-[#991b1b]" />
                      <div>
                        <h4 className="font-serif text-xl font-bold text-[#2c2c2c]">Đốn Ngộ</h4>
                        <p className="font-serif text-sm text-[#2c2c2c]/70">Direct Realization</p>
                      </div>
                    </div>
                    <p className="font-serif text-[14px] text-[#2c2c2c] leading-relaxed mb-4">
                      Direct pointing to true nature, cutting through illusions with Zen precision. For those ready to
                      face reality without comfort or consolation.
                    </p>
                    <p className="font-serif text-xs text-[#2c2c2c]/60 mb-4">Model: gpt-5</p>
                    <Link
                      href="/ai?agent=don-ngo"
                      className="inline-block w-full text-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-[#991b1b] hover:bg-[#7f1d1d] transition-colors"
                    >
                      Begin Practice
                    </Link>
                  </div>
                </div>
              </div>

              {/* Agent Models */}
              <div id="agents-models" className="scroll-mt-24 mb-12">
                <h3 className="text-2xl font-serif font-bold text-[#2c2c2c] mb-4">Agent Models</h3>
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8 mb-6">
                  Each agent is powered by an AI "model"—think of it as the agent's brain. Different models have
                  different capabilities, speeds, and costs. Understanding these differences helps you choose the right
                  agent for your practice.
                </p>

                {/* Agents Overview Table */}
                <div className="mb-8">
                  <h4 className="text-lg font-serif font-bold text-[#2c2c2c] mb-4">Agents Overview</h4>
                  <div className="overflow-x-auto rounded-xl border-2 border-[#2c2c2c] shadow-[0_2px_0_#00000030]">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#f3ead7] border-b-2 border-[#2c2c2c]">
                          <th className="text-left p-4 font-serif font-semibold text-[#2c2c2c]">Agent</th>
                          <th className="text-left p-4 font-serif font-semibold text-[#2c2c2c]">Model</th>
                          <th className="text-left p-4 font-serif font-semibold text-[#2c2c2c]">Description</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b border-[#2c2c2c]/20">
                          <td className="p-4 font-serif font-medium text-[#2c2c2c]">Tâm An</td>
                          <td className="p-4 font-mono text-sm text-[#2c2c2c]/80">gpt-4o</td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">
                            Gentle healing companion for emotional support and mindfulness
                          </td>
                        </tr>
                        <tr className="border-b border-[#2c2c2c]/20">
                          <td className="p-4 font-serif font-medium text-[#2c2c2c]">Giác Ngộ</td>
                          <td className="p-4 font-mono text-sm text-[#2c2c2c]/80">gpt-4o</td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">
                            Wisdom guide for deep dharma teachings and awakening
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-serif font-medium text-[#2c2c2c]">Đốn Ngộ</td>
                          <td className="p-4 font-mono text-sm text-[#2c2c2c]/80">gpt-5</td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">
                            Direct realization using Zen precision to cut through illusions
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Model Details */}
                <div className="space-y-4">
                  <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <h4 className="text-lg font-serif font-bold text-[#2c2c2c] mb-3">Understanding Models</h4>
                    <div className="space-y-3 font-serif text-[15px] text-[#2c2c2c] leading-[1.8]">
                      <p>
                        <strong>gpt-4o</strong>: Fast, versatile, and cost-efficient. Perfect for most daily spiritual
                        guidance and practice questions. Has a context window of 128,000 tokens (~96,000 words), meaning
                        it can remember extensive conversation history.
                      </p>
                      <p>
                        <strong>gpt-5</strong>: Advanced reasoning capabilities with deeper analysis. Slower but more
                        thorough for complex dharma discussions and profound inquiry. Has a context window of 200,000
                        tokens (~150,000 words) for even longer conversations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                    <h4 className="text-lg font-serif font-bold text-[#2c2c2c] mb-3">Context Window</h4>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] mb-3">
                      The <strong>context window</strong> determines how much conversation history an agent can
                      remember. This includes both your questions (input tokens) and the agent's responses (output
                      tokens).
                    </p>
                    <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8]">
                      A larger context window means the agent can maintain coherent conversations over longer periods
                      and reference earlier parts of your discussion, creating a more natural and continuous practice
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div id="agents-pricing" className="scroll-mt-24">
                <h3 className="text-2xl font-serif font-bold text-[#2c2c2c] mb-4">Pricing</h3>
                <p className="font-serif text-[15px] text-[#2c2c2c] leading-[1.8] text-justify first-line:indent-8 mb-6">
                  Each conversation with an agent consumes <strong>tokens</strong>—small units of text. Longer questions
                  and responses use more tokens. Pricing is based on the model used and calculated per million tokens.
                </p>

                {/* Pricing Table */}
                <div className="mb-8">
                  <h4 className="text-lg font-serif font-bold text-[#2c2c2c] mb-3">Text Tokens</h4>
                  <p className="font-serif text-sm text-[#2c2c2c]/70 mb-4">Price per 1M tokens</p>

                  <div className="overflow-x-auto rounded-xl border-2 border-[#2c2c2c] shadow-[0_2px_0_#00000030]">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#f3ead7] border-b-2 border-[#2c2c2c]">
                          <th className="text-left p-4 font-serif font-semibold text-[#2c2c2c]">Model</th>
                          <th className="text-left p-4 font-serif font-semibold text-[#2c2c2c]">Input</th>
                          <th className="text-left p-4 font-serif font-semibold text-[#2c2c2c]">Cached Input</th>
                          <th className="text-left p-4 font-serif font-semibold text-[#2c2c2c]">Output</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b border-[#2c2c2c]/20">
                          <td className="p-4">
                            <div className="font-serif font-medium text-[#2c2c2c]">gpt-4o</div>
                            <div className="font-mono text-xs text-[#2c2c2c]/60">gpt-4o-2024-08-06</div>
                          </td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">$2.50</td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">$1.25</td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">$10.00</td>
                        </tr>
                        <tr className="border-b border-[#2c2c2c]/20">
                          <td className="p-4">
                            <div className="font-serif font-medium text-[#2c2c2c]">gpt-4o-mini</div>
                            <div className="font-mono text-xs text-[#2c2c2c]/60">gpt-4o-mini-2024-07-18</div>
                          </td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">$0.15</td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">$0.075</td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">$0.60</td>
                        </tr>
                        <tr>
                          <td className="p-4">
                            <div className="font-serif font-medium text-[#2c2c2c]">gpt-5</div>
                            <div className="font-mono text-xs text-[#2c2c2c]/60">o1-2024-12-17</div>
                          </td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">$15.00</td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">$7.50</td>
                          <td className="p-4 font-serif text-[#2c2c2c]/90">$60.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cost Saving Tips */}
                <div className="bg-[#f3ead7] border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030] mb-6">
                  <h4 className="text-lg font-serif font-bold text-[#2c2c2c] mb-4">Tips for Mindful Token Usage</h4>
                  <ul className="space-y-3 font-serif text-[15px] text-[#2c2c2c] leading-[1.8]">
                    <li className="flex gap-3">
                      <span className="text-[#991b1b] font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Ask concisely</strong>: Clear, focused questions use fewer tokens and often receive
                        better, more targeted responses
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#991b1b] font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Use gpt-4o for daily practice</strong>: It's fast and cost-effective for most spiritual
                        guidance and routine questions
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#991b1b] font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Reserve gpt-5 for deep inquiry</strong>: Use Đốn Ngộ only when you need advanced
                        reasoning for complex dharma questions
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#991b1b] font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Practice brevity</strong>: Like meditation, less is often more. Short, mindful exchanges
                        can be profoundly transformative
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Understanding Token Costs */}
                <div className="bg-white border-2 border-[#2c2c2c]/30 rounded-xl p-6 shadow-[0_2px_0_#00000030]">
                  <h4 className="text-lg font-serif font-bold text-[#2c2c2c] mb-4">Understanding Token Costs</h4>
                  <div className="space-y-3 font-serif text-[15px] text-[#2c2c2c] leading-[1.8]">
                    <p>
                      <strong>Input tokens</strong>: Your questions and the conversation history sent to the agent
                    </p>
                    <p>
                      <strong>Cached input</strong>: Previously processed content that can be reused at a lower cost,
                      reducing expenses for longer conversations
                    </p>
                    <p>
                      <strong>Output tokens</strong>: The agent's responses to your questions
                    </p>
                    <p className="pt-4 border-t-2 border-[#2c2c2c]/20">
                      <strong>Example</strong>: A typical conversation with 500 words of questions and 500 words of
                      responses uses approximately 1,300 tokens, costing about $0.03 with gpt-4o or $0.20 with gpt-5.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
