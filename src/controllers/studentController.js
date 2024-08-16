const Classroom = require('../models/Classroom');
const Task = require('../models/Task');

exports.viewClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find({ students: req.params.studentId });
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.viewTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ classroomId: req.params.classroomId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    const submission = task.submissions.find(sub => sub.studentId.toString() === req.params.studentId);

    if (!submission || submission.status === 'pending') {
      task.submissions.push({
        studentId: req.params.studentId,
        status: 'submitted',
        submissionDate: new Date(),
      });
      await task.save();
      res.status(200).json({ message: 'Task submitted successfully.' });
    } else {
      res.status(400).json({ message: 'Task already submitted.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
