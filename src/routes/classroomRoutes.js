const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController'); // Ensure the path is correct

router.post('/:classroomId/students', classroomController.addStudent);
router.delete('/:classroomId/students/:studentId', classroomController.removeStudent);

module.exports = router;
