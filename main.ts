import { Item } from "./lib.ts";
import { toXml } from "./mod.ts";

const templateName = Deno.args[0];

const { default: template } = await import(templateName) as { default: Item[] };

console.log(toXml(template));

export {};
