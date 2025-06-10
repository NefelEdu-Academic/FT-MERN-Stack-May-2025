import { Router } from "express";
import movieController from "../controllers/movie.controller.js";
const router = Router()

router.route("/movies")
.get(movieController.getAllMovies)
.post(movieController.createMovie)

router.route("/movies/:id")
.get(movieController.getMovieById)

export default router