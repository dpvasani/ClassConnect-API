
const Classroom = require('../models/Classroom');

exports.viewClassrooms = async (req, res) => {
  try {
    const { studentId } = req.params;
    // Fetch classrooms for the student (implementation depends on your schema)
    // Assuming you have a `Student` model and classrooms are referenced there
    const student = await Student.findById(studentId).populate('classrooms');
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const classrooms = student.classrooms.map(c => ({
      classroomId: c._id,
      classroomName: c.name,
    }));
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
