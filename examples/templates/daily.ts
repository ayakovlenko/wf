import { Item } from "https://raw.githubusercontent.com/ayakovlenko/wf/0.0.2/lib.ts";
import { format } from "https://deno.land/std@0.93.0/datetime/mod.ts";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();

const template: Item[] = [
  {
    text: format(d, "yyyy-MM-dd"),
    note: weekday[d.getDay()],
    items: [
      {
        text: "TO DO",
      },
      {
        text: "DONE",
      },
    ],
  },
];

export default template;
