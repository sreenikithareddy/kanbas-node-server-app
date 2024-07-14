const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      try {
        res.json(assignment);
      } catch (error) {
        console.error("Error fetching assignment:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  
    app.get("/lab5/assignment/title", (req, res) => {
      try {
        res.json(assignment.title);
      } catch (error) {
        console.error("Error fetching assignment title:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  
    app.post("/lab5/assignment/score", (req, res) => {
      try {
        assignment.score = req.body.score;
        res.json(assignment.score);
      } catch (error) {
        console.error("Error updating assignment score:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  
    app.post("/lab5/assignment/completed", (req, res) => {
      try {
        assignment.completed = req.body.completed;
        res.json(assignment.completed);
      } catch (error) {
        console.error("Error updating assignment completed status:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  }
  