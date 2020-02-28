import { equal } from "https://deno.land/std/testing/asserts.ts";

Deno.test(function test() {
  equal(1, 1);
});

await Deno.runTests();

