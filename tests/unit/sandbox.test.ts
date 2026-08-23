import { describe, it, expect } from "vitest";
import { add, greet } from "../../src/sandbox";

describe("sandbox", () => {
  describe("add", () => {
    it("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("handles zero", () => {
      expect(add(0, 7)).toBe(7);
    });

    it("handles negative numbers", () => {
      expect(add(-1, 1)).toBe(0);
    });
  });

  describe("greet", () => {
    it("produces expected greeting", () => {
      expect(greet("world")).toBe("repo-probe: hello, world");
    });
  });
});
