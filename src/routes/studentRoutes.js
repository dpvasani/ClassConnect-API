import express from "express";
import {
  viewClassrooms,
  viewTasks,
  submitTask,
} from "../controllers/studentController.js"; // Ensure the path is correct

const router = express.Router();

router.get("/:studentId/classrooms", viewClassrooms);
router.get("/classrooms/:classroomId/tasks", viewTasks);
router.post("/tasks/:taskId/:studentId", submitTask);

export default router;