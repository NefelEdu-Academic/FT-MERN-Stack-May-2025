import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ShowById = () => {
    const [oneMovie, setOneMovie] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then(res=>{
            console.log(res.data);
            
            setOneMovie(res.data)
        })
        .catch(err=>{
            console.error("There was an error fetching a Movie", err);
            
        })
        ;
    },[id])
  return (
    <div className='container'>
        <Link className='btn btn-dark' to={"/"}>Home</Link>
        {oneMovie ? 
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title"> {oneMovie.title} </h5>
                <p className="card-text"> {oneMovie.description} </p>
                <p className="card-text"> {oneMovie.createdAt} </p>
                <p className="card-text"> {oneMovie.updatedAt} </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div> : <h2>Loading Data...</h2>}
    </div>
  )
}

export default ShowById