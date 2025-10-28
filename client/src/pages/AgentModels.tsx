import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CompactAgentCard } from "@/components/CompactAgentCard";
import { AgentDialog } from "@/components/AgentDialog";
import { Search, Filter } from "lucide-react";
import { buddhistAgents, vehicleInfo, type BuddhistAgent, type BuddhistVehicle } from "@shared/buddhistAgents";

export default function AgentModels() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState<BuddhistVehicle | "all">("all");
  const [selectedAgent, setSelectedAgent] = useState<BuddhistAgent | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredAgents = buddhistAgents.filter(agent => {
    const matchesSearch = 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.monastery?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesVehicle = selectedVehicle === "all" || agent.vehicle === selectedVehicle;
    
    return matchesSearch && matchesVehicle;
  });

  const handleViewDetails = (agent: BuddhistAgent) => {
    setSelectedAgent(agent);
    setDialogOpen(true);
  };

  const vehicleOptions: Array<{ value: BuddhistVehicle | "all", label: string }> = [
    { value: "all", label: "All Vehicles" },
    { value: "tiểu-thừa", label: "Tiểu Thừa" },
    { value: "trung-thừa", label: "Trung Thừa" },
    { value: "đại-thừa", label: "Đại Thừa" },
    { value: "phật-thừa", label: "Phật Thừa" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-16 space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl font-semibold text-foreground" data-testid="heading-agent-models">
          Agent Models
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Explore Buddhist AI agents from monasteries and centers across traditions. Each agent is carefully designed with specific system prompts and methodologies. Select an agent to view full details.
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search agents by name, purpose, or monastery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            data-testid="input-search-agents"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span>Filter by vehicle:</span>
          </div>
          {vehicleOptions.map(option => (
            <Badge
              key={option.value}
              variant={selectedVehicle === option.value ? "default" : "outline"}
              className="cursor-pointer hover-elevate"
              onClick={() => setSelectedVehicle(option.value)}
              data-testid={`filter-vehicle-${option.value}`}
            >
              {option.label}
            </Badge>
          ))}
        </div>
      </div>

      {selectedVehicle !== "all" && (
        <div className="p-6 rounded-lg border" style={{ 
          backgroundColor: `${vehicleInfo[selectedVehicle].color}10`,
          borderColor: `${vehicleInfo[selectedVehicle].color}40`
        }}>
          <h3 className="font-serif text-lg font-semibold mb-2">
            {vehicleInfo[selectedVehicle].name} · {vehicleInfo[selectedVehicle].nameEn}
          </h3>
          <p className="text-sm text-muted-foreground">
            {vehicleInfo[selectedVehicle].description}
          </p>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredAgents.length} {filteredAgents.length === 1 ? 'agent' : 'agents'} found
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredAgents.map((agent) => (
            <CompactAgentCard
              key={agent.id}
              agent={agent}
              onClick={handleViewDetails}
            />
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No agents found matching your search criteria.
            </p>
          </div>
        )}
      </div>

      <AgentDialog
        agent={selectedAgent}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
