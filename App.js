import express from 'express';
import mongoose from "mongoose";
import "dotenv/config";
import Hello from "./Hello.js";
import cors from 'cors';
import Lab5 from "./Labs/Lab5/index.js";
import bodyParser from 'body-parser';
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import UserRoutes from "./Users/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://sreenikithareddydoddareddy:<password>@atlascluster.mzbtxw.mongodb.net/kanbas?retryWrites=true&w=majority&appName=AtlasCluster";

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running on port 4000');
});
