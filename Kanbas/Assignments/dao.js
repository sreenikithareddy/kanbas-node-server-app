import Assignment from './model.js';

export const createAssignment = (assignment) => Assignment.create(assignment);
export const findAllAssignments = () => Assignment.find();
export const findAssignmentsForCourse = (courseId) => Assignment.find({ course: courseId });
export const findAssignmentById = (id) => Assignment.findById(id);
export const updateAssignment = (id, assignment) => Assignment.findByIdAndUpdate(id, assignment, { new: true });
export const deleteAssignment = (id) => Assignment.findByIdAndDelete(id);
