import { describe, it, expect } from "vitest";
import { APP_NAME } from "@askwell/shared";

describe("apps/web smoke test", () => {
  it("imports APP_NAME correctly", () => {
    expect(APP_NAME).toBe("Askwell");
  });
});
