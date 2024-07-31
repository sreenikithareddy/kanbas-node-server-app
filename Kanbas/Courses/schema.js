// schema.js
import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  _id: {type: String,
    reuired: false,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

export default courseSchema;

