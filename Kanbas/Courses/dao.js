import Course from './model.js';

export const createCourse = (course) => Course.create(course);
export const findAllCourses = () => Course.find();
export const findCourseById = (id) => Course.findById(id);
export const updateCourse = (id, course) => Course.findByIdAndUpdate(id, course, { new: true });
export const deleteCourse = (id) => Course.findByIdAndDelete(id);
