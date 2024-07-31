import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  module: { type: String, required: false },
  title: { type: String, required: true },
  description: { type: String, required: true },
  points: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  availableDate: { type: Date, required: false },
  course: { type: String, required: true }
}, { collection: 'assignments' });

export default assignmentSchema;
