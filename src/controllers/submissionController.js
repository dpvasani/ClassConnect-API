
const Submission = require('../models/submission');
const Student = require('../models/Student');

exports.viewTaskSubmissionStatus = async (req, res) => {
  try {
    const { classroomId, taskId } = req.params;

    // Fetch all submissions for the task
    const submissions = await Submission.find({ taskId }).populate('studentId');
    const status = submissions.map(submission => ({
      studentId: submission.studentId._id,  
      studentName: submission.studentId.name, // Assuming Student model has `name`
      status: 'submitted',
    }));

    // Fetch students not having submission (optional)
    const allStudents = await Student.find({ classrooms: classroomId });
    const studentsWithNoSubmission = allStudents.filter(student =>
      !status.some(submission => submission.studentId.equals(student._id))
    ).map(student => ({
      studentId: student._id,
      studentName: student.name,
      status: 'pending',
    }));

    res.json([...status, ...studentsWithNoSubmission]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
