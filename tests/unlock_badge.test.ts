// tests/unlock_badge.test.ts
import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { formatError } from "../supabase/functions/unlock-badge/index.ts";

Deno.test("formatError returns message for Error instance", () => {
  const err = new Error("Something went wrong");
  const result = formatError(err);
  assertEquals(result, "Something went wrong");
});

Deno.test("formatError stringifies object errors", () => {
  const err = { code: 123, detail: "Invalid" };
  const result = formatError(err as unknown);
  assertEquals(result, JSON.stringify(err));
});

Deno.test("formatError handles primitive values", () => {
  const err = "simple string";
  const result = formatError(err as unknown);
  assertEquals(result, "simple string");
});
