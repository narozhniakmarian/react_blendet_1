const users = ["alice", "bob", "charlie"];

interface User {
  id: number;
  name: string;
}

function toUserObjects(users: string[]): User[] {
  const result: User[] = [];

  for (let i = 0; i < users.length; i++) {
    result.push({
      id: i + 1,
      name: users[i],
    });
  }
  console.log(result);
  return result;
}
toUserObjects(users);
