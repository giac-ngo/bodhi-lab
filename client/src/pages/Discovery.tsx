import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Users, Zap } from "lucide-react";
import { buddhistAgents } from "@shared/buddhistAgents";
import { Link } from "wouter";

export default function Discovery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tất cả", icon: "🤖" },
    { id: "healing", label: "Chữa lành", icon: "💚" },
    { id: "enlightenment", label: "Giác ngộ", icon: "✨" },
    { id: "inquiry", label: "Tự vấn", icon: "🔍" },
    { id: "awakening", label: "Tỉnh thức", icon: "🌅" },
  ];

  const getAgentCategory = (purpose: string): string => {
    const lowerPurpose = purpose.toLowerCase();
    if (lowerPurpose.includes("healing") || lowerPurpose.includes("chữa lành") || lowerPurpose.includes("stress") || lowerPurpose.includes("peace")) {
      return "healing";
    }
    if (lowerPurpose.includes("enlightenment") || lowerPurpose.includes("giác ngộ") || lowerPurpose.includes("awakening")) {
      return "enlightenment";
    }
    if (lowerPurpose.includes("inquiry") || lowerPurpose.includes("questioning") || lowerPurpose.includes("tự vấn")) {
      return "inquiry";
    }
    if (lowerPurpose.includes("mindfulness") || lowerPurpose.includes("chánh niệm") || lowerPurpose.includes("awareness")) {
      return "awakening";
    }
    return "healing";
  };

  const filteredAgents = buddhistAgents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.purpose.toLowerCase().includes(searchQuery.toLowerCase());

    const agentCategory = getAgentCategory(agent.purpose);
    const matchesCategory = selectedCategory === "all" || agentCategory === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const AgentCard = ({ agent }: { agent: typeof buddhistAgents[0] }) => {
    const category = getAgentCategory(agent.purpose);
    const categoryLabel = categories.find((c) => c.id === category)?.label || "Khác";
    const categoryIcon = categories.find((c) => c.id === category)?.icon || "🤖";

    return (
      <Link href="/docs/models">
        <a>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#f3ead7] border-2 border-[#2c2c2c] rounded-2xl overflow-hidden
              shadow-[0_2px_0_#00000030,0_0_0_3px_#00000010_inset]
              hover:shadow-[0_3px_0_#00000040,0_0_0_3px_#00000015_inset] transition-all cursor-pointer h-full"
            data-testid={`card-discovery-agent-${agent.id}`}
          >
            <div
              className="relative h-32 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${agent.accentColor}20 0%, ${agent.accentColor}40 100%)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-lg"
                  style={{ backgroundColor: agent.accentColor }}
                >
                  {categoryIcon}
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-serif font-bold text-[#2c2c2c] mb-2">{agent.name}</h3>
              <p className="text-sm font-serif text-[#991b1b] font-semibold mb-3">{agent.tagline}</p>
              <p className="text-sm font-serif text-[#2c2c2c]/70 mb-4 line-clamp-3">{agent.purpose}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[#2c2c2c]/60">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">{agent.model}</span>
                </div>
                {agent.monastery && (
                  <div className="flex items-center gap-2 text-[#2c2c2c]/60">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-serif">{agent.monastery}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span
                  className="px-3 py-1 rounded-lg text-xs font-serif font-semibold border-2"
                  style={{
                    backgroundColor: `${agent.accentColor}20`,
                    color: agent.accentColor,
                    borderColor: agent.accentColor,
                  }}
                >
                  {categoryLabel}
                </span>
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#991b1b] text-white rounded-xl
                  border-2 border-[#2c2c2c] shadow-[0_2px_0_#00000030,0_0_0_3px_#00000010_inset]
                  hover:bg-[#7a1515] transition-colors font-semibold text-sm"
                data-testid={`button-explore-discovery-${agent.id}`}
              >
                <Sparkles className="w-4 h-4" />
                Khám phá Agent
              </button>
            </div>
          </motion.div>
        </a>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-[#EFE0BD] font-serif">
      <header className="bg-[#f3ead7] border-b-2 border-[#2c2c2c] shadow-[0_2px_0_#00000030]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-[#991b1b] mb-2" data-testid="text-discovery-title">
              Chợ Agent Phật Giáo
            </h1>
            <p className="text-lg font-serif text-[#2c2c2c]/70">
              Khám phá các AI Agent được huấn luyện bởi các tổ chức Phật giáo trên toàn thế giới
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 bg-white border-2 border-[#2c2c2c] rounded-xl px-4 py-3 shadow-[0_2px_0_#00000030]">
              <Search className="w-5 h-5 text-[#2c2c2c]/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm agent theo tên, mục đích, hoặc mô tả..."
                className="flex-1 bg-transparent outline-none text-base font-serif text-[#2c2c2c]"
                data-testid="input-discovery-search"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-[#EFE0BD] border-b-2 border-[#2c2c2c]/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-[#2c2c2c]
                  shadow-[0_2px_0_#00000030,0_0_0_3px_#00000010_inset] transition-all whitespace-nowrap
                  ${
                    selectedCategory === category.id
                      ? "bg-[#991b1b] text-white"
                      : "bg-[#f3ead7] text-[#2c2c2c] hover:bg-[#efe2c9]"
                  }`}
                data-testid={`button-category-${category.id}`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-semibold text-sm">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-lg font-serif text-[#2c2c2c]/70">
            Tìm thấy <span className="font-bold text-[#991b1b]">{filteredAgents.length}</span> agent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#2c2c2c] mb-2">Không tìm thấy agent</h3>
            <p className="text-lg font-serif text-[#2c2c2c]/70">
              Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
