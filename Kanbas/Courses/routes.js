import Database from "../Database/index.js";

export default function CourseRoutes(app) {
  // Update a course
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });

  // Delete a course
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses.filter((c) => c._id !== id);
    res.sendStatus(204);
  });

  // Add a new course
  app.post("/api/courses", (req, res) => {
    const course = {
      ...req.body,
      _id: new Date().getTime().toString()
    };
    Database.courses.push(course);
    res.send(course);
  });

  // Retrieve all courses
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
}
