
const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  taskId: mongoose.Schema.Types.ObjectId,
  document: Buffer, // or use a different method to handle files
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Submission', SubmissionSchema);
