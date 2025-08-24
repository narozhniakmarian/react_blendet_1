type T = {
  name: string;
  age: number;
};

function createUser({ name, age }: T): T & { isAdmin: boolean } {
  return {
    name,
    age,
    isAdmin: false,
  };
}
createUser({ name: "Alice", age: 30 });
