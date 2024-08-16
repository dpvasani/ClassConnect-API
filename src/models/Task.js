
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  classroomId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Task', TaskSchema);
