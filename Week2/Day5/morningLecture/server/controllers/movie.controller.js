import Movie from "../models/movie.model.js";

const movieController = {
  createMovie: async (req, res) => {
    try {
      const newMovie = new Movie(req.body);
      await newMovie.save();
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllMovies: async (req, res) => {
    try {
      const allMovies = await Movie.find();
      res.json(allMovies);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getMovieById: async (req, res) => {
    try {
      const oneMovie = await Movie.findById(req.params.id);
      if (oneMovie) {
        res.status(200).json(oneMovie);
      } else {
        res.status(404).json({ message: "Movie not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateMovie: async (req, res) => {
    try {
      const movieUpdated = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          runValidators: true, // Ensures that Mongoose validators are run on the update data
          new: true, // Returns the updated document instead of the original one
        }
      );
      res.status(201).json(movieUpdated);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteMovie: async (req, res) => {
    try {
      const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
      if (deleteMovie) {
        res
          .status(200)
          .json({
            message: "The movie was deleted",
            movieDeleted: deleteMovie,
          });
      }else{
        res.status(404).json({message: "Movie not found"})
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default movieController;
