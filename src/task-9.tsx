interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T;
}
const numberContainer: Container<number> = {
  items: [],
  addItem(item: number) {
    this.items.push(item);
  },
  getItem(index: number) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: [],
  addItem(item: string) {
    this.items.push(item);
  },
  getItem(index: number) {
    return this.items[index];
  },
};
numberContainer.addItem(10);
numberContainer.addItem(20);
console.log(numberContainer.getItem(0));

stringContainer.addItem("hello");
stringContainer.addItem("world");
console.log(stringContainer.getItem(1));
function getLastElement<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[items.length - 1] : undefined;
}
const lastNumber = getLastElement(numberContainer.items);
const lastString = getLastElement(stringContainer.items);
console.log(lastNumber);
console.log(lastString);
