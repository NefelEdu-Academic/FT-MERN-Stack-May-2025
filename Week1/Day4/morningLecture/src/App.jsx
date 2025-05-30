import { useState } from "react"


function App() {
  // States
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [fNameError, setFNameError] = useState("")
  //  const [allUsers, setAllUsers] = useState([{firstName: "Mohamed", lastName: "Ali", email: "m@m.m"}])
   const [allUsers, setAllUsers] = useState([])
   const [submittedTest, setSubmittedTest] = useState(false)
  //  Logic
  const handleSubmit = (e)=>{
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();
    // setAllUsers([...allUsers, {firstName: firstName, lastName: lastName, email: email}])
    setAllUsers([...allUsers, { firstName, lastName, email }]);
    console.log(allUsers);
    setSubmittedTest(true)
    setFirstName("")
    setLastName("")
    setEmail("")
  }

  const filterUser = ()=>{
    const filtredUsers = allUsers.filter((user, idx) =>
      user.firstName.includes("K")
    );
    setAllUsers(filtredUsers)
  }

  return (
    <>
    {/* Conditional rendering using ternary operator */}
    {allUsers.length==0 ? <p>No users yet</p> : <p> {JSON.stringify(allUsers)} </p>}
      {submittedTest ? <p>Form Submitted</p> : <p>Add user</p>}
      <form onSubmit={handleSubmit}>
        {fNameError}
        <input
          placeholder="Enter your first name"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
            if(e.target.value.length <1){
              setFNameError("First name is required")
            }else if(e.target.value.length <2){
              setFNameError("First name must contain at least 2 characters")
            }else{
              setFNameError("")
            }
          }}
        />
        <input
          placeholder="Enter your last name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add User</button>
      </form>

          <button onClick={filterUser}>Filter users</button>
      <ul>
        {allUsers.map((user, idx)=>
          <li key={idx}> {user.firstName} - {user.lastName} - {user.email} </li>
        )}
      </ul>
    </>
  );
}

export default App
