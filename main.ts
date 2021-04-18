const templateName = Deno.args[0];

const p = Deno.run({
  cmd: ["deno", "run", templateName],
});

await p.status();

p.close();

export {};
