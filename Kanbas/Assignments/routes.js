import * as assignmentDao from './dao.js';
import mongoose from 'mongoose';

export default function AssignmentRoutes(app) {
  // Get all assignments for a course
  app.get('/api/assignments/:courseId', async (req, res) => {
    const { courseId } = req.params;
    const assignments = await assignmentDao.findAssignmentsForCourse(courseId);
    res.json(assignments || []); // Return an empty array if assignments is null
  });

  // Get assignment by ID
  app.get('/api/assignment/:id', async (req, res) => {
    const { id } = req.params;
    const assignment = await assignmentDao.findAssignmentById(id);
    res.json(assignment || null);
  });

  // Create a new assignment
  app.post('/api/assignments', async (req, res) => {
    let assignment = req.body;
    assignment._id = new mongoose.Types.ObjectId().toString();
    const newAssignment = await assignmentDao.createAssignment(assignment);
    res.json(newAssignment);
  });

  //Update an assignment
  // app.put('/api/assignments/:id', async (req, res) => {
  //   const { id } = req.params;
  //   const updatedAssignment = await assignmentDao.updateAssignment(id, req.body);
  //   res.json(updatedAssignment);
  // });
  app.put('/api/assignments/:id', async (req, res) => {
    const { id } = req.params;
    const assignment = req.body;
    const updatedAssignment = await assignmentDao.updateAssignment(id, assignment);
    res.json(updatedAssignment);
  });



  // Delete an assignment
  app.delete('/api/assignments/:id', async (req, res) => {
    const { id } = req.params;
    await assignmentDao.deleteAssignment(id);
    res.sendStatus(204);
  });
}

