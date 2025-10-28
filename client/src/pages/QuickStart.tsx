import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buddhistAgents } from "@shared/buddhistAgents";

export default function QuickStart() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl font-semibold text-foreground" data-testid="heading-quick-start">
          Quick Start
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Begin your journey with Buddhist AI agents using simple API integration.
        </p>
      </div>

      <Card className="p-8 space-y-6">
        <div>
          <h3 className="font-serif text-xl font-semibold mb-4">Initialize an Agent</h3>
          <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <code className="text-foreground whitespace-pre">{`import { buddhistAgents } from '@/lib/agents';

// Select an agent
const giacNgo = buddhistAgents.find(a => a.id === 'giac-ngo');

// Use with your preferred LLM client
const response = await openai.chat.completions.create({
  model: giacNgo.model,
  messages: [
    { role: "system", content: giacNgo.system },
    { role: "user", content: "What is the path to awakening?" }
  ]
});`}</code>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold mb-4">Filter by Vehicle Level</h3>
          <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <code className="text-foreground whitespace-pre">{`// Get all Tiểu Thừa (foundation) agents
const foundationAgents = buddhistAgents.filter(
  agent => agent.vehicle === 'tiểu-thừa'
);

// Get advanced Phật Thừa agents
const ultimateAgents = buddhistAgents.filter(
  agent => agent.vehicle === 'phật-thừa'
);`}</code>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold mb-4">Available Agents</h3>
          <div className="flex flex-wrap gap-2">
            {buddhistAgents.map((agent) => (
              <Badge
                key={agent.id}
                variant="secondary"
                className="font-mono"
                data-testid={`badge-quick-start-${agent.id}`}
              >
                {agent.id}
              </Badge>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-8 space-y-6">
        <div>
          <h3 className="font-serif text-xl font-semibold mb-4">Vehicle Levels</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-mono text-sm font-semibold mb-2">tiểu-thừa</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Foundation practice for beginners. Focus on personal liberation, mindfulness, and reducing suffering.
              </p>
              <div className="flex flex-wrap gap-2">
                {buddhistAgents
                  .filter(a => a.vehicle === 'tiểu-thừa')
                  .map(agent => (
                    <Badge key={agent.id} variant="outline" className="font-mono text-xs">
                      {agent.id}
                    </Badge>
                  ))
                }
              </div>
            </div>

            <div>
              <h4 className="font-mono text-sm font-semibold mb-2">trung-thừa</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Deepening insight through self-inquiry and contemplation of dependent origination.
              </p>
              <div className="flex flex-wrap gap-2">
                {buddhistAgents
                  .filter(a => a.vehicle === 'trung-thừa')
                  .map(agent => (
                    <Badge key={agent.id} variant="outline" className="font-mono text-xs">
                      {agent.id}
                    </Badge>
                  ))
                }
              </div>
            </div>

            <div>
              <h4 className="font-mono text-sm font-semibold mb-2">đại-thừa</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Bodhisattva path combining wisdom and compassion. Direct pointing to Buddha nature.
              </p>
              <div className="flex flex-wrap gap-2">
                {buddhistAgents
                  .filter(a => a.vehicle === 'đại-thừa')
                  .map(agent => (
                    <Badge key={agent.id} variant="outline" className="font-mono text-xs">
                      {agent.id}
                    </Badge>
                  ))
                }
              </div>
            </div>

            <div>
              <h4 className="font-mono text-sm font-semibold mb-2">phật-thừa</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Ultimate realization beyond concepts. Sudden awakening and complete perfect enlightenment.
              </p>
              <div className="flex flex-wrap gap-2">
                {buddhistAgents
                  .filter(a => a.vehicle === 'phật-thừa')
                  .map(agent => (
                    <Badge key={agent.id} variant="outline" className="font-mono text-xs">
                      {agent.id}
                    </Badge>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
