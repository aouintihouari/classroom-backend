import express  from "express";
import { eq } from 'drizzle-orm';
import { index } from './db';
import { demoUsers } from './schema';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (
    req, res
    ) => {
    res.send("Hello, welcome to the Classroom API!")}
)

app.listen(8000, () => {console.log(`Server is running on port ${PORT}`)});
