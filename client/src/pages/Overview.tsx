import { Card } from "@/components/ui/card";
import { Sparkles, Code2, Zap } from "lucide-react";

export default function Overview() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 space-y-12">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl font-semibold text-foreground" data-testid="heading-overview">
          Buddhist AI Agents
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Specialized AI assistants grounded in Buddhist wisdom, each designed for specific aspects of spiritual practice—from gentle healing to direct awakening.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-serif text-lg font-semibold">12 Specialized Agents</h3>
          <p className="text-sm text-muted-foreground">
            Each agent embodies a unique approach to spiritual guidance, organized by Buddhist vehicle levels from foundational practice to ultimate realization.
          </p>
        </Card>
        <Card className="p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-chart-2" />
          </div>
          <h3 className="font-serif text-lg font-semibold">Advanced Models</h3>
          <p className="text-sm text-muted-foreground">
            Powered by GPT-4o and GPT-5, combining cutting-edge AI with timeless dharma teachings from various Buddhist monasteries.
          </p>
        </Card>
        <Card className="p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-chart-3/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-chart-3" />
          </div>
          <h3 className="font-serif text-lg font-semibold">Sacred Economics</h3>
          <p className="text-sm text-muted-foreground">
            Merit-based pricing that honors both computational reality and spiritual intention.
          </p>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Four Vehicle Levels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#7bb89b" }}></div>
              <h3 className="font-serif text-lg font-semibold">Tiểu Thừa (Foundation)</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Personal liberation through basic mindfulness, ethical conduct, and meditation. Perfect for beginners seeking peace and stress reduction.
            </p>
          </Card>
          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#71b7e6" }}></div>
              <h3 className="font-serif text-lg font-semibold">Trung Thừa (Insight)</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Deepening understanding through self-inquiry and contemplation. Exploring dependent origination and the nature of reality.
            </p>
          </Card>
          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#5f6cf1" }}></div>
              <h3 className="font-serif text-lg font-semibold">Đại Thừa (Bodhisattva)</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Combining wisdom and compassion. Direct pointing to Buddha nature while cultivating the intention to help all beings.
            </p>
          </Card>
          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f05d5e" }}></div>
              <h3 className="font-serif text-lg font-semibold">Phật Thừa (Ultimate)</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Beyond all concepts and methods. Sudden awakening and complete perfect enlightenment—the One Vehicle teaching.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
