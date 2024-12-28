import { fetchUsers } from "./users/actions";

interface UserInterface {
  Name: string;
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: UserInterface, pos: number) => (
          <li key={pos}>{user.Name}</li>
        ))}
      </ul>
    </div>
  );
}
