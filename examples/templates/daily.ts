import { Item } from "https://raw.githubusercontent.com/ayakovlenko/wf/0.0.1/mod.ts";
import { format } from "https://deno.land/std@0.93.0/datetime/mod.ts";

const template: Item | Item[] = [
  new Item(format(new Date(), "yyyy-MM-dd")),
];

export default template;
