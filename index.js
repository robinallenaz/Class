import express from "express";
import "dotenv/config";
import grades from "./routes/grades.js";

//Body parder middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/grades", grades);
