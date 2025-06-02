import React from "react";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";

const Hero = () => {
  const [heroId, setHeroId] = useState(1);
    const [hero, setHero] = useState(null)

//   const fetchOneHero = () => {
//     fetch(
//       `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${heroId}.json`
//     )
//     .then((res)=> res.json())
//     .then((response)=> setHero(response))
//     .catch((err)=> console.log(err)
//     )
//   };

const axiosOneHero = ()=>{
    axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${heroId}.json`)
    .then((response)=> setHero(response.data))
    .catch((err)=>console.log(err)
    )
}

  useEffect(()=>{
    // fetchOneHero()
    axiosOneHero()
  },[heroId])
  return (
    <div>
        <button onClick={()=>{setHeroId(heroId+1)}}>Next</button>
      {hero && (
        <div>
          <h3> {hero.name} </h3>
          <img src={hero.images.md} alt={hero.name} />
        </div>
      )}
    </div>
  );
};

export default Hero;
