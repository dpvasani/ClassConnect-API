
const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
  classroomId: String,
  classroomName: String,
});

module.exports = mongoose.model('Classroom', ClassroomSchema);
