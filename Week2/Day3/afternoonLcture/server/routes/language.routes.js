// Express Router is the middleware used for grouping routes together with the same paths.
import { Router } from "express";
import languageController from "../controllers/language.controllers.js";
const router = Router()

router
  .route("/languages")
  .get(languageController.getAllLanguages)
  .post(languageController.createLanguage);

  router
    .route("/languages/:id")
    .get(languageController.getLanguageById)
    .put(languageController.updateLanguageById)
    .delete(languageController.deleteLanguageById);

export default router