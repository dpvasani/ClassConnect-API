const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController'); // Ensure the path is correct

router.get('/:studentId/classrooms', studentController.viewClassrooms);
router.get('/classrooms/:classroomId/tasks', studentController.viewTasks);
router.post('/tasks/:taskId/:studentId', studentController.submitTask);

module.exports = router;
