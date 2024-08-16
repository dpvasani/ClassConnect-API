import mongoose from "mongoose";

const ClassroomSchema = new mongoose.Schema({
  classroomName: { type: String, required: true },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

export default mongoose.model("Classroom", ClassroomSchema);