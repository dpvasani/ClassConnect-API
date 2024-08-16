const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  classroomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom', required: true },
  submissions: [{
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    status: { type: String, enum: ['submitted', 'pending'], default: 'pending' },
    submissionDate: { type: Date },
  }],
});

module.exports = mongoose.model('Task', TaskSchema);
