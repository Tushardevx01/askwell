import { z } from "zod";

export * from "./constants";

// API Standard Error
export const ApiErrorSchema = z.object({
  error: z.object({
    code: z.string(),
    message: z.string(),
  }),
});
export type ApiError = z.infer<typeof ApiErrorSchema>;

// Widget Config Schema
export const WidgetPositionSchema = z.enum([
  "bottom-right",
  "bottom-left",
  "top-right",
  "top-left",
]);
export type WidgetPosition = z.infer<typeof WidgetPositionSchema>;

export const WidgetAnimationSchema = z.enum(["fade", "slide", "scale"]);
export type WidgetAnimation = z.infer<typeof WidgetAnimationSchema>;

export const WidgetConfigSchema = z.object({
  projectId: z.string().uuid(),
  buttonColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  position: WidgetPositionSchema,
  label: z.string().max(50),
  animation: WidgetAnimationSchema,
  headerText: z.string().max(100),
  showBadge: z.boolean(),
});
export type WidgetConfig = z.infer<typeof WidgetConfigSchema>;

export const WidgetConfigQuerySchema = z.object({
  key: z.string().startsWith("pk_"),
});
export type WidgetConfigQuery = z.infer<typeof WidgetConfigQuerySchema>;

// Widget Chat Schemas
export const WidgetChatRequestSchema = z.object({
  key: z.string().startsWith("pk_"),
  visitorId: z.string().min(1).max(128),
  conversationId: z.string().uuid().optional(),
  message: z.string().min(1).max(1000),
});
export type WidgetChatRequest = z.infer<typeof WidgetChatRequestSchema>;

export const WidgetChatResponseSchema = z.object({
  conversationId: z.string().uuid(),
  reply: z.string(),
});
export type WidgetChatResponse = z.infer<typeof WidgetChatResponseSchema>;
