import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/api/profile", (req, res) => {
  res.json({
    name: "Serrana Calvo",
    role: "Software Developer & Project Lead",
    location: "Montevideo, Uruguay",
    email: "serricalvo12@gmail.com",
    phone: "+598 94 299 485",
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Portfolio server listening on http://localhost:${port}`);
});
