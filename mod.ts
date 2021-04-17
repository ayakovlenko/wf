class Item {
  constructor(
    public readonly text: string,
    public readonly items: Item[] = [],
  ) {}
}

export { Item };
