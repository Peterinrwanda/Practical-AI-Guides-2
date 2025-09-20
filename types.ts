export interface WorkflowStep {
  title: string;
  description: string;
}

export interface Tool {
  name: string;
  link: string;
}

export interface Scenario {
  id: string;
  useCase: string;
  title: string;
  primaryAudience: string[];
  goal: string;
  workflow: WorkflowStep[];
  tools: Tool[];
}
