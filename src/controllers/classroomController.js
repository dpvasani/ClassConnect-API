import Classroom from "../models/Classroom.js";
import Student from "../models/Student.js";

export const addStudent = async (req, res) => {
  try {
    const { studentId } = req.body;
    console.log("Reaching here");
    const classroom = await Classroom.findById(req.params.classroomId);
    if (!classroom.students.includes(studentId)) {
      classroom.students.push(studentId);
      await classroom.save();
      res.status(200).json({ message: "Student added successfully." });
    } else {
      res.status(400).json({ message: "Student already in the classroom." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeStudent = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.classroomId);
    classroom.students.pull(req.params.studentId);
    await classroom.save();
    res.status(200).json({ message: "Student removed successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
