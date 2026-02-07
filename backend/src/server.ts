import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileRoutes from "./routes/fileRoutes.js";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/files", fileRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
