import { useState } from "react";
import { DocsNav } from "@/components/DocsNav";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/TracingBeam";
import { Download, Share2, Menu, X, BookOpen, Coins, Server, Bot } from "lucide-react";
import sutraIcon from "@/assets/sutra-icon.png";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      id: "overview",
      title: "Bodhi Technology Lab",
      icon: BookOpen,
      children: [
        { id: "mission", title: "Our Mission", href: "/docs/overview#mission" },
        { id: "principles", title: "Our Principles", href: "/docs/overview#principles" },
        { id: "methods", title: "Our Methods", href: "/docs/overview#methods" },
        { id: "capabilities", title: "Platform Capabilities", href: "/docs/overview#capabilities" },
        { id: "why-partner", title: "Why Partner", href: "/docs/overview#why-partner" },
        { id: "infrastructure", title: "Sustainable Infrastructure", href: "/docs/overview#infrastructure" },
        { id: "join", title: "Join the Lab", href: "/docs/overview#join" },
        { id: "fourth-grace", title: "The Fourth Grace Mandala", href: "/docs/overview#fourth-grace" },
      ],
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      icon: Server,
      children: [
        { id: "vision", title: "Vision & Mission", href: "/docs/tech-stack#vision-mission" },
        { id: "compute", title: "Collective Compute Mandala", href: "/docs/tech-stack#compute-mandala" },
        { id: "ledger", title: "The Mandala Ledger", href: "/docs/tech-stack#mandala-ledger" },
        { id: "protocol", title: "Merit Attribution Protocol", href: "/docs/tech-stack#merit-protocol" },
        { id: "primitives", title: "Universal Primitives", href: "/docs/tech-stack#primitives" },
        { id: "privacy", title: "Privacy by Dharma", href: "/docs/tech-stack#privacy-dharma" },
      ],
    },
    {
      id: "agents",
      title: "Agents",
      icon: Bot,
      children: [
        { id: "models", title: "Agent Models", href: "/docs/models" },
        { id: "quick-start", title: "Quick Start", href: "/docs/quick-start" },
        { id: "pricing", title: "Token Pricing", href: "/docs/pricing" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-40 bg-card border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover-elevate rounded-lg transition-all"
              data-testid="button-sidebar-toggle"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
              <img src={sutraIcon} alt="Sutra" className="w-6 h-6" />
              <span className="font-serif text-base sm:text-lg font-bold text-primary">Awaken Technology for the Dharma‑Ending Age</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" className="hidden sm:flex" data-testid="button-download">
              <Download className="w-3.5 h-3.5 mr-2" />
              <span>Export PDF</span>
            </Button>
            <Button size="sm" data-testid="button-share">
              <Share2 className="w-3.5 h-3.5 mr-2" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex pt-[57px]">
        <aside className={`fixed top-[57px] left-0 h-[calc(100vh-57px)] w-80 bg-sidebar border-r overflow-y-auto z-30 lg:block ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
          <DocsNav navigation={navigation} />
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 lg:ml-80">
          <TracingBeam className="py-8 px-4">
            {children}
          </TracingBeam>
        </main>
      </div>
    </div>
  );
}
