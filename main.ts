const templateName = Deno.args[0];

const { default: template } = await import(templateName);

console.log(JSON.stringify(template, null, 2));

export {};
