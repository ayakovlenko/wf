import { Item } from "./lib.ts";
import { el, Element } from "./xml.ts";

const toXmlRecur = ({ text, note, items }: Item): Element =>
  el(
    "outline",
    items?.map((item) => toXmlRecur(item)) ?? "",
    {
      text,
      _note: note,
    },
  );

const toXml = (items: Item[]): string => {
  return el(
    "opml",
    [
      el("body", items.map((item) => toXmlRecur(item))),
    ],
    {
      version: "2.0",
    },
  ).toString();
};

export { toXml };
