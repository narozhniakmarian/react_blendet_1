type Role = "Admin" | "User" | "Guest";
const admin = ["create", "read", "update", "delete"];
const user = ["read", "update"];
const guest = ["read"];
function getPermissions(role: Role): string[] {
  if (role === "Admin") {
    return admin;
  } else if (role === "User") {
    return user;
  } else if (role === "Guest") {
    return guest;
  }
  return [];
}

console.log(getPermissions("Admin"));
