
import './App.css'

import HobbiesList from "./components/HobbiesList"
import NavBar from "./components/NavBar"

function App() {
  const hobbies = ["sport", "learning", "coding", "running", "reading"];
  const otherHobbies = ["watching", "music", "boxing", "swimming"];
  const username = "Alice"
  return (
    <>
      <NavBar user={username} />
      <HobbiesList allHobbies={hobbies} username={username} />
      <HobbiesList allHobbies={otherHobbies} username={username} />
    </>
  );
}

export default App
