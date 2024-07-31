import "dotenv/config";
import express from 'express';
import Hello from './Hello.js';
import Lab5 from "./Labs/Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import CourseModel from './Kanbas/Courses/model.js'; 
import coursesData from './Kanbas/Database/courses.js';

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  }
 ));
 const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }   
  app.use(session(sessionOptions));
app.use(express.json());
const seedDatabase = async () => {
    try {
      await CourseModel.deleteMany({}); 
      await CourseModel.insertMany(coursesData); 
      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
    }
  };
  
  seedDatabase(); 
CourseRoutes(app);
UserRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app)
app.listen(process.env.PORT || 4000)