const getPermissions = (template: string): string[] => {
  const regexp = /^\/\/ (--allow-.*)/gm;
  const matches = template.matchAll(regexp);
  return [...matches].map((match) => match[1]);
};

export { getPermissions };
