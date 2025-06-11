import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const DisplayAll = () => {
    const [allMovies, setAllMovies] = useState([])
    const nav = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/movies")
        .then(res =>{
            setAllMovies(res.data)
        })
        .catch(err=>{
            console.log("There was an error fetching movies from DB", err);
            
        })
        ;
    },[])

    const handleShowButton =(id)=>{
        nav(`/show/${id}`)
    }
    
    const handleDeleteMovie = (id)=>{
        axios.delete(`http://localhost:8000/api/movies/${id}`)
        .then(res=>{
            setAllMovies(allMovies.filter(oneMovie=>id !== oneMovie._id ))
        })
        .catch(err=>console.error("There was an error deleting the movie", err));

    }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>All Movies</h1>
        <Link className="btn btn-secondary" to={"/new"}>
          New Movie
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allMovies.map((oneMovie, idx) => (
            <tr key={oneMovie._id}>
              <td> {oneMovie.title} </td>
              <td> {oneMovie.description} </td>
              <td className="d-flex gap-2">
                <button
                  onClick={() => handleShowButton(oneMovie._id)}
                  className="btn btn-primary"
                >
                  Show
                </button>
                <Link
                  to={`/update/${oneMovie._id}`}
                  className="btn btn-success"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteMovie(oneMovie._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayAll