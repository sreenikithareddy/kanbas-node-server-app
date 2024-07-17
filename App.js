import express from 'express'
import Hello from "./Hello.js"
import cors from 'cors';
import Lab5 from "./Labs/Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import bodyParser from 'body-parser';
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)