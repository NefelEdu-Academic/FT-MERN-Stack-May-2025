import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [username, setUsername] = useState("")
    const nav = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUsername("")
        nav("/")

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name' onChange={(e)=>setUsername(e.target.value)} />
            <button>Submit</button>
        </form>

    </div>
  )
}

export default Form