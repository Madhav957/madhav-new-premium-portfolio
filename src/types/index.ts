export interface Project {
  id: string;
  name: string;
  headline: string;
  category: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  architectureNotes?: string[];
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
  statusLabel?: string;
  badges?: string[];
  workflowSteps?: {
    title: string;
    description: string;
    details?: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    context?: string;
    level?: 'Exploring' | 'Proficient' | 'Foundational';
  }[];
}

export interface JourneyMilestone {
  phase: 'Completed' | 'Currently Exploring' | 'Up Next';
  title: string;
  items: string[];
}

export interface ArticlePreview {
  title: string;
  topic: string;
  date: string;
  description: string;
  url?: string;
  isPublished: boolean;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'file-text';
  isExternal?: boolean;
}

export interface ProblemSolvingData {
  problemsSolved: number;
  primaryLanguage: string;
  leetcodeUrl: string;
  description: string;
  focusAreas: {
    title: string;
    description: string;
  }[];
}
