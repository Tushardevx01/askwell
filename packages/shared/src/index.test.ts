import { describe, it, expect } from "vitest";
import { APP_NAME, PLAN_LIMITS, WidgetConfigSchema } from "./index";

describe("packages/shared", () => {
  it("exports correct APP_NAME", () => {
    expect(APP_NAME).toBe("Askwell");
  });

  it("defines free and pro plan limits", () => {
    expect(PLAN_LIMITS.free.projects).toBe(1);
    expect(PLAN_LIMITS.pro.projects).toBe(5);
    expect(PLAN_LIMITS.free.showBadge).toBe(true);
    expect(PLAN_LIMITS.pro.showBadge).toBe(false);
  });

  it("validates widget config with zod schema", () => {
    const validConfig = {
      projectId: "123e4567-e89b-12d3-a456-426614174000",
      buttonColor: "#000000",
      position: "bottom-right",
      label: "Chat with us",
      animation: "fade",
      headerText: "Support",
      showBadge: true,
    };
    const parsed = WidgetConfigSchema.safeParse(validConfig);
    expect(parsed.success).toBe(true);
  });
});
