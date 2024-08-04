import { describe, it, expect } from "vitest";
import { isValidEmail } from "./isValidEmail";

describe("isValidEmail", () => {
  it("returns true for valid email format", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  it("returns false for invalid email format", () => {
    expect(isValidEmail("invalid-email")).toBe(false);
    expect(isValidEmail("another@invalid")).toBe(false);
    expect(isValidEmail("no@dotcom")).toBe(false);
  });

  it("handles edge cases", () => {
    // Empty string
    expect(isValidEmail("")).toBe(false);
    // Missing domain
    expect(isValidEmail("test@")).toBe(false);
    // Missing username
    expect(isValidEmail("@example.com")).toBe(false);
    // Missing both username and domain
    expect(isValidEmail("@")).toBe(false);
    // Missing top-level domain
    expect(isValidEmail("test@example.")).toBe(false);
    // Invalid domain extension
    expect(isValidEmail("test@example.c")).toBe(false);
    // Longest valid email
    expect(
      isValidEmail(
        "a".repeat(64) + "@" + "a".repeat(253) + "." + "a".repeat(63) + ".com"
      )
    ).toBe(true);
  });
});
