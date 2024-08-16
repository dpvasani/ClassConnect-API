
const Task = require('../models/Task');

exports.viewTasks = async (req, res) => {
  try {
    const { studentId, classroomId } = req.params;
    // Fetch tasks for the classroom (implementation depends on your schema)
    const tasks = await Task.find({ classroomId });
    res.json(tasks.map(task => ({
      taskId: task._id,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate.toISOString().split('T')[0],
    })));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
