import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
}, { _id: false });

const moduleSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  course: { type: String, required: true, ref: 'Course' },
  lessons: [lessonSchema],
}, { collection: 'modules' });

export default moduleSchema;
