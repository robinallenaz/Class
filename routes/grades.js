import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

export default router;



//Redirecting to learner path
router.get("/student/:id", (req, res) => {
    res.redirect(`/learner/${req.params.id}`);
})

//Base path: /grades

//Get a single grade entry

router.get(":/learner/id", async (req, res) => {
  let collection = await db.collection("grades");
  const query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not Found").status(404) else res.send(result).status(200);
})
;
