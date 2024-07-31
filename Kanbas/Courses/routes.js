import * as courseDao from './dao.js';
import mongoose from 'mongoose';

export default function CourseRoutes(app) {
  // Update a course
  app.put('/api/courses/:id', async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const updatedCourse = await courseDao.updateCourse(id, course);
    res.json(updatedCourse);
  });

  // Delete a course
  app.delete('/api/courses/:id', async (req, res) => {
    const { id } = req.params;
    await courseDao.deleteCourse(id);
    res.sendStatus(204);
  });

  // Add a new course
  app.post('/api/courses', async (req, res) => {
    let course = req.body;
    course._id = new mongoose.Types.ObjectId().toString();
    const new_course = await courseDao.createCourse(req.body);
    res.json(new_course);
  });

  // Retrieve all courses
  app.get('/api/courses', async (req, res) => {
    const courses = await courseDao.findAllCourses();
    res.json(courses);
  });

  
}
