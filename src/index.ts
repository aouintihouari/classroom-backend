import express  from "express";
import subjectsRouter from "./routes/subjects";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use("/api/v1/subjects", subjectsRouter);

app.get("/", (
    req, res
    ) => {
    res.send("Hello, welcome to the Classroom API!")}
)

app.listen(8000, () => {console.log(`Server is running on port ${PORT}`)});
