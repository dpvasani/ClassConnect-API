const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController'); // Ensure the path is correct

router.post('/:teacherId/classrooms', teacherController.createClassroom);
router.get('/:teacherId/classrooms', teacherController.viewClassrooms);
router.put('/classrooms/:classroomId', teacherController.editClassroom);
router.delete('/classrooms/:classroomId', teacherController.deleteClassroom);
router.post('/classrooms/:classroomId/tasks', teacherController.assignTask);
router.get('/tasks/:taskId/submissions', teacherController.viewTaskSubmissions);

module.exports = router;
