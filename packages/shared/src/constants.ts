export const APP_NAME = "Askwell";

export const MAX_KNOWLEDGE_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

export const SUPPORTED_KNOWLEDGE_FILE_EXTENSIONS = ["pdf", "md", "txt"] as const;
export type SupportedKnowledgeFileExtension =
  (typeof SUPPORTED_KNOWLEDGE_FILE_EXTENSIONS)[number];

export const PLAN_NAMES = ["free", "pro"] as const;
export type PlanName = (typeof PLAN_NAMES)[number];

export interface PlanLimits {
  projects: number;
  messagesPerMonth: number;
  knowledgeSources: number;
  customColor: boolean;
  customPosition: boolean;
  customLabel: boolean;
  customAnimation: boolean;
  customHeader: boolean;
  showBadge: boolean;
}

export const PLAN_LIMITS: Record<PlanName, PlanLimits> = {
  free: {
    projects: 1,
    messagesPerMonth: 100,
    knowledgeSources: 3,
    customColor: false,
    customPosition: false,
    customLabel: false,
    customAnimation: false,
    customHeader: false,
    showBadge: true,
  },
  pro: {
    projects: 5,
    messagesPerMonth: 2000,
    knowledgeSources: 25,
    customColor: true,
    customPosition: true,
    customLabel: true,
    customAnimation: true,
    customHeader: true,
    showBadge: false,
  },
};
