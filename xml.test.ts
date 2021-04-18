import { assertEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";
import { el } from "./xml.ts";

Deno.test("leaf element", () => {
  const input = el("td", "header");

  const output = `<?xml version="1.0"?>
<td>header</td>`;

  assertEquals(input.toString(), output);
});

Deno.test("tree element", () => {
  const input = el("th", [el("td", "header")]);

  const output = `<?xml version="1.0"?>
<th>
  <td>header</td>
</th>`;

  assertEquals(input.toString(), output);
});

Deno.test("element with attributes", () => {
  const input = el("a", "Google", { href: "https://google.com/" });

  const output = `<?xml version="1.0"?>
<a href="https://google.com/">Google</a>`;

  assertEquals(input.toString(), output);
});

Deno.test("e2e", () => {
  const input = el("table", [
    el("tr", [el("th", "header")]),
    el("tr", [el("td", "value")]),
  ]);

  const output = `<?xml version="1.0"?>
<table>
  <tr>
    <th>header</th>
  </tr>
  <tr>
    <td>value</td>
  </tr>
</table>`;

  assertEquals(input.toString(), output);
});
