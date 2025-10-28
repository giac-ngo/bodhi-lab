import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DocsLayout } from "@/components/DocsLayout";
import Manifesto from "@/pages/Manifesto";
import Overview from "@/pages/Overview";
import AgentModels from "@/pages/AgentModels";
import QuickStart from "@/pages/QuickStart";
import TokenPricing from "@/pages/TokenPricing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/">
        {() => <Redirect to="/docs/manifesto" />}
      </Route>
      <Route path="/docs/manifesto">
        <DocsLayout>
          <Manifesto />
        </DocsLayout>
      </Route>
      <Route path="/docs/overview">
        <DocsLayout>
          <Overview />
        </DocsLayout>
      </Route>
      <Route path="/docs/models">
        <DocsLayout>
          <AgentModels />
        </DocsLayout>
      </Route>
      <Route path="/docs/quick-start">
        <DocsLayout>
          <QuickStart />
        </DocsLayout>
      </Route>
      <Route path="/docs/pricing">
        <DocsLayout>
          <TokenPricing />
        </DocsLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
