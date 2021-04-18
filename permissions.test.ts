import { getPermissions } from "./permissions.ts";
import { assertEquals } from "./deps_test.ts";

Deno.test("getPermissions", () => {
  const template = `
// --allow-net
// --allow-env

Template([])`;

  assertEquals(getPermissions(template), ["--allow-net", "--allow-env"]);
});
