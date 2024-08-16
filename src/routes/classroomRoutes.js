import express from 'express';
import { addStudent } from '../controllers/classroomController.js';
import { removeStudent } from '../controllers/classroomController.js';
const router = express.Router();

router.post('/:classroomId/students', addStudent);
router.delete('/:classroomId/students/:studentId', removeStudent);

export default router;
