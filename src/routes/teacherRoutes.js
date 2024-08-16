import express from "express";
import {
  createClassroom,
  viewClassrooms,
  editClassroom,
  deleteClassroom,
  assignTask,
  viewTaskSubmissions,
} from "../controllers/teacherController.js"; // Ensure the path is correct

const router = express.Router();

router.post("/:teacherId/classrooms", createClassroom);
router.get("/:teacherId/classrooms", viewClassrooms);
router.put("/classrooms/:classroomId", editClassroom);
router.delete("/classrooms/:classroomId", deleteClassroom);
router.post("/classrooms/:classroomId/tasks", assignTask);
router.get("/tasks/:taskId/submissions", viewTaskSubmissions);

export default router;
