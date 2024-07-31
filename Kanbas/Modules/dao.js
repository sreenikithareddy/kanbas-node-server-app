import Module from './model.js';

// Create a new module
export const createModule = (module) => Module.create(module);

// Find all modules for a specific course
export const findModulesByCourseId = (courseId) => Module.find({ course: courseId });

// Find a module by its ID
export const findModuleById = (id) => Module.findById(id);

// Update a module
export const updateModule = (id, module) => Module.findByIdAndUpdate(id, module, { new: true });

// Delete a module
export const deleteModule = (id) => Module.findByIdAndDelete(id);
