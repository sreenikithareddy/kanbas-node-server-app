import db from "../Database/index.js";

export default function ModuleRoutes(app) {
  // Retrieve modules for a course
  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = db.modules.filter((m) => m.course === cid);
    res.json(modules);
  });

  // Create a new module for a course
  app.post("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.modules.push(newModule);
    res.send(newModule);
  });

  // Delete a module
  app.delete("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    db.modules = db.modules.filter((m) => m._id !== mid);
    res.sendStatus(200);
  });

  // Update a module
  app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    const moduleIndex = db.modules.findIndex((m) => m._id === mid);
    if (moduleIndex !== -1) {
      db.modules[moduleIndex] = { ...db.modules[moduleIndex], ...req.body };
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  });
}
