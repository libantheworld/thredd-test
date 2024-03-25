import { type User } from "./types";

async function fetchUsers(): Promise<User[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json() as User[];
    return users;
  }

  const api = {
    fetchUsers,
  };
  
  export default api;