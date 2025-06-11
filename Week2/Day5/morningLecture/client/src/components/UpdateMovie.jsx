import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateMovie = () => {
  const [oneMovie, setOneMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/movies/${id}`)
      .then((res) => {
        console.log(res.data);

        setOneMovie(res.data);
      })
      .catch((err) => {
        console.error("There was an error fetching a Movie", err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/movies/${id}`, oneMovie)
      .then((res) => navigate("/"))
      .catch((err) =>
        console.error("There was an error updating the movie", err)
      );
  };
  return (
    <div className="container">
      <h2>Edit Movie</h2>
      {oneMovie ? (
        <form onSubmit={handleSubmit} className="col-6">
          <div className="form-group mb-3">
            <label for="exampleInputEmail1">Title</label>
            <input
              onChange={(e) =>
                setOneMovie({ ...oneMovie, [e.target.name]: e.target.value })
              }
              value={oneMovie.title}
              type="text"
              name="title"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleInputPassword1">Description</label>
            <input
              onChange={(e) =>
                setOneMovie({ ...oneMovie, [e.target.name]: e.target.value })
              }
              value={oneMovie.description}
              type="text"
              name="description"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to={"/"} className="btn btn-dark">
              Cancel
            </Link>
          </div>
        </form>
      ) : (
        <p>Loading Data for Form...</p>
      )}
    </div>
  );
};

export default UpdateMovie;
