import Movie from "../models/movie.model.js";
const movieController = {
  // Get all movies
  getAllMovies: async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //   create new movie
  createMovie: async (req, res) => {
    try {
      // get the movie data from req.body
      const newMovie = new Movie(req.body);
      // insert newMovie into DB
      await newMovie.save();
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  },
//   get movie by id
getMovieById: async (req, res)=>{
    try{
        // create a variable to strore id
        const movieId = req.params.id
        const movie = await Movie.findById(movieId)
        // check if we find the movie we return it
        if(movie){
            res.status(200).json(movie)
        }
        // otherwise we didn't find this movie
        else{
            res.status(404).json({message:'Movie not found'})
        }
    }
    catch (error){
        res.status(500).json(error)
    }
}
};

export default movieController;
