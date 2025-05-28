import './App.css'

function App() {
  const users=[
    {email: "a@a.a", age:18},
    {email: "b@b.b", age:19},
    {email: "c@c.c", age:45},
    {email: "d@d.d", age:31},
    {email: "e@e.e", age:10},
  ]
  // const display = (user, index) =>{
  //   return (
  //     <tr key={index}>
  //       <td>{user.email}</td>
  //       <td>{user.age}</td>
  //     </tr>
  //   );
  // }
  return (
    <>
      <h1 className="title">Hello From Our First React App</h1>
      <h3>All Users List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map(display)} */}
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App
