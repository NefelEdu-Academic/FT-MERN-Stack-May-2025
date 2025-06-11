import movieController from "../controllers/movie.controller.js";
import { Router } from "express";

const router = Router()

router.route("/movies")
.get(movieController.getAllMovies)
.post(movieController.createMovie)

router.route("/movies/:id")
.get(movieController.getMovieById)
.put(movieController.updateMovie)
.delete(movieController.deleteMovie)

export default router