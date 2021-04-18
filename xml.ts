class Element {
  constructor(
    public readonly name: string,
    public readonly children: string | number | Element[],
    public readonly attrs: Record<string, string | undefined>,
  ) {}

  toString(): string {
    return '<?xml version="1.0"?>\n' + toStringRecur(this, 0);
  }
}

function el(
  name: string,
  children: string | number | Element[],
  attrs: Record<string, string | undefined> = {},
): Element {
  return new Element(name, children, attrs);
}

function toStringRecur(element: Element, level: number): string {
  let output = "";
  output += `${indent(level)}<${element.name}`;
  for (const [k, v] of Object.entries(element.attrs)) {
    if (v) {
      output += ` ${k}="${v}"`;
    }
  }
  output += ">";
  if (element.children instanceof Array) {
    output += "\n";
    output += element.children
      .map((childElement) => toStringRecur(childElement, level + 1))
      .join("\n");
    output += `\n${indent(level)}`;
  } else {
    output += element.children;
  }
  output += `</${element.name}>`;
  return output;
}

function indent(level: number): string {
  return "  ".repeat(level);
}

export { el, Element };
