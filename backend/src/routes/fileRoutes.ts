import { Router, Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = Router();

const uploadDir = process.env.UPLOAD_DIR || "uploads";

// Ensure upload folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Upload file
router.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ message: "File uploaded successfully", file: req.file.filename });
});

// List files
router.get("/", (_req: Request, res: Response) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ error: "Unable to read files" });
    res.json({ files });
  });
});

// Download file
router.get("/download/:filename", (req: Request, res: Response) => {
  const filePath = path.join(uploadDir, req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" });
  res.download(filePath);
});

export default router;
