import * as moduleDao from './dao.js';

export default function ModuleRoutes(app) {
  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await moduleDao.deleteModule(mid);
    res.sendStatus(200);
  });

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const updatedModule = await moduleDao.updateModule(mid, req.body);
    res.json(updatedModule);
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    const createdModule = await moduleDao.createModule(newModule);
    res.json(createdModule);
  });

  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await moduleDao.findModulesByCourseId(cid);
    res.json(modules);
  });
}
