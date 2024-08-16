import express from 'express';
import { addStudent, removeStudent } from '../controllers/classroomController.js'; // Adjust path if needed

const router = express.Router();

router.post('/:classroomId/students', addStudent);
router.delete('/:classroomId/students/:studentId', removeStudent);

export default router;
