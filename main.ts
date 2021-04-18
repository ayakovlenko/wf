import { getPermissions } from "./permissions.ts";

const templateName = Deno.args[0];

const template = Deno.readTextFileSync(templateName);
const permissions = getPermissions(template);

const p = Deno.run({
  cmd: ["deno", "run", ...permissions, templateName],
});

await p.status();

p.close();

export {};
