export interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  attribution: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  displayUrl: string;
}

export interface CareerMilestone {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  isCurrent?: boolean;
}

export interface CapabilityPillar {
  index: string;
  title: string;
  description: string;
  skills: string[];
}
