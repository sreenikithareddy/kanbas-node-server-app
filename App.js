import express from 'express'
import Hello from "./Hello.js"
import cors from 'cors';
import Lab5 from "./Labs/Lab5/index.js";
const app = express();
app.use(express.json());
app.use(cors());
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)