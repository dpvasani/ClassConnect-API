const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
  classroomName: { type: String, required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
});

module.exports = mongoose.model('Classroom', ClassroomSchema);
