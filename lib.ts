import { toXml } from "./mod.ts";

interface Item {
  text: string;
  note?: string;
  items?: Item[];
}

const Template = (items: Item[]) => {
  console.log(toXml(items));
};

export { Template };

export type { Item };
