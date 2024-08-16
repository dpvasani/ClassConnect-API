import Teacher from "../models/Teacher.js";
import Classroom from "../models/Classroom.js";
import Task from "../models/Task.js";

export const createClassroom = async (req, res) => {
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

export const viewClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find({
      teacherId: req.params.teacherId,
    });
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editClassroom = async (req, res) => {
  try {
    const { classroomName } = req.body;
    const updatedClassroom = await Classroom.findByIdAndUpdate(
      req.params.classroomId,
      { classroomName },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Classroom updated successfully.", updatedClassroom });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteClassroom = async (req, res) => {
  try {
    await Classroom.findByIdAndDelete(req.params.classroomId);
    res.status(200).json({ message: "Classroom deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const assignTask = async (req, res) => {
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

export const viewTaskSubmissions = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId).populate(
      "submissions.studentId",
      "name"
    );
    res.status(200).json(task.submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};