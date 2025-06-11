import axios from "axios";
import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateMovie = () => {
  const [oneMovie, setOneMovie] = useState({});
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/movies`, oneMovie)
      .then((res) => navigate("/"))
      .catch((err) =>
        console.error("There was an error creating a movie", err)
      );
  };
  return (
    <div className="container">
      <h2>Create Movie</h2>
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
              placeholder="Enter title"
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
              placeholder="Description"
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
     
    </div>
  );
};

export default CreateMovie;
