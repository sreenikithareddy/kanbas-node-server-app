import db from "../Database/index.js";

export default function AssignmentRoutes(app) {
  // Retrieve assignments for a course
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((a) => a.course === cid);
    console.log(`Retrieved assignments for course: ${cid}`, assignments);
    res.json(assignments);
  });

  // Create a new assignment for a course
  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.assignments.push(newAssignment);
    console.log(`Created new assignment for course: ${cid}`, newAssignment);
    res.send(newAssignment);
  });

  // Delete an assignment
  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    db.assignments = db.assignments.filter((a) => a._id !== aid);
    console.log(`Deleted assignment: ${aid}`);
    res.sendStatus(200);
  });

  // Update an assignment
  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignmentIndex = db.assignments.findIndex((a) => a._id === aid);
    if (assignmentIndex !== -1) {
      db.assignments[assignmentIndex] = { ...db.assignments[assignmentIndex], ...req.body };
      console.log(`Updated assignment: ${aid}`, db.assignments[assignmentIndex]);
      res.sendStatus(204);
    } else {
      console.log(`Assignment not found: ${aid}`);
      res.sendStatus(404);
    }
  });
}
