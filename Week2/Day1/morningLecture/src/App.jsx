import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import axios from "axios";

function App() {
  const [heroes, setHeroes] = useState([])

  // const fetchHeroes = ()=>{
  //   fetch("https://akabab.github.io/superhero-api/api/all.json") //Promise
  //   .then((serverResponse)=> serverResponse.json())
  //   .then((jsonResponse)=> setHeroes(jsonResponse)) //succeffull
  //   .catch((error)=> console.log("Something went wrong ❌❌❌", error)
  //   ) //errors
  // }

  const axiosHeroes = ()=>{
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then((response)=>{
      console.log(response);
      setHeroes(response.data)
    })
    .catch((err)=>console.log(err)
    )
  }

  useEffect(()=>{
    // fetchHeroes()
    axiosHeroes()
  },[])

  return (
    <>
      <h1>Super Heroes</h1>
      {/* <button onClick={fetchHeroes}>Fetch Heroes</button> */}
      {/* {JSON.stringify(heroes)} */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Power</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((oneHero)=>{
            return(
              <tr key={oneHero.id}>
                <td> {oneHero.name} </td>
                <td> <img src={oneHero.images.sm} alt={oneHero.name} /> </td>
                <td> {oneHero.powerstats.power} </td>
                <td> {oneHero.biography.publisher} </td>
              </tr>
            )

          })}
        </tbody>
      </table>
      <Hero/>
    </>
  )
}

export default App
