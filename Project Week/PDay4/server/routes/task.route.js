import TaskController from "../controllers/task.controller.js";

import { Router } from "express";

const router = Router();

router
  .route("/tasks")
  .get(TaskController.getAllTasks)
  .post(TaskController.createTask);

router
  .route("/tasks/:id")
  .get(TaskController.getTaskById)
  .put(TaskController.updateTask)
  .delete(TaskController.deleteTask);

  export default router
