type State = number;
type Action = "increment" | "decrement";

function reducer(state: State, action: Action): number {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
console.log(reducer(5, "increment"));
console.log(reducer(3, "decrement"));
