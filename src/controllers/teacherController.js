const Teacher = require('../models/Teacher');
const Classroom = require('../models/Classroom');
const Task = require('../models/Task');

exports.createClassroom = async (req, res) => {
  try {
    const { classroomName } = req.body;
    const newClassroom = new Classroom({
      classroomName,
      teacherId: req.params.teacherId,
    });
    await newClassroom.save();
    res.status(201).json(newClassroom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.viewClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find({ teacherId: req.params.teacherId });
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editClassroom = async (req, res) => {
  try {
    const { classroomName } = req.body;
    const updatedClassroom = await Classroom.findByIdAndUpdate(req.params.classroomId, { classroomName }, { new: true });
    res.status(200).json({ message: 'Classroom updated successfully.', updatedClassroom });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteClassroom = async (req, res) => {
  try {
    await Classroom.findByIdAndDelete(req.params.classroomId);
    res.status(200).json({ message: 'Classroom deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.assignTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newTask = new Task({
      title,
      description,
      dueDate,
      classroomId: req.params.classroomId,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.viewTaskSubmissions = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId).populate('submissions.studentId', 'name');
    res.status(200).json(task.submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
