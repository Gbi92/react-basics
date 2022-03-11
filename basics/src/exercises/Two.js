const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

function Two() {
  return (
    <div>
      <h1>Challenge: Display all users to the browser</h1>
      <h3>User names</h3>
      {
        users.map(user => <li key={user.id}>{user.name}</li>)
      }
    </div>
  );
}

export default Two;