const Classroom = require('../models/Classroom');
const Student = require('../models/Student');

exports.addStudent = async (req, res) => {
  try {
    const { studentId } = req.body;
    const classroom = await Classroom.findById(req.params.classroomId);
    if (!classroom.students.includes(studentId)) {
      classroom.students.push(studentId);
      await classroom.save();
      res.status(200).json({ message: 'Student added successfully.' });
    } else {
      res.status(400).json({ message: 'Student already in the classroom.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeStudent = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.classroomId);
    classroom.students.pull(req.params.studentId);
    await classroom.save();
    res.status(200).json({ message: 'Student removed successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
