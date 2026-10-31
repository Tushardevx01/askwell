import { describe, it, expect } from "vitest";
import { createPgliteTestDatabase } from "./index";

describe("packages/db", () => {
  it("initializes pglite test helper", async () => {
    const db = await createPgliteTestDatabase();
    expect(db).toBeDefined();
    expect(typeof db.query).toBe("function");
    await db.close();
  });
});
